import React, { useState } from 'react';
import firebase from '../config/firebase';
import 'firebase/firestore'; // 追記
import { toDate } from 'date-fns';



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
                total: Number((doc.data().moneys.money)) + (Number(doc.data().present.moneys)),
                toData: (Math.round(((((doc.data().today.seconds) - (doc.data().date.seconds)) / 60) / 60) / 24) / 7 * 0.2 * 24 * 1055),
                today: Math.round(doc.data().today.seconds)
            });
            console.log((Number(doc.data().moneys.money) + (Number(doc.data().present.moneys))));
            console.log(Math.round(((((doc.data().today.seconds) - (doc.data().date.seconds)) / 60) / 60) / 24) / 7 * 0.2 * 24 * 1055);
            console.log(Math.round(doc.data().today.seconds));
        });
        setFireBase(_users);
    };

    const QuestionsListItems = fireBase.map(user => {
        return (
            <div>
                <h2>見積もり金額</h2>
                <table className="estimate" style={{ width: '95%', border: 'solid 1px #fff', margin: '30px auto 0' }}>
                    <h3>詳細項目</h3>
                    <tr>
                        <th style={{ width: '40%', border: 'solid 1px #fff' }}>項目</th>
                        <th style={{ width: '40%', border: 'solid 1px #fff' }}>金額</th>
                    </tr>
                    <tr>
                        <th style={{ width: '40%', border: 'solid 1px #fff', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>付き合い始めた日</th>
                        <td style={{ width: '70%', border: 'solid 1px #fff' }}>{JSON.stringify(user.date.seconds)}</td>
                    </tr>
                    <tr style={{ border: 'solid 1px #fff' }}>
                        <th style={{ border: 'solid 1px #fff', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>差し上げたもの</th>
                        <td style={{ border: 'solid 1px #fff' }}>{JSON.stringify(user.present.presents)}</td>
                    </tr>
                    <tr style={{ border: 'solid 1px #fff' }}>
                        <th style={{ border: 'solid 1px #fff', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>毎月の家賃額</th>
                        <td style={{ border: 'solid 1px #fff' }}>{JSON.stringify(user.moneys.money)}</td>
                    </tr>
                    <tr style={{ border: 'solid 1px #fff' }}>
                        <th style={{ border: 'solid 1px #fff', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>今日の日付</th>
                        <td style={{ border: 'solid 1px #fff' }}>{JSON.stringify(user.today)}</td>
                    </tr>
                </table>
                <table lassName="estimate" style={{ width: '95%', border: 'solid 1px #fff', margin: '30px auto 0' }}>
                    <h3>合計金額等</h3>
                    <tr style={{ border: 'solid 1px #fff' }}>
                        <th style={{ border: 'solid 1px #fff', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>してあげた合計金額</th>
                        <td style={{ border: 'solid 1px #fff' }}>{JSON.stringify(user.total)}</td>
                    </tr>
                    <tr style={{ border: 'solid 1px #fff' }}>
                        <th style={{ border: 'solid 1px #fff', textAlign: 'left', fontSize: '13px', padding: '10px 3px 10px 5px' }}>付き合った日数</th>
                        <td style={{ border: 'solid 1px #fff' }}>{JSON.stringify(user.toData)}</td>
                    </tr>
                </table>
            </div>
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