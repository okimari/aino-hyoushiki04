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

function Question03(props) {
    console.log(props);
    // setStateの値をここで設定する
    // 連想配列でテキストを取得する
    const [data3, setdata3] = React.useState({ rent: '', money: '' });
    return (
        <form>
            <p style={{ textAlign: 'left', marginBottom: '10px', }}>★毎月の支払い金額を入力してね</p>
            <TextField
                id="outlined-basi4"
                label="25000"
                variant="outlined"
                type="number"
                onChange={(e) => props.save({
                    // 送り出す値をここで設定する
                    money: e.target.value
                })}
                // キーボードが動いたらmoneysの値をチェンジする
                KeyboardButtonProps={{
                    'aria-label': 'change money',
                }}
                style={{ background: '#fff', borderRadius: '5px', border: 'solid,#1655B6,1px', marginBottom: '20px', width: '100%' }}
            />
            <p style={{ textAlign: 'left', marginBottom: '10px', }}>★支払った期間を入力してね</p>
            <TextField
                id="outlined-basic3"
                label="例:24"
                variant="outlined"
                onChange={(e) => props.save({
                    // 送り出す値をここで設定する
                    rent: e.target.value
                })}
                // キーボードが動いたらrentの値をチェンジする
                KeyboardButtonProps={{
                    'aria-label': 'change rent',
                }}
                style={{ background: '#fff', borderRadius: '5px', border: 'solid,#1655B6,1px', marginBottom: '20px', width: '100%' }}
            />
        </form>
    );
}

export default Question03;