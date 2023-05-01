import { KeyboardEvent, ChangeEvent, useState, useEffect } from "react";
type PropsType={
    value:string
    callback:(v:string)=>void
}
export const SuperInput=(props:PropsType)=>{
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        props.callback(e.currentTarget.value)
    }
    
    // const onKeyDownHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
    //     if (e.key==="Enter"){
    //         console.log(e.currentTarget.value);
            
    //         props.callback(e.currentTarget.value)
    //     }
        
    // }
    return(
        <input type="text" 
            onChange={onChangeHandler}
            value={props.value}
            // onKeyDown={onKeyDownHandler}
        />
    )
}