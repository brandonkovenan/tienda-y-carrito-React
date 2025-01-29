import { useState } from "react";
import { Products } from "./components/Products"
import { products as myProducts } from './mocks/products.json';
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFIlters";

function App() {

  const [products] = useState(myProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
