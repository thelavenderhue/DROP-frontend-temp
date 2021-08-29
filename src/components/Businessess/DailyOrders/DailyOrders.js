import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography, TablePagination, TableFooter } from '@material-ui/core';
import styled from 'styled-components';
import { Orderlist } from './Orderlist';

function DailyOrders() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(12);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

  return (
    <div>
        <TableContainer component={Paper}>
          <Table>
              <TableHead>
                  <TableRow>
                  <TableCell>Product Detail</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Weightage</TableCell>
                  <TableCell>Availiability</TableCell>
                  <TableCell>Alloted Drone</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {Orderlist.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) =>{
                      const {id, pname, brand, price, location, weight, availability, alloted} = item;
                      return (
                        <TableRow key={id}>
                            <TableCell>
                                <Typography>{pname}</Typography>
                                <Typography>{brand}</Typography>
                            </TableCell>
                            <TableCell>{price}/-</TableCell>
                            <TableCell>{location}</TableCell>
                            <TableCell>{weight}kg</TableCell>
                            <TableCell>{availability}</TableCell>
                            <TableCell>{alloted}</TableCell>
                        </TableRow>
                      )
                  })}
              </TableBody>
              <TableFooter>
        <TablePagination
            rowsPerPageOptions={[15, 20, 25]}
            component="div"
            count={Orderlist.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
          </Table>
      </TableContainer>
    </div>
  )
}

export default DailyOrders
