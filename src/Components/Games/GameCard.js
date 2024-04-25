import { useEffect } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"

export  function GameCard(props) {
    const {gameitem, deletegame}=props
    const navigate= useNavigate();
return (
<div class="card">
<img src={props.gameitem.image} class="card-img-top" alt="Fissure in Sandstone"/>
<div className="card-body">

  <h5 className="card-title">{props.gameitem.title}</h5>
{props.gameitem.onSale ? <span class="badge badge-pill badge-success">Success</span>:
<span className="badge badge-pill badge-warning">Original Price</span>}
  <p className="card-text">{props.gameitem.description}</p>
  <a href="#!" className="btn btn-success me-3" onClick={()=> navigate(`game-details/${gameitem.id}`)}>Details</a>

  <a href="#!" className="btn btn-danger" onClick={()=> deletegame(gameitem.id)} data-mdb-ripple-init>Delete Game</a>
</div>
</div>
)
}
