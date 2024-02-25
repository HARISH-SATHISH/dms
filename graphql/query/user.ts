import {graphql} from '../../gql'

export const getFarmer=graphql(`

query GetFarmer($token: farmerdata) {
    getFarmer(token: $token) {
      id
      milk {
        amt
        date
        farmerId
        id
        price
        quantity
      }
      raw {
        cowId
        drug
        farmerId
        feed
        id
      }
      cow {
        age
        farmerId
        hstar
        vacination
        id
      }
    }
  }

`)

export const verifyFarmer=graphql(`

query VerifyFarmer($payload: creddata) {
  verifyFarmer(payload: $payload) {
    id
  }
}
`)

export const verifyEmp =graphql(`
query VerifyEmp($payload: creddata) {
  verifyEmp(payload: $payload) {
    id
    name
    designation
  }
}
`)