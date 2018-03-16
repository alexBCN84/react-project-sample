import LiElement from './LiElement'
import React from 'react'
export const LiList = ({ list }) =>
    <ul className="ingredients">
        {list.map((liElement, i) =>
            <LiElement key={i} {...liElement} />
        )}
    </ul>

LiList.displayName = 'Li List'

export default LiList