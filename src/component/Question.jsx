// import React from 'react';
import React, { useState, Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Question.css';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import Question00 from './Question00';
import Question01 from './Question01';
import Question02 from './Question02';
import Question03 from './Question03';
import Question04 from './Question04';

const styles = {
    slide: {
        padding: 0,
        minHeight: 512,
        color: '#fff',
    },
    slide1: {
        backgraundColor: '#ffffff',
    },
    slide2: {
        backgraundColor: '#ffffff',
    },
    slide3: {
        backgraundColor: '#ffffff',
    },
    slide4: {
        backgraundColor: '#ffffff',
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
        { toname: '' },
        { data: firebase.firestore.Timestamp },
        { presents: '', moneys: 0 },
        { rent: '', money: 0 },
        { user: '', love: 0 }
    ])


    // 配列で取得するためにdataの中の[1]番目を指定する
    // data[1]の中のpresentsの部分を変更する
    // ...dataでuseStateに入っている値を全部取得する

    const handleChangeName = toname => {
        console.log(data[0])
        data[0] = { ...data[0], ...toname }
        setData([...data]);
    };

    const handleChangeDate = date => {
        data[1] = date
        setData([...data]);
    };

    const handleChangePresents = presents => {
        console.log(data[2])
        data[2] = { ...data[2], ...presents }
        setData([...data]);
    };

    const handleChangeRent = rent => {
        console.log(data[3])
        data[3] = { ...data[3], ...rent }
        setData([...data]);
    };

    const handleDateLove = love => {
        //uid = user.uid;
        console.log(data[4])
        data[4] = { ...data[4], ...love }
        setData([...data]);
    };

    const handleDateFirebase = data => {
        console.log(props.user.uid)
        firebase.firestore().collection('anniversaryData').add({
            uid: props.user.uid,
            // uid: 'aaaaa',
            toname: data[0],
            date: data[1],
            present: data[2],
            moneys: data[3],
            rent: data[4],
            today: new Date(),
            //today:firebase.firestore.FieldValue.serverTimestamp()
            //today: Timestamp.toDate(),
            //user: uid,
        }).then(() => {
            setData({
                toname: '',
                anniversary: firebase.firestore.Timestamp,
                present: { presents: '', moneys: 0 },
                life: { rent: '', money: 0 },
                love: 0,
                today: 0,
            });
        })
    };


    console.log(data);
    return (
        <div className="mainQuesetionContent">
            {/* <p>{JSON.stringify(data)}</p> */}
            <SwipeableViews enableMouseEvents onChangeIndex={index => { setIndex(index) }} index={index}>
                <div style={Object.assign({}, styles.slide, styles.slide1)} className="questionContent">
                    <div className="wrap_box">
                        <p style={{ color: '#fff', fontSize: '20px', padding: '10px 0', border: 'solid 1px #fff', marginBottom: '20px', background: '#FA503F', borderRadius: '2px' }}>診断01</p>
                        <p style={{ fontSize: '25px', lineHeight: '1.1', paddingBottom: '20px' }}>送りたい相手の<br />名前を入力してね</p>
                        <Question00 save={(e) => handleChangeName(e)} />
                    </div>
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide1)} className="questionContent">
                    <div className="wrap_box">
                        <p style={{ color: '#fff', fontSize: '20px', padding: '10px 0', border: 'solid 1px #fff', marginBottom: '20px', background: '#FA503F', borderRadius: '2px' }}>診断02</p>
                        <p style={{ fontSize: '25px', lineHeight: '1.1', paddingBottom: '20px' }}>付き合った<br />記念日を入力してね</p>
                        <Question01 save={(e) => handleChangeDate(e)} />
                    </div>
                </div>
                <div id="slideSecond" style={Object.assign({}, styles.slide, styles.slide2)} className="questionContent">
                    <div className="wrap_box">
                        <p style={{ color: '#fff', fontSize: '20px', padding: '10px 0', border: 'solid 1px #fff', marginBottom: '20px', background: '#FA503F', borderRadius: '2px' }}>診断03</p>
                        <p style={{ fontSize: '25px', lineHeight: '1.1', paddingBottom: '20px' }}>プレゼントしたものを入力</p>
                        <Question02 save={(e) => handleChangePresents(e)} />
                    </div>
                </div>
                <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide3)} className="questionContent">
                    <div className="wrap_box">
                        <p style={{ color: '#fff', fontSize: '20px', padding: '10px 0', border: 'solid 1px #fff', marginBottom: '20px', background: '#FA503F', borderRadius: '2px' }}>診断04</p>
                        <p style={{ fontSize: '25px', lineHeight: '1.1', paddingBottom: '20px' }}>家の支払いの金額を入力</p>
                        <Question03 save={(e) => handleChangeRent(e)} />
                    </div>
                </div>
                <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide4)} className="questionContent">
                    <div className="wrap_box">
                        <p style={{ color: '#fff', fontSize: '20px', padding: '10px 0', border: 'solid 1px #fff', marginBottom: '20px', background: '#FA503F', borderRadius: '2px' }}>診断05</p>
                        <p style={{ fontSize: '25px', lineHeight: '1.1', paddingBottom: '20px' }}>愛してた度を入れてね</p>
                        <Question04
                            data={data}
                            save={(e, v) => handleDateLove(v)}
                            send={(e) => handleDateFirebase(e)}
                        />
                    </div>
                </div>
            </SwipeableViews>
            <div className="btnBox">
                <ul>
                    <li>
                        {
                            index === 0
                                ? ''
                                : <Button variant="contained" color="#1655B6" style={{ background: '#1655B6', border: 'solid 1px #fff', color: '#fff' }} onClick={() => { setIndex(--index) }}>
                                    前の質問に戻る
                      </Button>
                        }
                    </li>
                    <li>
                        {
                            index === 4
                                ? ''
                                : <Button variant="contained" color="#F26152" style={{ background: '#F26152', border: 'solid 1px #fff', color: '#fff' }} onClick={() => { setIndex(++index) }}>
                                    次の質問に進む
                    </Button>
                        }
                    </li>
                </ul>
            </div>
        </div >)
}


export default Question;