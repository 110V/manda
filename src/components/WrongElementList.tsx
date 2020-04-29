import React, {useEffect, useState} from 'react';
import style from './WrongElementList.module.css';
import classnames from 'classnames';	

interface Props{
    className: string;
    fontSize: number;
    words: string[];
    lineMaxCount: number;
}

const WrongElementList:React.FC<Props>=(props)=>{
    const [temp,tempset] = useState<string>("헉");
    let textHtml:HTMLDivElement|null;
    let containerHtml:HTMLDivElement|null;

    const wordsToString = (words:string[],lineMaxCount:number)=>{
        let out:string = "";
        for(let i = 0; i<words.length; i++){
            out+=words[i];
            if(i!=0 && (i+1)%lineMaxCount == 0){
               out+="\n";
            }
            else{
                out+=" ";
            }
        }
        return out;
    }

    const autoSize = () => {
        if(!containerHtml||!textHtml)
        {
            return;
        }
        let maxWidth = containerHtml.clientWidth;
        let maxHeight = containerHtml.clientHeight;
        let width = textHtml.clientWidth
        let height = textHtml.clientHeight

        let scale = 1;
        if(width>maxWidth)
        {
            scale = (maxWidth/width);
        }
        if(height>maxHeight)
        {  
            const hscale = maxHeight/height;
            scale = hscale<scale?hscale:scale;
        }
        
        textHtml.style.scale = String(scale)
    };

    useEffect(() => {
        window.addEventListener('resize', autoSize)
    },[]);
    useEffect(() => {
        autoSize();
    });

    return (
            <div ref={ref => { containerHtml = ref}}  className={classnames(style.WrongWords, props.className)}>
                <div ref={ref => { textHtml = ref }} style={{fontSize:props.fontSize}}>{(wordsToString(props.words,props.lineMaxCount))}</div>
            </div>
        );

}  

export default WrongElementList;
