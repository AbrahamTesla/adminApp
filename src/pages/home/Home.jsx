import React from 'react';
import Chart from '../../components/chart/Chart';
import Feature from '../../components/featuredInfo/Feature';
import './home.css';
import { userData } from '../../dummyData.js';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

export default function Home() {
   console.log(userData);
   return (
      <div className='home'>
         <Feature />
         <Chart
            data={userData}
            dataKey='Active User'
            title='User Analytics'
            grid
         />
         <div className='homeWidgets'>
            <WidgetSm />
            <WidgetLg />
         </div>
      </div>
   );
}
