import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const generateTicketPDF = async (ticketId: string) => {
  const ticketElement = document.getElementById(ticketId);
  if (!ticketElement) return;

  try {
    const canvas = await html2canvas(ticketElement, {
      scale: 2,
      backgroundColor: null,
      logging: false
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Vizphoria-Ticket-${ticketId}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};