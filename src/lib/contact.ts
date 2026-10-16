export const WHATSAPP_NUMBER = '13525701440'

export const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

// In-site booking page backed by /api/slots and /api/book (Google Calendar)
export const BOOKING_PATH = '/book'
