import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import React from 'react';
import './feature.css';

export default function Feature() {
   return (
      <div className='featured'>
         <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
               <span className='featuredMoney'>$1,433</span>
               <span className='featuredMoneyRate'>
                  -11.4 <ArrowDownward />
               </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
         </div>
         <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
               <span className='featuredMoney'>$1500</span>
               <span className='featuredMoneyRate'>
                  -11.4 <ArrowDownward />
               </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
         </div>
         <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className='featuredMoneyContainer'>
               <span className='featuredMoney'>$800</span>
               <span className='featuredMoneyRate'>
                  +2 <ArrowUpward />
               </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
         </div>
      </div>
   );
}
