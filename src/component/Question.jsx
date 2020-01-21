// import React from 'react';
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Question.css';
import "react-datepicker/dist/react-datepicker.css";
import Question01 from './Question01';
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase';
import { BrowserRouter, Route } from 'react-router-dom';



firebase.firestore().collection('anniversaryData').add({
    userId: null,
    userName: "string",
    Data: "timestamp",
    categorys: {
        technology: null,
        opinion: null,
        cats: null,
    }
})


const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        backgraundColor: '#FEA900',
    },
    slide2: {
        backgraundColor: '#B3DC4A',
    },
    slide3: {
        backgraundColor: '#6AC0FF',
    },
};


// useEffect(() => {
//     firebase
//         .firestore()
//         .collection('anniversaryData')

// }, [

// ])


export default function Question() {
    //変数と関数の違い
    //indexは値を保存する変数
    //setIndexは値を変更するための関数
    let [index, setIndex] = useState(0);
    let [data, setData] = useState([
        "a",
        "b",
        "c",
        "d"
    ])



    const sendToFirebase = (answer, number) => {
        //number = 2
        //answer = hello

        data[number - 1] = answer

        setData(data)
    }

    return (<>
        <div>
            <SwipeableViews enableMouseEvents onChangeIndex={index => { setIndex(index) }} index={index}>
                <div style={Object.assign({}, styles.slide, styles.slide1)}>
                    {/* <BrowserRouter>
                        <Route path='/Question' component={Question} />
                    </BrowserRouter> */}
                    <p>ここはQuestions01</p>
                    <Question01 sendToFirebase={sendToFirebase} />
                </div>
                <div id="slideSecond" style={Object.assign({}, styles.slide, styles.slide1)}>
                    <p>ここはQuestions02</p>
                    <Question01 sendToFirebase={sendToFirebase} />
                    {/* <Button variant="contained" color="primary" href="#slideThird" onChangeIndex={index => { setIndex(index) }} index={index}>
                    Link
                </Button> */}
                </div>
                <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide1)}>
                    <p>ここはQuestions03</p>
                    <Question01 sendToFirebase={sendToFirebase} />
                </div>
            </SwipeableViews>
        </div>

        <button onClick={() => { alert(data) }}>debug</button>

        <Button variant="contained" color="secondary" onClick={() => { setIndex(++index) }}>
            Link
            </Button>
    </>)

}


//export default Question;