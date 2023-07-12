import React from 'react'
import styles from './FirstComp.module.css'

import devices from '../assets/devices.png'
import { Button } from '../components/Button'

export const FirstComp = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}><span>VOCÊ</span> VAI COLOCAR SUA <span>ROTINA EM ORDEM</span> OU VAI CONTINUAR <span>PROCRASTINANDO</span>?</h1>
                <Button
                    text='QUERO MINHA ROTINA EM ORDEM!'
                />
                <p>À VISTA POR APENAS R$29,90</p>
            </div>

            <div className={styles.imgcontainer}>
                <img src={devices} alt="" />
            </div>
        </div>
    )
}
