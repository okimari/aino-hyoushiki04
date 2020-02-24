import React, { useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// inputのCSSの部分
const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

//propsで
function Question00(props) {
    console.log(props);
    const [data0, setData0] = React.useState({ toName: '' });
    return (
        <from>
            <p style={{ textAlign: 'left', marginBottom: '10px', }}>★名前を入力してね</p>
            <TextField
                id="outlined-basic"
                label="例:しょうくん"
                // value={this.state.present}
                variant="outlined"
                onChange={(e) => props.save({
                    toName: e.target.value
                })}
                KeyboardButtonProps={{
                    'aria-label': 'change toName',
                }}
                style={{ background: '#fff', borderRadius: '5px', border: 'solid,#3F51B5,5px', marginBottom: '20px', width: '100%' }}
            />
        </from>
    )
}

export default Question00;