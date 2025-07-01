import React from 'react'
import '../../index.css'

const Button = ({mode, Icon, children, ...props}) =>{
   let buttonClassName = 'button'

    if(mode === 'outline'){
        buttonClassName = 'button-outline'
    }else if(mode === 'text'){
        buttonClassName = 'button-text'
    }else{
        buttonClassName = 'button-filled'
    }

    return (
        <>
            <button className={buttonClassName} {...props}>
                {Icon && <span className="button-icon"><Icon /></span>}
                {children && <span className="button-text-content">{children}</span>}
            </button>
        </>
    )
};

export default Button;
