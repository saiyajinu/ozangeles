type IMatchResultProps = {
  team1_name: string;
  team2_name: string;
  team1_logo: string;
  team2_logo: string;
  score: string;
  date: string;
  isCup: boolean;
};

const MatchResult = (props: IMatchResultProps) => {
  return (
        <div className="flex border-b-2 mt-4 border-black mx-auto py-2 px-2 max-w-4xl">
            <div className="basis-[10%]">
            {
                props.isCup ? <img src="/assets/images/supercupa.png" className="w-[35px] my-auto ml-auto mr-12" /> : <img src="/assets/images/liga3f.png" className="w-[35px] my-auto ml-auto mr-12" />  
            }
            </div>
            
          

  
        <div title={props.team1_name} className="my-auto basis-2/6 text-right whitespace-nowrap overflow-hidden text-ellipsis mr-6">{props.team1_name}</div>
        <img src={props.team1_logo} alt="Team 1" className="w-[35px] my-auto mx-auto" />
        <div className="my-auto basis-[5%] mx-1 text-center">{props.score}</div>
        <img src={props.team2_logo} alt="Team 2" className="w-[35px] mx-auto" />
        <div title={props.team2_name} className="my-auto basis-2/6 text-left whitespace-nowrap overflow-hidden text-ellipsis ml-6">{props.team2_name}</div>
    
        <div className="my-auto basis-[5%] text-center mb-0 text-xs">{props.date}</div>
      </div>
    
  );
};

export default MatchResult;
