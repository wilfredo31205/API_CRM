


import React from 'react'



const Login = () => {




    const handleIngresar = (e) =>{

        e.PreventDefault();

            console.log('Registrando')



    }



    return (


        <div className='background-image'>


            <div className=''>





                <form className='#'>


                <div className='color-caja  bg  md:w-2/5 relative top-40 xl:3/5 mx-auto w-full p-20'>


                <h2 className=' text-center mb-5 text-2xl'>Inicia Secciòn</h2>


                <div className=''>


                        <label className='text-sky-400'>Correo</label>


                        <input 
                            
                           className='w-full p-3 '
                           placeholder='Correo aqui'
                            
                            
                        />

                </div>



         <div>



             <label>Password</label>


                <input 
                    
                className='w-full p-3'
                placeholder='Password'
                    
                    
                />


          </div>


          <input
                    
                    type="submit"
                    value="Ingresar"
                    className="mt-5 cursor-pointer w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                    onClick={handleIngresar}

                 

                    />





                 </div>




                </form>





            </div>

     



            
        </div>
    )
}

export default Login
