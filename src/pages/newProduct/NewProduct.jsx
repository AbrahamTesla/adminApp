import React from 'react';
import './newProduct.css';

export default function NewProduct() {
   return (
      <div className='newProduct'>
         <div className='newProductContainer'>
            <h1 className='newProductTitle'>Product Update</h1>
            <div className='productHeaderContainer'>
               <label htmlFor='file'>Image</label>
               <input type='file' />
            </div>
            <form className='productUpdateForm'>
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
            </form>
         </div>
      </div>
   );
}
