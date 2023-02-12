import React from 'react';
import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';

import ProductsList from './pages/products/ProductsList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
   return (
      <div>
         <TopBar />
         <div className='container'>
            <SideBar />
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route path='/users' element={<UserList />} />
               <Route path='/users/:userId' element={<User />} />
               <Route path='/newUser' element={<NewUser />} />
               <Route path='/products' element={<ProductsList />} />
               <Route path='/product/:productId' element={<Product />} />
               <Route path='/newproducts' element={<NewProduct />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
