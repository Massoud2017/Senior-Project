import React from 'react'

function Button({button, filter}) {
    return (
        <aside className="block col-3">
            <div className="buttons">
                {
                    button.map((cat, i)=>{
                        return <menubuttons type="button" onClick={()=> filter(cat)} >{cat}</menubuttons>
                    })
                }
            </div>
        </aside>
    )
}

export default Button;