import React from "react";
export const CompleteContext=React.createContext()

export const CompleteProvider=({children})=>{
    let reducer=(task,action)=>{
        switch(action.type){
            case "add":{
                console.log(task)
                return ([...task,{task:action.payload,id:action.id,status:action.status}])
            }
            case "del":{
                console.log("hey from dispatch")
                console.log(action.payload)
                console.log(task)
                return (task.filter((item)=>(item.id!==action.payload)))
                
            }
            case "statchange":{
                if(action.payload===true)
                { 
                    console.log(action.index)
                   // task[action.index].status=true 
                    console.log(task)
                    return(task.map((el)=>{
                        if(el.id===action.index)
                        {
                            el.status=true
                        }
                        return(el)
                    }))
                  
                }
                else{
                    console.log(action.index)
                   //task[action.index].status=false
                   console.log(task)
                   return(task.map((el)=>{
                    if(el.id===action.index)
                    {
                        el.status=false
                    }
                    return(el)
                }))
                    
                }
            }
            default:{
                return (task)
            }
        }
    }
    // let reducer2=(status,action)=>{
    //         switch(action.type)
    //         {
    //             case "statchange":
    //                 {
    //                 return (status=action.payload)
                        
    //                 }
    //             default :
    //             {
    //                 return "hey"
    //             }
    //         }
    // }

    
    let [task,dispatch]=React.useReducer(reducer,[])
    let [indi,setIndi]=React.useState("")
   // let [status,dispatch2]=React.useReducer(reducer2,false)
    
    return <CompleteContext.Provider value={{task,dispatch,reducer,indi,setIndi}}>{children}</CompleteContext.Provider>
}