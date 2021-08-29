import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography, TablePagination, TableFooter } from '@material-ui/core';
import { Tablelist } from './Tablelist';
import styled from 'styled-components';

const HeadTableRow = styled(TableRow)`
    background-color: #F5F5F5;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.25);
`;
const STableContainer = styled(TableContainer)`
    font-family: inherit;
`;

function StockTable() {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <STableContainer component={Paper}>
          <Table>
              <TableHead>
                  <HeadTableRow>
                  <TableCell>Business Details</TableCell>
                  <TableCell>Stock Update</TableCell>
                  <TableCell>Faulty Stock</TableCell>
                  <TableCell>To be Exchanged</TableCell>
                  <TableCell>Stock Availiability</TableCell>
                  </HeadTableRow>
              </TableHead>
              <TableBody>
                  {Tablelist.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) =>{
                      const {id, business, update, faulty, tobeex, availability} = item;
                      return (
                        <TableRow key={id}>
                            <TableCell>{business}</TableCell>
                            <TableCell>
                                <Typography style={{
                                    backgroundColor: ((update === 'Completed' && '#4AAF05') || (update === 'Pending' && '#FB8832') || (update === 'Critical' && '#FF5756')),
                                    borderRadius: "4px",
                                    textAlign: "center",
                                    padding: "4px",
                                    color: "white"
                                }}>{update}</Typography>
                            </TableCell>
                            <TableCell>{faulty}</TableCell>
                            <TableCell>{tobeex}</TableCell>
                            <TableCell>{availability}</TableCell>
                        </TableRow>
                      )
                  })}
              </TableBody>
              <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={Tablelist.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
          </Table>
      </STableContainer>
    </div>
  )
}

export default StockTable
