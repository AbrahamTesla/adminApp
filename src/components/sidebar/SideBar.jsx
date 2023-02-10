import {
   AssessmentOutlined,
   Email,
   InsertChartOutlinedSharp,
   Inventory2,
   LineStyle,
   ManageAccountsOutlined,
   MessageOutlined,
   PaidOutlined,
   PersonOutline,
   RateReviewOutlined,
   SummarizeOutlined,
   Timeline,
   TrendingUp,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function SideBar() {
   return (
      <div className='sideBar'>
         <div className='sideBarWrapper'>
            <div className='sideBarMenu'>
               <h3 className='sideBarTitle'>Dashboard</h3>
               <ul className='sideBarList'>
                  <Link
                     to='/'
                     style={{ textDecoration: 'none', color: '#555' }}
                  >
                     <li className='sideBarListItem active'>
                        <LineStyle className='sideBarIcons' />
                        Home
                     </li>
                  </Link>
                  <li className='sideBarListItem'>
                     <Timeline className='sideBarIcons' />
                     Analytics
                  </li>
                  <li className='sideBarListItem'>
                     <TrendingUp className='sideBarIcons' />
                     Sales
                  </li>
               </ul>
            </div>
            <div className='sideBarMenu'>
               <h3 className='sideBarTitle'>Quick Menu</h3>
               <ul className='sideBarList'>
                  <Link
                     to='/users'
                     style={{ textDecoration: 'none', color: '#555' }}
                  >
                     <li className='sideBarListItem'>
                        <PersonOutline className='sideBarIcons' />
                        Users
                     </li>
                  </Link>
                  <li className='sideBarListItem'>
                     <Inventory2 className='sideBarIcons' />
                     Products
                  </li>
                  <li className='sideBarListItem'>
                     <PaidOutlined className='sideBarIcons' />
                     Transactions
                  </li>
                  <li className='sideBarListItem'>
                     <AssessmentOutlined className='sideBarIcons' />
                     Reports
                  </li>
               </ul>
            </div>
            <div className='sideBarMenu'>
               <h3 className='sideBarTitle'>Notifications</h3>
               <ul className='sideBarList'>
                  <li className='sideBarListItem'>
                     <Email className='sideBarIcons' />
                     Mail
                  </li>
                  <li className='sideBarListItem'>
                     <RateReviewOutlined className='sideBarIcons' />
                     Feedback
                  </li>
                  <li className='sideBarListItem'>
                     <MessageOutlined className='sideBarIcons' />
                     Messages
                  </li>
               </ul>
            </div>
            <div className='sideBarMenu'>
               <h3 className='sideBarTitle'>Staffs</h3>
               <ul className='sideBarList'>
                  <li className='sideBarListItem'>
                     <ManageAccountsOutlined className='sideBarIcons' />
                     Manage
                  </li>
                  <li className='sideBarListItem'>
                     <InsertChartOutlinedSharp className='sideBarIcons' />
                     Analytics
                  </li>
                  <li className='sideBarListItem'>
                     <SummarizeOutlined className='sideBarIcons' />
                     Reports
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
