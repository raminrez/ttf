import React, { Component } from "react";
import Card from "../components/Card/Card";

class CardContainer extends Component {
  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    );
  }
}

export default CardContainer;
