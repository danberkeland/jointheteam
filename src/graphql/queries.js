/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      firstName
      lastName
      phone
      email
      seeking
      where
      position
      kitchenExp
      bakeryExp
      current
      desired
      introduction
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        phone
        email
        seeking
        where
        position
        kitchenExp
        bakeryExp
        current
        desired
        introduction
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
