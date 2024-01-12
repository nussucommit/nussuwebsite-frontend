export const extractEventsData = (data) => {
    const eventsData = [];

    let currentEventsType = {
        typeName: null,
        events: [],

    }
    let currentEvent = {
        orientationIndex: 0,
        eventName: null,
        description: null,
        imageLink: null, 
    }
    const handleEventTypeNames = (item) => {
        currentEventsType.typeName = item.content; 
    }

    const handleEventNames = (item) => { // orientation index in handelled here as well 
        if (currentEvent.orientationIndex === 0)
        {
            currentEvent.orientationIndex = 1;
        } else if (currentEvent.orientationIndex === 1)
        {
            currentEvent.orientationIndex = 0;
        }
        currentEvent.eventName = item.content; 
    }

    const handlePara = (item) => {
        currentEvent.description = item.content; 
    }
    const handleImage = (item) => {
        currentEvent.imageLink = item.content;
    }
    
    const resetEvent = () => {
        (currentEventsType.events).push({...currentEvent});
        currentEvent = {
            orientationIndex: 0,
            eventName: null,
            description: null,
            imageLink: null, 
        }
    }

    const resetEventType = () => {
        eventsData.push({...currentEventsType});
        currentEventsType = {
            typeName: null,
            events: [],
        }
    }

    for (let i = 0; i < data.length - 1; i++) { // -1 because we will be checking the next item
        const currentItem = data[i];
        const nextItem = data[i + 1];
    
        // Check if the current item is a heading and the next item is also a heading
        // If so, then the current item is a main heading
        if (currentItem.type === "image"){
            handleImage(currentItem);

        } else if (currentItem.type === "paragraph"){
            handlePara(currentItem);
        }
        else if (currentItem.type === "heading" && nextItem.type === "heading") {
            resetEventType();
            handleEventTypeNames(currentItem);
            
        }
        else if (currentItem.type === "heading" && nextItem.type !== "heading"){
            resetEvent();
            handleEventNames(currentItem);
        }
    }


    return eventsData;
}
 


    /* drafts:

    for (const item of data){
        if ();
    };
    // all functions below are handelling the Current cell 
    // everytime u finish handelling a 
    
    const handleEventTypeName = (item) => {

    }
    const combineEvents = (item) => {

    }
    const handle
    
    

    
   
    const handleCell = (item) => {
      if (isCell(item)) {
        if (!isNullCell(currentCell)) {
          handleEmptyCell();
          resetCurrentCell();
        }
        currentCell.cellName = item.content;
      } else if (headingCounter === 0) {
        currentPerson.position = item.content;
        headingCounter++;
      } else if (headingCounter === 1) {
        currentPerson.name = item.content;
      }
    }
  
    const handleParagraph = (item) => {
      const emailData = item.content[0];
      currentPerson.email = emailData.content;
      currentPerson.emailHyperlink = emailData.attribute.link;
      currentMembers.push({...currentPerson});
      resetCurrentPerson();
    }
  
    const handleEmptyCell = () => {
      if (currentMembers.length === 0) {
        currentCell.members = null
      } else {
        currentCell.members = [...currentMembers];
        personsData.push({...currentCell});
      }
    }
    
    const resetCurrentCell = () => {
      currentCell = {
        cellName: null,
        image: null,
        members: null
      };
      currentMembers = [];
    }
  
    const resetCurrentPerson = () => {
      currentPerson = {
        name: null,
        position: null,
        email: null,
        emailHyperlink: null
      };
      headingCounter = 0;
    }
  
    let currentCell = {
      cellName: null,
      image: null,
      members: null
    };
    let currentMembers = [];
    let currentPerson = {
      name: null,
      position: null,
      email: null,
      emailHyperlink: null
    };
    let headingCounter = 0;
    
    for (const item of data) {
      if (item.type === "heading") {
        handleHeading(item);
      } else if (item.type === "paragraph") {
        handleParagraph(item);
      } else if (item.type === "image") {
        currentCell.image = item.content;
      }
    }
  
    return personsData;
  }
  
  const isCell = (item) => {
    return item.content.toString().toLowerCase().includes("cell");
  }
  
  const isNullCell = (cell) => {
    return cell.cellName == null;
  }
  
  

*/
