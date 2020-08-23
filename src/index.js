/**
 * App component
 * This file renders the main App component
 */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Relative Imports
import { getRows, getColumns } from "./processapi";
import { useStyles } from "./style/styles";
import EnhancedTableHead from "./components/EnhancedTableHead";
import TeamTableHeader from "./components/TeamTableHeader";
import TeamTableBody from "./components/TeamTableBody";

// Absolute Imports
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TeamTablePagination from "./components/TeamTablePagination";

const App = () => {
  // Below are all the state variables used in this file
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [columns, setColumns] = useState({});
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const classes = useStyles();

  useEffect(() => {
    setRows(getRows());
    setFilteredRows(getRows());
    // let oldColumns = getColumns();
    // let newColumns = {
    //   Id: oldColumns.id,
    //   Name: oldColumns.name,
    //   NickName: oldColumns.nickname,
    //   Conference: oldColumns.conference,
    //   Division: oldColumns.division,
    // };
    setColumns(getColumns());
  }, []);

  useEffect(() => {
    console.log("filteredRows in index", filteredRows);
  },[filteredRows]);

  const filterRows = (event) => {
    let searchText = event.target.value.toLowerCase();
    setFilteredRows(
      rows.filter((row) => row.name.toLowerCase().includes(searchText))
    );
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortTable = (element) => {
    console.log("running");
    // console.log("rows", rows);
    let newRows = rows.sort((a, b) => {
      let nameA = a.division.toUpperCase(); // ignore upper and lowercase
      let nameB = b.division.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    // console.log("newRows", newRows);
    // console.log("filteredRows", filteredRows);
    setFilteredRows(rows);
    // function(a, b) {
    //   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    //   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }

    //   // names must be equal
    //   return 0;
    // });
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={6}>
          <h3>ACME Sports</h3>
        </Grid>

        {/**
         * This is the search field
         * Could add validation- no invalid characters allowed etc.
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
              {/* <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                columns={columns}
              /> */}

              <TeamTableHeader
                columns={columns}
                sortTable={sortTable}
              />
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
