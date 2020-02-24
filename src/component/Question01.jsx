import React, { useState, Component } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { database } from 'firebase';


function Question01(props) {
    console.log(props);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2015-10-02T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <dvi>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="記念日"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        onChange={() =>
                            props.save(selectedDate)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </dvi>
    );
}

export default Question01;

