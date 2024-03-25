import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import axios from 'axios';
function Workers(){
    const [rows, setRows] = useState([]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'email', headerName: 'Email', width: 150 },
      { field: 'website', headerName: 'Website', width: 110 },
    ];
    
    useEffect(()=>{
        const fetchdata = async () =>{
            axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response)
                setRows(response.data)
            })
            
        }
       
        fetchdata();
    },[]);

    return(
        <Box sx={{
            height:"100%",
            width:"100%"
        }}>
      <DataGrid 
      rows={rows}
       columns={columns}
        pageSize={5}
         checkboxSelection
         sx={{
            
            "& .MuiDataGrid-columnHeaderRow":{
                backgroundColor:"black !important"
            }
         }} />
        </Box>
        )
}

export default Workers;