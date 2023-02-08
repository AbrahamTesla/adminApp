import {
   ContactPhone,
   Home,
   MailOutlined,
   PermIdentity,
} from '@mui/icons-material';
import React from 'react';
import './user.css';

export default function User() {
   return (
      <div className='user'>
         <div className='userTitleContainer'>
            <h1 className='editUser'>Edit User</h1>
            <button className='userAddButton'>Create</button>
         </div>
         <div className='userContainer'>
            <div className='userShow'>
               <div className='userShowTop'>
                  <img
                     src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                     alt=''
                     className='userImage'
                  />
                  <div className='userShowTopTitle'>
                     <span className='userShowName'>Alesso Neo</span>
                     <span className='userShowJobTitle'>Disco Jack</span>
                  </div>
               </div>
               <div className='userShowBottom'>
                  <span className='userShowTitle'>Account Details</span>
                  <div className='userShowInfoContainer'>
                     <PermIdentity className='userShowIcon' />
                     <span className='userShowInfoTitle'>AlessoNeo93</span>
                  </div>
                  <div className='userShowInfoContainer'>
                     <ContactPhone className='userShowIcon' />
                     <span className='userShowInfoTitle'>+1(416)799-9999</span>
                  </div>
                  <div className='userShowInfoContainer'>
                     <MailOutlined className='userShowIcon' />
                     <span className='userShowInfoTitle'>
                        AlessoNeo93@gmail.com
                     </span>
                  </div>
                  <div className='userShowInfoContainer'>
                     <Home className='userShowIcon' />
                     <span className='userShowInfoTitle'>
                        123 Spring Valley Wonderland North Pole
                     </span>
                  </div>
               </div>
            </div>
            <div className='userUpdate'>
               <span className='userUpdateTitle'>Edit</span>
               <form className='userUpdateForm'>
                  <div className='userUpdateLeft'>
                     <div className='userUpdateItem'>
                        <label>UserName</label>
                        <input
                           type='text'
                           placeholder='AlessoNeo93'
                           className='userUpdateInput'
                        />
                     </div>
                     <div className='userUpdateItem'>
                        <label>Full Name</label>
                        <input
                           type='text'
                           placeholder='Alesso Neo'
                           className='userUpdateInput'
                        />
                     </div>
                     <div className='userUpdateItem'>
                        <label>Phone</label>
                        <input
                           type='text'
                           placeholder='+1(416)799-9999'
                           className='userUpdateInput'
                        />
                     </div>
                     <div className='userUpdateItem'>
                        <label>Email</label>
                        <input
                           type='text'
                           placeholder='AlessoNeo93@gmail.com'
                           className='userUpdateInput'
                        />
                     </div>
                     <div className='userUpdateItem'>
                        <label>Address</label>
                        <input
                           type='text'
                           placeholder='123 Spring Valley Wonderland North Pole'
                           className='userUpdateInput'
                        />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
