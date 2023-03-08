import React, {useEffect, useState} from "react";
import { allTeams } from "../functions/functions";
import "../assets/css/Home.css";

const Home = () => {

    const [teams, setTeams] = useState(null)
    useEffect(() => {
        allTeams(setTeams)
    },[])

  return (
    <React.Fragment>
     <div className="container-fluid" style={{backgroundColor: "#F0F3F4"}}>
      <div className="row">
      <div className="col-1"></div>
      <div className="col-10">

      <br />
      <br />

      <div className="row">
        <div className="col-5"></div>
        <div className="col-3">
          <h2 style={{color: "black", fontSize: "25px"}}>Jornada y Partidos</h2>
        </div>
        <div className="col-4"></div>
      </div>
      <br />
      <br />
      <div className="header-body">
        <div className="row container-center">
          {teams != null ? (
            teams.map(teams => (
                <div className="tajeta" style={{width: "360px"}}>
                  
                </div>
            ))
        ) : ('no hay teams')}
        </div>
      </div>
      </div>
      </div>
     </div>
    </React.Fragment>
  )
};

export default Home;
