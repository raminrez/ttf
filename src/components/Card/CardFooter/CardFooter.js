/* eslint-disable */
import React from "react";

const CardFooter = ({ price, addClicked }) => {
  return (
    <footer className='card-footer'>
      <div className='card-footer-item '>
        <a
          onClick={addClicked}
          className='button is-fullwidth is-success has-text-weight-light'
        >
          خرید
        </a>
      </div>
      <p className='card-footer-item has-text-success has-text-right is-unselectable'>
        {`  ${price} ت `}
      </p>
    </footer>
  );
};

export default CardFooter;

CardFooter.defaultProps = {
  price: 16900
};
