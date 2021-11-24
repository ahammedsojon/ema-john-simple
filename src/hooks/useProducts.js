import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://agile-wildwood-87849.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return [products];
}

export default useProducts;