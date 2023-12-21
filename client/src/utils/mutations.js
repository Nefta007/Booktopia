import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
        bookCount
        savedBooks
        author
        bookId
        image
        link
        title
        description
      }
    }
  }
`;
SAVE_BOOK
book
export const SAVE_BOOK = gql`
  mutation saveBook($book: bookInput!) {
    saveBook(newBookL $newBook) {
      _id
      username
      email
      savedBooks{
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeSkill($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email{
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
