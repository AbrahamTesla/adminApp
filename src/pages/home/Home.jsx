import React from 'react';
import Chart from '../../components/chart/Chart';
import Feature from '../../components/featuredInfo/Feature';
import './home.css';
import { userData } from '../../dummyData.js';

export default function Home() {
   return (
      <div className='home'>
         <Feature />
         <Chart
            data={userData}
            dataKey='Active User'
            title='User Analytics'
            grid
         />
      </div>
   );
}
