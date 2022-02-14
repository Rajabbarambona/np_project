import { gql } from "@apollo/client";

// get the all slides
export const getSlidesQuery = gql`
  query getSlidesQuery {
    slides {
      id
      img
      header
      shortDescription
    }
  }
`;
