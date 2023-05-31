import React, { Component } from "react";
import airplane from "../images/airplane.png";
import { MenuItems } from "./Menuitems";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    state = ({clicked:false})

    handleClick = () =>{
        this.setState({clicked : !this.state.clicked})
    }
  render() {
    return (
      <div>
        <nav className="navbaritems">
          {/* logo */}
          <h1 className="logo">
            Travelio
            <img src={airplane} alt="logo" className="logo-img" />
          </h1>
          {/* menu icon */}
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fa-solid fa-circle-xmark" : "fa-solid fa-ellipsis-vertical"}></i>
          </div>
          {/* nav-menu */}
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
