/* eslint-disable react/jsx-key */
import React from 'react'
import Tabs from '../../../../components/Tabs'
import { ManagerDetails } from '../../../../models/managerDetails'
import AdminProfile from '../Profile'
import AdminRequests from '../RequestsPage'

interface Props {
  managerDetails: ManagerDetails
}
const AdminTabs = ({ managerDetails }: Props) => {
  const tabs = ['Profile', 'Review Requests']
  const elements = [
    <AdminProfile managerDetails={managerDetails} />,
    <AdminRequests />,
  ]

  return <Tabs tabs={tabs} elements={elements} />
}

export default AdminTabs
