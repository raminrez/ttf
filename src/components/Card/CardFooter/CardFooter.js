import React from "react";

const CardFooter = ({ price }) => {
  return (
    <footer className='card-footer'>
      <div className='card-footer-item '>
        <a
          href='#'
          className='button is-fullwidth is-success has-text-weight-light'
        >
          همین حالا خرید کن
        </a>
      </div>
      <p className='card-footer-item has-text-success has-text-right is-unselectable'>
        {`  ${price} ت `}
      </p>
    </footer>
  );
};

CardFooter.defaultProps = {
  price: 16900
};

export default CardFooter;
