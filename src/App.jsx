import React from 'react';
import './index.css';
import { Home } from './pages/Home'; 

const App = () => {
  return (
    <div>
      <header>
        <img src="src/assets/img/logo.svg" alt="Logo de Batabit" />
        <div className="header--title-container">
          <h1>La próxima revolución en el intercambio de criptomonedas</h1>
          <p>Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
          <a href="/" className="header--button">
            Conoce Nuestros Planes <span></span>
          </a>
        </div>
      </header>

      <main>
       
        <Home />

        <section className="main-product-detail">
          <span className="product-detail--batata-logo"></span>
          <div className="product-detail--title">
            <h2>Creamos un producto sin comparación.</h2>
            <p>Confiable y diseñado para su uso diario.</p>
          </div>

          <section className="products-cards-container">
            <article className="product-detail--card">
              <img src="src/assets/icons/clock.svg" alt="clock" />
              <p className="product--card-title">Tiempo real</p>
              <p className="product--card-body">
                Nuestra API toma información minuto a minuto sobre las tasas que
                más determinan el comportamiento.
              </p>
            </article>

            <article className="product-detail--card">
              <img src="src/assets/icons/eye.svg" alt="eye" />
              <p className="product--card-title">No hay tasas escondidas</p>
              <p className="product--card-body">
                Ni en la compra o al momento de exit, Batabit siempre te muestra
                el costo real de lo que estás adquiriendo.
              </p>
            </article>

            <article className="product-detail--card">
              <img src="src/assets/icons/dollar-sign.svg" alt="dollar" />
              <p className="product--card-title">Compare monedas</p>
              <p className="product--card-body">
                No más rumores, con Babtabit sabrás el valor real de cada moneda
                en el mercado actual.
              </p>
            </article>

            <article className="product-detail--card">
              <img src="src/assets/icons/check-circle.svg" alt="check" />
              <p className="product--card-title">Información confiable</p>
              <p className="product--card-body">
                Nuestras fuentes están 100% verificadas y continuamos auditando
                su contenido mientras se actualizan.
              </p>
            </article>
          </section>
        </section>

        <section className="bitcoin-img-container">
          <h2>Conócelo hoy</h2>
        </section>

        <footer></footer>
      </main>
    </div>
  );
};

export default App;
