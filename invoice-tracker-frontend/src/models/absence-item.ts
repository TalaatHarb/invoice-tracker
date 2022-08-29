export interface AbsenseItem {
  id: number
  startDate: string
  requestDate: string
  endDate: string
  requestedBy: string
  reviewedBy: number
  type: string
  comments: string
  status: string
  absenceAttachments: Attatchment[]
  numberOfDays: number
  fullDay: boolean
}

export interface Attatchment {
  attachmentName: string
  attachmentUrl: string
}
