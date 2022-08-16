import axios, { AxiosResponse } from 'axios'
import { FakeUser } from '../models/fake-user.model'
import { API_URL } from '../configuration/fake-api.config'

export const getUserById = async (
  id: number
): Promise<AxiosResponse<FakeUser, any>> => {
  return await axios.get<FakeUser>(`${API_URL}/users/${id}`)
}

const fakeUserService = { getUserById }

export default fakeUserService
