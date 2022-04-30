import { useState, useMemo } from "react";

function UseMemoTest() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);
  };

  const totalPrice = useMemo(() => {
    const result = products.reduce((prevProduct, currentProduct) => {
      console.log("Calc total price");
      return prevProduct + currentProduct.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <h1>Total price: {totalPrice}</h1>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>{prod.name}</li>
        ))}
      </ul>
    </>
  );
}
export default UseMemoTest;
