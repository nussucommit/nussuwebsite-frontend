import React from 'react'
import './personCard.css'

const PersonCard = (props) => {
  const position = props.position;
  const name = props.name;
  const email = props.email;
  return (
	<div className="person-card">
		<img className="person-image" src="" alt="personImage" />
		<div className="person-name">John Doe</div>
		<div className="person-position">President</div>
		<div className="person-represent">NUSSU Computing Club EXCO Representative</div>
		<div className="person-email">johndoe@example.com</div>
	</div>
  )
}

export default PersonCard