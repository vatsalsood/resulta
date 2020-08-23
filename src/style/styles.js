/**
 * This file contains the styles for the app
 */

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));