import React, { Fragment, useState } from "react"
import Products from "./components/Products"
import Cart from "./components/Cart"
import "./styles/style.css"

//Imagenes correspondientes a las hamburguesas
import Longboard from "./images/LONGBOARD.png"
import Hoodie from "./images/HOODIE.png"
import PinkVans from "./images/VANSPINK.png"
import Shirt from "./images/SHIRT.png"
import Cargo from "./images/CARGO.png"
import BlackVans from "./images/VANSBLACK.png"

function App() {
  const [products, setProduct] = useState([
    //Estado de burguers con su respectivo listado
    { id: 1, image: Longboard, nombre: "Longboard Santa Cruz", precio: 450 },
    { id: 2, image: Hoodie, nombre: "Buzo Supreme", precio: 250 },
    {
      id: 3,
      image: PinkVans,
      nombre: "Vans Pink Edition",
      precio: 475,
    },
    { id: 4, image: Shirt, nombre: "T-shirt Guibli Studios", precio: 400 },
    {
      id: 5,
      image: Cargo,
      nombre: "Pantalones cargo",
      precio: 400,
    },
    {
      id: 6,
      image: BlackVans,
      nombre: "Vans Classic Edition",
      precio: 500,
    },
  ])

  //Estado del carrito
  const [cart, setCart] = useState([])

  return (
    <Fragment>
      {/* Contenedor entero */}
      <section className="container">
        {/* Contenedor del header */}
        <section className="container__header">
          <div className="container__header__menu">
            <button className="container__header__menu--button"></button>
            {/* Seccion menu */}
          </div>
          <div className="container__header__title">
            {/* Titulo medio del header */}
            <h3>Street Wear</h3>
          </div>
          {/* Seccion del carrito */}
          <div className="container__header__cartDiv">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>
        <section className="container__body">
          {/* Contenedor del cuerpo */}
          <div className="container__body__message">
            {/* Oferta de la seccion body */}
            <h3>Aca va la oferta a publicar</h3>
          </div>
          {/* Seccion Productos */}
          <section className="container__body">
            <div className="container__body__listProducts">
              {products.map((product) => (
                <Products
                  key={product.id}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  products={products}
                />
              ))}
            </div>
          </section>
        </section>
        <section className="container__footer">
          {/* Contenedor del footer */}
          <h3>Aca va el footer</h3>
        </section>
      </section>
    </Fragment>
  )
}

export default App
