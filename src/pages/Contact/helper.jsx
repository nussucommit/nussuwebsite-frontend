export const extractContactInfo = (data) => {
    let contactInfo = "";
    let isAddress = false;
    for (const item of data) {
        if (isAddress) {
            contactInfo = item.content[0].content;
            break;
        } else if (item.type === "heading" && item.content === "Address") {
            isAddress = true;
        }
    }
    return contactInfo;
}

export const extractOperatingHours = (data) => {
    let operatingHours = "";
    let isOperatingHours = false;
    for (const item of data) {
        if (isOperatingHours && item.type === "paragraph") {
            operatingHours = item.content[0].content;
            break;
        }
        if (item.type === "heading" && item.content === "Operating Hours") {
            isOperatingHours = true;
        }
    }
    return operatingHours;
}

export const extractGeneral = (data) => {
    let general = "";
    let isGeneral = false;
    for (const item of data) {
        if (isGeneral) {
            general = item.content[0].content;
            break;
        } else if (item.type === "heading" && item.content === "General") {
            isGeneral = true;
        }
    }
    return general;
}

export const extractCollaboration = (data) => {
    let collaboration = "";
    let isCollaboration = false;
    for (const item of data) {
        if (isCollaboration) {
            collaboration = item.content[0].content;
            break;
        } else if (item.type === "heading" && item.content === "Collaboration ") {
            isCollaboration = true;
        }
    }
    return collaboration;
}

export const extractPublicityRequests = (data) => {
    let publicityRequests = "";
    let isPublicityRequests = false;
    for (const item of data) {
        if (isPublicityRequests) {
            publicityRequests = item.content[0].content;
            break;
        } else if (item.type === "heading" && item.content === "Publicity Requests") {
            isPublicityRequests = true;
        }
    }
    return publicityRequests;
}
