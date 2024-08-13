import Signup from "./Signup";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./Login";
// import Home from "./Home";
// import Welcome from "./welcome";
import Table from './components/admin/Table';
import Menus from "./pages/admin/Menus";
// import Home from './pages/admin/AdminHome'
import Edit from './components/admin/Menu/Edit';
import Add from './components/admin/Menu/Add';
import AdminHome from "./pages/admin/AdminHome";

import Contact from './pages/user/Contact';
import Plans from './pages/user/Plans';
import Home from './pages/user/Home';

// import Logout from "./pages/user/Logout";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/adminhome" element={<AdminHome/>}></Route>
    {/* <Route path="/welcome" element={<Welcome/>}></Route> */}

   



{/* admin path */}
    {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='/table' element={<Table/>}></Route>
          <Route path='/menu' element={<Menus/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route>
          <Route path='/create' element={<Add/>}/>



{/* user path */}
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/plans' element={<Plans/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
