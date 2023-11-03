import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// material-ui
//import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// createData('Eclair', 262, 16.0, 24, 6.0),
// createData('Cupcake', 305, 3.7, 67, 4.3),
// createData('Gingerbread', 356, 16.0, 49, 3.9),

const rows = [
 {
 "date":"2023-11-01",
 "bankreference":"129273733",
 "clientaccount":"21129930022334",
 "amount":"10000",
 "status":"Approved",
 },
 {
    "date":"2023-11-02",
    "bankreference":"129273733",
    "clientaccount":"210029930022334",
    "amount":"20000",
    "status":"Approved",
},
{
    "date":"2023-11-03",
    "bankreference":"129273733",
    "clientaccount":"211200930022334",
    "amount":"40000",
    "status":"Approved",
}
];


  
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Withdrawal Transactions" style={{textAlign:"center"}}>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell align="right">Bank Reference</TableCell>
            <TableCell align="right">Client Account</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.clientaccount}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.bankreference}</TableCell>
              <TableCell align="right">{row.clientaccount}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </MainCard>
);

export default SamplePage;
