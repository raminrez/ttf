import React from "react";

const CardContent = ({ title, subtitle }) => {
  return (
    <div className='card-content'>
      <h3 className='title is-5 has-text-right is-unselectable'>{title}</h3>

      <div className='content has-text-right is-unselectable'>{subtitle}</div>
    </div>
  );
};

CardContent.defaultProps = {
  title: "Title",
  subtitle: "Subtitle as long i can now write"
};

export default CardContent;
