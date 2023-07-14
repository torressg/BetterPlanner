import React from 'react'
import styles from './ThirdComp.module.css'

import macandiphone from '../assets/2devices.png'

import check from '../assets/Check.svg'
import { Button } from '../components/Button'

export const ThirdComp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.escritas}>
                <h1 className={styles.title}>POR QUE USAR O <span>PLANNER DE HÁBITOS</span>?</h1>
                <ul>
                    <li>
                        <img src={check} alt="aaa" />
                        <h3><strong>100% AUTOMÁTICO!</strong> Ela calcula seu desempenho sozinho.</h3>
                    </li>
                    <li>
                        <img src={check} alt="aaa" />
                        <h3><strong>PERSONALIZÁVEL!</strong> Você pode editar a cor, as escritas e a fonte.</h3>
                    </li>
                    <li>
                        <img src={check} alt="aaa" />
                        <h3><strong>COMPATÍVEL! </strong> Com todos os devices. Celular, iPad, Tablet, Notebook.</h3>
                    </li>
                    <li>
                        <img src={check} alt="aaa" />
                        <h3><strong>APROVADO</strong> por mais de 3.000 pessoas!</h3>
                    </li>
                    <li>
                        <img src={check} alt="aaa" />
                        <h3><strong>TOTALMENTE DIGITAL! </strong> Prático e de fácil acesso.</h3>
                    </li>
                    <li>
                        <img src={check} alt="aaa" />
                        <h3><strong>SUPORTE 24H:</strong> Temos um WhatsApp que te ajuda e tira todas as suas dúvidas!</h3>
                    </li>
                </ul>
                <div className={styles.btn}>
                    <Button
                        text='QUERO TRANSFORMAR MINHA ROTINA!'
                    />
                </div>
            </div>
            <div className={styles.imgcontainer}>
                <img src={macandiphone} alt="" />
            </div>

        </div>
    )
}






