import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
