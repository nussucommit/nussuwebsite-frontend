import React from 'react'
import styles from './eventTypeCards.css'

export const eventTypeCard = (currentEventType, key) => { // here item passed into the function will be of one certain event type 
    
  return (
  <div className={styles.typeContainer}>
     
    {(currentEventType.events).map((item) => { // here u create event cards (mapped for each event of the current type)
        // settled orientationIndex
        var className = '';
        if (item.orientationIndex === 1) {
            className = 'rightOrientContainer';
        } else if (item.orientationIndex === 0){
            className = 'leftOrientContainer'; // Some default or other class
        };
        
        return (
        <div className = {className}>
            <img className={styles.eventImage} src={item.imageLink} alt="event-image" />
            <div className = {styles.eventText}>
                <h3> {item.eventName}</h3>
                <p> {item.description}</p>
            </div>
        
        </div>
        );

    })
    }
    </div>
   

    
  )
  //<PersonCard name={person.name} position={person.position} email={person.email} emailHyperlink={person.emailHyperlink}/>)}
 // </div>
}

