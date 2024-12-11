export const extractImage = (data) => {
    let image = "";
    for (const item of data) {
        if (item.type === "image") {
            image = item.content;
            break;
        }
    }
    return image;
}

export const extractAbout = (data) => {
    let about = "";
    let isAbout = false;
    for (const item of data) {
        if (isAbout && item.type === "paragraph") {
            for (const subitem of item.content) {
                about += subitem.content;
            }
            break;
        }
        if (item.type === "heading" && item.content === "ABOUT NUS Staff Club Students’ Resilience Fund") {
            isAbout = true;
        }
    }
    return about;
}

export const extractEligibility = (data) => {
    let eligibility = "";
    let isEligibility = false;
    for (const item of data) {
        if (isEligibility && (item.type === "paragraph" || item.type === "bulleted_list_item")) {
            for (const subitem of item.content) {
                eligibility += subitem.content;
            }
            break;
        }
        if (item.type === "heading" && item.content === "ELIGIBILITY") {
            isEligibility = true;
        }
    }
    return eligibility;
}

export const extractAssistanceProvided = (data) => {
    let assistanceProvided = "";
    let isAssistanceProvided = false;
    for (const item of data) {
        if (isAssistanceProvided) {
            assistanceProvided = item.content;
            break;
        } else if (item.type === "heading" && item.content === "ASSISTANCE PROVIDED") {
            isAssistanceProvided = true;
        }
    }
    return assistanceProvided;
}

export const extractApplicationProcedure = (data) => {
    let applicationProcedure = "";
    let isProcedure = false;
    for (const item of data) {
        if (isProcedure && item.type === "numbered_list_item") {
            for (const subitem of item.content) {
                applicationProcedure += subitem.content;
            }
        } else if (item.type === "heading" && item.content === "APPLICATION PROCEDURE") {
            isProcedure = true;
        } else if (isProcedure) {
            break;
        }
    }
    return applicationProcedure;
}

export const extractApplicationPeriod = (data) => {
    let applicationPeriod = "";
    let isPeriod = false;
    for (const item of data) {
        if (isPeriod && item.type === "paragraph") {
            for (const subitem of item.content) {
                applicationPeriod += subitem.content;
            }
            break;
        }
        if (item.type === "heading" && item.content === "APPLICATION PERIOD") {
            isPeriod = true;
        }
    }
    return applicationPeriod;
}

export const extractApplicationLink = (data) => {
    let applicationLink = "";
    let isLink = false;
    for (const item of data) {
        if (isLink && item.type === "paragraph") {
            for (const subitem of item.content) {
                applicationLink += subitem.content;
            }
            break;
        }
        if (item.type === "heading" && item.content === "APPLICATION LINK") {
            isLink = true;
        }
    }
    return applicationLink;
}