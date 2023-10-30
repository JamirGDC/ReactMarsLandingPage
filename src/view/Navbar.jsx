import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

export const Navbar = () => {
  return (
      <div className="contenedorNavBar">
        <div className="nav">
          <ul className="menu">
            <li className="activo"><a href="#">MISSION</a></li>
            <li>TIMELINE</li>
            <li>NEWS</li>
            <li className="sandwich"><i class="fa-solid fa-bars"></i></li></ul>
        </div>
      </div>



  )
}

export const Addons = () => {
  return (
    <div>
      <h3>-81º</h3>
    </div>
  )
}
