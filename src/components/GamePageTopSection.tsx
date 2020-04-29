import React, { useState } from 'react';
import style from './GamePageTopSection.module.css';
import classnames from 'classnames';
import HealthBar from './HealthBar';
import WrongElementList from './WrongElementList';
import Hint from './Hint';
import QuestionView from './QuestionView';

interface Props{
    className:string;
}

const GamePageTopSection:React.FC<Props> = (props)=>{
    return (
        <div className={classnames(style.GamePageTopSection, props.className)}>
            <div className={style.Up}>
                <HealthBar className = {style.HealthBar} hp = {5} maxHp = {10}/>
                <div className={style.RopeLine} />
            </div>
            <div className={style.Left}>
                <div className={style.Title}>틀린 철자/단어</div>
                <WrongElementList className={style.WrongSpellList} fontSize = {50} words = {["A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A"]} lineMaxCount = {15}/>
                <WrongElementList className={style.WrongWordList} fontSize = {20} words = {["gorani","gorani","gorani","gorani","gorani","gorani","gorani","gorani","gorani","gorani","gorani"]} lineMaxCount = {5}/>
            </div>
            <div className={style.Middle}>

            </div>
            <div className={style.Right}>
                <Hint className = {style.Hint} timeLeft={10} content="고라니를 넣은 스파게티는 맛있다." hintVisible={false} sec={10}/>
            </div>
            <div className={style.Down}>
                <QuestionView className={style.QuestionView} content="pneumonoultramicroscopicsilicovolcanoconiosis" />
            </div>
        </div>
    );
}

export default GamePageTopSection; 