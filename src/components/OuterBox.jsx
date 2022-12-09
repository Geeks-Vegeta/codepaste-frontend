import React from "react";
import "./outerbox.css"

const OuterBox=(props)=>{
    return(
        <>
        <div className="my-5">
            <div className="outer-box">
                <div className="upper-box">
                    <h2>CodePaste</h2>
                </div>
                <div className="down-box">
                {props.children}
                </div>
            </div>
        </div>
        
        </>
    )
}

export default OuterBox;