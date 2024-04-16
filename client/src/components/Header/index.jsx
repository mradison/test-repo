import { Link } from "react-router-dom";

// import Auth from "../../utils/auth";

const Header = () => {
  
  return (
    <header>
        <Link className="headerLink" to="/">
          <div>
          {<img className="tradeMark" src="CHMClogo.png"/>}
          </div>
        </Link>        
    </header>
  );
};

export default Header;
