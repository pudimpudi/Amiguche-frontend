import React from 'react';

/** import de componentes */
import Header from "./components/header/header.js";
import Home from "./components/Home/home.js";
import Sobre from "./components/sections/sobre/sobremim.js";
import Produtos from "./components/sections/produtos/produtos.js";
import Contato from "./components/sections/contato/contato.js";
import Footer from "./components/footer/footer.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Sobre />
        <Produtos />
        <Contato />
        <Footer />
      </main>
    </div>
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