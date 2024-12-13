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
        if (item.type === "heading" && item.content === "About NUS Staff Club Students’ Resilience Fund") {
            isAbout = true;
        }
    }
    return about;
}

export const extractEligibility = (data) => {
    let eligibility = [];
    let isEligibility = false;
    for (const item of data) {
        if (isEligibility && (item.type === "paragraph" || item.type === "bulleted_list_item")) {
            eligibility.push(item)
        } else if (item.type === "heading" && item.content === "Eligibility") {
            isEligibility = true;
        } else if (isEligibility) {
            break;
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
        } else if (item.type === "heading" && item.content === "Assistance Provided") {
            isAssistanceProvided = true;
        }
    }
    return assistanceProvided;
}

export const extractApplicationProcedure = (data) => {
    let applicationProcedure = [];
    let isProcedure = false;
    for (const item of data) {
        if (isProcedure && item.type === "numbered_list_item") {
            let content = "";
            for (const subitem of item.content) {
                content += subitem.content;
            }
            applicationProcedure.push(content);
        } else if (item.type === "heading" && item.content === "Application Procedure") {
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
        if (item.type === "heading" && item.content === "Application Period") {
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
        if (item.type === "heading" && item.content === "Application Link") {
            isLink = true;
        }
    }
    return applicationLink;
}

export const extractTermsAndConditions = (data) => {
    let termsAndConditions = {type: "", url: "", name: ""};
    let isTermsAndConditions = false;
    for (const item of data) {
        if (isTermsAndConditions) {
            termsAndConditions = item;
            break;
        } else if (item.type === "heading" && item.content === "Terms and Conditions") {
            isTermsAndConditions = true;
        }
    }
    return termsAndConditions;
}