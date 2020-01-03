/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FashionLab from './portfolio/FashionLab';
import FlyAway from './portfolio/FlyAway';
import Topbar from './Topbar';
import Footer from './Footer';
import SectionHeader from './SectionHeader';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey.A500,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 20,
    padding: 20,
    paddingBottom: 20,
  },
  grid: {
  },
});

const Products = (props) => {
  const { classes, location } = props;
  const currentPath = location.pathname;

  return (
    <>
      <CssBaseline />
      <Topbar currentPath={currentPath} />
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
            <Grid item xs={12}>
              <SectionHeader title="Portfolio" subtitle="An overview of the companies we are actively incubating." />
              <FlyAway />
              <FashionLab />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

Products.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
