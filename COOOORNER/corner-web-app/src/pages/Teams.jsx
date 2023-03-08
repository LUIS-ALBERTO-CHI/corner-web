import React, {useEffect, useState} from "react";
import { allTeams } from "../functions/functions";
import "../assets/css/Team.css";

const Teams = () => {

      const [teams, setTeams] = useState(null)
    useEffect(() => {
        allTeams(setTeams)
    },[])

  return (
    <React.Fragment>
    <div className="header pb-8 pt-5 pt-md-8">
    <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
      <hr style={{borderColor: "white", marginBottom:"20px", marginTop:"-30px"}} />
      <div className="container margincomponent">
      <div className="row">
        <div className="col-10"></div>
        <button className="btn" id="btn">
          <a href="./" style={{textDecoration: "none"}}>Regresar</a>
        </button>
      </div>
      <br />
      <br />
      <div className="header-body">
      <div className="row container-center">
        {teams != null ? (
            teams.map(teams => (
                <div className="tarjeta">
                    <div className="row" id="card">
                    <h4 className="title col-7" style={{alignSelf: "center", fontSize:"24px"}}>{teams.Name}</h4>
                    </div>
                    <div className="body">
                    <div className="imagencard">
                        <img className="imagencard" style={{width:"100px", maxHeight:"110px"}} src={teams.UrlProfile} alt={"sample"} />
                    </div>
                    <br />
                    <div className="bodycard">
                        <p>Descripción: {teams.Description}</p>
                    </div>
                    <br />
                    <div className="bodycard">
                        <p>Capitan: {teams.Captain}</p>
                    </div>
                    </div>
                    <div className="pie">
                        <a className="text-2" href="./">Detalles</a>
                    </div>
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

export default Teams;
