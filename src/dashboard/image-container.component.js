import React from "react";
import { Card, Rating } from "semantic-ui-react";

const ImageContainer = ({
  extra,
  data: { name, imageUrl, rate, description, profession, available },
}) => {
  const ratings = (
    <div>
      <p style={{marginTop:"-50px"}}>{profession}</p>
      <p>Status: {available}</p>
      <Rating icon="star" defaultRating={rate} maxRating={5} disabled />
    </div>
  );
  return (
    <Card
      image={imageUrl}
      header={name}
      meta={ratings}
      description={description}
      extra={extra}
      centered
    />
  );
};

export default ImageContainer;
