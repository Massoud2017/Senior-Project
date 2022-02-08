import React from 'react'
import './Button.css'
function Button({filter}) {
    return (
        <div>
                <button type="button" onClick={()=>filter('Appetizers and Salads')}>Salads</button>
        </div>
    )
}

export default Button;