import { graphql } from "../../gql";

export const addMilkData=graphql(`
mutation AddMilkData($payload: milkdata) {
    addMilkData(payload: $payload) {
      id
    }
  }

`)

export const addRawData =graphql(
    `
    mutation AddRawData($payload: rawdata) {
        addRawData(payload: $payload) {
          cowId
        }
      }

    `
)