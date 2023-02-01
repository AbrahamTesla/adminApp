import React, { useState } from 'react';
import './users.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
   const [data, setData] = useState(userRows);

   const handleDelete = id => {
      setData(data.filter(item => item.id !== id));
   };

   const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
         field: 'user',
         headerName: 'User',
         width: 200,
         renderCell: params => {
            return (
               <div className='userListUser'>
                  <img className='userListImg' src={params.row.avatar} alt='' />
                  {params.row.username}
               </div>
            );
         },
      },
      {
         field: 'email',
         headerName: 'email',
         width: 200,
      },
      {
         field: 'status',
         headerName: 'Status',
         width: 90,
      },
      {
         field: 'transaction',
         headerName: 'Transaction',
         width: 160,
      },
      {
         field: 'action',
         headerName: 'Action',
         width: 160,
         renderCell: params => {
            return (
               <>
                  <Link to={'/users/' + params.row.id}>
                     <button className='edit'>Edit</button>
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
      <div className='usersList'>
         <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            disableSelectionOnClick
            checkboxSelection
         />
      </div>
   );
}
