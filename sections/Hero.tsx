import Image from "next/image"

const Hero = () => {
  return (
    <section className="teambg">
        <div>
            <div className='sectiontitle'>
                OZANGELES FC
            </div>
            <div className='italic text-center text-3xl mt-4 ml-96 text-white'>
                Ozana's finest
            </div>
        </div>

        <div className="text-white grid grid-cols-3 pt-48">
            <div className="font-semibold text-3xl px-64 col-span-2 text-center"> Cu rădăcini în cartierul Ozana,<span className="text-primary-100 font-bold"> Ozangeles</span> a fost înființată cu pasiune și ambiție în 2022. Astăzi, ne mândrim să fim parte a Ligii 3F a campionatului de minifotbal <a href="https://victorycup.ro/" className="italic">Victory Cup</a> cu suportul deosebit al sponsorului nostru,<span className=""> Fast Design Proiect</span>. Pe teren, suntem o echipă unită și plină de determinare, iar în afara lui, suntem o comunitate puternică care își propune să inspire și să aducă bucurie prin fotbal!</div>
            <div className="col-span-1 grid grid-cols-2">
                <Image 
                    src="/assets/images/sigla.png"
                    alt="sponsor"
                    className="row-span-2"
                    width={170}
                    height={170}
                />
                <Image 
                    src="/assets/images/fastdesignlogo.png"
                    alt="sponsor"
                    width={150}
                    height={150}
                />
                <a href="https://victorycup.ro/" target="_blank">
                    <Image 
                        src="/assets/images/victorycup.svg" 
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </a>
                
            </div>
        </div>
        
            
            
      </section>
  )
}

export default Hero