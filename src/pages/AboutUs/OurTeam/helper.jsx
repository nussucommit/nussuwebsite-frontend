export const extractPersonsData = (data) => {
	const personsData = [];

	let currentCell = {
		cellName: null,
		image: null,
		members: []
	};
	let currentMembers = [];
	let currentPerson = {};
	let headingCounter = 0;
	
	for (const item of data) {
		if (item.type === "heading") {
			if (item.content.toString().toLowerCase().includes("cell")) {
				if (!isEmptyCell(currentCell)) {
					currentCell.members = [...currentMembers];
					personsData.push({...currentCell});
					currentCell = {
						cellName: null,
						image: null,
						members: []
					};
					currentMembers = [];
				}
				currentCell.cellName = item.content;
			} else if (headingCounter === 0) {
				currentPerson.position = item.content;
				headingCounter++;
			} else if (headingCounter === 1) {
				currentPerson.name = item.content;
			}
		} else if (item.type === "paragraph") {
			const emailData = item.content[0];
			currentPerson.email = emailData.content;
			currentPerson.emailHyperlink = emailData.attribute.link;
			currentMembers.push({...currentPerson});
			currentPerson = {};
			headingCounter = 0;
		} else if (item.type === "image") {
			currentCell.image = item.content;
		}
	}

	return personsData;
}

const isEmptyCell = (cell) => {
    return cell.cellName == null;
}