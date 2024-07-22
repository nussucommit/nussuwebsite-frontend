export const extractPersonsData = (data) => {
  const personsData = [];

  const handleHeading = (item) => {
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
    if (emailData)
    {
      currentPerson.email = emailData.content;
      // currentPerson.emailHyperlink = emailData.attribute.link;
      currentPerson.emailHyperlink = emailData.content;
      currentMembers.push({...currentPerson});
      resetCurrentPerson();
    }
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

