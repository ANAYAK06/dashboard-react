import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Athira', 18925012, "2 March 2022", "Approved"),
  createData('Anoop', 18925014, "2 March 2022", "Pending"),
  createData('Adharv', 18925032, "2 March 2022", "Delivered"),
  createData('Cupcake', 18925062, "2 March 2022", "Approved"),
  createData('Gingerbread', 18925052, "2 March 2022", "Delivered"),
];

const makeStyles =(status)=>{
  if(status==='Approved'){
    return{
      background :'rgb(145 245 159 / 47%)',
      color:'green'
    }
  }
  else if(status==='Pending'){
    return{
      background :'#ffadad8f',
      color:'red'
    }
  }
  else{
    return{
      background :'#59bfff',
      color:'white'
    }
  }
}

export default function BasicTable() {
  return (
    <div className="table">
      <h3>Recent order</h3>
    
    <TableContainer component={Paper}
    style={{boxShadow:'0px 13px 20px 0px #80808021'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID </TableCell>
            <TableCell align="left">Dates</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='details'>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
