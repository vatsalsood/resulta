/**
 * TeamTableBody Component
 * This component renders the body of the table i.e. the rows
 * Props: rows, page and rowsPerPage
 */

import React, { useState, useEffect } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const TeamTableBody = (props) => {
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  useEffect(() => {
    console.log("teamtablebodyrows", props.rows);
  });

  return (
    <TableBody>
      {/* Slice the page to show maximum number of rows for pagination */}
      {props.rows
        .slice(
          props.page * props.rowsPerPage,
          props.page * props.rowsPerPage + props.rowsPerPage
        )
        .map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="center">{row.nickname}</StyledTableCell>
            <StyledTableCell align="center">{row.conference}</StyledTableCell>
            <StyledTableCell align="center">{row.division}</StyledTableCell>
          </StyledTableRow>
        ))}
    </TableBody>
  );
};
export default TeamTableBody;
