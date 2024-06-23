export const extractImage = (data) => {
    let image = "";
    for (const item of data) {
        if (item.type === "image") {
            image = item.content;
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
        if (item.type === "heading" && item.content === "ABOUT NUSSU Students' Fund") {
            isAbout = true;
        }
    }
    return about;
}

export const extractLateApplications = (data) => {
    let lateApplications = "";
    let isLateApplications = false;
    let isSecondParagraph = false;
    for (const item of data) {
        if (isSecondParagraph && item.type === "paragraph") {
            lateApplications += item.content[0].content;
            break;
        } else if (isLateApplications && item.type === "paragraph") {
            for (const subitem of item.content) {
                lateApplications += subitem.content;
            }
            lateApplications += "\n";
            isSecondParagraph = true;
        } else if (item.type === "heading" && item.content === "LATE APPLICATIONS") {
            isLateApplications = true;
        }
    }
    return lateApplications;
}

export const extractEligibility = (data) => {
    let eligibility = [];
    let isEligibility = false;
    for (const item of data) {
        if (isEligibility && item.type === "paragraph") {
            let content = "";
            for (const subitem of item.content) {
                content += subitem.content;
            }
            eligibility.push(content);
        } else if (item.type === "heading" && item.content === "ELIGIBILITY") {
            isEligibility = true;
        } else if (item.type === "bulleted_list_item") {
            let bulletedContent = ""
            for (const subitem of item.content) {
                bulletedContent += subitem.content;
            }
            eligibility.push(bulletedContent);
        } else if (isEligibility) {
            break;
        }
    }
    return eligibility;
}

export const extractApplicationPeriod = (data) => {
    let applicationPeriod = "";
    let isApplicationPeriod = false;
    for (const item of data) {
        if (isApplicationPeriod) {
            applicationPeriod = item.content[0].content;
            break;
        } else if (item.type === "heading" && item.content === "APPLICATION PERIOD") {
            isApplicationPeriod = true;
        }
    }
    return applicationPeriod;
}

export const extractResultsRelease = (data) => {
    let resultsRelease = "";
    let isResultsRelease = false;
    for (const item of data) {
        if (isResultsRelease) {
            resultsRelease = item.content[0].content;
            break;
        } else if (item.type === "heading" && item.content === "RELEASE OF RESULT") {
            isResultsRelease = true;
        }
    }
    return resultsRelease;
}

export const extractApplicationLink = (data) => {
    let applicationLink = "";
    let isApplicationLink = false;
    for (const item of data) {
        if (isApplicationLink) {
            applicationLink = item.content[0].content;
            break;
        } else if (item.type === "heading" && item.content === "APPLICATION LINK") {
            isApplicationLink = true;
        }
    }
    return applicationLink;
}

export const extractTermsAndConditions = (data) => {
    let termsAndConditions = "";
    let isTermsAndConditions = false;
    for (const item of data) {
        if (isTermsAndConditions) {
            termsAndConditions = item.url;
            break;
        } else if (item.type === "heading" && item.content === "Terms and Conditions") {
            isTermsAndConditions = true;
        }
    }
    return termsAndConditions;
}