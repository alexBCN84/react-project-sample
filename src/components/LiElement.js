const LiElement = ({ prop1, prop2, prop3 }) =>
    <li>
        <span className="amount">{prop1} </span>
        <span className="measurement">{prop2} </span>
        <span className="name">{prop3}</span>
    </li>

LiElement.displayName = 'Li Element'

export default LiElement