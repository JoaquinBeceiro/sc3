import React, { useEffect, useState } from "react";
import {
  TitleComponent,
  ProductListComponent,
  CartComponent
} from "../../Components";
import GoogleSpreadsheetService from "../../Services/Google";
import { connect } from "react-redux";
import { CartActions } from "../../Redux/Cart";

const Main = props => {
  const { cart, _addToCart, _removeFromCart } = props;

  const [googleRows, setGoogleRows] = useState([]);

  const addToCart = item => {
    _addToCart(item);
  };

  useEffect(() => {
    getRows();
  }, []);

  const getRows = async () => {
    const rows = await GoogleSpreadsheetService.getRows(0);
    if (rows) {
      setGoogleRows(rows);
    }
  };

  const googleHeaders =
    googleRows && googleRows[0] && googleRows[0]._sheet.headerValues;

  return (
    <div>
      <CartComponent items={cart.cart} removeFromCart={_removeFromCart} />
      <TitleComponent>Inicio</TitleComponent>
      <ProductListComponent
        title="Lista de productos"
        columns={googleHeaders}
        data={googleRows}
        addToCart={addToCart}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  _addToCart: item => dispatch(CartActions.addToCart(item)),
  _removeFromCart: index => dispatch(CartActions.removeFromCart(index))
});

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
