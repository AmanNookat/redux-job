import React from 'react';
import style from './transition.module.css'

const Transition = () => {
    return (
        <section >
            <div className={`${style.wave} ${style.wave1}`}></div>
            <div className={`${style.wave} ${style.wave2}`}></div>
            <div className={`${style.wave} ${style.wave3}`}></div>
            <div className={`${style.wave} ${style.wave4}`}></div>
        </section>
    );
};

export default Transition;