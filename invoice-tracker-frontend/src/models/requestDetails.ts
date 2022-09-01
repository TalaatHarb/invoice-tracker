interface absenceAttachment {
  attachmentUrl: string
  attachmentName: string
}

interface Request {
  absenceAttachments: absenceAttachment[]
  comment: string
  endDate: string
  fullDay: boolean
  id: number
  numberOfDays: number
  requestDate: string
  requestedBy: number
  reviewedBy: number | null
  startDate: string
  status: string
  type: string
}

export interface RequestDetails {
  request: Request
  requestedBy: string
}
