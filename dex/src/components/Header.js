import React from "react";
import Logo from "../lumi.png";
import Eth from "../eth.svg";
import { Link ,useNavigate } from "react-router-dom";

function Header(props) {
  const { address, isConnected, connect } = props;
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate("/landing"); 
  };
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" onClick={handleLogoClick}
 />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <nav>
          <a href="#">Blog </a>
          <a href="#">Discord </a>
          <a href="#">X/Twitter </a>
        </nav>
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0, 4) + "..." + address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  );
}

export default Header;