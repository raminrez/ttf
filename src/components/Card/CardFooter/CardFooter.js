/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import { doAddToCard, doRemoveFromCard } from "../../../redux/actions/card";

const CardFooter = ({ price, createdAt, addToCard, removeFromCard }) => {
  return (
    <footer className='card-footer'>
      <div className='card-footer-item '>
        <a
          onClick={event => handleClick(event, createdAt, addToCard)}
          className='button is-fullwidth is-success has-text-weight-light'
        >
          خرید
        </a>
        {/* <a
          onClick={event => handleClick2(event, createdAt, removeFromCard)}
          className='button is-fullwidth is-success has-text-weight-light'
        >
          remove
        </a> */}
      </div>
      <p className='card-footer-item has-text-success has-text-right is-unselectable'>
        {`  ${price} ت `}
      </p>
    </footer>
  );
};

const handleClick = (e, createdAt, addToCard) => {
  e.preventDefault();
  addToCard(createdAt);
};

// const handleClick2 = (e, createdAt, removeFromCard) => {
//   e.preventDefault();
//   removeFromCard(createdAt);
// };

const mapDispatchToProps = dispatch => ({
  addToCard: createdAt => dispatch(doAddToCard(createdAt))
  // removeFromCard: createdAt => dispatch(doRemoveFromCard(createdAt))
});

export default connect(
  null,
  mapDispatchToProps
)(CardFooter);

CardFooter.defaultProps = {
  price: 16900
};
