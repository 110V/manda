import React, { useEffect } from 'react';
import style from './QuestionView.module.css';
import classnames from 'classnames';


interface QuestionViewProps {
    className:string;
    content:string;
}

interface CharProps{
    char:string;
}



const QuestionView: React.FC<QuestionViewProps> = (props) => {
    let textHtml:HTMLElement |null;
    let containerHtml:HTMLElement |null;


    const autoSize = ()=>{
        if(!textHtml)
        {
            return;
        }
        containerHtml = textHtml.parentElement;
        if(!containerHtml)
        {
            return;
        }
        const maxWidth = containerHtml.clientWidth;
        const width = textHtml.clientWidth
    
        let scale = 1;
        if(width>maxWidth)
        {
            textHtml.style.scale = String(maxWidth/width);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', autoSize)
    },[]);
    useEffect(() => {
        autoSize();
    });


    return (
        <div ref={ref => { textHtml = ref}} className={classnames(style.QuestionView, props.className) }>
            {props.content.split("").map(c=>(<Char char = {c}/>))}
        </div>
    );
}

const Char: React.FC<CharProps> = (props) => {
    return (
        <div className={style.Char}>
            <div>{props.char!=" "?props.char:""}</div>
            <div className={props.char!=" "?style.UnderLine:style.Blank} />
        </div>
    );
}


export default QuestionView;