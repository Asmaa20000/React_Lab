// import { gamesArr } from "../../assets/data/games";
import { useEffect, useState } from "react";
import {GameCard} from "../Games/GameCard"
import axios from "axios";
import { axiosinstance } from "../../Apis/Config";


function GamesList() {
  const [games, setGames] = useState([]);
useEffect(()=>{
  axiosinstance
.get('/gamehub')
.then((res)=>setGames(res.data))
.catch((error)=>console.log(error))
},[])

  const  handelDeleteGame= (id)=>{
    console.log(id)
    const UpdatedGame= games.filter(game=>game.id !== id)
    setGames(UpdatedGame);
}
  return (
    <>
      <h2>Games List</h2>
      <hr />
    
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {games.map((game) => (
          <div className="col" key={game.id}  style={{ flex: "0 0 calc(25% - 10px)", margin: "5px" }}>
           <GameCard gameitem={game} deletegame={handelDeleteGame}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default GamesList;
