import { Fragment } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/footer";
import GamesList from "./Components/Games/GamesList";
import Userslist from "./Components/UsersList/Userslists";
import TodoApp from "./Components/TodoApp/TodoApp";
import Games from "./Pages/Games";
import ContactUs from "./Pages/ContactUs";
import GameDetails from "./Pages/GameDetails";
import AddGame from "./Pages/AddGame";
import NotFound from "./Pages/Notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
  
//     <Fragment>
// <GamesList/>
// <Header/>
//    <Userslist/>
//    <TodoApp/>
//    <Footer/>
//       </Fragment>


      <BrowserRouter>
      {/* <Header/> */}
      <div className="container">
      <Routes>
        <Route element={<Layout/>}>
        <Route path="" element={<Games/>} />
        <Route path="add-game" element={<AddGame/>} />
        <Route path="game-details/:id" element={<GameDetails/>} />
        <Route path="contact-us" element={<ContactUs/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
      </BrowserRouter>
    
 
  );
}
export default App;

