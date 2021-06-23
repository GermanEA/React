import React from 'react';

const Prodcuto = ({ producto, carrito, addProducto, productos }) => {

    const { nombre, precio, id } = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter( producto => producto.id === id )[0];
        addProducto([
            ...carrito,
            producto
        ]);
    };

    //Eliminar producto del carrito
    const eliminarProducto = id => {
        const producto = carrito.filter( producto => producto.id !== id );
        addProducto(producto)
    }

    return (
        <div>
            <h2>{ nombre }</h2>
            <p>{ precio } €</p>
            { productos
            ?
                (
                    <button 
                        type="button"
                        onClick={ () => seleccionarProducto(id) }
                    >Comprar</button>
                )
            :
                (
                    <button 
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                    >Eliminar</button>
                )
            }
        </div>
    );
}
 
export default Prodcuto;