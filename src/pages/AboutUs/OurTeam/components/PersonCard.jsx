import React from 'react'
import './personCard.css'

const PersonCard = (props) => {
  const position = props.position;
  const name = props.name;
  const email = props.email;
  const emailHyperlink = props.emailHyperlink;

  return (
	<div className="person-card">
		<img className="person-image" src="" alt="personImage" />
		<div className="person-name">{name}</div>
		<div className="person-position">{position}</div>
		<div className="person-represent">NONE</div>
		<div className="person-email">
			<a href={emailHyperlink}>{email}</a>
		</div>
	</div>
  )
}

export default PersonCard