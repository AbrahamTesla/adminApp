import { Visibility } from '@mui/icons-material';
import React from 'react';
import './widgetSm.css';

export default function WidgetSm() {
   return (
      <div className='widgetSm'>
         <span className='widgetSmTitle'>New Join Members</span>
         <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
               <img
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='widgetSmImage'
               />
               <div className='widgetSmUser'>
                  <span className='widgetSmUserName'>Alesso Neo</span>
                  <span className='widgetSmJobTitle'>Software Engineer</span>
               </div>
               <button className='widgetSmbutton'>
                  <Visibility />
                  Display
               </button>
            </li>
            <li className='widgetSmListItem'>
               <img
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='widgetSmImage'
               />
               <div className='widgetSmUser'>
                  <span className='widgetSmUserName'>Alesso Neo</span>
                  <span className='widgetSmJobTitle'>Software Engineer</span>
               </div>
               <button className='widgetSmbutton'>
                  <Visibility className='widgetSmIcon' />
                  Display
               </button>
            </li>
            <li className='widgetSmListItem'>
               <img
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='widgetSmImage'
               />
               <div className='widgetSmUser'>
                  <span className='widgetSmUserName'>Alesso Neo</span>
                  <span className='widgetSmJobTitle'>Software Engineer</span>
               </div>
               <button className='widgetSmbutton'>
                  <Visibility />
                  Display
               </button>
            </li>
            <li className='widgetSmListItem'>
               <img
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='widgetSmImage'
               />
               <div className='widgetSmUser'>
                  <span className='widgetSmUserName'>Alesso Neo</span>
                  <span className='widgetSmJobTitle'>Software Engineer</span>
               </div>
               <button className='widgetSmbutton'>
                  <Visibility />
                  Display
               </button>
            </li>
            <li className='widgetSmListItem'>
               <img
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='widgetSmImage'
               />
               <div className='widgetSmUser'>
                  <span className='widgetSmUserName'>Alesso Neo</span>
                  <span className='widgetSmJobTitle'>Software Engineer</span>
               </div>
               <button className='widgetSmbutton'>
                  <Visibility />
                  Display
               </button>
            </li>
         </ul>
      </div>
   );
}
