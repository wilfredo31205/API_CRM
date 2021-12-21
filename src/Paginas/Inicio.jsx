




import React, { useEffect, useState } from 'react'
import Cliente from '../Components/Cliente'




const Inicio = () => {



    const [Clientes, setClientes] = useState([]) // va a iniciar como un arreglo , para guardar el resultado de la api aqui 




    useEffect(async () => {


            try {


                    const url = 'http://localhost:4000/clientes'

                    const respuesta = await fetch(url);

                    const resultado = await respuesta.json();

                    setClientes(resultado);

                
                    
                
                } catch (error) {


                    console.log(error);
         
                }
    }, [])






    const handleEliminar = async (id) =>{


        console.log('Eliminando',id)

        const confirmar = confirm('Deseas eliminar este emleado');




        if(confirmar){


            try {
                

              
                const url = `http://localhost:4000/clientes/${id}`


                const respuesta = await fetch(url,{

                    method:'DELETE'


                })

                 await   respuesta.json();

                 const arrayEmpleado = Clientes.filter(cliente => cliente.id !== id)
                 setClientes(arrayEmpleado);

                // location.reload() // location.reload lo que hace es refrescar la pagina 



               



            } catch (error) {
                
            }



        }


    }



    return (
        <div>
            
       
            <h1 className="font-black text-4xl text-blue-900">Empleado</h1>

                <p className="mt-3">Administra los empleados de tu empresa</p>



                <table className="w-full mt-5 table-auto shadow bg-white "> {/*Tablet auto para que cuando hagamos risay
                
                las columnas se hagan un poco mas pequeñas 

                */ }


                    <thead className="bg-blue-800 text-white"> {/*El thead es la parte superior de nuestra tabla */}


                        <tr>


                            <th className="p-2">Nombre</th>
                            <th className="p-2">Apellido</th>
                            <th className="p-2">Direccion</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Telefono</th>

                            <th className="p-2">Acciones</th>
                        



                        </tr>






                    </thead>



                    <tbody> {/*En el tbody vamos a colocar los clientes */}



                        {Clientes.map(cliente=>(


                                <Cliente
                                
                                    key={cliente.id}
                                    cliente={cliente}
                                    handleEliminar={handleEliminar}
                                
                                />

                        ))}



                    </tbody>



                </table>



        </div>
    )
}

export default Inicio
