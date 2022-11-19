import { BrowserRouter as Router,Redirect,Route,Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "./style/App.css";
import  BarraDeNav  from "./components/BarraDeNav";
import  Carrusele  from "./components/Carrusele";
import EsferasInfo from "./components/EsferasInfo";
import  LinkPolitica from "./components/LinkPolitica";
import ListadoAdopcion  from "./components/ListadoAdopcion";
import  Perrito  from "./components/Perrito";
import  InicioSesion  from "./components/InicioSesion";



const InfoPerritos = [    
    {text: 'Nombre del perro'}, 
    {text: 'Raza'}, 
    {text: 'Género'}, 
    {text: 'Edad'}, 
    {text: 'Esterilizado'}, 
    {text: 'Contacto'}
];

function App(){
  return(
    <React.Fragment>
      <div className="Frijoles">
      <BarraDeNav />

      <EsferasInfo />
        <h1 className="TextoInicial">Luchamos por defender a los peluditos, y aquí en LostPet los escuchamos</h1>
       <Carrusele /> 
       
      <LinkPolitica /> 
      
       <ListadoAdopcion>
          
      
        </ListadoAdopcion>
        
        </div>

    </React.Fragment>
    
  )
}

export default App;