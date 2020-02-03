import React, { useState } from 'react';
import firebase from '../config/firebase';
//import * as firebase from 'firebase';
import 'firebase/firestore'; // 追記
import { toDate } from 'date-fns';



function Estimate(props) {

    const [fireBase, setFireBase] = useState([]);

    const handleClickBtn = async () => {
        //document取得
        const db = firebase.firestore();
        /*const db = firebase.firestore();
        const doc = await db.collection('anniversaryData').doc('WhgwO7XbZrT4Z9KUU4Ul').get();
        console.log(doc.data());*/
        //Collection取得
        const snapshot = await db
            .collection('anniversaryData')
            //.where("user", "==", true)
            .limit(1)
            .get();
        const _users = [];
        snapshot.forEach(doc => {
            _users.push({
                documentId: doc.id,
                ...doc.data(),
                total: Number((doc.data().moneys.money)) + (Number(doc.data().present.moneys)),
                toData: (Math.round(((((doc.data().today.seconds) - (doc.data().date.seconds)) / 60) / 60) / 24)),

            });
            // console.log(Number(doc.data().moneys.money));
            // console.log(Number(doc.data().present.moneys));
            console.log((Number(doc.data().moneys.money) + (Number(doc.data().present.moneys))));
            console.log(Math.round(((((doc.data().today.seconds) - (doc.data().date.seconds)) / 60) / 60) / 24));
            //console.log((doc.data().moneys));
            //console.log((Number(doc.data().moneys.money)) + (Number(doc.data().present.moneys)));
        });
        setFireBase(_users);
    };

    const QuestionsListItems = fireBase.map(user => {
        return (
            <ul>
                {/* < li key={user.documentId} >
                    {JSON.stringify(user)} {JSON.stringify(user.present)}: {JSON.stringify(user.moneys)}: {JSON.stringify(user.rent)}: {JSON.stringify(user.money)}: {JSON.stringify(user.today)}
                    {/* {JSON.stringify[(user.data), (user.present, { presents: '', moneys: 0 }), (user.rent), (user.today)]} */}
                {/* {JSON.stringify(user.present, { presents: '', moneys: 0 })}
                {JSON.stringify(user.rent)}
                {JSON.stringify(user.today)} */}
                {/* </li > */}
                <li style={{ marginBottom: '10px', listStyle: 'none' }}><p>付き合い始めた日</p>{JSON.stringify(user.date)}</li>
                <li style={{ marginBottom: '10px', listStyle: 'none' }}><p>差し上げたもの</p>{JSON.stringify(user.present.presents)}</li>
                <li style={{ marginBottom: '10px', listStyle: 'none' }}><p>差し上げたもの</p>{JSON.stringify(user.present.moneys)}</li>
                {/* <li style={{ marginBottom: '10px', listStyle: 'none' }}><p>差し上げた金額</p>{JSON.stringify(user.moneys.rent)}</li> */}
                <li style={{ marginBottom: '10px', listStyle: 'none' }}><p>毎月の家賃額</p>{JSON.stringify(user.moneys.money)}</li>
                <li style={{ marginBottom: '10px', listStyle: 'none' }}><p>今日の日付</p>{JSON.stringify(user.today)}</li>
                <h2>見積もり金額</h2>
                <li style={{ marginBottom: '10px', listStyle: 'none' }}><p>お金の合計金額</p>{JSON.stringify(user.total)}</li>
                <li style={{ marginBottom: '10px', listStyle: 'none' }}><p>付き合った日数</p>{JSON.stringify(user.toData)}day</li>
            </ul>
        );
    })
    //console.log(data)
    return (
        <div>
            {/* <p>{JSON.stringify(data)}</p> */}
            <p>ここに計算した内容を入れる</p>
            <button onClick={handleClickBtn}>作成</button>
            <ul>{QuestionsListItems}</ul>
        </div>
    )
}
export default Estimate;