import PlayerCard from "@/components/PlayerCard";

const Team = () => {
  return (
    <section
      id="echipa"
      className="py-16 bg-gradient-to-br from-gray-100 to-[#fed9bc]"
    >
      <div className="sectiontitle pt-8">echipă</div>
      <div
        className="mb-32 mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4
        lg:bg-white xl:bg-red-500 md:bg-black sm:bg-green-400"
      >
        <PlayerCard
          name="Paul Ciucă"
          position="Atacant"
          description="ALorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image="/assets/images/ciucanobg.png"
        />
        <PlayerCard
          name="Paul Ciucă"
          position="Atacant"
          description="ALorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image="/assets/images/ciucanobg.png"
        />
        <PlayerCard
          name="Paul Ciucă"
          position="Atacant"
          description="ALorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image="/assets/images/ciucanobg.png"
        />
        <PlayerCard
          name="Paul Ciucă"
          position="Atacant"
          description="ALorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image="/assets/images/ciucanobg.png"
        />
        <PlayerCard
          name="Paul Ciucă"
          position="Atacant"
          description="ALorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image="/assets/images/ciucanobg.png"
        />
        <PlayerCard
          name="Paul Ciucă"
          position="Atacant"
          description="ALorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image="/assets/images/ciucanobg.png"
        />
        <PlayerCard
          name="Paul Ciucă"
          position="Atacant"
          description="ALorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image="/assets/images/ciucanobg.png"
        />
        <PlayerCard
          name="Paul Ciucă"
          position="Atacant"
          description="ALorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image="/assets/images/ciucanobg.png"
        />
      </div>
    </section>
  );
};

export default Team;
