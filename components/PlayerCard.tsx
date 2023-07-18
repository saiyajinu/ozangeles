import Image from "next/image"

type IPlayerCardProps = {
  name: string;
  position: string;
  description: string;
  image: string;
}

const PlayerCard = (props: IPlayerCardProps) => {
  return (
    <div className="mx-12 mt-12 grid grid-cols-2 border-2 p-6 border-black teamcard rounded-xl text-gray-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      
      <div className="mr-6 text-center">
        <div className="text-xl font-bold my-1">
          {props.name}
        </div>
        <div className="my-1">{props.position}</div>
        <div>{props.description}</div>
      </div>

      <div className="justify-self-center h-2/3">
        <div className="mt-[77px] w-[130px] h-[70px] bg-texture bg-cover absolute rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-lg rounded-tr-lg ml-[50px]">

        </div>
        <Image
            src={props.image}
            alt="poza_jucator"
            className=" max-w-[220px] relative z-10"
            width={220}
            height={220}
          />
      </div>
      
    </div>
  )
}

export default PlayerCard