import React from 'react'

function Button({button, filter}) {
    return (
        <aside className="block col-3">
            <div className="buttons">
                {
                    button.map((cat, i)=>{
                        return <div className="button-style" type="button" key={i} onClick={()=> filter(cat)} >{cat}</div>
                    })
                }
            </div>
        </aside>
    )
}

export default Button;