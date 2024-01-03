import React from 'react'
import './personCard.css'

const PersonCard = (props) => {
  const name = props.name;
  const position = props.position;
  const email = props.email;
  const emailHyperlink = props.emailHyperlink;

  return (
    <div className="person-card">
      <div className="person-position">{position}</div>
      <div className="person-name">{name}</div>
      <a className="person-email" href={emailHyperlink}>{email}</a>
    </div>
  )
}

export default PersonCard