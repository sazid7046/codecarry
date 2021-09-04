// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     formContainer: {
//         maxWidth: '400px'
//     },
//     table:{
//       backgroundColor: '#00A066',
//     }
// });

// function createData(name, data) {
//   return { name, data};
// }

// const rows = [
//   createData('Words', 0),
//   createData('Character', 0),
//   createData('Char Our Space', 0),
//   createData('Total Spaces', 0),
//   createData('Reading', 0),
// ];

// export default function FormTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper} className={classes.formContainer}>
//       <Table  className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="center" style={{color: '#fff'}}>Details</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell style={{color: '#fff'}} component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell style={{color: '#fff'}} align="right">{row.data}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }