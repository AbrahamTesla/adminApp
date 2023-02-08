import React from 'react';
import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

function App() {
   return (
      <div>
         <TopBar />
         <div className='container'>
            <SideBar />
            <BrowserRouter>
               <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route path='/users' element={<UserList />} />
                  <Route path='/user/:userId' element={<User />} />
               </Routes>
            </BrowserRouter>
         </div>
      </div>
   );
}

export default App;
