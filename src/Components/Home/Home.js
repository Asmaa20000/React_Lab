import { useEffect, useState } from "react";
function Home(){
    const[name,setname] =  useState('Asmaa')
    const[age,setage] =  useState('22')
    const[title,settitle] =  useState('Full-stack Developer')

    useEffect(()=>{
console.log("first");
    },[]);
    
    return (
  
<>
<h5>user Name: {name}</h5>
<h5>Age: {age}</h5>
<h5>Title: {title}</h5>
<button onClick={()=>setname('aml')}>Change </button>
</>
    )
}
export default Home;