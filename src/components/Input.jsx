import React from 'react'
import { CompleteContext } from '../Contexts/CompleteContext'
import styles from "./input.module.css"
export const Input = () => {
    const {dispatch,indi,setIndi}=React.useContext(CompleteContext)
    
    let handleChange=(e)=>{
            setIndi(e.target.value)
            
    }
   
  return (
    <div className={styles.container}>
        <input className={styles.input} onChange={handleChange} placeholder='Enter Task'></input>
        <button className={styles.btn} onClick={()=>dispatch({type:"add",payload:indi,id:Math.random(),status:false})}>+</button>
    </div>
  )
}
