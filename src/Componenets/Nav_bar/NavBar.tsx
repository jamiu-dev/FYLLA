import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo_name">
        <img src={"material-symbols_circles.png"} alt=""  className="logo"/>
        <a href="" className="company_name">FYLLA</a>
      </div>
      <div className="nav_link">
        <ul className="center_link">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <a href="">Sales</a>
          </li>
        </ul>
      </div>
      <div>
         <ul className="contact">
              <li>
                  <a href="">Contact us</a>
              </li>
            </ul>
      </div>
    </div>
  );
};

export default NavBar;
