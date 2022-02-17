import React from "react";
import { useQuery } from "@apollo/client";

import { getPackageListQuery } from "../queries";
import { Spinner } from "./Spinner";

export const TourPackage = () => {
  const { loading, error, data } = useQuery(getPackageListQuery);

  if (loading)
    return (
      <div className="loading">
        <Spinner />
      </div>
    );

  if (error) return <p>Error :(</p>;

  <div className="container">
    <h4 className="header-package">Package List</h4>
    {data.packagelists.map(
      ({ id, img, name, type, location, features, usd }) => (
        <div className="packageNameAndImg" key={id}>
          <div className="package-image">
            <img src={img} alt={name} className="nbi" />
          </div>
          <div className="middlePart">
            <h3>Package Name:{name}</h3>
            <p>Package Type: {type}</p>
            <p>Package Location: {location}</p>
            <p>Features:{features}</p>
          </div>
          <div className="rightPart">
            <h5>USD {usd}</h5>
            <div>
              <a href="details" className="details">
                Details
              </a>
            </div>
          </div>
        </div>
      )
    )}
  </div>;
};

{
  /*const db = {
  packageList: [
    {
      id: 1,
      name: "Nairobi special offer",
      type: "Couple Package",
      img: "/assets/images/nairobi.jpg",
      location: "Nairobi Central",
      features:
        "Free pickup and drop facility, free wi-fi,free professionnals guide",
      usd: 4500,
    },
    {
      id: 1,
      name: "Holiday in",
      type: "Family",
      img: "/assets/images/plage1.jpg",
      location: "Kajiado Center",
      features: "Free pickup and drop facility, free professionnals guide",
      usd: 3000,
    },
    {
      id: 1,
      name: "short trip to zanzibar",
      type: "Group",
      img: "/assets/images/masaimara.jpg",
      location: "Zanzibar City Center",
      features:
        "Breakfast, Free pickup and drop facility, free wi-fi,free professionnals guide",
      usd: 2800,
    },
  ],
};
*/
}
