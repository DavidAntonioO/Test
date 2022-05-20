import React, { useEffect, useState } from "react"

function listarProducts(){
    const [products, setProducts ] = useState([])

    useEffect(() => {
        fetch("components/Products.json")  // aqui madamos a llamar el json con los datos de los productos
        .then(response => response.json())
        .then(datos => {
            setProducts(datos)
        })

    },[])

    return products
}

export default function ProductTable(){
    const products = listarProducts()

    return (
        <div>
            <h2>Table of products</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                        <tr>
                            <td>{item.product}</td> //tengo el mismo error en el Upgrade, no me deja jalar el key para mostrarlo en la tabla
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}