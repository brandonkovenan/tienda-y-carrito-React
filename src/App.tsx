import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.tsx'
import { Header } from './components/Header.tsx'
import { useFilters } from './hooks/useFIlters.tsx'
import { Cart } from './components/Cart.tsx'
import { CartProvider } from './context/Cart.tsx'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App