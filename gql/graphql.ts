/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cow = {
  __typename?: 'Cow';
  age?: Maybe<Scalars['Int']['output']>;
  farmerId?: Maybe<Scalars['Int']['output']>;
  hstar?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  raw?: Maybe<Array<Maybe<RawMaterial>>>;
  vacination?: Maybe<Scalars['String']['output']>;
};

export type Employee = {
  __typename?: 'Employee';
  designation?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pass?: Maybe<Scalars['String']['output']>;
};

export type Farmer = {
  __typename?: 'Farmer';
  cow?: Maybe<Array<Maybe<Cow>>>;
  id?: Maybe<Scalars['Int']['output']>;
  milk?: Maybe<Array<Maybe<Milk>>>;
  name?: Maybe<Scalars['String']['output']>;
  pass?: Maybe<Scalars['String']['output']>;
  raw?: Maybe<Array<Maybe<RawMaterial>>>;
};

export type Milk = {
  __typename?: 'Milk';
  amt?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  farmerId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCow?: Maybe<Cow>;
  addMilkData?: Maybe<Milk>;
  addRawData?: Maybe<RawMaterial>;
};


export type MutationAddCowArgs = {
  payload?: InputMaybe<Cowdata>;
};


export type MutationAddMilkDataArgs = {
  payload?: InputMaybe<Milkdata>;
};


export type MutationAddRawDataArgs = {
  payload?: InputMaybe<Rawdata>;
};

export type Query = {
  __typename?: 'Query';
  getFarmer?: Maybe<Farmer>;
  hello?: Maybe<Scalars['String']['output']>;
  verifyEmp?: Maybe<Employee>;
  verifyFarmer?: Maybe<Farmer>;
};


export type QueryGetFarmerArgs = {
  token?: InputMaybe<Farmerdata>;
};


export type QueryVerifyEmpArgs = {
  payload?: InputMaybe<Creddata>;
};


export type QueryVerifyFarmerArgs = {
  payload?: InputMaybe<Creddata>;
};

export type RawMaterial = {
  __typename?: 'RawMaterial';
  cowId?: Maybe<Scalars['Int']['output']>;
  drug?: Maybe<Scalars['String']['output']>;
  farmerId?: Maybe<Scalars['Int']['output']>;
  feed?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Cowdata = {
  age?: InputMaybe<Scalars['Int']['input']>;
  farmerId?: InputMaybe<Scalars['Int']['input']>;
  hstar?: InputMaybe<Scalars['String']['input']>;
  vacination?: InputMaybe<Scalars['String']['input']>;
};

export type Creddata = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pass?: InputMaybe<Scalars['String']['input']>;
};

export type Farmerdata = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Milkdata = {
  amt: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  farmerId: Scalars['Int']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type Rawdata = {
  cowId?: InputMaybe<Scalars['Int']['input']>;
  drug?: InputMaybe<Scalars['String']['input']>;
  farmerId?: InputMaybe<Scalars['Int']['input']>;
  feed?: InputMaybe<Scalars['String']['input']>;
};

export type AddMilkDataMutationVariables = Exact<{
  payload?: InputMaybe<Milkdata>;
}>;


export type AddMilkDataMutation = { __typename?: 'Mutation', addMilkData?: { __typename?: 'Milk', id?: number | null } | null };

export type AddRawDataMutationVariables = Exact<{
  payload?: InputMaybe<Rawdata>;
}>;


export type AddRawDataMutation = { __typename?: 'Mutation', addRawData?: { __typename?: 'RawMaterial', cowId?: number | null } | null };

export type GetFarmerQueryVariables = Exact<{
  token?: InputMaybe<Farmerdata>;
}>;


export type GetFarmerQuery = { __typename?: 'Query', getFarmer?: { __typename?: 'Farmer', id?: number | null, milk?: Array<{ __typename?: 'Milk', amt?: string | null, date?: string | null, farmerId?: number | null, id?: number | null, price?: string | null, quantity?: string | null } | null> | null, raw?: Array<{ __typename?: 'RawMaterial', cowId?: number | null, drug?: string | null, farmerId?: number | null, feed?: string | null, id?: number | null } | null> | null, cow?: Array<{ __typename?: 'Cow', age?: number | null, farmerId?: number | null, hstar?: string | null, vacination?: string | null, id?: number | null } | null> | null } | null };

export type VerifyFarmerQueryVariables = Exact<{
  payload?: InputMaybe<Creddata>;
}>;


export type VerifyFarmerQuery = { __typename?: 'Query', verifyFarmer?: { __typename?: 'Farmer', id?: number | null } | null };

export type VerifyEmpQueryVariables = Exact<{
  payload?: InputMaybe<Creddata>;
}>;


export type VerifyEmpQuery = { __typename?: 'Query', verifyEmp?: { __typename?: 'Employee', id?: number | null, name?: string | null, designation?: string | null } | null };


export const AddMilkDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMilkData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"milkdata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMilkData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddMilkDataMutation, AddMilkDataMutationVariables>;
export const AddRawDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddRawData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"rawdata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addRawData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cowId"}}]}}]}}]} as unknown as DocumentNode<AddRawDataMutation, AddRawDataMutationVariables>;
export const GetFarmerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFarmer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"farmerdata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFarmer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"milk"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"farmerId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"raw"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cowId"}},{"kind":"Field","name":{"kind":"Name","value":"drug"}},{"kind":"Field","name":{"kind":"Name","value":"farmerId"}},{"kind":"Field","name":{"kind":"Name","value":"feed"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"farmerId"}},{"kind":"Field","name":{"kind":"Name","value":"hstar"}},{"kind":"Field","name":{"kind":"Name","value":"vacination"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetFarmerQuery, GetFarmerQueryVariables>;
export const VerifyFarmerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyFarmer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"creddata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyFarmer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<VerifyFarmerQuery, VerifyFarmerQueryVariables>;
export const VerifyEmpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyEmp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"creddata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"designation"}}]}}]}}]} as unknown as DocumentNode<VerifyEmpQuery, VerifyEmpQueryVariables>;