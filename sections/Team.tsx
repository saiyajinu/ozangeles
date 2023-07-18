import PlayerCard from "@/components/PlayerCard"

const Team = () => {
  return (
    <section id="echipa" className='py-20 bg-gradient-to-br from-gray-100 to-[#fed9bc]'>
        <div className='font-bold text-8xl text-center gradienttext pt-6 italic uppercase mb-10'>
          echipă
        </div>
        <div className="grid grid-cols-2 grid-flow-row mx-64 mb-32">
          <PlayerCard
          name = "Paul Ciucă"
          position = "Atacant"
          description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image = "/assets/images/ciucanobg.png"
          />
          <PlayerCard
          name = "Paul Ciucă"
          position = "Atacant"
          description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image = "/assets/images/ciucanobg.png"
          />
          <PlayerCard
          name = "Paul Ciucă"
          position = "Atacant"
          description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image = "/assets/images/ciucanobg.png"
          />
          <PlayerCard
          name = "Paul Ciucă"
          position = "Atacant"
          description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed."
          image = "/assets/images/ciucanobg.png"
            />
        </div>
      </section>
  )
}

export default Team