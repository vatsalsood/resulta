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
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TeamTablePagination from "./components/TeamTablePagination";

const App = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [columns, setColumns] = useState({});
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setRows(getRows());
    setFilteredRows(getRows());
    setColumns(getColumns());
  }, []);

  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    root: {
      flexGrow: 1,
      padding: "50px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  const filterRows = (event) => {
    let searchText = event.target.value.toLowerCase();
    setFilteredRows(
      rows.filter((row) => row.name.toLowerCase().includes(searchText))
    );
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={6}>
          <h3>ACME Sports</h3>
        </Grid>

        {/**
         * Could add validation- no invalid characters
         */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Search by name"
            fullWidth
            onChange={(e) => {
              filterRows(e);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TeamTableHeader columns={columns} />
              <TeamTableBody
                rows={filteredRows}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            </Table>
          </TableContainer>
          <TeamTablePagination
            filteredRows={filteredRows}
            page={page}
            rowsPerPage={rowsPerPage}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Grid>
      </Grid>
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
 * 6) Add Search by name
 * 7) Structure the page with grids
 *
 */
