import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseMemoDemo = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //   const [total, setTotal] = useState("");
  //   useEffect(() => {
  //     console.log('tinh tien');
  //     const totalPrice = products.reduce((prevProd, currentProd) => {
  //         return prevProd + currentProd.price;
  //     }, 0);
  //     setTotal(totalPrice);
  //   }, [products])

  const totalPrice = useMemo(() => {
    const total = products.reduce((prevProd, currentProd) => {
        console.log('tinh tien');
      return prevProd + currentProd.price;
    }, 0);
    return total;
  }, [products])
  

  const handleAddNew = () => {
    const newProduct = {
      name,
      price,
    };
    setProducts([...products, newProduct]);
  };
  return (
    <>
      <h1>Hello useMemo()</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder="Name"
        />{" "}
        <br />
        <input
          type="number"
          value={price}
          onChange={(ev) => setPrice(parseInt(ev.target.value))}
          placeholder="price"
        />
        <br />
        <button onClick={handleAddNew}>Add new</button>
      </div>
      <h1>Total: {totalPrice}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseMemoDemo;
