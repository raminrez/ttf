import React from "react";

const CardContent = ({ title, subtitle, price }) => {
  return (
    <div className='card-content'>
      <h3 style={{ textAlign: "right" }} className='title is-5'>
        {title}
      </h3>

      <div className='content' style={{ textAlign: "right" }}>
        {subtitle}
      </div>

      <p className='content is-primary'>{price}</p>
    </div>
  );
};

CardContent.defaultProps = {
  title: "Title",
  subtitle: "Subtitle as long i can now write",
  price: 169000
};

export default CardContent;
