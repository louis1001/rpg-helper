import '../assets/styles/chunky-checkbox.css'

export default function ChunkyCheckbox(props) {
    let isChecked = props.isChecked
    let isCheckedClass = isChecked ? 'checked' : ''
    return (
        <div
            className={'chunky-checkbox ' + isCheckedClass}
            onClick={props.onToggle}
        >
            {isChecked ? '' : ''}
        </div>
    )
}