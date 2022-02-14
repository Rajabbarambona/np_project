import { gql } from "@apollo/client";

export const addUser = gql`
  mutation (
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      firstName
      lastName
      email
    }
  }
`;
