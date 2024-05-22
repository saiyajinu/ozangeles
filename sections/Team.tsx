import PlayerCard from "@/components/PlayerCard";
import playerdata from "../public/playerdata.json"

const Team = () => {

  const renderPlayers = () => {
    return playerdata.map((item: any) => {
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
      className="pt-16 pb-2 bg-gradient-to-br from-gray-100 to-[#fed9bc]"
    >
      <div className="sectiontitle pt-8">echipă</div>
      <div className="my-12 text-center mx-16 sm:mx-32 md:mx-48 lg:mx-64 md:text-xl xl:mx-96 xl:text-2xl">
        Echipa noastră se mândrește cu un lot de jucători pe care îi recomandă atât talentul, cât și dedicarea. De la atacanți puternici cu apetit mare pentru gol, până la apărători experimentați care ne oferă siguranță in ultima treime a terenului, avem o echipă unită și hotărâtă să obțină succese mari în fiecare meci. Fiecare jucător aduce în teren pasiunea pentru fotbal și dorința de a furniza satisfacție și mândrie comunității noastre. Cunoaște-i pe jucători și alătură-te echipei noastre în susținerea lor!      </div>
      <div
        className="mb-32 mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {
          renderPlayers()
        }


      </div>
      <div className="sectiontitle pt-8">Hall of Fame</div>
      {
        <div className="mb-32 mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <PlayerCard
            name='Bulugeanu Andrei'
            position='Atacant'
            description=''
            image={`/assets/images/bulugeanuandrei.png`}
          />
          <PlayerCard
            name='Duta Andrei'
            position='Incalzitor de banca'
            description=''
            image={`/assets/images/dutaandrei.png`}
          />
          <PlayerCard
            name='Gosav Raul'
            position='Fundas'
            description=''
            image={`/assets/images/gosavraul.png`}
          />
        </div>
      }
    </section>
  );
};

export default Team;
