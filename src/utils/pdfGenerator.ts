import { jsPDF } from 'jspdf';
import { FIVERR_GUIDELINES_SPECS } from '../data/gigs';

export interface PDFExportOptions {
  includeCheckboxes?: boolean;
  completedItems?: string[];
  sellerName?: string;
}

export function generateGuidelinesPDF(options: PDFExportOptions = {}): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  // Header Banner Background
  doc.setFillColor(15, 23, 42); // slate-900
  doc.roundedRect(margin, y, contentWidth, 28, 3, 3, 'F');

  // Accent Line
  doc.setFillColor(16, 185, 129); // emerald-500
  doc.rect(margin, y + 26.5, contentWidth, 1.5, 'F');

  // Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('FIVERR GIG IMAGE COMPLIANCE CHECKLIST', margin + 7, y + 10);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text('Official 2026 Standards & Mobile Safe-Zone Pre-Flight Guide', margin + 7, y + 17);

  // Status Badge in Header
  doc.setFillColor(16, 185, 129);
  doc.roundedRect(pageWidth - margin - 42, y + 6, 35, 7, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('2026 VERIFIED', pageWidth - margin - 38, y + 11);

  y += 36;

  // Document Metadata Row
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.roundedRect(margin, y, contentWidth, 11, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text('DOCUMENT SPEC:', margin + 4, y + 7);
  doc.setFont('helvetica', 'normal');
  doc.text('1280 x 769 px (1.66:1 Aspect Ratio)', margin + 35, y + 7);

  doc.setFont('helvetica', 'bold');
  doc.text('GENERATED:', pageWidth - margin - 55, y + 7);
  doc.setFont('helvetica', 'normal');
  doc.text(today, pageWidth - margin - 32, y + 7);

  y += 17;

  // Section 1: Core Platform Specifications
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('1. MANDATORY FIVERR IMAGE SPECIFICATIONS', margin, y);

  y += 5;

  FIVERR_GUIDELINES_SPECS.forEach((item, index) => {
    // Card background
    doc.setFillColor(index % 2 === 0 ? 255 : 249, index % 2 === 0 ? 255 : 250, index % 2 === 0 ? 255 : 251);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(margin, y, contentWidth, 14, 2, 2, 'FD');

    // Indicator Dot
    doc.setFillColor(16, 185, 129);
    doc.circle(margin + 5, y + 7, 1.8, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(item.title, margin + 10, y + 5.5);

    // Spec badge
    doc.setFillColor(220, 252, 231); // emerald-100
    doc.setDrawColor(167, 243, 208); // emerald-200
    const specWidth = doc.getTextWidth(item.spec) + 6;
    doc.roundedRect(pageWidth - margin - specWidth - 3, y + 2.5, specWidth, 5.5, 1.5, 1.5, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(6, 95, 70); // emerald-800
    doc.text(item.spec, pageWidth - margin - specWidth, y + 6.3);

    // Detail text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139); // slate-500
    const splitDetail = doc.splitTextToSize(item.detail, contentWidth - 45);
    doc.text(splitDetail[0] || item.detail, margin + 10, y + 10.5);

    y += 16;
  });

  y += 3;

  // Section 2: Pre-Flight Checklist (Interactive Printable)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('2. PRE-FLIGHT COMPLIANCE CHECKLIST (CHECK BEFORE UPLOAD)', margin, y);

  y += 5;

  const preflightChecks = [
    {
      label: 'Exact Canvas Size: 1280 x 769 px at 72 or 150 DPI (RGB Color Mode)',
      note: 'Prevents automatic scaling crop and blurry downsampling in search feeds.',
    },
    {
      label: 'Safe-Zone Clearance: 70px minimum buffer on all four edges',
      note: 'Protects critical elements from seller level badges, favorite buttons, and shadows.',
    },
    {
      label: '20% Text Rule: 3 to 5 words maximum in high-contrast bold font',
      note: 'Avoids algorithmic downranking; buyers scan in under 0.8 seconds.',
    },
    {
      label: 'Mobile Legibility Test: Text remains instantly readable at 200px thumbnail width',
      note: 'More than 68% of Fiverr impressions originate on iOS and Android apps.',
    },
    {
      label: 'TOS Badge Safety: ZERO fake badges (No "Top Rated", "Level 2", or "Fiverr Choice" stamps)',
      note: 'Fiverr Trust & Safety bots automatically flag or suspend gigs with false credentials.',
    },
    {
      label: 'Optimized Export: Saved as high-quality PNG or WebP under 5 MB',
      note: 'Rapid asset delivery improves listing page load and search ranking response.',
    },
    {
      label: 'Clear Single Focal Point: Main benefit / mockup occupies at least 45% of visual area',
      note: 'Differentiates your gig from crowded generic competitor thumbnails.',
    },
  ];

  preflightChecks.forEach((check, index) => {
    // Checkbox square
    doc.setDrawColor(148, 163, 184); // slate-400
    doc.setFillColor(255, 255, 255);
    doc.rect(margin + 2, y + 1.5, 4, 4, 'FD');

    // Text Label
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(check.label, margin + 9, y + 4.5);

    // Note
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(check.note, margin + 9, y + 8.5);

    y += 11.5;
  });

  y += 2;

  // Section 3: Pro Seller CTR Formula Box
  doc.setFillColor(241, 245, 249); // slate-100
  doc.setDrawColor(203, 213, 225); // slate-300
  doc.roundedRect(margin, y, contentWidth, 22, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('PRO SELLER CTR MAXIMIZATION TIP:', margin + 5, y + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  const tipText =
    'Combine a bold problem-solving headline on the left with high-definition UI screenshots, mockups, or before/after evidence on the right. High contrast (e.g. dark charcoal backdrop with neon amber/emerald accents) increases average search feed click-through rates by up to 400% compared to generic muted templates.';
  const splitTip = doc.splitTextToSize(tipText, contentWidth - 10);
  doc.text(splitTip, margin + 5, y + 11.5);

  // Page Footer
  const footerY = pageHeight - 12;
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, footerY - 3, pageWidth - margin, footerY - 3);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184);
  doc.text('GigCraft Studio - Fiverr Gig Image Quality & Compliance Engine', margin, footerY);
  doc.text('Page 1 of 1 | Printable Pre-Flight Compliance Document', pageWidth - margin - 65, footerY);

  // Save the PDF
  doc.save('fiverr-gig-image-compliance-checklist-2026.pdf');
}
