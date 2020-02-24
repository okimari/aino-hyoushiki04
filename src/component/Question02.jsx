import React, { useState, Component } from 'react';
import firebase from '../config/firebase';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

function Question02(props) {
    console.log(props);
    const [data2, setData2] = React.useState({ presents: '', moneys: 0 });
    //const numbers = props.numbers;
    return (
        <form>
            {/* <p>{JSON.stringify(this.state)}</p> */}
            <p style={{ textAlign: 'left', marginBottom: '10px', }}>★プレゼントしたもの</p>
            <TextField
                id="outlined-basic"
                label="プレゼントしたもの"
                // value={this.state.present}
                variant="outlined"
                onChange={(e) => props.save({
                    presents: e.target.value
                })}
                KeyboardButtonProps={{
                    'aria-label': 'change presents',
                }}
                style={{ background: '#fff', borderRadius: '5px', border: 'solid,#1655B6,1px', marginBottom: '20px', width: '100%' }}
            />
            <p style={{ textAlign: 'left', marginBottom: '10px', }}>★金額を入力してね</p>
            <TextField
                id="outlined-basic2"
                label="金額を入力"
                type="number"
                variant="outlined"
                onChange={(e) => props.save({
                    moneys: e.target.value
                })}
                KeyboardButtonProps={{
                    'aria-label': 'change moneys',
                }}
                style={{ background: '#fff', borderRadius: '5px', border: 'solid,#1655B6,1px', marginBottom: '20px', width: '100%' }}
            />
        </form>
    );
}


export default Question02;