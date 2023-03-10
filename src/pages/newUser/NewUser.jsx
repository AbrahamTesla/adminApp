import React from 'react';
import './newUser.css';

export default function NewUser() {
   return (
      <div className='newUser'>
         <h1 className='newUserTitle'>New User</h1>
         <form className='newUserForm'>
            <div className='newUserItem'>
               <label>User Name</label>
               <input type='text' placeholder='Alesso Neo' />
            </div>
            <div className='newUserItem'>
               <label>Full Name</label>
               <input type='text' placeholder='Alesso Neo' />
            </div>
            <div className='newUserItem'>
               <label>Email</label>
               <input type='email' placeholder='AlessoNeo@gmail.com' />
            </div>
            <div className='newUserItem'>
               <label>Password</label>
               <input type='password' placeholder='password' />
            </div>
            <div className='newUserItem'>
               <label>Address</label>
               <input type='text' placeholder='369 NeverLand' />
            </div>
            <div className='newUserItem'>
               <label>Phone</label>
               <input type='text' placeholder='+1(416)777-9999' />
            </div>
            <div className='newUserItem'>
               <label>Gender</label>
               <div className='newUserContainer'>
                  <input type='radio' name='gender' id='male' value='male' />
                  <label htmlFor='male'>Male</label>
                  <input
                     type='radio'
                     name='gender'
                     id='female'
                     value='female'
                  />
                  <label htmlFor='female'>Female</label>
                  <input type='radio' name='gender' id='other' value='other' />
                  <label htmlFor='other'>Other</label>
               </div>
            </div>
            <div className='newUserItem'>
               <label>Active</label>
               <select name='active' id='active' className='newUserSelect'>
                  <option value='yes' className='userYes'>
                     Yes
                  </option>
                  <option value='no' className='userNo'>
                     No
                  </option>
               </select>
            </div>
         </form>
         <button className='newUserButton'>Create</button>
      </div>
   );
}
