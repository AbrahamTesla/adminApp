import React, { useState } from 'react';
import './productsList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function ProductsList() {
   const [data, setData] = useState(productRows);

   const handleDelete = id => {
      setData(data.filter(item => item.id !== id));
   };

   console.log(productRows);
   const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
         field: 'product',
         headerName: 'Product',
         width: 200,
         renderCell: params => {
            return (
               <div className='productListItem'>
                  <img
                     className='productListImg'
                     src={params.row.image}
                     alt=''
                  />
                  {params.row.name}
               </div>
            );
         },
      },
      {
         field: 'stock',
         headerName: 'stock',
         width: 200,
      },
      {
         field: 'status',
         headerName: 'Status',
         width: 90,
      },
      {
         field: 'price',
         headerName: 'Price',
         width: 160,
      },
      {
         field: 'action',
         headerName: 'Action',
         width: 160,
         renderCell: params => {
            return (
               <>
                  <Link to={'/product/' + params.row.id}>
                     <button className='productListedit'>Edit</button>
                  </Link>

                  <DeleteOutlined
                     className='delete'
                     onClick={() => handleDelete(params.row.id)}
                  />
               </>
            );
         },
      },
   ];

   return (
      <div className='products'>
         <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            disableSelectionOnClick
            checkboxSelection
         />
      </div>
   );
}
