import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    token(email: "test@test.com")
  }
`;
