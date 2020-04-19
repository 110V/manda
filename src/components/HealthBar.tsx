import React, { useState } from 'react';
import style from './HealthBar.module.css';
import classnames from 'classnames';


interface Props {
    className: string;
    maxHp:number;
    hp:number;
}


const HealthBar: React.FC<Props> = (props) => {
    return (
        <div className={classnames(style.HealthBar, props.className)}>
            <div className={style.Text}>{props.hp + " / " + props.maxHp}</div>
            <div className={style.BarContainer}>
                <div style={{ width: (props.hp / props.maxHp * 100) + "%" }} />
            </div>
        </div>
    );
}

export default HealthBar;