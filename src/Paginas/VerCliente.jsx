

import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom' // Cuando queramos leer el id es decir ya sea 1 o 2 
import { object } from 'yup/lib/locale';
///con useparams lo podemos hacer 

import Spinner from '../Components/Spinner'




const VerCliente = () => {


    const { id  } = useParams();

        const [Empleado, setEmpleado] = useState({})

        const [Cargando, setCargando] = useState(true ) // LA PRIMERA VEZ QUE CARGUE EL COMPONENTE VA A ESTAR COMO TRUE
        // PORQUE VA A ESTAR CONSULTANDO NUESTRA API 


        useEffect(() => {

            setCargando(!Cargando)

            const obtenerClienteAPI = async () =>{

                try {

                    const url = `http://localhost:4000/clientes/${id}` // Inyectando el id , ya que conforme vauamos
                    // visitando diferentes clientes, va a ir consultando la api de forma dinamica 

                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    setEmpleado(resultado);

                    
                } catch (error) {

                    console.log(error);
                    
                }

                setCargando(!Cargando) // DE ESTA FORMA SI ESTÀ EN TRUE , PASA A FALSE Y SI E STA EN FALSE PASA A TRUE 

              
            }

                obtenerClienteAPI(); // llamada a la api
   
        }, [])


        console.log(Cargando);


    return (



        Cargando ?<Spinner /> :  Object.keys(Empleado).length === 0  ? <p>No hay resultados</p> : (


    

        <div className=''>

       

                {/* <> */}


            <h1 className='font-black text-2xl text-gray-500'>Ver empleado: {Empleado.nombre}</h1>

                <p className='mt-3'>Informacion del empleado</p>

            
            <p className='text-2xl  text-gray-700 text-center '>

                    <span className='uppercase font-bold mt-5 '>Empleado:
                    </span>
                {Empleado.nombre}

             </p>

               
            <p className='text-2xl text-gray-700 mt-5 text-center '>

            <span className='uppercase font-bold'>Apellido:
            </span>
            {Empleado.apellido}

            </p>


            <p className='text-2xl text-gray-700 mt-5 text-center'>

            <span className='uppercase font-bold'>Direccion:
            </span>
            {Empleado.direccion}

            </p>

            <p className='text-2xl text-gray-700 mt-5 text-center '>

            <span className='uppercase font-bold'>Email:
            </span>
            {Empleado.email}

            </p>



            { Empleado.comentario && (

                    <p className='text-2xl text-gray-700 mt-5  text-center'>

                    <span className='uppercase font-bold'>Comentario:
                    </span>
                    {Empleado.comentario}

                    </p>

            )}

            {/* </> */}

        
            </div> 

        
        


        ) // parentesis del object keys 
    )
}



export default  VerCliente
