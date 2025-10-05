import "./Team.css";

const Team = () => {
  return (
    <div className="theServiceContainer">
      <a href="#" className="service">
        service
      </a>
      <div className="theTeam">
        <h1 className="ourTeam">Our Team</h1>
        <div className="organizer">
          <div>
            <img src={"Ceo.png"} alt="ceo" className="ceo"/>
          </div>
          <div>
            <img src={"Manager.png"} alt="" className="manager"/>
          </div>
          <div>
            <img src={"HR.png"} alt="" className="hr" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Team;
