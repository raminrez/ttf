import React from "react";
import Card from "../components/Card/Card";

const CardContainer = ({ products }) => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>
          {(products || []).map(
            ({ title, desc, id, price, quantity, createdAt }) => (
              <Card
                key={createdAt}
                createdAt={createdAt}
                title={title}
                subtitle={desc}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
