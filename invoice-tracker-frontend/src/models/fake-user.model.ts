import { FakeAddress } from './fake-address.model'
import { FakeCompany } from './fake-company.model'

export interface FakeUser {
  id: number
  name: string
  username: string
  email: string
  address?: FakeAddress
  phone?: string
  website?: string
  company?: FakeCompany
}
