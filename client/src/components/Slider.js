// npm package
import Carousel from "react-bootstrap/Carousel";
import { useQuery } from "@apollo/client";

// css
import "./Slider.css";
import "bootstrap/dist/css/bootstrap.css";

// Query
import { getSlidesQuery } from "../queries";

// Spinner
import { Spinner } from "./Spinner";

export const Slider = () => {
  const { loading, error, data } = useQuery(getSlidesQuery);

  if (loading)
    return (
      <div className="loading">
        <Spinner />
      </div>
    );

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Carousel>
        {data?.slides?.map(({ id, img, header, shortDescription }) => (
          <Carousel.Item interval={3000} className="carousel-slide" key={id}>
            <img className="d-block w-100 opacity-50" src={img} alt={header} />
            <Carousel.Caption>
              <h3 className="header-slider">{header}</h3>
              <p className="description">{shortDescription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
