import { gql } from "@apollo/client";

// get the all packagelists
export const getPackageListQuery = gql`
  query getPackageListQuery {
    packagelists {
      id
      img
      name
      type
      location
      features
      usd
    }
  }
`;
