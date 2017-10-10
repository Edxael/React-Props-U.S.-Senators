import React from 'react';
import Template from './TempSen.jsx';
import SenData from './jsonData/senators.json';

class Senators extends React.Component {
  render() {
    console.log(SenData);
    return(
      <div>

        <div>
          <h2>Reapublicans</h2>

          <div>{SenData
                  .filter((individual) => { return individual.party === "Republican" })
                  .map((individual) => { return (
                    <Template key={individual.person.bioguideid} info={ {
                      name: `${individual.person.firstname} ${individual.person.lastname}`,
                      bday: individual.person.birthday,
                      party: individual.party
                    } } />
                  )})
            }</div> <br/><br/><br/><br/>


          <h2>Democrats</h2>

            <div>{SenData
                  .filter((individual) => { return individual.party !== "Republican" })
                  .map((individual) => { return (
                    <Template key={individual.person.bioguideid} info={ {
                      name: `${individual.person.firstname} ${individual.person.lastname}`,
                      bday: individual.person.birthday,
                      party: individual.party
                    } } />
                  )})
            }</div>

        </div>


      </div>
    )
  }
}

export default Senators;
