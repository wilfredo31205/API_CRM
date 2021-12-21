import { useState } from 'react'

import {BrowserRouter, Routes , Route }  from "react-router-dom";


// import IniciarSeccion from './Layout/iniciarSeccion';

import Layout from './Layout/Layout';
import Inicio from './Paginas/Inicio';
// import LoginForm from './Paginas/LoginForm';

import NuevoCliente from './Paginas/NuevoCliente';

import  EditarCliente from './Paginas/EditarCliente';
import VerCliente from './Paginas/VerCliente';

function App() {



  return (


    <BrowserRouter> {/*El BrowserRouter sirve para decirle que queremos un nuevo routing o que cargen ciertos enpoindy  */}
 

      <Routes> {/*todas las rutas van a estar en este componente */}


{/*         <Route path="/" element={<IniciarSeccion />}> {/*CADA UNA DE LAS RUTAS VAN A UTILIZAR EL COMPOENENTE DE ROUTE
        
          Route path="/" : Cuando visitemos la pagina principal que va a hacer la diagonal(/) su componenete
          principal , va a cargar que es IniciarSeccion
        
        */}
            {/*   <Route index element={<LoginForm />} /> { /*En este grupo de rutas  su mastepage va a hacer 

                el de iniciar-sesion 
              
              */}
     {/*    </Route> */} 

        
        <Route path="/clientes" element={<Layout/>}> {/*Cuando visitamos la pagina de clientes entonces cargamos el compoenente de layout */}

            {/*Lo que coloque aqui adentro van a hacer rutas anidadas dentro de ese grupo
            
            ahora, cuando yo visite diagonal clientes quiero que en lugar que diga desde layout . me muestre 
            el compoenente de inicio
       
            */}

            <Route index element={<Inicio />} /> {/*   PODEMOS TENER MULTPLES RUTAS Y VAN A ESTAR ANIDADAS CON LA URL /clientes" AL INICIO 
              PERO TENEMOS QUE DECIRLE CUAL ES LA DEL INDEX OSEA LA PAGINA PRINCIPAL  */}


              <Route path="nuevo" element={<NuevoCliente />} /> {/*
              
                EN LA NUEVA VERSION DE ROUTER 6, LAL ESTAR AGRUPADA, NUESTRAS RUTAS AL PERTENECER ESTE GRUPO
                LA URL PRINCIPAL ES  CLIENTES , SOLAMENTE LE COLOCO COMO URL NUEVO , ESO VA A IR HACIA LA RUTA
                PADRE Y LE AGREGA /CLIENTES AL INICIO DE LA URL QUE ES NUEVO  
              
              */}

            <Route path="editar/:id" element={<EditarCliente />} />  {/*Le agregamos un placeholder de :id

              para que escuche por los id y no tengamos un componente por cada id 
            
            */}

          <Route path=":id" element={<VerCliente />} />  {/*Al tener esos 2 puntos al id lo ue va a hacer es que 
          
            lo va a tratar como si fuera una variable  , y verCliente va a hacer el componente que vamos a visitar ç
            cuando ejecutamos visitemoso diagonal cliente , diagonal id 

            en otras palabras lo que estamos diciendo es que va a tener valores diferentes en el id de la url y va a 
            cargar el componente de verCLiente 
          
          */}

        </Route>
 


      </Routes>



    </BrowserRouter>



  )
}

export default App
