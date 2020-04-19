import React from 'react';
import style from './QuestionView.module.css';
import classnames from 'classnames';


interface QuestionViewProps {
    className:string;
}

interface CharProps{
    char:string;
}


const QuestionView: React.FC<QuestionViewProps> = (props) => {
    return (
        <div className={classnames(style.QuestionView, props.className)}>
            <Char char="a"/>
            <Char char=""/>
            <Char char="월"/>
            <Char char="드"/>
            <Char char="a"/>
            <Char char=""/>
            <Char char="월"/>
            <Char char="드"/>
            <Char char="a"/>
            <Char char=""/>
            <Char char="월"/>
            <Char char="드"/>
        </div>
    );
}

const Char: React.FC<CharProps> = (props) => {
    return (
        <div className={style.Char}>
            <div>{props.char.trim()!=""?props.char:"　"}</div>
            <div className={style.UnderLine} />
        </div>
    );
}


export default QuestionView;