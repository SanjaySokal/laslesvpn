import './App.css';
import Header from './Include/Header';
import Footer from './Include/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
