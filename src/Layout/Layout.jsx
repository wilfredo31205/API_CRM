
import { Outlet, Link , useLocation} from 'react-router-dom' // LO QUE HACE ESTA FUNCION DE REACT-ROUTER-DOM , QUE ES NUEVO 
// EN LA VERSION 6 . ES QUE VA A VISITAR LA RUTA DE  <Route path="/clientes" Y COMO EL OTRO ROUTE QUE ESTA 
// ANIDADO NO TIENE NINGUNA RUTA ASOCIADA VA A MOSTRAR EL COMPOENENTE DE INICIO , DONDE DEFINAMOS EL OUTLET 
// Y EL RESTO VA A HACER EL CONTENIDO DEL LAYOUT 

import { BeakerIcon } from '@heroicons/react/solid'



import React from 'react'


const Layout = () => {


    
    const location = useLocation() // con el hook UseLocation , podemos detectat en cual pagina nos encontramos 

    console.log(location);


    const urlActual = location.pathname // de esta forma podemos comparar si la url actual es un string 
    // entonces agregamos una clase de classname  , el pathname es la url de la pagina 




    return (

        <div className="md:flex md:min-h-screen"> {/*En un tamaño mediano aplicamos flexbox y en un tmañao
        
            mediano tambien su tamaño minimo como pantalla tiene que ser toda la altura que tengamos 
        */}

          
            <div className="md:w-1/4 bg-indigo-600 px-5 py-10"> {/*en un tamaño mediano la barra lateral va a tener un width o ancho de  1/4*/}

                <h2 className="text-4xl font-black text-center text-white">Empleados </h2>


                <nav className="mt-10">


                <Link 
                    
                    className={`${urlActual === '/clientes' ? 'text-blue-300 ' : // detectando en cual pagina se encuentra el usuasrio 

                    // le estamos diciendo que si la url actual es igual a clientes , entonces que nos coloque el color azul
                    // sino que nos detecte el color blanco 

                     'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                    to="/clientes"
                     
                    
                    >Empleados</Link>
         

             

                <Link

                    className={`${urlActual === '/clientes/nuevo' ? 'text-blue-300' :
                    'text-white' } text-2xl block mt-2 hover:text-blue-300`}
                     to="/clientes/nuevo"
                     
                    
                    >Nuevo Empleado</Link>



                </nav>




            {/*esta va a hacer una barra lateral que se va a compartir en todos los diferentes componentes  */}

            </div>


            <div className="md:w-3/4 p-10 md: h-screen overflow-scroll"> {/*la segunda parte va a tener un tamaño de 3/4*/}

                
            <Outlet /> {/*lO QUE ESTAMOS DICIENDO ES QUE SI EN TODAS LAS PAGINAS VAMOS A TENER DESDE LAYOUT
            
            , PERO LO QUE SEA QUE TENGA CADA COMPONENETE SE VA A INYECTAR AQUI EN EL OUTLET
        


        */} {/*Aqui se van a ir colocando nuestros componentes*/}


            </div>





            
        </div>
    )
}

export default Layout
