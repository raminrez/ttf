import React from "react";
import CardImage from "./CardImage/CardImage";
import CardContent from "./CardContent/CardContent";
import CardFooter from "./CardFooter/CardFooter";

const Card = () => {
  return (
    <div className='card'>
      <CardImage />
      <CardContent />
      <CardFooter />
    </div>
  );
};

export default Card;
