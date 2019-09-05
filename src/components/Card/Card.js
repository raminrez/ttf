import React from "react";
import { connect } from "react-redux";

import { doAddToCard } from "../../redux/actions/card";

import CardImage from "./CardImage/CardImage";
import CardContent from "./CardContent/CardContent";
import CardFooter from "./CardFooter/CardFooter";

const Card = ({ title, subtitle, createdAt, addToCard }) => {
  return (
    <div className='column is-one-third'>
      <div className='card'>
        <CardImage />
        <CardContent title={title} subtitle={subtitle} />
        <CardFooter
          addClicked={e => handleClick(e, createdAt, title, addToCard)}
        />
      </div>
    </div>
  );
};

const handleClick = (e, createdAt, title, addToCard) => {
  e.preventDefault();
  addToCard({ createdAt, title });
};

const mapDispatchToProps = dispatch => ({
  addToCard: payload => dispatch(doAddToCard(payload))
  // removeFromCard: createdAt => dispatch(doRemoveFromCard(createdAt))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
