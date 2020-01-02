/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Topbar from './Topbar';
import Footer from './Footer';

const numeral = require('numeral');

numeral.defaultFormat('0,000');

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 400,
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
  },
  block: {
    padding: theme.spacing(2),
    marginBottom: 20,
  },
});


class AboutUs extends Component {
  componentDidMount() {}

  render() {
    const { classes, location } = this.props;
    const currentPath = location.pathname;

    return (
      <>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <div className={classes.topBar}>
                  <div className={classes.block}>
                    <Typography variant="h6" gutterBottom>About Us</Typography>
                    <Typography variant="body1">
                      FashionLab is developed in New York City by a team with background in fashion,
                      design, brand management, machine learning, and software engineering.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid alignItems="center" justify="center" container className={classes.grid}>
                <Grid item xs={12}>
                  <div className={classes.topBar}>
                    <div>
                      <Button variant="outlined" component={Link} to="/signup" className={classes.outlinedButtom}>
                        Sign Up
                      </Button>
                      <Button variant="outlined" className={classes.outlinedButtom}>
                        Email us
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </>
    );
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AboutUs));