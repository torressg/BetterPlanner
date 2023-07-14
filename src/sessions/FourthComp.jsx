import React from 'react'
import styles from './FourthComp.module.css'
import pencil from '../assets/pencil.png'
import calender from '../assets/calender.png'
import gift from '../assets/gift.png'
import { Button } from '../components/Button'

export const FourthComp = () => {
    return (
        <div className={styles.container}>
            <hr />
            <div className={styles.title}>
                <h1>CONTEÚDO</h1>
                <p>CONFIRA O QUE VOCÊ VAI ENCONTRAR NO SEU PLANNER</p>
            </div>
            <div className={styles.cards}>

                <div className={styles.card}>

                    <img src={pencil} alt="" />
                    <h3>ABA DE PLANEJAMENTO</h3>
                    <p>Além de ser divertido e fácil de usar, nosso planner é totalmente automatizado.</p>

                </div>

                <div className={styles.card}>

                    <img src={calender} alt="" />
                    <h3>ABAS DE HÁBITO DIÁRIOS</h3>
                    <p>Você terá uma aba para cada mês do ano, pronta para ser completa com seus hábitos!</p>

                </div>

                <div className={styles.card}>

                    <img src={gift} alt="" />
                    <h3>INSTRUÇÕES + BÔNUS</h3>
                    <p>Você receberá uma arquivo com instruções de uso do Planner e também, um bônus exclusivo!</p>

                </div>
            </div>
            <div className={styles.btn}>
                <Button
                    text='QUERO GARANTIR MEU PLANNER'
                />
            </div>
        </div>
    )
}
