import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosinstance from "../../src/Apis/Config";


function GameDetails() {
  const param= useParams();
  const [gameDetails,setgamedetails]=useState({})
  useEffect(()=>{
    axiosinstance
.get(`/gamehub/${param.id}`)
.then((res)=>setgamedetails(res.data))
.catch((error)=>console.log(error))
  },[])
  return (
    <>
   <h2>{gameDetails.title}</h2>
   <hr/>
   <p>{gameDetails.description}</p>
   </>
  )}
  export default GameDetails;