import { gql } from "@apollo/client";

export const addPackage = gql `
  mutation (
    $img: String
    $name: String
    $type: String
    $location: String
    $features: String
    $usd: Int
  ) {
    addPackage(
      img: $img
      name: $name
      type: $type
      location: $location
      features: $features
      usd: $usd
    ) {
      img
      name
      type
      location
      features
      usd
    }
  }
`;