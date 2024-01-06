import React from 'react'
import styles from './personcard.module.css'

const PersonCard = (props) => {
  const name = props.name;
  const position = props.position;
  const email = props.email;
  const emailHyperlink = props.emailHyperlink;

  return (
    <div className={styles.personcard}>
      <div className={styles.personposition}>{position}</div>
      <div className={styles.personname}>{name}</div>
      <a className={styles.personemail} href={emailHyperlink}>{email}</a>
    </div>
  )
}

export default PersonCard