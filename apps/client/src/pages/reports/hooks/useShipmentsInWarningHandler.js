import { useRef } from 'react'
import { uid } from 'uid';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function useShipmentsInWarningHandler() {
  const pdfRef = useRef()

  const getOrderTotal = items => `$${items.reduce((total, item) => total + (item.price * item.quantity), 0)}`

  const downloadPDF = async () => {
    const container = pdfRef.current
    const canvas = await html2canvas(container)
    
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4', true)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = canvas.width
    const imgHeight = canvas.height
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
    const imgX = (pdfWidth - imgWidth * ratio) / 2
    const imgY = 0
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
    pdf.save(`Report-${uid()}.pdf`)
  }

  return {
    pdfRef,
    downloadPDF,
    getOrderTotal
  }
}
