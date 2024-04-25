import { useState } from "react";
const TodoApp=()=>{
    const [todoLists, settodoLists] = useState([]);
    const [addToList, setAddTolist] = useState("");
      
        // const handleDeletefromlist = (id) => {
        //   const updatedList = todoLists.filter((task) => task.id !== id);
        //   settodoLists(updatedList);
        // };
        const handleDeletefromlist = (id) => {
            const updatedList = todoLists.filter((task) => task.id !== id);
            settodoLists(updatedList);
          };
          
      
        const handleAddChange = (e) => {
            setAddTolist(e.target.value);
        };
        const handleAddTolist=()=>{
            if(addToList.trim!==""){
                const newtask={
                    id:Date.now,
                    task:addToList
                }
               settodoLists([...todoLists,newtask]);
               setAddTolist("");
            }

        }
    return(
<div className="container mx-auto mb-5 mt-3" style={{backgroundColor:"#f8cc1b" ,  maxWidth: "700px",borderRadius: "20px"}}>
  <div className="row justify-content-center">
    <div className="col-7 col-md-6 col-lg-6">
      <div className="">
        <h2 className="text-center mt-3">Asmaa's To do List</h2>
        <div className="mb-3 d-flex align-items-center">
          <input
            type="text"
            className="form-control flex-grow-1"
            style={{ maxWidth: "300px" }}
            placeholder="Add New"
            value={addToList}
            onChange={handleAddChange}
          />
          <button className="btn mx-2 px-4" style={{ backgroundColor: "#72b043", color:"white" }}  onClick={handleAddTolist}>Add</button>
       
        </div>
        <hr />
        <ul>
               {todoLists.map((task) => (
                <li className="d-flex justify-content-between align-items-center mb-3 " key={task.id}>{task.task} 
               <button className="btn "   style={{ backgroundColor: "#e12729", color:"white" }}  onClick={() => handleDeletefromlist(task.id)}>Delete</button> 
                 </li>
                
              ))}
        </ul>
      </div>
    </div>
  </div>
</div>

    )
}
export default TodoApp;