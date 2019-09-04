import React from "react";

const CardImage = ({ imageSource }) => {
  return (
    <div className='card-image'>
      <figure className='image is-3by2'>
        <img src={imageSource} alt='Placeholder ' />
      </figure>
    </div>
  );
};

CardImage.defaultProps = {
  imageSource: "https://bulma.io/images/placeholders/1280x960.png"
};

export default CardImage;
