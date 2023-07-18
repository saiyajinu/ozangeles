import PlayerCard from "@/components/PlayerCard"

const Team = () => {
  return (
    <section id="echipa" className='py-16 bg-gradient-to-br from-gray-100 to-[#fed9bc]'>
        <div className='sectiontitle pt-8'>
          echipă
        </div>
        <div className="sm:grid sm:grid-cols-2 grid-flow-row mx-0 sm:mx-64 mb-32 mt-10">
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