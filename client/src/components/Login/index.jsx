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

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://gtu.edu.tr/">
                GTU
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Welcome to Rating With Blockchain Portal
        </Typography>
                <form className={classes.form} noValidate>


                    <a href="https://ratingwithblockchain.herokuapp.com/api/auth/outlook"><img src='/signin-microsoft.svg'></img></a>

                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
/*
import React from 'react'


export default class Login extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        return <div style={{
            backgroundColor: 'beige',
            fontSize: 'xx-large',
            fontFamily: 'sans-serif',
            height: '100%',
            width: '100%',
            position: 'fixed',
            margin: '0 auto'
        }}> <div style={{ margin: '0 auto' }}>
                <div>Welcome Rating Blockchain Portal</div>
                <a href="http://localhost:5000/api/auth/outlook"><img src='/signin-microsoft.svg'></img></a>
            </div>
        </div>
    }

}*/