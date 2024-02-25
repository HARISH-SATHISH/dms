/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation AddMilkData($payload: milkdata) {\n    addMilkData(payload: $payload) {\n      id\n    }\n  }\n\n": types.AddMilkDataDocument,
    "\n    mutation AddRawData($payload: rawdata) {\n        addRawData(payload: $payload) {\n          cowId\n        }\n      }\n\n    ": types.AddRawDataDocument,
    "\n\nquery GetFarmer($token: farmerdata) {\n    getFarmer(token: $token) {\n      id\n      milk {\n        amt\n        date\n        farmerId\n        id\n        price\n        quantity\n      }\n      raw {\n        cowId\n        drug\n        farmerId\n        feed\n        id\n      }\n      cow {\n        age\n        farmerId\n        hstar\n        vacination\n        id\n      }\n    }\n  }\n\n": types.GetFarmerDocument,
    "\n\nquery VerifyFarmer($payload: creddata) {\n  verifyFarmer(payload: $payload) {\n    id\n  }\n}\n": types.VerifyFarmerDocument,
    "\nquery VerifyEmp($payload: creddata) {\n  verifyEmp(payload: $payload) {\n    id\n    name\n    designation\n  }\n}\n": types.VerifyEmpDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation AddMilkData($payload: milkdata) {\n    addMilkData(payload: $payload) {\n      id\n    }\n  }\n\n"): (typeof documents)["\nmutation AddMilkData($payload: milkdata) {\n    addMilkData(payload: $payload) {\n      id\n    }\n  }\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AddRawData($payload: rawdata) {\n        addRawData(payload: $payload) {\n          cowId\n        }\n      }\n\n    "): (typeof documents)["\n    mutation AddRawData($payload: rawdata) {\n        addRawData(payload: $payload) {\n          cowId\n        }\n      }\n\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nquery GetFarmer($token: farmerdata) {\n    getFarmer(token: $token) {\n      id\n      milk {\n        amt\n        date\n        farmerId\n        id\n        price\n        quantity\n      }\n      raw {\n        cowId\n        drug\n        farmerId\n        feed\n        id\n      }\n      cow {\n        age\n        farmerId\n        hstar\n        vacination\n        id\n      }\n    }\n  }\n\n"): (typeof documents)["\n\nquery GetFarmer($token: farmerdata) {\n    getFarmer(token: $token) {\n      id\n      milk {\n        amt\n        date\n        farmerId\n        id\n        price\n        quantity\n      }\n      raw {\n        cowId\n        drug\n        farmerId\n        feed\n        id\n      }\n      cow {\n        age\n        farmerId\n        hstar\n        vacination\n        id\n      }\n    }\n  }\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nquery VerifyFarmer($payload: creddata) {\n  verifyFarmer(payload: $payload) {\n    id\n  }\n}\n"): (typeof documents)["\n\nquery VerifyFarmer($payload: creddata) {\n  verifyFarmer(payload: $payload) {\n    id\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery VerifyEmp($payload: creddata) {\n  verifyEmp(payload: $payload) {\n    id\n    name\n    designation\n  }\n}\n"): (typeof documents)["\nquery VerifyEmp($payload: creddata) {\n  verifyEmp(payload: $payload) {\n    id\n    name\n    designation\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;