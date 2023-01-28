import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function TopBar() {
   return (
      <div className='topbar'>
         <div className='topbarWrapper'>
            <div className='topLeft'>
               <span className='logo'>VAMADMIN</span>
            </div>
            <div className='topRight'>
               <div className='topBarIconsContainer'>
                  <NotificationsNone />
                  <span className='topIconBadge'>2</span>
               </div>
               <div className='topBarIconsContainer'>
                  <Language />
                  <span className='topIconBadge'>2</span>
               </div>
               <div className='topBarIconsContainer'>
                  <Settings />
               </div>
               <img
                  src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='profilePicture'
               />
            </div>
         </div>
      </div>
   );
}
