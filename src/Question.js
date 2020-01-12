import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Question.css';


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

function Questions() {
    return (
        <SwipeableViews enableMouseEvents>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>スライド01</div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>スライド02</div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>スライド03</div>
        </SwipeableViews>
    )
}

export default Questions;