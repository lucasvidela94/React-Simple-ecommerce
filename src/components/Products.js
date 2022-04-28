import React from "react"
import "../styles/style.css"

const Product = ({ product, cart, setCart, products }) => {
  const { nombre, precio, id, image } = product

  const addProduct = (id) => {
    const product = products.filter((product) => product.id === id)
    setCart([...cart, ...product])
  }
  const delProduct = (id) => {
    const products = cart.filter((product) => product.id !== id)
    setCart(products)
  }
  return (
    <ul className="container__body__products">
      <img className="container__body__products--image" src={product.image} />
      <li className="container__body__products--nombre">{product.nombre}</li>
      <li className="container__body__products--precio">${product.precio}</li>
      {products ? (
        <button
          className="container__body__products--btnAdd"
          variant="outline-success"
          type="button"
          onClick={() => addProduct(id)}
        >
          Agregar al carrito
        </button>
      ) : (
        <div>
          <button
            className="container__body__products--btnAdd"
            type="button"
            onClick={() => addProduct(id)}
          >
            confirmar
          </button>

          <button
            className="container__content__burgers--btnDel"
            type="button"
            onClick={() => delProduct(id)}
          >
            eliminar
          </button>
        </div>
      )}
    </ul>
  )
}

export default Product
