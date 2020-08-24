import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const TeamTableHeader = (props) => {

  /***
   * This function capitalized the first letter of the columns
   */
  const ucFirst = (text) => {
    if (typeof text !== "string") return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>{ucFirst(props.columns.id)}</StyledTableCell>
        <StyledTableCell>{ucFirst(props.columns.name)}</StyledTableCell>
        <StyledTableCell align="center">
          {props.columns.nickname}
        </StyledTableCell>
        <StyledTableCell align="center">
          {ucFirst(props.columns.conference)}
        </StyledTableCell>
        <StyledTableCell align="center">
          {ucFirst(props.columns.division)}
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TeamTableHeader;
