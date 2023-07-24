import PlayerCard from "@/components/PlayerCard";
import playerdata from "../public/playerdata.json"

const Team = () => {

  const renderPlayers = () => {
    return playerdata.map((item : any) => {
      return (
        <PlayerCard
          name={item.nume}
          position={item.pozitie}
          description={item.description}
          image={`/assets/images/${item.imgurl}.png`}
        />
      )
    })
  }

  return (
    <section
      id="echipa"
      className="py-16 bg-gradient-to-br from-gray-100 to-[#fed9bc]"
    >
      <div className="sectiontitle pt-8">echipă</div>
      <div
        className="mb-32 mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {
          renderPlayers()
        }
        

      </div>
    </section>
  );
};

export default Team;
