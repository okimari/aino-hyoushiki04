// import React from 'react';
import React, { useState, Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Question.css';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import Question01 from './Question01';
import Question02 from './Question02';
import Question03 from './Question03';
import Question04 from './Question04';

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

function Question(props) {
    //変数と関数の違い
    //indexは値を保存する変数
    //setIndexは値を変更するための関数
    // let [user, setUser] = useState(null);
    let [index, setIndex] = useState(0);

    // firebase.auth().onAuthStateChanged(user => {
    //     var uid = user.uid;
    //     setUser(user);
    //     console.log("user", user)
    //     console.log("user", uid)
    // })

    //let [currentUser, setCurrentUser] = useState(null);
    let [data, setData] = useState([
        { data: firebase.firestore.Timestamp },
        { presents: '', moneys: 0 },
        { rent: '', money: 0 },
        { user: '', love: 0 }
    ])

    const handleChangeDate = date => {
        data[0] = date
        setData([...data]);
    };
    // 配列で取得するためにdataの中の[1]番目を指定する
    // data[1]の中のpresentsの部分を変更する
    // ...dataでuseStateに入っている値を全部取得する
    const handleChangePresents = presents => {
        console.log(data[1])
        data[1] = { ...data[1], ...presents }
        setData([...data]);
    };

    const handleChangeRent = rent => {
        console.log(data[2])
        data[2] = { ...data[2], ...rent }
        setData([...data]);
    };

    const handleDateLove = love => {
        //uid = user.uid;
        console.log(data[3])
        data[3] = { ...data[3], ...love }
        setData([...data]);
    };

    const handleDateFirebase = data => {
        console.log(props.user.uid)
        firebase.firestore().collection('anniversaryData').add({
            uid: props.user.uid,
            // uid: 'aaaaa',
            date: data[0],
            present: data[1],
            moneys: data[2],
            rent: data[3],
            today: new Date(),
            //today:firebase.firestore.FieldValue.serverTimestamp()
            //today: Timestamp.toDate(),
            //user: uid,
        }).then(() => {
            setData({
                anniversary: firebase.firestore.Timestamp,
                present: { presents: '', moneys: 0 },
                life: { rent: '', money: 0 },
                love: 0,
                today: 0,
            });
        })
    };

    console.log(data);
    return (<>
        <div>
            {/* <p>{JSON.stringify(data)}</p> */}
            <SwipeableViews enableMouseEvents onChangeIndex={index => { setIndex(index) }} index={index}>
                <div style={Object.assign({}, styles.slide, styles.slide1)}>
                    <p>Questions01</p>
                    <Question01 save={(e) => handleChangeDate(e)} />
                </div>
                <div id="slideSecond" style={Object.assign({}, styles.slide, styles.slide2)}>
                    <p>Questions02</p>
                    <p>プレゼントしたものを入力</p>
                    <Question02 save={(e) => handleChangePresents(e)} />
                </div>
                <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide3)}>
                    <p>Questions03</p>
                    <p>家の支払いの金額を入力</p>
                    <Question03 save={(e) => handleChangeRent(e)} />
                </div>
                <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide4)}>
                    <p>Questions04</p>
                    <p>愛してた度を入れてね</p>
                    <Question04
                        data={data}
                        save={(e, v) => handleDateLove(v)}
                        send={(e) => handleDateFirebase(e)}
                    />
                </div>
            </SwipeableViews>
        </div>
        <Button variant="contained" color="secondary" onClick={() => { setIndex(++index) }}>
            次の質問を答える
        </Button>
    </>)
}


export default Question;