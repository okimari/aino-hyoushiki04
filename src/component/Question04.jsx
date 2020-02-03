import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip
            open={open}
            enterTouchDelay={0}
            placement="top"
            title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';



const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus,&:hover,&$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 11px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);

const PrettoSlider = withStyles({
    root: {
        color: '#1655B6',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

function Question04(props) {
    console.log(props)
    // const [loveDate, setLoveDate] = React.useState(new Date(50));
    const [firebaseData, setFirebaseData] = React.useState()

    const handleDateFirebase = allData => {
        setFirebaseData(allData)
    };

    return (
        <div>
            {/* <input type="range"
                onChange={e => props.save({
                    // 送り出す値をここで設定する
                    love: e.target.value
                })} /> */}

            {/* <Button variant="contained" color="secondary" onClick={data()}>
                Link
            </Button> */}
            {/* <Button variant="contained" color="secondary" onClick={(e) => props.send(props.data)}>
                登録
            </Button> */}


            {/* 本当はこのSliderを使用したい */}
            <Slider
                ValueLabelComponent={ValueLabelComponent}
                aria-label="custom thumb label"
                defaultValue={20}
                onChange={(e, v) =>
                    console.log(v)
                    //props.save({
                    //     // 送り出す値をここで設定する
                    //     love: v
                    // })
                } />


            <Button variant="contained" color="secondary" onClick={(e) => props.send(props.data)}>
                情報を登録
            </Button>


            {/* <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                min={0}
                max={100}
                defaultValue={loveDate}
                onChange={e => props.save({ */}
            {/* // 送り出す値をここで設定する
                //     love: e.target.value
                // })}
                // onChangeCommitted={(e) => */}
            {/* //     props.save(loveDate)}
                // KeyboardButtonProps={{ */}
            {/* //     'aria-label': 'change max',
                // }}

            // onChangeCommitted={(event, value) => this.onChangeCommitted(event, value)}
            // // onDragEnd={() => props.save({ LoveDate: true })}

            // value={this.state.sliderValue}
            // min={0}
            // max={100}
            // step={1}
            // onChange={(event, value) => this.onChange(event, value)}
            // onDragEnd={() => this.setState({ fetchDataEnabled: true })}
            /> */}

        </div>
    );
}

export default Question04;