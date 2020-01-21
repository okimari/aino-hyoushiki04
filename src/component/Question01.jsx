import React, { useState } from 'react';
import 'date-fns';
import firebase from '../config/firebase';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import ReactDOM from 'react-dom';
// import { Link } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function Question01() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <dvi>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </dvi>
    );
}
//export default Question01;


{/* firebase.firestore().collection('anniversaryData').add({ */ }
{/* //     userId: null,
                //     userName: "string",
                //     Data: "timestamp",
                //     categorys: { */}
{/* //         technology: null,
                //         opinion: null,
                //         cats: null,
                //     }
                // })

                // function Question01(props) { */}
{/* //     const { sendToFirebase } = props
                //     // const sendToFirebase = props.sendToFirebase
                //     const [answer, setAnswer] = useState("")
                //     return (
                //         <div className="textField">
                //             <form >
                //                 <TextField
                //                     id="date"
                //                     label="付き合った日にちを教えてね"
                //                     type="data"

                //                     value={answer}
                //                     defaultValue={answer}
                //                     onChange={e => { setAnswer(e.target.value) }}
                //                     //className={classes.textField}
                //                     InputLabelProps={{
                //                         shrink: true,
                //                     }}
                //                 />
                //                 <button onClick={() => { sendToFirebase(answer, 1) }} id="send" type="button">送信</button>
                //             </form>


                //         </div>
                //     );
                } */}

