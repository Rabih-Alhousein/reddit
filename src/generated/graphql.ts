/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any };
};

export type Error = {
  __typename?: "Error";
  field: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  deletePost: Scalars["Boolean"]["output"];
  login: UserResponse;
  logout: Scalars["Boolean"]["output"];
  register: UserResponse;
  updatePost?: Maybe<Post>;
};

export type MutationCreatePostArgs = {
  title: Scalars["String"]["input"];
};

export type MutationDeletePostArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};

export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars["Float"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type Post = {
  __typename?: "Post";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Float"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"]["output"];
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
};

export type QueryPostArgs = {
  id: Scalars["Float"]["input"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Float"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  username: Scalars["String"]["output"];
};

export type UserResponse = {
  __typename?: "userResponse";
  errors?: Maybe<Array<Error>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type RegularUserFragment = {
  __typename?: "User";
  id: number;
  username: string;
  createdAt: any;
  updatedAt: any;
} & { " $fragmentName"?: "RegularUserFragment" };

export type LoginMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "userResponse";
    errors?: Array<{
      __typename?: "Error";
      field: string;
      message: string;
    }> | null;
    user?: {
      __typename?: "User";
      id: number;
      createdAt: any;
      updatedAt: any;
      username: string;
    } | null;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation"; logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "userResponse";
    errors?: Array<{
      __typename?: "Error";
      field: string;
      message: string;
    }> | null;
    user?: {
      __typename?: "User";
      id: number;
      createdAt: any;
      updatedAt: any;
      username: string;
    } | null;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    id: number;
    createdAt: any;
    updatedAt: any;
    username: string;
  } | null;
};

export const RegularUserFragmentDoc = gql`
  fragment RegularUser on User {
    id
    username
    createdAt
    updatedAt
  }
`;
export const LoginDocument = gql`
  mutation Login($options: usernamePasswordInput!) {
    login(options: $options) {
      errors {
        field
        message
      }
      user {
        id
        createdAt
        updatedAt
        username
      }
    }
  }
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument
  );
}
export const RegisterDocument = gql`
  mutation Register($options: usernamePasswordInput!) {
    register(options: $options) {
      errors {
        field
        message
      }
      user {
        id
        createdAt
        updatedAt
        username
      }
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const MeDocument = gql`
  query Me {
    me {
      id
      createdAt
      updatedAt
      username
    }
  }
`;

export function useMeQuery(
  options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, "query">
) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({
    query: MeDocument,
    ...options,
  });
}
