import React from "react";

const CardFooter = ({ price }) => {
  return (
    <footer className='card-footer'>
      <div className='card-footer-item'>
        <a href='#' className='button is-fullwidth is-success '>
          همین حالا خرید کن
        </a>
      </div>
      <p
        style={{ textAlign: "right" }}
        className='card-footer-item has-text-success'
      >
        {`  ${price} ت `}
      </p>
    </footer>
  );
};

CardFooter.defaultProps = {
  price: 16900
};

export default CardFooter;
