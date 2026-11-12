export type PdfLine = { code: string; desc: string; unit: string; qty: number; price: number };

export type PdfDocument = {
  type: string;
  number: string;
  logoUrl?: string;
  customer: string;
  address: string;
  trn: string;
  docDate: string;
  dueDate: string;
  lpo: string;
  terms: string;
  lines: PdfLine[];
  priced: boolean;
  discount: number;
  notes: string;
  scope?: string;
  extraNotes?: string;
  preparedBy: string;
};

const money = (v: number) => v.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

async function toDataUrl(url: string): Promise<string | null> {
  try {
    const fullUrl =
      typeof window !== "undefined" && url.startsWith("/")
        ? `${window.location.origin}${url}`
        : url;
    const res = await fetch(fullUrl);
    const blob = await res.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(String(reader.result));
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export async function createDocumentPdf(doc: PdfDocument) {
  const [{ jsPDF }, autoTableMod] = await Promise.all([import("jspdf"), import("jspdf-autotable")]);
  const autoTable = autoTableMod.default;
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 40;

  if (doc.logoUrl) {
    const data = await toDataUrl(doc.logoUrl);
    if (data) {
      try {
        let logoWidth = 71;
        let logoHeight = 55;
        try {
          const imgProps = pdf.getImageProperties(data);
          if (imgProps.width && imgProps.height) {
            const aspect = imgProps.width / imgProps.height;
            const maxW = 140;
            const maxH = 55;
            if (aspect > maxW / maxH) {
              logoWidth = maxW;
              logoHeight = maxW / aspect;
            } else {
              logoHeight = maxH;
              logoWidth = maxH * aspect;
            }
          }
        } catch {
          // fallback to 71x55 preserving the 1272:984 aspect ratio
        }

        const logoY = 36;
        pdf.addImage(data, "PNG", margin, logoY, logoWidth, logoHeight);
      } catch {
        /* ignore unsupported image */
      }
    }
  }

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text(doc.type.toUpperCase(), pageWidth - margin, 52, { align: "right" });
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.text(doc.number, pageWidth - margin, 68, { align: "right" });
  pdf.setFontSize(8);
  pdf.setTextColor(110);
  pdf.text("TRN 105124689800001", pageWidth - margin, 82, { align: "right" });
  pdf.text("Dubai, United Arab Emirates", pageWidth - margin, 93, { align: "right" });
  pdf.setTextColor(30);

  let y = 120;
  pdf.setFontSize(8);
  pdf.setTextColor(110);
  pdf.text(doc.type === "Purchase Order" ? "VENDOR / SUPPLIER" : "BILL TO", margin, y);
  pdf.text("DOCUMENT DETAILS", pageWidth / 2 + 20, y);
  pdf.setTextColor(30);
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "bold");
  pdf.text(doc.customer || "-", margin, y + 15);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.text(doc.address || "-", margin, y + 29);
  pdf.text(doc.trn || "-", margin, y + 42);
  const details: [string, string][] = [
    ["Document date", doc.docDate],
    ["Due date", doc.dueDate],
    ["LPO number", doc.lpo],
    ["Payment terms", doc.terms],
  ];
  details.forEach(([k, v], i) => {
    pdf.setTextColor(110);
    pdf.text(k, pageWidth / 2 + 20, y + 15 + i * 13);
    pdf.setTextColor(30);
    pdf.text(v || "-", pageWidth - margin, y + 15 + i * 13, { align: "right" });
  });

  const head = doc.priced
    ? [["Code", "Description", "Unit", "Qty", "Unit price", "Value"]]
    : [["Code", "Description", "Unit", "Qty"]];
  const body = doc.lines.map((l) =>
    doc.priced
      ? [l.code, l.desc, l.unit, String(l.qty), money(l.price), money(l.qty * l.price)]
      : [l.code, l.desc, l.unit, String(l.qty)],
  );

  autoTable(pdf, {
    head,
    body,
    startY: y + 75,
    margin: { left: margin, right: margin },
    styles: { fontSize: 9, cellPadding: 6 },
    headStyles: { fillColor: [17, 45, 92], textColor: 255, fontSize: 8 },
    columnStyles: doc.priced
      ? { 3: { halign: "right" }, 4: { halign: "right" }, 5: { halign: "right" } }
      : { 3: { halign: "right" } },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  y = (pdf as any).lastAutoTable.finalY + 20;

  if (doc.priced) {
    const subtotal = doc.lines.reduce((s, l) => s + l.qty * l.price, 0);
    const net = Math.max(subtotal - doc.discount, 0);
    const vat = net * 0.05;
    const rows: [string, string][] = [
      ["Total value", money(subtotal)],
      ["Special discount", money(doc.discount)],
      ["VAT 5%", money(vat)],
    ];
    pdf.setFontSize(9);
    rows.forEach(([k, v], i) => {
      pdf.setTextColor(110);
      pdf.text(k, pageWidth - margin - 150, y + i * 14);
      pdf.setTextColor(30);
      pdf.text(v, pageWidth - margin, y + i * 14, { align: "right" });
    });
    y += rows.length * 14 + 6;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("Net value", pageWidth - margin - 150, y);
    pdf.text(`AED ${money(net + vat)}`, pageWidth - margin, y, { align: "right" });
    pdf.setFont("helvetica", "normal");
    y += 24;
  }

  const blocks: [string, string | undefined][] = [
    ["Notes & terms", doc.notes],
    ["Not in our scope", doc.scope],
    ["Additional notes", doc.extraNotes],
  ];
  pdf.setFontSize(9);
  for (const [label, text] of blocks) {
    if (!text || !text.trim()) continue;
    if (y > pdf.internal.pageSize.getHeight() - 120) { pdf.addPage(); y = margin; }
    pdf.setTextColor(110);
    pdf.setFontSize(8);
    pdf.text(label.toUpperCase(), margin, y);
    pdf.setTextColor(30);
    pdf.setFontSize(9);
    const wrapped = pdf.splitTextToSize(text, pageWidth - margin * 2);
    pdf.text(wrapped, margin, y + 13);
    y += 13 + wrapped.length * 12 + 12;
  }

  if (y > pdf.internal.pageSize.getHeight() - 90) { pdf.addPage(); y = margin; }
  pdf.setTextColor(110);
  pdf.setFontSize(8);
  pdf.text("PREPARED BY", margin, y + 10);
  pdf.setTextColor(30);
  pdf.setFontSize(9);
  pdf.text(doc.preparedBy, margin, y + 24);
  pdf.setDrawColor(180);
  pdf.line(pageWidth - margin - 140, y + 40, pageWidth - margin, y + 40);
  pdf.setTextColor(110);
  pdf.setFontSize(8);
  pdf.text("Authorized signature", pageWidth - margin - 70, y + 52, { align: "center" });

  return pdf;
}

export async function downloadDocumentPdf(doc: PdfDocument) {
  const pdf = await createDocumentPdf(doc);
  pdf.save(`${doc.number.replace(/[^\w-]+/g, "-")}-${doc.type.replace(/\s+/g, "-").toLowerCase()}.pdf`);
}

export async function getDocumentPdfBlobUrl(doc: PdfDocument): Promise<string> {
  const pdf = await createDocumentPdf(doc);
  const blob = pdf.output("blob");
  return URL.createObjectURL(blob);
}
