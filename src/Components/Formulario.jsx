
    import {Formik , Form , Field } from 'formik';
    // importando formik , form en vez de utilizar la etiqueta html Form , formik nos brinda esta 
    // y cada campo va a estar en el componente de field

    

    import { useNavigate } from 'react-router-dom'


    import  * as Yup from 'yup';
import Alerta from './Alerta';
import Spinner from './Spinner';


    const Formulario = ({Empleado, Cargando}) => {



        const navigate = useNavigate(); // navigate es un hook que nos redirecciona a otra pagina 


        const nuevoClienteSchema = Yup.object().shape({ // esquema de validacion de Yup

            // Shape va a hacer la forma en que van a tenerr los datos a la hora de crear nuestors clientes 
            // es decir shape va a recibir los datos del initial values 


            nombre: Yup.string()
                        .min(3, 'El Nombre es muy corto')
                        .max(20, 'El Nombre es muy largo')
                        .required('El Nombre del Cliente es Obligatorio'),

             apellido: Yup.string()
                         .min(3, 'El Apellido es muy corto')
                        .max(20, 'El Apellido es muy largo')
                        .required('El Apellido del Cliente es Obligatorio'),


            direccion: Yup.string()
                        .min(3, 'Direccion muy corta')
                       .max(20, 'La direccion es muy larga')
                       .required('La direccion del empleado es obligatoria'),


           email: Yup.string()
                       .min(3, 'Email muy corto')
                      .max(23, 'el Email es muy largo')
                      .required('El Email es  obligatorio'),


                        
            telefono: Yup.string()
                        .required('El telefono del empleado es obligatorio'),

            comentario: Yup.string()
                        .min(8, 'El comentario es muy corto')
                        .max(200, 'El comentario es muy largo')
                        .required('El comentario es obligatorio'),

            
        })
    








        const handlesubmit = async (valores) =>{



                try {

                    let respuesta 

                    
                    if(Empleado.id){


                        //  Editando un registro 



                        const url = `http://localhost:4000/clientes/${Empleado.id}`

                        respuesta = await fetch(url,{
    
                            method: 'PUT',
                            body: JSON.stringify(valores),
                            headers: {
                                'Content-Type': 'application/json'
                            }
    
    
                    })



                    }else{

                        // Nuevo registro 


                        const url = 'http://localhost:4000/clientes' 

                         respuesta = await fetch(url,{
    
                            method: 'POST',
                            body: JSON.stringify(valores),
                            headers: {
                                'Content-Type': 'application/json'
                            }
    
    
                    })
    
                          


                    }


        
                         await respuesta.json()
                          
                          navigate('/clientes');
    




                    } catch (error) {


                        console.log(error);
                        
                    }





        }



        return ( 


            Cargando  ? <Spinner/> : (

            
            <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md 
            md:w-3/4 mx-auto">  {/*md: 3/4 diciendole que en tamaño mediano va a tener un ancho de 3/4 
            
                mx-auto : diciendole  o centrnado el contenido 
            
            */}

                <h1 className="text-gray-600 font-bold text-xl uppercase text-center">{Empleado?.nombre ? 'Editar Empleado' : 'Agregar Empleado'}</h1>


                <Formik
                

                initialValues={{ // aqui inicio mi inialvalues para validar atraves de formik 
                    // declarando nuestro state inicial de formik 

                    
                    
                    nombre: Empleado.nombre ??  "", // Empleado ? : LO QUE HACE ES QUE BUSCA QUE SI 
                    // EMPLEADO.NOMBRE ESTA PRESENTE, PUES LO AÑADSE  , es decir esta sintasis lo que hace
                    // es que si esto marca como ubdefined entonces agrega comillas dobles s
                    apellido: Empleado.apellido ??  "",
                    direccion: Empleado.direccion??  "",
                    email:  Empleado.email ??  "",
                    telefono:  Empleado.telefono ??  "",
                    comentario:  Empleado.comentario ??  "",


                    // nombre: cliente?.nombre ?? "",
                    // apellido: cliente?.empresa ?? "",
                    // direccion: cliente?.email ?? "",
                    // email: cliente?.telefono ?? "",
                    // telefono: cliente?.telefono ?? "",
                    // comentario: cliente?.notas ?? "",
                }}

                    // le agregamos un atributo con props 

                enableReinitialize={true} // PARA QUE TOME VALORES INICIALES QUE VIENEN DESDE UNA BD DESDE UNA API
                /// O GRAPH , LO QUE TENEMOS QUE HACER ES AGREGAR UN ATRIBUTO QUE ES ESTE ENABLEREINITIALIZE
                //  POR DEFAULT ES FALSE, PERO SI LO CAMBIAMOS A TRUE VA A MANDAR EL COMPOENETE, VA A ESTAR LISTO






                onSubmit={ async (values,{resetForm}) => { // con values , accedemos a los valores 
                  
                    // Le colocamos async wawait para que espere a que guarde el formulario y lo reinicie


                     await  handlesubmit(values);     // creando funcion para validar para no hacerlo aqui,, 


                        resetForm(); // Con resetform mandamos a resetear el formulaio

                }}

                validationSchema={nuevoClienteSchema} // el validator schema lo que hace es que va a encontrar el esquema de validacion
                //y cual va a hacer la forma en que esperamos en los datosw 
                
                
                >

                    {({errors, touched }) =>{ // aplicando destructing para extraer los errores de la api que nos da yup o Formik

                        console.log(touched) // esto envia a la consola esta variable que contiene informacion de formik

                        return (

                    <Form
                    
                    className="mt-10"
                    
                    >

                <div className="mb-4">

                         <label
                            
                            className="text-gray-800"
                            htmlFor="nombre"
                            
                            >Nombre:</label>


                            <Field 
                            id="nombre" // colocandole el id al input del label especificamente lo que dice en htmlfor , para que cuando le de click se activel el input 
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Nombre empleado"
                            name="nombre"
                            
                            
                            /> {/*CON FIELD AGREGMOS INPUT A TRAVES DE FORMIK*/}




                            {errors.nombre && touched.nombre ? ( 

                                 /*El touched lo que hace es que si salgo del input

                                 y no escribo nada, me ejecuta la validacion en tiempo real 

                                */

                                   <Alerta>{errors.nombre}</Alerta> // colocando el componente de alerta
                                   // y pasandole los errores
                            ) :  null}  
                 </div>

                 
                <div className="mb-4">
                    
                    <label
                       
                       className="text-gray-800"
                       htmlFor="Apellido"
                       
                       >Apellido:</label>


                       <Field 
                       id="Apellido" // colocandole el id al input del label especificamente lo que dice en htmlfor , para que cuando le de click se activel el input 
                       type="text"
                       className="mt-2 block w-full p-3 bg-gray-50"
                       placeholder="Apellido empleado"
                       name="apellido"

                       /> 


                    {errors.apellido && touched.apellido ? ( 

                        
                          <Alerta>{errors.apellido}</Alerta> 

                    ) :  null}  



                </div>


                   
                <div className="mb-4">
                    
                    <label
                       
                       className="text-gray-800"
                       htmlFor="Direccion"
                       
        
                       >Direccìon:</label>


                       <Field 
                       id="Direccion" // colocandole el id al input del label especificamente lo que dice en htmlfor , para que cuando le de click se activel el input 
                       type="text"
                       className="mt-2 block w-full p-3 bg-gray-50"
                       placeholder="Direccion empleado"
                       name="direccion"
                       
                       
                       /> {/*CON FIELD AGREGMOS INPUT A TRAVES DE FORMIK*/}


                        {errors.direccion && touched.direccion ? ( 

                                                
                        <Alerta>{errors.direccion}</Alerta> 

                        ) :  null}  



                      </div>

                   
            

                   
                <div className="mb-4">
                    
                    <label
                       
                       className="text-gray-800"
                       htmlFor="E-mail"
                       
                       >E-mail:</label>


                       <Field 
                       id="E-mail" // colocandole el id al input del label especificamente lo que dice en htmlfor , para que cuando le de click se activel el input 
                       type="text"
                       className="mt-2 block w-full p-3 bg-gray-50"
                       placeholder="Correo empleado"
                       name="email"
                       
                       
                       /> 

                        {errors.email && touched.email ? ( 

                                                
                        <Alerta>{errors.email}</Alerta> 

                        ) :  null}  




                </div>

                   
                <div className="mb-4">
                    
                    <label
                       
                       className="text-gray-800"
                       htmlFor="Telefono"
                       
                       >Telefono:</label>


                       <Field 
                       id="Telefono" // colocandole el id al input del label especificamente lo que dice en htmlfor , para que cuando le de click se activel el input 
                       type="number"
                       className="mt-2 block w-full p-3 bg-gray-50"
                       placeholder="Telefono empleado"
                       name="telefono"
                       
                       
                       /> {/*CON FIELD AGREGMOS INPUT A TRAVES DE FORMIK*/}


                        {errors.telefono && touched.telefono ? ( 

                                                                        
                        <Alerta>{errors.telefono}</Alerta> 

                        ) :  null}  


                </div>


                   
                <div className="mb-4">
                    
                    <label
                       
                       className="text-gray-800"
                       htmlFor="comentarios"
                       
                       >Comentarios:</label>


                       <Field 

                        as="textarea" // colocandole un as para espeficarle al Field de que es un text-area

                       id="comentario" // colocandole el id al input del label especificamente lo que dice en htmlfor , para que cuando le de click se activel el input 
                       type="text"
                       className="mt-2 block w-full p-3 bg-gray-50 h-40"
                       placeholder="Apellido empleado"
                       name="comentario"
                       
                       
                       />


                        {errors.comentario && touched.comentario ? ( 

                                                                        
                        <Alerta>{errors.comentario}</Alerta> 

                        ) :  null}  


                </div>


                    <input
                    
                    type="submit"
                    value={Empleado?.nombre ? 'Editar Empleado' : 'Agregar Empleado'}
                    className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                    

                 

                    />

                    </Form>


                        )}}   


                </Formik>



            </div>


            ) // parentesis del la condicion de Cargando

         );
    }


    Formulario.defaultProps={ //PARA COLOCAR UN DEFAULT PROPS , COLOCAMOS EL NOMBRE DEL COMPONENETE
        // EN ESTE CASO ES FORMULARIO , DESPUES EL .DEFAULTPROPS

        // SI EL PROPS ESTA PRESENTE, TOMA LO QUE ESTA ARRIBA 



            Empleado: {} ,// EL PROPS SE LLAMADA EMPLEADO Y LE DECIMOS QUE VA A HACER UN OBJETO VACIO 

            Cargando : false



    }



     
    export default Formulario;