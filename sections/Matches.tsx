import MatchResult from '@/components/MatchResult';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Matches = () => {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const today = new Date();
            const endDate = today.toISOString().slice(0, 10);

            const oneMonthAgo = new Date(today);
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
            const startDate = oneMonthAgo.toISOString().slice(0, 10);
            const response = await axios.get(`https://victorycup.ro:8089/landing-0.0.1/api/matches/all-final?startDate=${startDate}&endDate=${endDate}`);
            const data = response.data;
            const filteredMatches = data.filter(
                match => match.teamOneName === "OZANGELES" || match.teamTwoName === "OZANGELES"
              );
            setMatches(filteredMatches);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    const renderMatchResults = () => { 
      const lastFiveMatches = matches.slice(-5);

      const reversedMatches = lastFiveMatches.reverse();
      return reversedMatches.map((item : any) => {
        const date = item.scheduledAt.slice(5,10)

        return (
            <MatchResult key={item?.id} isCup={item?.isCupMatch} team1_name={item?.teamOneName} team2_name={item?.teamTwoName} team1_logo={item?.teamOneLogo} team2_logo={item?.teamTwoLogo} score={`${item?.teamOneGoals}:${item?.teamTwoGoals}`} date={date}/> 
        )
    }) }


  return (
    <section id="rezultate" className="pt-16 pb-32 bg-gradient-to-bl from-[#fed9bc] to-gray-100">
        <div className="sectiontitle mb-16">Rezultate</div>
        <div className="my-12 text-center mx-16 mb-16 sm:mx-32 md:mx-48 lg:mx-64 md:text-xl xl:mx-96 xl:text-2xl">
        Descoperiți mai jos cele mai recente performanțe ale echipei noastre în cadrul competiției in care ne desfășurăm.        </div>
        { matches ? renderMatchResults() : ''}
    </section>
  )
}

export default Matches