import "./index.scss";

import React from 'react';
import Header from '../../components/header/header.js';
import Footer from '../../components/footer/footer.js';

export default function LandingPage() {
  return (
    <main>
        
        <Header/>

      <section id="home">
        <div id="banner">
          <img src="./logobear.png" alt="logo" />
        </div>

        <div id="cta">
          <h1 className="title">Amiguche</h1>
          <h3 className="subtitle">
            Cada ponto, um pedacinho de <span>amor</span>.
          </h3>
        </div>

        <div className="circulo2"></div>
        <div className="circulo"></div>
      </section>

      <section id="sobremim">
            <div className="sobremim">
                <h1 className="titleSection">Sobre mim</h1>
                <h2 className="texto">
                    Olá! Meu nome é Emília Paz, tenho 62 anos e sou apaixonada por artes manuais desde a infância.
                    Aprendi a arte do crochê aos 10 anos e, desde então, transformo linhas e agulhas em peças cheias de carinho e personalidade. Ao longo dos anos, me aprofundei em diferentes técnicas,
                    do bordado aos amigurumis — esses bonequinhos encantadores feitos à mão.
                    Cada criação é única e feita com muito cuidado. Também aceito encomendas personalizadas, para que você possa ter ou presentear alguém com algo realmente especial.
                </h2>
            </div>

            <div className="frame">
                <img src="./senhora.jpg" alt="Emília Paz"/>
            </div>
        </section>

        
        <section>

        </section>


        <section>
            <h1 className="titleSection">Contato</h1>

            <div id="contato-container">
                <div className="circulo-contato"></div>
                <div className="circulo-contato2"></div>

                <div className="form-card">
                    <h2>Entre em contato💬</h2>
                    <form>
                        <input type="text" placeholder="Seu nome" required />
                        <input type="email" placeholder="Seu e-mail" required />
                        <textarea placeholder="Digite seu pedido..." required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>

        </section>

        <Footer/>
    </main>
  );
}
