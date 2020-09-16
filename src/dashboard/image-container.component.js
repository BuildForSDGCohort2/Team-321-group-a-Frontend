import React from "react";
import { Card, Button, Rating } from "semantic-ui-react";

const extra = (
  <div className="ui two buttons">
    <Button basic color="green">
      Message
    </Button>
    <Button basic color="red">
      Payment
    </Button>
  </div>
);



const ImageContainer = ({ data: { name, imageUrl, rate, description, profession, available } }) =>{ 
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
