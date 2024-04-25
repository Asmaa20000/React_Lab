import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return (

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
  <Link class="navbar-brand" href="#">Logo</Link>
  <div className="navbar-nav">
  <Link className="nav-link active me-5" aria-current="page" to="/">Games</Link>
  <Link className="nav-link active me-5" aria-current="page" to="/add-game">Add Game</Link>
  <Link className="nav-link active me-5" aria-current="page" to="/contact-us">Contact-us</Link>
  </div>

</div>
</nav>
)

}
export default Header;

//    <img src={img} style={{width:'100%', height:'50vh'}} alt=""/>