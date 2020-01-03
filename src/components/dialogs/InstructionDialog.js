/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BaseDialog from './BaseDialog';

const styles = (theme) => ({
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bottomMargin: {
    marginBottom: theme.spacing(2),
  },
});

class InstructionDialog extends Component {
  render() {
    const { classes } = this.props;
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <BaseDialog {...this.props}>
        <div className={classes.bottomMargin}>
          <Typography variant="body2" gutterBottom>
            Contact us
          </Typography>
        </div>
        <Button component={Link} to="mailto:" variant="contained" onClick={this.handleClose} color="primary" autoFocus>
          Email Us
        </Button>
      </BaseDialog>
    );
  }
}

InstructionDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
};

InstructionDialog.defaultProps = {
  children: [],
};

export default withRouter(withStyles(styles)(InstructionDialog));
