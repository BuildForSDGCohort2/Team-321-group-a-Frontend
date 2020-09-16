import React from "react";
import { Image, Reveal } from "semantic-ui-react";

const ImageCard = ({ size, imageUrl }) => (
  <Reveal animated="move">
    <Reveal.Content visible>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size={size}
      />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/chris.jpg"
        size={size}
      />
    </Reveal.Content>
  </Reveal>
);

export default ImageCard;
