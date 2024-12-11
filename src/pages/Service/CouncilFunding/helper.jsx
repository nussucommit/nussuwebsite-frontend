export const extractAbout = (data) => {
    let about = "";
    let isAbout = false;
    for (const item of data) {
        if (isAbout && item.type === "paragraph") {
            for (const subitem of item.content) {
                about += subitem.content;
            }
            about += "\n";
        } else if (item.type === "heading" && item.content === "ABOUT NUSSU Students' Fund") {
            isAbout = true;
        } else {
            break;
        }
    }
    return about;
}

export const extractApplicationPeriod = (data) => {
    let applicationPeriod = [];
    let isApplicationPeriod = false;
    for (const item of data) {
        if (isApplicationPeriod && (item.type === "numbered_list_item" || item.type === "bulleted_list_item" || item.type === "paragraph")) {
            let currSentence = ""
            for (const subitem of item.content) {
                currSentence += subitem.content;
            }
            applicationPeriod.push(currSentence);
        } else if (item.type === "heading" && item.content === "APPLICATION PERIOD") {
            isApplicationPeriod = true;
        } else if (isApplicationPeriod) {
            break;
        }
    }
    return applicationPeriod;
}

export const extractFundingAmount = (data) => {
    let fundingAmount = "";
    let isFundingAmount = false;
    for (const item of data) {
        if (isFundingAmount) {
            fundingAmount = item.content;
            break;
        } else if (item.type === "heading" && item.content === "FUNDING AMOUNT") {
            isFundingAmount = true;
        }
    }
    return fundingAmount;
}

export const extractApplicationLink = (data) => {
    let applicationLink = "";
    let isApplicationLink = false;
    for (const item of data) {
        if (isApplicationLink && item.type === "paragraph") {
            for (const subitem of item.content) {
                applicationLink += subitem.content;
            }
            break
        } else if (item.type === "heading" && item.content === "APPLICATION LINK") {
            isApplicationLink = true;
        }
    }
    return applicationLink;
}

export const extractDocuments = (data) => {
    let documents = [];
    let isDocuments = false;
    for (const item of data) {
        if (isDocuments && item.type === "file") {
            documents.push(item)
        } else if (item.type === "heading" && item.content === "Documents") {
            isDocuments = true;
        }
    }
    return documents;
}