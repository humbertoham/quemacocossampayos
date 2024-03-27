
import { EnvelopeIcon, PhoneIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function Contact() {
    return (
      <>
          
          <div className="container my-12 mx-auto px-2 md:px-4" id='contacto'>

<section className="mb-32">

    <div className="flex justify-center">
        <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-4xl font-bold">
                Contáctanos
            </h2>
        </div>
    </div>

    <div className="flex flex-wrap">

        
        <div className="w-full shrink-0 grow-0 basis-auto justify-center">
            <div className="flex flex-wrap justify-center">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto  md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                        <div className="shrink-0">
                            <div className="inline-block rounded-md  p-4">
                                <PhoneIcon className='icon'/>
                            </div>
                        </div>
                        <div className="ml-6 grow">
                            <p className="mb-2 font-bold">
                                Números                            </p>
                            
                            <p className="text-neutral-500">
                          <a href='https://api.whatsapp.com/send/?phone=%2B525612670864' className=' hover:underline' target='_blank'> +52 56 1267 0864</a> 
                            </p>

                            <p className="text-neutral-500">
                          <a href='https://api.whatsapp.com/send/?phone=%2B525566851718' className=' hover:underline' target='_blank'> +52 55 6685 1718</a> 
                            </p>
                            <p className="text-neutral-500">
                          <a href='https://api.whatsapp.com/send/?phone=%2B525576297752' className=' hover:underline' target='_blank'> +52 55 7629 7752</a> 
                            </p>                        </div>
                    </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                        <div className="shrink-0">
                            <div className="inline-block rounded-md  p-4">
                                <EnvelopeIcon className='icon' />
                            </div>
                        </div>
                        <div className="ml-6 grow">
                            <p className="mb-2 font-bold ">
                                Email
                            </p>
                            <p className="text-neutral-500 ">
                            quemacocossampayos@gmail.com
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto  md:px-3 lg:px-6">
                    <div className="align-start flex">
                        <div className="shrink-0">
                            <div className="inline-block rounded-md  p-4 ">
                               <UserGroupIcon className='icon' />
                            </div>
                        </div>
                        <div className="ml-6 grow">
                            <p className="mb-2 font-bold ">Redes sociales</p>
                            
                            <p className="text-neutral-500 ">
                            <a href="https://www.facebook.com/profile.php?id=100077511617107" className=' hover:underline' target="_blank" >
                            Facebook
                                </a>
                            </p>
            
              <p className="text-neutral-500 ">
              <a href="https://www.tiktok.com/@quemacocossampayos" className=' hover:underline' target="_blank" >
              TikTok
              </a>  </p>
            
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

    </div>
</section>
</div>
      
      </>
    )
  }
  