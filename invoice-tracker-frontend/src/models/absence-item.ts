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
  attachmentName: string
  attachmentUrl: string
  numberOfDays: number
  fullDay: boolean
}
