import React from "react";
import { Card, Rating } from "semantic-ui-react";

const ImageContainer = ({ extra, data: { name, imageUrl, rate, description, profession, available } }) =>{ 
    const ratings = <Rating icon="star" defaultRating={rate} maxRating={5} disabled />
    return (
  <Card
    image={imageUrl}
    header={name}
    meta={ratings}
    description={description}
    extra={extra}
    centered
  />
)};

export default ImageContainer;
