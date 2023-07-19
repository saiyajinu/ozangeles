import Link from "next/link"
import Image from "next/image"

const Nav = () => {
  return (
    <nav className="bg-black text-white flex flex-wrap items-center text-xl p-4 sticky top-0 z-20">
        <Link href="/">
          <Image 
            src="/assets/images/sigla.png"
            alt="sigla"
            width={35}
            height={35}
            className="ml-6"
          />
        </Link>
        <Link href="#echipa" className="ml-12 hover:text-primary-100">
            Echipă
        </Link>
        <Link href="#rezultate" className="ml-12 hover:text-primary-100">
            Rezultate
        </Link>
    </nav>
  )
}

export default Nav