import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { getRows, getColumns } from "./processapi";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const App = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState({});

  useEffect(() => {
    setRows(getRows());
    setColumns(getColumns());
  }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{columns.id}</TableCell>
            <TableCell>{columns.name}</TableCell>
            <TableCell align="right">{columns.nickname}</TableCell>
            <TableCell align="right">{columns.conference}</TableCell>
            <TableCell align="right">{columns.division}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.nickname}</TableCell>
              <TableCell align="right">{row.conference}</TableCell>
              <TableCell align="right">{row.division}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button></button>
    </TableContainer>
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
