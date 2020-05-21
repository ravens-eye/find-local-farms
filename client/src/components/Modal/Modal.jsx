import React from 'react';

import { withStyles, createStyles } from '@material-ui/core/styles';
import { Modal as MaterialModal } from '@material-ui/core';

function getModalStyle() {
  return {
    top: '48%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const styles = theme =>
  createStyles({
    paper: {
      position: 'absolute',
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none',
      display: 'flex',
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '40%',
      maxWidth: 600,
      minHeight: '300px',
      maxHeight: '80%',
      [theme.breakpoints.down('md')]: {
        width: '60% !important',
      },
      [theme.breakpoints.down('sm')]: {
        width: '70% !important',
      },
    },
  });

const SimpleModal = props => {
  const { classes, children, open, close } = props;

  return (
    <div>
      {open ? (
        <MaterialModal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={open}
          onClose={close}
        >
          <div style={getModalStyle()} className={classes.paper}>
            {children}
          </div>
        </MaterialModal>
      ) : null}
    </div>
  );
};

// We need an intermediary variable for handling the recursive nesting.
const Modal = withStyles(styles)(SimpleModal);

export default Modal;
