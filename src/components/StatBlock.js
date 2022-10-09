import CheckCounter from './CheckCounter'

import '../assets/styles/stat-block.css'

import arm from '../assets/images/arm.png'
import speed from '../assets/images/running.png'
import brain from '../assets/images/brain.png'
import heart from '../assets/images/heart.png'

function statItem(props, icon, id, name) {
    let lineSeparator = <span className="line-separator"></span>

    return <div className="stat-item">
      <div className="stat-icon-container">
        <img src={icon} alt="" />
      </div>

      {lineSeparator}

      <div className="stat-desc">
        <CheckCounter
            count={2}
            separator={lineSeparator}
            value={props.valueFor(id)}
            onChange={ v => {
                props.onToggle(id, v)
            }}
            ></CheckCounter>
          <h3>{name}</h3>
      </div>
    </div>
}

export default function StatBlock(props) {
    return <div className="stats-container">
    {statItem(props, arm, "muscle", "Musculo")}
    {statItem(props, speed, "agility", "Agilidad")}
    {statItem(props, brain, "brains", "Cerebro")}
    {statItem(props, heart, "charm", "Encanto")}
  </div>
}