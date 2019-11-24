import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ls from 'local-storage';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="https://makers.tech/">
        Makers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const envURL = window.location.origin;


  function getAppID() {
    if (window.location.origin === 'http://localhost:3000') {
      return '40250'
    } else {
      return '40928'
    }
  }

  const stravaURL = `http://www.strava.com/oauth/authorize?client_id=${getAppID()}&response_type=code&redirect_uri=` + envURL + '/api/v1/strava/authorize/' + ls.get("user_id") + '&scope=read,activity:read,activity:read_all&approval_prompt=force'

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Strava Authorisation
        </Typography>
        <form className={classes.form} noValidate>
          <h6>Now that you have registered for our VeloCity App you need to Authorise your Strava account to allow us access to your bike information.
          <br/><br/>Please click the button below, and follow the Strava instructions.
          You need to give us access to view both activity and private activity information</h6>

          <hr/>

          <Button
            href={stravaURL}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Authorise STRAVA
          </Button>

        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
