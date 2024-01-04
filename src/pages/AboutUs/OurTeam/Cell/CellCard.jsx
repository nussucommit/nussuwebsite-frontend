import React from 'react'
import PersonCard from './Person/PersonCard'
import styles from './cellcard.module.css'

const CellCard = (props) => {
  const cellName = props.cellName;
  const cellNameArray = cellName.split(" ");
  const image = props.image;
  const members = props.members;

  return (
  <div className={styles.cellcard}>
    <div className={styles.cellname}>
      <div>
        {cellNameArray.map(word =>
            <span className={cellNameArray.indexOf(word)%2 == 0 ? styles.odd : styles.even}>{word}&nbsp;</span>)}
      </div>
      <div className={styles.divider}></div>
    </div>
    <img className={styles.cellimage} src={image} alt="cell-image" />
    {members.map((person) => <PersonCard name={person.name} position={person.position} email={person.email} emailHyperlink={person.emailHyperlink}/>)}
  </div>
  )
}

export default CellCard