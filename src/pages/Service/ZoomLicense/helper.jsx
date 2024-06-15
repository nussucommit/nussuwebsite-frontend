export const extractAbout = (data) => {
    let about = "";
    let isAbout = false;
    for (const item of data) {
        if (isAbout && item.type === "paragraph") {
            for (const subitem of item.content) {
                about += subitem.content;
                about += "\n";
            }
            break;
        }
        if (item.type === "heading" && item.content === "Zoom Licenses") {
            isAbout = true;
        }
    }
    return about;
}

export const extractApply = (data) => {
    let apply = [];
    let isApply = false;
    for (const item of data) {
        if (isApply && item.type === "numbered_list_item") {
            let applyContent = "";
            for (const subitem of item.content) {
                applyContent += subitem.content;
            }
            apply.push(applyContent);
        } else if (item.type === "heading" && item.content === "How to Apply?") {
            isApply = true;
        } else if (isApply) {
            break;
        }
    }
    return apply;
}

export const extractEligibility = (data) => {
    let eligibility = "";
    let isEligibility = false;
    for (const item of data) {
        if (isEligibility && item.type === "paragraph") {
            for (const subitem of item.content) {
                eligibility += subitem.content;
                eligibility += "\n";
            }
            break;
        }
        if (item.type === "heading" && item.content === "Eligibility") {
            isEligibility = true;
        }
    }
    return eligibility;
}


export const extractTermsAndConditions = (data) => {
    let termsAndConditions = "";
    let isTermsAndConditions = false;
    for (const item of data) {
        if (isTermsAndConditions && item.type === "file") {
            termsAndConditions += item.url;
            break;
        }
        if (item.type === "heading" && item.content === "Terms and Conditions") {
            isTermsAndConditions = true;
        }
    }
    return termsAndConditions;
}

export const extractApplicationForm = (data) => {
    let applicationForm = "";
    let isApplicationForm = false;
    for (const item of data) {
        if (isApplicationForm && item.type === "paragraph") {
            for (const subitem of item.content) {
                applicationForm += subitem.content;
            }
            break;
        }
        if (item.type === "heading" && item.content === "Application Form") {
            isApplicationForm = true;
        }
    }
    return applicationForm;
}

export const extractTemplate = (data) => {
    let template = "";
    let isTemplate = false;
    for (const item of data) {
        if (isTemplate && item.type === "paragraph") {
            for (const subitem of item.content) {
                template += subitem.content;
            }
            break;
        }
        if (item.type === "heading" && item.content === "Zoom Request Excel Template") {
            isTemplate = true;
        }
    }
    return template;
}

export const extractContact = (data) => {
    let contact = [];
    let isContact = false;
    for (const item of data) {
        if (isContact && item.type === "paragraph") {
            let contactContent = ""
            for (const subitem of item.content) {
                contactContent += subitem.content;
            }
            contact.push(contactContent);
        } else if (item.type === "heading" && item.content === "Contact Point") {
            isContact = true;
        } else if (isContact) {
            break;
        }
    }
    return contact;
}
