import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;
//Need to add the differentiation between nanny and user with boolen value still
export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $rootUser: Boolean!, $email: String!,  $password: String!, $admin: Boolean!, $employeeID: Int!) {
    addUser(firstName: $firstName, lastName: $lastName, rootUser: $rootUser, email: $email, password: $password, admin: $admin, employeeID: $employeeID) {
      token
      user {
        _id
        email
      }
    }
  }
`;

