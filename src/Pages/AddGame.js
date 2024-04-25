import { useState } from "react";

export default function AddGame() {
  const [game, setGameform] = useState({
    title: "",
    Desription: "",
    price: "",
  });
  const [gameFormErrors, setGameformError] = useState({
    title: null,
    Desription: null,
    price: null,
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    // const field_value= event.tatget.value;
    // const Field_name=event.tatget.name;
    console.log(event.target.value);
    if (name === "title") {
      setGameform({
        ...game,
        title: value, // لوالاسم مختلف
      });
    }
    setGameform({
      ...game,
      [name]: value, // ف حاله الاسم نفس اسم ال input (name)
    });
    setGameformError({ 
        ...gameFormErrors,
       title:value.length=== 0 ?"this field is Rwquired" :value.length< 3 ? "Minimum length is 3":null
      });

  };
  const handlesubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handlesubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Game Title</label>
        <input
          type="game title"
          name="title"
          className="form-control"
          onChange={handleFormChange}
        />
        <div className="text-danger">
            {gameFormErrors.title}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <textarea
          type="text"
          name="Description"
          className="form-control"
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputPassword1">Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          onChange={handleFormChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
