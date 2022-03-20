const Field = ({char, field, label}) => {
    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}
export default Field;