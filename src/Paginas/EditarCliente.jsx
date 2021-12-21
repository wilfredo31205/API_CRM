



import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom'

import Formulario from '../Components/Formulario'


const EditarCliente = () => {

    
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


    return (
        <div>
            
        
        <>

            <h1 className="font-black text-4xl text-blue-900">Editar Empleado</h1>

                <p className="mt-3">Utiliza este formulario para editar empleados</p>




                    {Empleado?.nombre ?(



                        <Formulario

                        Empleado={Empleado}
                        Cargando={Cargando}

                        /> 




                    ):<p className='mt-3'>Empleado con el ID no es valido</p>}




        </>





        </div>
    )
}

export default EditarCliente
