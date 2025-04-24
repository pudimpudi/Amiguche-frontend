import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** import de componentes */
import Header from "./components/header/header.js";
import Home from "./components/Home/home.js";
import Sobre from "./components/sections/sobre/sobremim.js";
import Produtos from "./components/sections/produtos/produtos.js";
import Contato from "./components/sections/contato/contato.js";
import Footer from "./components/footer/footer.js";
import LoginPage from "./components/pages/login/login.js";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota da página principal com todos os componentes */}
        <Route path="/" element={
          <>
            <Header />
            <main>
              <Home />
              <Sobre />
              <Produtos />
              <Contato />
              <Footer />
            </main>
          </>
        } />

        {/* Página de login separada */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
/* exemplo de app.js:
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Novidades from "./components/Novidades";
import Catalogo from "./components/Catalogo";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

import "./styles/header.css";
import "./styles/home.css";
import "./styles/novidades.css";
import "./styles/catalogo.css";
import "./styles/contato.css";
import "./styles/footer.css";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Novidades />
        <Catalogo />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
*/