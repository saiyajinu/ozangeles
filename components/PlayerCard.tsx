import Image from "next/image";

type IPlayerCardProps = {
  name: string;
  position: string;
  description: string;
  image: string;
};

const PlayerCard = (props: IPlayerCardProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-12 border-2 p-2 sm:p-4 inline-block border-black teamcard rounded-xl text-gray-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="text-center w-40 sm:w-48">
          <div className="text-xl font-bold my-1">{props.name}</div>
          <div className="my-1">{props.position}</div>
          <div className="text-sm sm:text-base">{props.description}</div>
        </div>

        <div className="justify-self-center my-auto flex justify-center">
          <div className="mt-[60px] sm:mt-[77px] w-[110px] h-[47px] sm:w-[120px] sm:h-[57px] bg-texture bg-cover absolute rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-lg rounded-tr-lg"></div>
          <img
            src={props.image}
            alt="poza_jucator"
            className="w-[80px] sm:w-[100px] relative z-10 ml-3"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
