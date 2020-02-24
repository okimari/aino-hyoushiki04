import React, { useState } from 'react';
import firebase from '../config/firebase';
import 'firebase/firestore'; // 追記
import { toDate } from 'date-fns';
// import * as jsPDF from 'jspdf'
import './Estimate.css';



function Estimate(props) {

    const [fireBase, setFireBase] = useState([]);


    const handleClickBtn = async () => {
        //document取得
        const db = firebase.firestore();
        //Collection取得
        const snapshot = await db
            .collection('anniversaryData')
            .where("uid", "==", props.user.uid)
            .orderBy('today', 'desc')
            .limit(1)
            .get();
        const _users = [];
        snapshot.forEach(doc => {
            _users.push({
                documentId: doc.id,
                ...doc.data(),
                total: ((Number(doc.data().moneys.money)) * (Number(doc.data().moneys.rent))) + (Number(doc.data().present.moneys)),
                toData: (Math.round(((((doc.data().today.seconds) - (doc.data().date.seconds)) / 60) / 60) / 24) / 7 * 0.2 * 24 * 1055),
                today: Math.round(doc.data().today.seconds)
            });
            console.log((Number(doc.data().moneys.money) + (Number(doc.data().present.moneys))));
            console.log(Math.round(((((doc.data().today.seconds) - (doc.data().date.seconds)) / 60) / 60) / 24) / 7 * 0.2 * 24 * 1055);
            console.log(Math.round(doc.data().today.seconds));
            console.log(doc.data().toname.toName)
        });
        setFireBase(_users);
    };

    const QuestionsListItems = fireBase.map(user => {
        return (
            <div className="Estimate">
                <div className="wrapEstimate">
                    <h2 style={{ color: '#fff', background: '#1655B6', padding: '15px 0px', width: '100%', fontWeight: '400', fontSize: '26px', letterSpacing: '1.5' }}>お見積書</h2>

                    <h3 style={{ borderBottom: '1px solid #222', fontSize: '20px', color: '#222', fontWeight: '400', textAlign: 'left', paddingTop: '15px' }}>{JSON.stringify(user.toname.toName)}サマ</h3>
                    <table className="estimate" style={{ width: '95%', border: 'solid 1px #fff' }}>
                        <tr>
                            <th style={{ width: '40%', border: 'solid 1px #222' }}>項目</th>
                            <th style={{ width: '40%', border: 'solid 1px #222' }}>金額</th>
                        </tr>
                        <tr>
                            <th style={{ width: '40%', border: 'solid 1px #222', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>付き合い始めた日</th>
                            <td style={{ width: '70%', border: 'solid 1px #222' }}>{JSON.stringify(user.date.seconds)}</td>
                        </tr>
                        <tr style={{ border: 'solid 1px #222' }}>
                            <th style={{ border: 'solid 1px #222', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>差し上げたもの</th>
                            <td style={{ border: 'solid 1px #222' }}>{JSON.stringify(user.present.presents)}</td>
                        </tr>
                        <tr style={{ border: 'solid 1px #222' }}>
                            <th style={{ border: 'solid 1px #222', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>毎月の家賃額</th>
                            <td style={{ border: 'solid 1px #222' }}>{JSON.stringify(user.moneys.money)}</td>
                        </tr>
                        <tr style={{ border: 'solid 1px #222' }}>
                            <th style={{ border: 'solid 1px #222', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>今日の日付</th>
                            <td style={{ border: 'solid 1px #222' }}>{JSON.stringify(user.today)}</td>
                        </tr>
                    </table>
                    <table className="estimate" style={{ width: '95%', border: 'solid 1px #222', margin: '30px auto 0' }}>
                        <h3>合計金額等</h3>
                        <tr style={{ border: 'solid 1px #222' }}>
                            <th style={{ border: 'solid 1px #222', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>してあげた合計金額</th>
                            <td style={{ border: 'solid 1px #222' }}>{JSON.stringify(user.total)}</td>
                        </tr>
                        <tr style={{ border: 'solid 1px #222' }}>
                            <th style={{ border: 'solid 1px #222', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>付き合った日数</th>
                            <td style={{ border: 'solid 1px #222' }}>{JSON.stringify(user.toData)}</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    })
    //console.log(data)
    return (
        <div className="Estimate02">
            <div className="wrapEstimate02">
                {/* <p>{JSON.stringify(data)}</p> */}
                <button onClick={handleClickBtn} style={{ background: '#1655B6', padding: '10px', borderRadius: '3px' }}>作成</button>
                <p>{QuestionsListItems}</p>
            </div>
        </div>
    )
}
export default Estimate;