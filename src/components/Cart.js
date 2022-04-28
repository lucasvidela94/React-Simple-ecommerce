import React from "react"
import Products from "./Products"
import "../styles/style.css"
import { Fragment } from "react"

const Cart = ({ cart, setCart }) => {
  const showCart = () => {
    //Funcion que se encarga de mostrar o ocultar la lista del carrito
    document.querySelector(
      "div.container__header__cartDiv--list"
    ).style.display = "none"
      ? (document.querySelector("div.container__header__cartDiv--list ").style =
          "flex")
      : (document.querySelector(
          "div.container__header__cartDiv--list"
        ).style.display = "none")
  }

  const closeCart = () => {
    document.querySelector(
      "div.container__header__cartDiv--list"
    ).style.display = "none"
  }

  return (
    <Fragment>
      <div className="container__header__cartDiv">
        {/* Contador de productos del carrito */}
        <p className="container__header__cartDiv--count">{cart.length}</p>
        {/* Boton que se encarga de displayear en pantalla */}
        <button
          className="container__header__cartDiv--btnCart"
          onClick={() => showCart()}
        ></button>
      </div>
      <div className="container__header__cartDiv--list">
        <button
          className="container__content__products--btnClose"
          type="button"
          onClick={() => closeCart()}
        >
          X
        </button>
        {cart.length === 0 ? (
          <p>No hay nada en el carrito...</p>
        ) : (
          cart.map((product) => (
            <Products
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
      </div>
    </Fragment>
  )
}

export default Cart
