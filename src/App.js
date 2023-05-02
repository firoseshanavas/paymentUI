import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PaymentScreen from "./screens/PaymentScreen/PaymentScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <PaymentScreen />
      <Footer />
    </div>
  );
}

export default App;
