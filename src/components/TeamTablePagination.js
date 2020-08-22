import React from "react";

import TablePagination from "@material-ui/core/TablePagination";

const TeamTablePagination = (props) => {
  const handleChangePage = (newPage) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    props.setRowsPerPage(parseInt(event.target.value, 10));
    props.setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={props.filteredRows.length}
      rowsPerPage={props.rowsPerPage}
      page={props.page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};
export default TeamTablePagination;
