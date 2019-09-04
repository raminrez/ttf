import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.scss";
import CardContainer from "./containers/CardContainer";
import Toolbar from "./components/Toolbar/Toolbar";
import { doFetchProducts } from "./redux/actions/product";
import { getAllProducts } from "./redux/selectors/product";

const App = ({ products, onFetchProducts }) => {
  useEffect(() => {
    onFetchProducts();
  }, []);

  return (
    <>
      <Toolbar />
      <CardContainer products={products} />
    </>
  );
};

const mapStateToProps = state => ({
  products: getAllProducts(state)
});

const mapDispatchToProps = dispatch => ({
  onFetchProducts: () => dispatch(doFetchProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
