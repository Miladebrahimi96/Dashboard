import React from 'react';
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

//userdata
import { userColumns, userRows } from '../../dataTableSource';

const Datatable = () => {

    const actionColumn = [{ field: 'action', headerName:'Action', width: 200, renderCell:() => {
        return (
            <div className="cellAction">
                <Link to={`/users/test`}>
                    <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}]

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link to='/users/new' className='link'>
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;