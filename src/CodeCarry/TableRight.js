import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    title:{ backgroundColor: '#027B80',
    },
    table:{
      backgroundColor: '#00A0A6',
    },
    btn:{
        backgroundColor: '#ffC107',
         color: '#333'
    }
   
});

function createData(name, data) {
  return { name, data};
}

const rows = [
  createData('Words', 0),
  createData('Character', 0),
  createData('Char Our Space', 0),
  createData('Total Spaces', 0),
  createData('Reading', 0),
];

export default function FormTable() {
  const classes = useStyles();

  return (
      <div className={classes.container}>
          <div className={classes.tableContainer}>
              <TableContainer>
        <Typography color='primary' variant="h6" align='center' className={classes.title}>Details</Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{color: '#fff'}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{color: '#fff'}} align="right">{row.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
          </div>

          <div style={{display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '1rem'}}>
              <Button variant='contained' className={classes.btn}>Copy Text</Button>
              <Button variant='contained' className={classes.btn}>Reset</Button>
              <Button variant='contained' className={classes.btn}>Download Text</Button>
          </div>

      </div>
    
  );
}