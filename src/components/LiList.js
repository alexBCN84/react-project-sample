import LiElement from './LiElement'

export const LiList = ({ list }) =>
    <ul className="ingredients">
        {list.map((liElement, i) =>
            <LiElement key={i} {...liElement} />
        )}
    </ul>

LiList.displayName = 'Li List'

export default LiList