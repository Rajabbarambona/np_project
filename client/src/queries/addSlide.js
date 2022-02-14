import { gql } from "@Apollo/client";

export const addSlide = gql `
  mutation ($img: String, $header: String, $shortDescription: String) {
    addSlide(img: $img, header: $header, shortDescription: $shortDescription) {
      img
      header
      shortDescription
    }
  }
`;