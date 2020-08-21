import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Relative Imports
import { getRows, getColumns } from "./processapi";
import TeamTableHeader from "./components/TeamTableHeader";
import TeamTableBody from "./components/TeamTableBody";

// Absolute Imports
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

const App = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState({});
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setRows(getRows());
    setColumns(getColumns());
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TeamTableHeader columns={columns} />
          <TeamTableBody rows={rows} page={page} rowsPerPage={rowsPerPage} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * Things done
 * 1) render json into a table
 * 2) pagination
 * 3) Stylizing table
 * 4) Capitilize column header
 * 5) Break the page down into components
 *
 */
