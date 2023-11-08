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
import useFetch from 'hooks/useFetch';

// createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// createData('Eclair', 262, 16.0, 24, 6.0),
// createData('Cupcake', 305, 3.7, 67, 4.3),
// createData('Gingerbread', 356, 16.0, 49, 3.9),




  
// ==============================|| SAMPLE PAGE ||============================== //

const SuccessDeposit = () => {
    const { data,loading}=useFetch(`http://52.36.87.202:8000/api/agency-banking-management-sys/v1/logs/deposit`);
   // consile.log("Data:",data)

  return (
    <div>
     <MainCard title="Deposit Transactions" style={{textAlign:"center"}}>
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
             {
                loading?"Loading ...":
                <TableBody>
                {data.data?.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.bank_reference}</TableCell>
                    <TableCell align="right">{row.client_account}</TableCell>
                    <TableCell align="right">{row.deposit_amount}</TableCell>
                    <TableCell align="right">{row.authorization_mobicore_response==204?"Success":row.authorization_mobicore_response}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
             }
            
           </Table>
         </TableContainer>
       </MainCard> 
    </div>
  )
}

export default SuccessDeposit;

