import React, { useState } from 'react';
import firebase from '../config/firebase';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function Question03() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="お供えしたもの" variant="outlined" />
            <TextField id="outlined-basic" label="きんがく" variant="outlined" />
        </form>
    );
}