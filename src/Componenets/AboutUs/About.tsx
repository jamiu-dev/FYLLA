import "./About.css";

const About = () => {
  return (
    <div className="about_us_container">
      <p className="about_us">About us </p>
      <div className="displayFlexContainer">
        <div className="objective">
          <h1>our mission is to connect with the world through innovation </h1>
        </div>
        <div className="visionInnovatioConnection">
          <div className="theVision">
            <img src={"Line.png"} alt="vertica line" className="line" />
            <img src={"Vector.png"} alt="" />
            <div className="vision_container">
              <h6 className="tittle">VISION</h6>
              <p className="vision">
                Creative fasion is the artistic and innovation side of clothing
                design that goes beyond trends and tradition
              </p>
            </div>
          </div>

          <div className="theInnovation">
            <img src={"Line.png"} alt="vertica line" className="line" />
            <img src={"Group.png"} alt="" />
            <div className="innovation_container">
              <h6 className="tittle_innovation">INNOVATION</h6>
              <p className="innovation">
                Whether its a single improvement to an existing system ,
                innovation transforms how we live, work and connect.
              </p>
            </div>
          </div>
          <div className="theConnection">
            <img src={"Line.png"} alt="vertica line" className="line" />
            <img src={"Group1.png"} alt="" />
            <div className="connection_container">
              <h6 className="tittle_connection">CONNECTION</h6>
              <p className="connection_p_tag">
                Connection brings people together through shared understanding
                and emotional bonds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
