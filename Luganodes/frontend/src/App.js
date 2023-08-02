import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import BTC from "./components/bitcoin"
import ETH from "./components/ethereum"
import BNB from "./components/bnb"
import THT from "./components/tether"
import Login from "./components/login"
import SignUp from "./components/signUp"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/BitCoin" element={<BTC />} />
              <Route path="/home/Tether" element={<THT />} />
              <Route path="/home/BNB" element={<THT />} />
              <Route path="/home/Ethereum" element={<ETH />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


