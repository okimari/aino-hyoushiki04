import React, { useState } from 'react';
import firebase from './plugin/firebase'
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom';
// import { Link } from '@material-ui/core';

// firebase.firestore().collection('anniversaryData').add({
//     userId: null,
//     userName: "string",
//     Data: "timestamp",
//     categorys: {
//         technology: null,
//         opinion: null,
//         cats: null,
//     }
// })

function Question01(props) {
    const { sendToFirebase } = props
    // const sendToFirebase = props.sendToFirebase
    const [answer, setAnswer] = useState("")
    return (
        <div className="textField">
            <form >
                <TextField
                    id="date"
                    label="付き合った日にちを教えてね"
                    type="text"

                    value={answer}
                    defaultValue={answer}
                    onChange={e => { setAnswer(e.target.value) }}
                    //className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <button onClick={() => { sendToFirebase(answer, 1) }} id="send" type="button">送信</button>
            </form>


        </div>
    );
}

export default Question01;