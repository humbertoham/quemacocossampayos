'use client';

   
  export default function Services() {
    return (<>
   <div className="max-w-screen-xl mul  mx-auto p-5 sm:p-10 md:p-16">

   <h2 className="mb-4 text-3xl sm:text-4xl mx-6 text-black text-center font-bold">Nuestros Servicios</h2>
   <hr
  className="mb-16 h-1 border-t-0 bg-black max-w-16 mx-auto" />


<div className="grid grid-cols-1 md:grid-cols-2 col-auto lg:grid-cols-3 gap-10">

    <div className="rounded-3xl  overflow-hidden bg-black shadow-lg flex flex-col">
        <a href="/servicios"></a>
        <div className="relative"><a href="/servicios">
                <img className="w-full"
                    src="./images/serv1.jpg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
          
        </div>
        <div className="px-6 py-4 bg-black mb-auto">
            <a href="/servicios"
                className="font-bold text-2xl text-center text-white tet transition duration-500 ease-in-out inline-block mb-2">Instalación de Quemacocos</a>
            <p className="text-gray-200 text-md">
            Nuestro equipo de técnicos altamente capacitados se encargará de instalar un quemacocos de alta calidad en tu automóvil de manera precisa y profesional.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-black">
       
          
        </div>
    </div>



    <div className="rounded-3xl  overflow-hidden bg-black shadow-lg flex flex-col">
        <a href="/servicios"></a>
        <div className="relative"><a href="/servicios">
                <img className="w-full"
                    src="./images/serv3.jpg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 py-4 bg-black mb-auto">
            <a href="/servicios"
                className="font-bold text-2xl text-center text-white tet transition duration-500 ease-in-out inline-block mb-2">Reparación de Quemacocos</a>
            <p className="text-gray-200 text-md">
                
            Nuestro servicio de reparación de quemacocos está destinado a solucionar cualquier problema que pueda surgir con tu quemacocos existente, ya sea que tenga fugas, ruidos molestos, problemas de apertura/cierre u otros problemas mecánicos.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-black">
      
            
        </div>
    </div>


    
    <div className="rounded-3xl  overflow-hidden bg-black shadow-lg flex flex-col">
        <a href="/servicios"></a>
        <div className="relative"><a href="/servicios">
                <img className="w-full"
                    src="./images/serv2.jpg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 bg-black py-4 mb-auto">
            <a href="/servicios"
                className="font-bold text-2xl text-center text-white tet transition duration-500 ease-in-out inline-block mb-2">Mantenimiento Preventivo</a>
            <p className="text-gray-200 text-md">
               
            Nuestro servicio de mantenimiento preventivo está diseñado para mantener tu quemacocos en condiciones óptimas y evitar problemas futuros. Recomendamos programar un mantenimiento regular para garantizar el funcionamiento seguro y eficiente de tu quemacocos.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-black">
     

           
        </div>
    </div>

 
 
    <div className="rounded-3xl   overflow-hidden lg:col-start-2 bg-black shadow-lg flex flex-col">
        <a href="/servicios"></a>
        <div className="relative"><a href="/servicios">
                <img className="w-full"
                    src="./images/serv4.jpg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 bg-black py-4 mb-auto">
            <a href="/trasladosforaneos"
                className="font-bold text-2xl text-center text-white tet transition duration-500 ease-in-out inline-block mb-2">Reemplazo de Vidrios </a>
           <p className="text-gray-200 ">
            Si tu quemacocos ha sufrido daños en el vidrio, ya sea por impacto de piedras u otros objetos, nuestro equipo puede reemplazar el vidrio de manera rápida y eficiente.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-black">
       

           
        </div>
    </div>
    
</div>
<a
                href="/servicios"
                className=" transition text-center max-w-80 rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white bg-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>
</div>s
      </>
    );
  }