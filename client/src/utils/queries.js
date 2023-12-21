import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    profiles {
      _id
      username
      email
      bookCount
      savedBooks{
        bookId
        author
        description
        title
        image
        link
      }
    }
  }
`;
