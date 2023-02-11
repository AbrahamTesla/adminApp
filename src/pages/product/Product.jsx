import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

export default function Product() {
   return (
      <div className='product'>
         <div className='productContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to='/newProduct'>
               <button className='productCreateButton'>Create</button>
            </Link>
         </div>
         <div className='productTop'>
            <div className='productLeft'>
               <Chart
                  data={productData}
                  dataKey='Sales'
                  title='Sales Perfomance'
               />
            </div>
            <div className='productRight'>
               <div className='productInfoTop'>
                  <img
                     src='https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600'
                     alt=''
                     className='productInfoImg'
                  />
                  <span className='productName'>iPhone</span>
               </div>
               <div className='productInfoBottom'>
                  <div className='productInfoItem'>
                     <span className='productInfoKey'>id:</span>
                     <span className='productInfoValue'>389</span>
                  </div>
               </div>
               <div className='productInfoBottom'>
                  <div className='productInfoItem'>
                     <span className='productInfoKey'>sales:</span>
                     <span className='productInfoValue'>709</span>
                  </div>
               </div>
               <div className='productInfoBottom'>
                  <div className='productInfoItem'>
                     <span className='productInfoKey'>active:</span>
                     <span className='productInfoValue'>yes</span>
                  </div>
               </div>
               <div className='productInfoBottom'>
                  <div className='productInfoItem'>
                     <span className='productInfoKey'>in stock:</span>
                     <span className='productInfoValue'>yes</span>
                  </div>
               </div>
            </div>
         </div>
         <div className='productBottom'>
            <form className='productForm'>
               <div className='productFormLeft'>
                  <label>Product Name</label>
                  <input type='text' placeholder='iPhone' />
                  <label>In Stock</label>
                  <select name='inStock' id='inStock'>
                     <option value='yes'>Yes</option>
                     <option value='no'>No</option>
                  </select>
                  <label>Active</label>
                  <select name='active' id='active'>
                     <option value='yes'>Yes</option>
                     <option value='no'>No</option>
                  </select>
               </div>
               <div className='productFormRight'>
                  <div className='productUpload'>
                     <img
                        src='https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        alt=''
                        className='productUploadImg'
                     />
                     <label htmlFor='file'>
                        <Publish className='publishImgUpload' />
                     </label>
                     <input type='file' id='file' style={{ display: 'none' }} />
                  </div>
                  <Link to='/newProducts'>
                     <button className='update'>Update</button>
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
}
