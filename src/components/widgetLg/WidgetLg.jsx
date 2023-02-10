import React from 'react';
import './widgetLg.css';

export default function WidgetLg() {
   const Button = ({ type }) => {
      return <button className={'widgetLgButton ' + type}>{type}</button>;
   };

   return (
      <div className='widgetLg'>
         <h3 className='widgetLgTitle'>Transactions</h3>
         <table className='widgetLgTable'>
            <tbody>
               <tr className='widgetLgTr'>
                  <th className='widgetLgTh'>Customer</th>
                  <th className='widgetLgTh'>Date</th>
                  <th className='widgetLgTh'>Amount</th>
                  <th className='widgetLgTh'>Status</th>
               </tr>

               <tr className='widgetLgTr'>
                  <td className='widgetLgUser'>
                     <img
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='widgetLgImg'
                     />
                     <span className='widgetLgName'>Alesso Neo</span>
                  </td>
                  <td className='widgetLgDate'>30 January 2023</td>
                  <td className='widgetLgAmount'>$3,000</td>
                  <td className='widgetLgStatus'>
                     <Button type='Approved' />
                  </td>
               </tr>
               <tr className='widgetLgTr'>
                  <td className='widgetLgUser'>
                     <img
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='widgetLgImg'
                     />
                     <span className='widgetLgName'>Alesso Neo</span>
                  </td>
                  <td className='widgetLgDate'>30 January 2023</td>
                  <td className='widgetLgAmount'>$3,000</td>
                  <td className='widgetLgStatus'>
                     <Button type='Pending' />
                  </td>
               </tr>
               <tr className='widgetLgTr'>
                  <td className='widgetLgUser'>
                     <img
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='widgetLgImg'
                     />
                     <span className='widgetLgName'>Alesso Neo</span>
                  </td>
                  <td className='widgetLgDate'>30 January 2023</td>
                  <td className='widgetLgAmount'>$3,000</td>
                  <td className='widgetLgStatus'>
                     <Button type='Declined' />
                  </td>
               </tr>
               <tr className='widgetLgTr'>
                  <td className='widgetLgUser'>
                     <img
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='widgetLgImg'
                     />
                     <span className='widgetLgName'>Alesso Neo</span>
                  </td>
                  <td className='widgetLgDate'>30 January 2023</td>
                  <td className='widgetLgAmount'>$3,000</td>
                  <td className='widgetLgStatus'>
                     <Button type='Approved' />
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}
