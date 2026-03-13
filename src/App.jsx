import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvidor } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvidor>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvidor>
  );
}

export default App;
