import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort, columns } = props;

  const createSortHandler = (property) => (event) => {
    console.log("property1", property);
    onRequestSort(event, property);
  };

  //   const StyledTableCell = withStyles((theme) => ({
  //     head: {
  //       backgroundColor: theme.palette.common.black,
  //       color: theme.palette.common.white,
  //     },
  //     body: {
  //       fontSize: 14,
  //     },
  //   }))(TableCell);

  //   useEffect(() => {
  //     var newColumns = new Map();
  //     console.log(props)
  //     newColumns.set("Id", props.columns.id);
  //     newColumns.set("Name", columns.name);
  //     newColumns.set("NickName", columns.nickname);
  //     newColumns.set("Conference", columns.conference);
  //     newColumns.set("Division", columns.division);
  //     console.log(newColumns)
  //   }, []);

  return (
    <TableHead>
      <TableRow>
        {Object.entries(columns).map((column) => (
          <TableCell
            key={column[0]}
            align="left"
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : "asc"}
              onClick={createSortHandler(column.id)}
            >
              {column[0]}
              {orderBy === column.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
export default EnhancedTableHead;
