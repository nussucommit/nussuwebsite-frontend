import React from 'react'
import PersonCard from './Person/PersonCard'
import './cellCard.css'

const CellCard = (props) => {
  const cellName = props.cellName;
  const image = props.image;
  const members = props.members;

  return (
  <div className="cell-card">
    <div className="cell-name">{cellName}</div>
    <img className="cell-image" src={image} alt="cell-image" />
    {members.map((person) => <PersonCard name={person.name} position={person.position} email={person.email} emailHyperlink={person.emailHyperlink}/>)}
  </div>
  )
}

export default CellCard