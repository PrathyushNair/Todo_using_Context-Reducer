import React from 'react'
import { CompleteContext } from '../Contexts/CompleteContext'
import { Tasklist } from './Tasklist'

export const Tasks = () => {
const {task}=React.useContext(CompleteContext)
  return (
    <div>
          {  
            task.map((el,index)=>(
          
                <Tasklist el={el} index={index}/>
             
            ))
        }
           
    </div>
  )
}
