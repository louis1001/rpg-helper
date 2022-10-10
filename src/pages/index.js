import '../assets/styles/main.css'
import React from "react";

import {Link} from 'gatsby'

import BorderedContainer from '../components/BorderedContainer'
import StatBlock from '../components/StatBlock';
import TempChecklist from '../components/TempChecklist';
import CheckCounter from '../components/CheckCounter';

import { Helmet } from 'react-helmet';

const defaultPlayer = {
    name: "",
    xp: 0,
    skills: [],
    stats: {
        muscle: 0,
        agility: 0,
        brains: 0,
        charm: 0
    },
    belief: ""
}

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        if (localStorage) {
            const playerString = localStorage.getItem("user-player")
            const cachedPlayer = JSON.parse(playerString)
    
            this.state = {
                player: cachedPlayer ?? deepClone(defaultPlayer),
                editing: false
            }
        } else {
            this.state = {
                player: deepClone(defaultPlayer),
                editing: false
            }
        }
    }

    render() {
        let skills = [
            { id: "athletics", name: "Atleticismo" },
            { id: "culture", name: "Cultura" },
            { id: "manipulation", name: "Manipulacion" },
            { id: "science", name: "Ciencia" },
            { id: "stealth", name: "Sigilo" },
            { id: "survival", name: "Supervivencia" },
            { id: "technology", name: "Tecnología" },
        ]

        const editingClass = this.state.editing ? 'editing' : ''

        const editButtonText = this.state.editing ? 'Guardar' : 'Editar'

        return (
            <div id='main-page' className={editingClass}>
                <Helmet>
                    <title>Wander rpg</title>
                </Helmet>
                <div id='player-content'>
                    <header>
                        <h1>Wander</h1>

                        <div className="name-input">
                            <h3>Nombre: </h3>
                            <span data-spacer></span>
                            <input type="text" value={this.state.player.name} onChange={(e) => {
                                this.handlePlayerChange({
                                    name: e.target.value
                                })
                            }} />
                        </div>
                    </header>
                    <main>
                        <StatBlock
                            onToggle={(k, v) => this.handleStatChange(k, v)}
                            valueFor={k => this.state.player.stats[k]}
                        />

                        <BorderedContainer title="Habilidades">
                            <TempChecklist
                                items={skills}
                                isOn={k => this.state.player.skills.includes(k)}
                                onToggle={(key) => this.handleToggleSkill(key)}
                            />
                        </BorderedContainer>
                    </main>

                    <div className='xp-container'>
                        <h2 className="side-title">XP</h2>
                        <CheckCounter
                            count={7}
                            value={this.state.player.xp}
                            onChange={newXp => this.handlePlayerChange({ xp: newXp })}
                        ></CheckCounter>
                    </div>

                    <div className="belief-container">
                        <BorderedContainer title="Creencia principal">
                            <input type="text" value={this.state.player.belief} onChange={(e) => {
                                this.handlePlayerChange({
                                    belief: e.target.value
                                })
                            }} />
                        </BorderedContainer>
                    </div>
                </div>

                <div className='action-buttons'>
                    <div className="settings-buttons">
                        <button id='clear-btn' onClick={() => this.clearPlayer()}>Limpiar</button>
                        <button onClick={() => this.toggleEditing()}>{editButtonText}</button>
                    </div>
                    
                    <Link to="rules">Reglas</Link>
                </div>
            </div>
        )
    }

    handleStatChange(key, value) {
        console.log("changing stat:", key, "with value", value)
        let stats = deepClone(this.state.player.stats)

        stats[key] = value

        this.handlePlayerChange({
            stats: stats
        })
    }

    handleToggleSkill(key) {
        let skillValues = this.state.player.skills.slice()

        let keyPos = skillValues.indexOf(key)

        if (keyPos === -1) {
            skillValues.push(key)
        } else {
            skillValues = skillValues.slice(0, keyPos).concat(skillValues.slice(keyPos + 1))
        }

        this.handlePlayerChange({
            skills: skillValues
        })
    }

    handlePlayerChange(playerValues) {
        const currentPlayer = deepClone(this.state.player)

        for (let key in playerValues) {
            currentPlayer[key] = playerValues[key]
        }

        // const playerString = JSON.stringify(currentPlayer)

        // localStorage.setItem("user-player", playerString)

        this.setState({
            player: currentPlayer
        })
    }

    clearPlayer() {
        if (!window.confirm("¿Seguro que queres borrar todo?")) return
        this.setState({ player: deepClone(defaultPlayer) })
    }

    toggleEditing() {
        console.log('toggling')
        if (this.state.editing) {
            const playerString = JSON.stringify(this.state.player)

            localStorage.setItem("user-player", playerString)

            this.setState({
                editing: false
            })
        } else {
            this.setState({
                editing: true
            })
        }
    }
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}