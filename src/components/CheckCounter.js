import React from "react"
import ChunkyCheckbox from "./ChunkyCheckbox"
import '../assets/styles/check-counter.css'

export default class CheckCounter extends React.Component {
    checkbox(i) {
        return (
            <ChunkyCheckbox
                key={i}
                isChecked={i < this.props.value}
                onToggle={()=>this.handleToggle(i)}
            />
        )
    }

    render() {
        let separators = this.props.separator
        if (!separators) {
            separators = (
                <span data-spacer></span>
            )
        }
        let checkboxes = []

        for (let i = 0; i < this.props.count; i++) {
            checkboxes.push(this.checkbox(i))
        }

        let content = separateWith(checkboxes, separators)

        return (
            <div className="check-counter">{content}</div>
        )
    }

    handleToggle(i) {
        if (this.props.value === i + 1)  {
            this.props.onChange(0)
        } else {
            this.props.onChange(i + 1)
        }
    }
}

function separateWith(array, sep) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        result.push(array[i])

        if (i !== array.length-1) {
            result.push(<span key={"sep-" + i}>{sep}</span>)
        }
    }

    return result
}