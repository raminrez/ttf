import React from "react";
import CardImage from "./CardImage/CardImage";
import CardContent from "./CardContent/CardContent";
import CardFooter from "./CardFooter/CardFooter";

const Card = ({ title, subtitle, createdAt }) => {
  return (
    <div className='column is-one-third'>
      <div className='card'>
        <CardImage />
        <CardContent title={title} subtitle={subtitle} />
        <CardFooter createdAt={createdAt} />
      </div>
    </div>
  );
};

export default Card;
