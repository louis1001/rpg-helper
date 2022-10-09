import React from "react"
import ChunkyCheckbox from "./ChunkyCheckbox"

export default class TempChecklist extends React.Component {
    checkItem(key, text) {
      return <div className='checklist-item' key={key}>
        <ChunkyCheckbox isChecked={this.props.isOn(key)} onToggle={()=>
          this.props.onToggle(key)
        }/>
        <span data-spacer></span>
        {text}
      </div>
    }
  
    render() {
      let items = this.props.items
        .map(i => this.checkItem(i.id, i.name))
      return (
        <section className='checklist'>
          {items}
        </section>
      )
    }
  }