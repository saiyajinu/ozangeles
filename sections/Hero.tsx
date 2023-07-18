import Image from "next/image"

const Hero = () => {
  return (
    <section className="teambg">
        <div>
            <div className='sectiontitle'>
                OZANGELES FC
            </div>
            <div className='italic text-center text-xl ml-64 mt-2 md:text-3xl md:mt-4 md:ml-96 text-white'>
                Ozana's finest
            </div>
        </div>

        <div className="text-white lg:flex items-center py-16 md:py-24 lg:py-36 2xl:py-48">
            <div className="font-semibold text-center px-16 md:px-32 sm:text-xl lg:text-2xl 2xl:text-3xl 2xl:px-64"> 
                Cu rădăcini în cartierul Ozana,<span className="text-primary-100 font-bold"> Ozangeles</span> a fost înființată cu pasiune și ambiție în 2022. Astăzi, ne mândrim să fim parte a Ligii 3F a campionatului de minifotbal <a href="https://victorycup.ro/" className="italic">Victory Cup</a> cu suportul deosebit al sponsorului nostru,<span className=""> Fast Design Proiect</span>. Pe teren, suntem o echipă unită și plină de determinare, iar în afara lui, suntem o comunitate puternică care își propune să inspire și să aducă bucurie prin fotbal!
            </div>
            <div className="flex items-center justify-center flex-shrink-0 mt-24 md:m-16 lg:m-0 lg:mr-16 2xl:mr-32">
                <img 
                    src="/assets/images/sigla.png"
                    alt="sponsor"
                    className="w-[120px] xl:w-[150px] 2xl:w-[170px]"
                />
                <div className="lg:flex lg:flex-col ml-24 w-[120px] xl:w-[150px] 2xl:w-[170px]">
                    <img
                        src="/assets/images/fastdesignlogo.png"
                        alt="sponsor"
                        className="mb-12 w-[120px] xl:w-[150px] 2xl:w-[170px]"
                    />
                    <a href="https://victorycup.ro/" target="_blank">
                        <img
                            src="/assets/images/victorycup.svg" 
                            alt="logo"
                        />
                    </a>
                </div>
            </div>
        </div>       
      </section>
  )
}

export default Hero