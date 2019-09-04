import React, { Component } from "react";
import Card from "../components/Card/Card";

class CardContainer extends Component {
  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            <div className='column is-one-third'>
              <Card />
            </div>
            <div className='column is-one-third'>
              <Card />
            </div>
            <div className='column is-one-third'>
              <Card />
            </div>
            <div className='column is-one-third'>
              <Card />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CardContainer;
