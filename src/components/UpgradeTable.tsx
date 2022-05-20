import React, { useEffect, useState } from "react"

function useProducts(){
    const [products, setproducts] = useState([])

        useEffect(() => {
            fetch("components/upgrades.json") // aqui madamos a llamar el json con los datos de los productos
            .then(response => response.json())
            .then(products => {
                setproducts(products)
            })
        },[])

        return products
    }

    export default function UpgradeTable(){
        const products = useProducts()

        return (
            <div>
                <h2>Products Upgrade</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">product</th>
                            <th scope="col">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(item => (
                            <tr key={item.product}> //me marca error al poner el key, nada mas tendria esa duda
                                <td>{item.price}</td> //me marca error al poner el key, nada mas tendria esa duda
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
