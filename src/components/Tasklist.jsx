import React from 'react'
import styles from "./tasklist.module.css"
import { CompleteContext } from '../Contexts/CompleteContext'
export const Tasklist = ({el,index}) => {
const {task,dispatch2,dispatch}=React.useContext(CompleteContext)

let status=false
return (
    <div >
          <div className={styles.eachdiv} key={el.id}>
                    <input className={styles.ip} onChange={(e)=>{dispatch({type:"statchange",payload:e.target.checked,index:el.id})}} type="checkbox"></input>
                    {el.status ? <s className={styles.title}>{el.task}</s>:<span className={styles.title}>{el.task}</span>}
                    <button className={styles.del} onClick={()=>{dispatch({type:"del",payload:el.id})}}>Delete</button>
                </div>
    </div>
  )
}
