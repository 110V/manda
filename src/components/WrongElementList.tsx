import React, {useEffect, useState} from 'react';
import style from './WrongElementList.module.css';
import classnames from 'classnames';	

interface Props{
    className: string;
    fontSize: number;
    words: string[];
}

const WrongElementList:React.FC<Props>=(props)=>{
    const [temp,tempset] = useState<string>("헉");
    let textHtml:HTMLDivElement|null;
    let containerHtml:HTMLDivElement|null;
    useEffect(() => {
        if(!containerHtml||!textHtml)
        {
            return;
        }
        let maxWidth = containerHtml.clientWidth;
        let maxHeight = containerHtml.clientHeight;
        let width = textHtml.clientWidth
        let  height = textHtml.clientHeight
        
        if(width>maxWidth)
        {
            textHtml.style.fontSize = Math.min(props.fontSize,(parseInt(textHtml.style.fontSize) - ((width-maxWidth)/textHtml.innerHTML.length)*1.3))+"px";
        }
        
        
    });

    return (
            <div ref={ref => { containerHtml = ref}}  className={classnames(style.WrongWords, props.className)}>
                <div ref={ref => { textHtml = ref }} style={{fontSize:props.fontSize}}>{temp+(props.words?props.words.join(" "):"No word")}</div>
                <button onClick={()=>{tempset(temp+" 헉")}}></button>
            </div>
        );

}  

export default WrongElementList;
