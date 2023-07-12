import React from 'react'
import styles from './secComp.module.css'
import imgcard1 from '../assets/card1.webp'
import imgcard2 from '../assets/card2.webp'
import imgcard3 from '../assets/card3.webp'

export const SecComp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>O PLANNER QUE VAI AJUDAR VOCÊ A ORGANIZAR SUA ROTINA.</h1>
                <p>CONHEÇA O PLANNER DE HÁBITOS MAIS VENDIDO DO BRASIL!</p>
            </div>
            <div className={styles.cards}>

                <div className={styles.card}>

                    <img src={imgcard1} alt="" />
                    <h3>PRÁTICO</h3>
                    <p>Além de ser divertido e fácil de usar, nosso planner é totalmente automatizado.</p>

                </div>

                <div className={styles.card}>

                    <img src={imgcard2} alt="" />
                    <h3>PORTÁTIL</h3>
                    <p>Seu planner pode ser aberto em qualquer device, com um acesso super fácil, leve ele para onde você quiser.</p>

                </div>

                <div className={styles.card}>

                    <img src={imgcard3} alt="" />
                    <h3>COMPLETO</h3>
                    <p>Você pode acompanhar seu desenvolvimento durante os meses, você terá seu planner do ano inteiro em um só lugar!</p>

                </div>

            </div>
        </div>
    )
}
