import "./App.css";

function App() {
  return (
    <div className="home">
      <div className="content">
        <div>
          <input type="text" placeholder="please write the name of the city" />
          <i className=" lupa fa-solid fa-magnifying-glass" />
        </div>
        <div className="results">
          <h2> Santa Cruz</h2>
          <p>38°</p>
          <span  >Mayormente despejado</span>
          <p>H: 18° L: 13°</p>
        </div>
        <div className="details">
          <div className="temperatura">
            <i className="fa-solid fa-temperature-low" />
            <div className="det">
              <p>Sensacion Termica</p>
              <p>14°</p>
            </div>
          </div>

          <div className="gota">
            <i className="fa-solid fa-droplet" />
            <div className="det">
              <p>Humedad</p>
              <p>15%</p>
            </div>
          </div>
          <div className="nube">
            <i className="fa-solid fa-cloud" />
            <dev className="det">
              <p>Nubes</p>
              <p>20%</p>
            </dev>
          </div>
          <div className="direccion">
            <i className="fa-solid fa-arrow-right" />
            <div className="det">
              <p>Direccion del viento</p>
              <p>de norte a sur</p>
            </div>
          </div>
          <div className="viento">
            <i className="fa-solid fa-wind" />
            <div className="det">
              <p>Velocidad de viento</p>
              <p>3mph</p>
            </div>
          </div>
          <div className="presion">
            <i className="fa-solid fa-chart-line" />
            <div className="det">
              <p>Presion</p>
              <p>1015mb</p>
            </div>
          </div>
          <div className="ojo">
            <i className="fa-regular fa-eye" />
            <div className="det">
              <p>Vision</p>
              <p>5 km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
