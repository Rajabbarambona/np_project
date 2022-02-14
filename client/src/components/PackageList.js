import React from "react";
import "./PackageList.css";
import { useQuery } from "@apollo/client";

// Query
import { getPackageListQuery } from "../queries";

//Spinner
import { Spinner } from "./Spinner";

export const PackageList = () => {
  const { loading, error, data } = useQuery(getPackageListQuery);

  if (loading)
    return (
      <div className="loading">
        <Spinner />
      </div>
    );

  if (error) return <p>Error :(</p>;

  return (
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
      <div>
        <a href="details" className="details">
          View More Packages
        </a>
      </div>
    </div>
  );
};
