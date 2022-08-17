export interface Geo {
  lat: string
  lng: string
}

export interface FakeAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo?: Geo
}
