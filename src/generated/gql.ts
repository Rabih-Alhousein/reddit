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
    "fragment RegularError on Error {\n  field\n  message\n}": types.RegularErrorFragmentDoc,
    "fragment RegularUser on User {\n  id\n  username\n  createdAt\n  updatedAt\n}": types.RegularUserFragmentDoc,
    "fragment RegularUserResponse on UserResponse {\n  errors {\n    ...RegularError\n  }\n  user {\n    ...RegularUser\n  }\n}": types.RegularUserResponseFragmentDoc,
    "mutation changePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n      createdAt\n      updatedAt\n    }\n  }\n}": types.ChangePasswordDocument,
    "mutation CreatePost($input: PostInput!) {\n  createPost(input: $input) {\n    id\n    title\n    text\n    points\n    creatorId\n    createdAt\n    updatedAt\n  }\n}": types.CreatePostDocument,
    "mutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}": types.ForgotPasswordDocument,
    "mutation login($password: String!, $usernameOrEmail: String!) {\n  login(password: $password, usernameOrEmail: $usernameOrEmail) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      createdAt\n      updatedAt\n      username\n    }\n  }\n}": types.LoginDocument,
    "mutation logout {\n  logout\n}": types.LogoutDocument,
    "mutation register($options: usernamePasswordInput!) {\n  register(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      createdAt\n      updatedAt\n      username\n    }\n  }\n}": types.RegisterDocument,
    "query Me {\n  me {\n    id\n    createdAt\n    updatedAt\n    username\n  }\n}": types.MeDocument,
    "query Posts($limit: Int!, $cursor: String) {\n  posts(limit: $limit, cursor: $cursor) {\n    posts {\n      id\n      title\n      text\n      points\n      creatorId\n      createdAt\n      updatedAt\n      textSnippet\n    }\n    hasMore\n  }\n}": types.PostsDocument,
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
export function graphql(source: "fragment RegularError on Error {\n  field\n  message\n}"): (typeof documents)["fragment RegularError on Error {\n  field\n  message\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RegularUser on User {\n  id\n  username\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment RegularUser on User {\n  id\n  username\n  createdAt\n  updatedAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RegularUserResponse on UserResponse {\n  errors {\n    ...RegularError\n  }\n  user {\n    ...RegularUser\n  }\n}"): (typeof documents)["fragment RegularUserResponse on UserResponse {\n  errors {\n    ...RegularError\n  }\n  user {\n    ...RegularUser\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation changePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n      createdAt\n      updatedAt\n    }\n  }\n}"): (typeof documents)["mutation changePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n      createdAt\n      updatedAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePost($input: PostInput!) {\n  createPost(input: $input) {\n    id\n    title\n    text\n    points\n    creatorId\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreatePost($input: PostInput!) {\n  createPost(input: $input) {\n    id\n    title\n    text\n    points\n    creatorId\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}"): (typeof documents)["mutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation login($password: String!, $usernameOrEmail: String!) {\n  login(password: $password, usernameOrEmail: $usernameOrEmail) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      createdAt\n      updatedAt\n      username\n    }\n  }\n}"): (typeof documents)["mutation login($password: String!, $usernameOrEmail: String!) {\n  login(password: $password, usernameOrEmail: $usernameOrEmail) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      createdAt\n      updatedAt\n      username\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation logout {\n  logout\n}"): (typeof documents)["mutation logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation register($options: usernamePasswordInput!) {\n  register(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      createdAt\n      updatedAt\n      username\n    }\n  }\n}"): (typeof documents)["mutation register($options: usernamePasswordInput!) {\n  register(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      createdAt\n      updatedAt\n      username\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    createdAt\n    updatedAt\n    username\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    createdAt\n    updatedAt\n    username\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts($limit: Int!, $cursor: String) {\n  posts(limit: $limit, cursor: $cursor) {\n    posts {\n      id\n      title\n      text\n      points\n      creatorId\n      createdAt\n      updatedAt\n      textSnippet\n    }\n    hasMore\n  }\n}"): (typeof documents)["query Posts($limit: Int!, $cursor: String) {\n  posts(limit: $limit, cursor: $cursor) {\n    posts {\n      id\n      title\n      text\n      points\n      creatorId\n      createdAt\n      updatedAt\n      textSnippet\n    }\n    hasMore\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;