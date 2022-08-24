import React, { useEffect, useState } from 'react'
import AdminTabs from './Components/Tabs'
import axios from 'axios'
import { CONSTANTS } from '../../utils/constants'
import { useAppSelector } from '../../hooks/toolkit-types'
import { ManagerDetails } from '../../models/managerDetails'
import Navbar from '../../components/Navbar'
const AdminPage = () => {
  const [managerDetails, setManagerDetails] = useState<ManagerDetails>(
    {} as ManagerDetails
  )
  const { isAuthenticated, ID } = useAppSelector(
    (state) => state.AuthenticationSlice
  )

  const getManagerDetails = async () => {
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    }
    const reponse = await axios.get(
      `${CONSTANTS.BACKEND_URL}/api/user?ID=${ID}`,
      config
    )
    if (reponse?.status === 200) {
      setManagerDetails(reponse?.data)
    }
  }

  useEffect(() => {
    getManagerDetails()
  }, [])

  return (
    <>
      <Navbar />
      <AdminTabs managerDetails={managerDetails} />
    </>
  )
}

export default AdminPage
