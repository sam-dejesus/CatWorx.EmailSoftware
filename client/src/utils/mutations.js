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
  mutation addUser($firstname: String!, $lastname: String!, $phonenumber: String!, $email: String!, $email: String!, $password: String!, $admin: Boolean!) {
    addUser(firstname: $firstname, lastname: $lastname, phonenumber: $phonenumber, email: $email, email: $email, password: $password, admin: $admin) {
      token
      user {
        _id
        email
      }
    }
  }
`;

