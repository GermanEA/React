import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {


  // Listado de productos
  const [ productos, addProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 }
  ]);

  // Carrito de compra
  const [ carrito, addProducto ] = useState([])

  const fecha = new Date().getFullYear();

  return (
    <>
      <Header 
        titulo = 'Titulo web'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key = { producto.id }
          producto = { producto }
          carrito = { carrito }
          productos = { productos }
          addProducto = { addProducto }
        />
      ))}

      <Carrito 
        carrito = { carrito }
        addProducto = { addProducto }
      />

      <Footer 
        fecha = {fecha}
      />
    </>
  );
}

export default App;
