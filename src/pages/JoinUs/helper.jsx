export const extractLatestUpdates = (data) => {
    let updates = [];
    let isUpdates = false;
    for (const item of data) {
        if (isUpdates && item.type === "paragraph") {
            for (const subitem of item.content) {
                updates.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "Latest Updates") {
            isUpdates = true;
        } else if (isUpdates) {
            break;
        }
    }
    return updates;
}

export const extractGeneral = (data) => {
    let general = [];
    let isGeneral = false;
    for (const item of data) {
        if (isGeneral && item.type === "paragraph") {
            for (const subitem of item.content) {
                general.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "General") {
            isGeneral = true;
        } else if (isGeneral) {
            break;
        }
    }
    return general;
}

export const extractExpect = (data) => {
    let expect = [];
    let isExpect = false;
    for (const item of data) {
        if (isExpect && item.type === "paragraph") {
            for (const subitem of item.content) {
                expect.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "What You Can Expect") {
            isExpect = true;
        } else if (isExpect) {
            break;
        }
    }
    return expect;
}

export const extractNussuExpectation = (data) => {
    let nussuExpect = [];
    let isNussuExpect = false;
    for (const item of data) {
        if (isNussuExpect && item.type === "paragraph") {
            for (const subitem of item.content) {
                nussuExpect.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "What NUSSU Expects From You!") {
            isNussuExpect = true;
        } else if (isNussuExpect) {
            break;
        }
    }
    return nussuExpect;
}

export const extractElections = (data) => {
    let elections = [];
    let isElections = false;
    for (const item of data) {
        if (isElections && item.type === "paragraph") {
            for (const subitem of item.content) {
                elections.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "Elections") {
            isElections = true;
        } else if (isElections) {
            break;
        }
    }
    return elections;
}

export const extractRecruitment = (data) => {
    let recruitment = [];
    let isRecruitment = false;
    for (const item of data) {
        if (isRecruitment && item.type === "paragraph") {
            for (const subitem of item.content) {
                recruitment.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "Recruitment Opportunities") {
            isRecruitment = true;
        } else if (isRecruitment) {
            break;
        }
    }
    return recruitment;
}

export const extractExcoApplication = (data) => {
    let excoApplication = "";
    let isExcoApplication = false;
    for (const item of data) {
        if (isExcoApplication && item.type === "paragraph") {
            for (const subitem of item.content) {
                excoApplication = subitem.content;
            }
        } else if (item.type === "heading" && item.content === "Application for NUSSU EXCO") {
            isExcoApplication = true;
        } else if (isExcoApplication) {
            break;
        }
    }
    return excoApplication;
}

export const extractCommitteeApplication = (data) => {
    let committeeApplication = [];
    let isCommitteeApplication = false;
    let current = [];

    for (const item of data) {
        if (isCommitteeApplication && item.type === "numbered_list_item") {
            if (current.length != 0) {
                committeeApplication.push(current);
            }
            
            current = [];
            for (const subitem of item.content) {
                current.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "Application for NUSSU Committees") {
            isCommitteeApplication = true;
        } else if (isCommitteeApplication && item.type === "paragraph") {
            for (const subitem of item.content) {
                current.push(subitem.content);
            }
        } else if (isCommitteeApplication) {
            break;
        }
    }
    committeeApplication.push(current);
    return committeeApplication;
}

export const extractNussuProjectsApplication = (data) => {
    let nussuProjects = [];
    let isNussuProjects = false;
    let current = [];

    for (const item of data) {
        if (isNussuProjects && item.type === "numbered_list_item") {
            for (const subitem of item.content) {
                current.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "Application for NUSSU Projects") {
            isNussuProjects = true;
        } else if (isNussuProjects && item.type === "paragraph") {
            if (current.length != 0) {
                nussuProjects.push(current);
            }
            current = [];
            for (const subitem of item.content) {
                nussuProjects.push(subitem.content);
            }
        } else if (isNussuProjects) {
            break;
        }
    }
    nussuProjects.push(current);
    return nussuProjects;
}

export const extractCandidate = (data) => {
    let candidate = [];
    let isCandidate = false;
    let current = [];

    for (const item of data) {
        if (isCandidate && item.type === "numbered_list_item") {
            for (const subitem of item.content) {
                current.push(subitem.content);
            }
        } else if (item.type === "heading" && item.content === "Who We Are Looking For") {
            isCandidate = true;
        } else if (isCandidate && item.type === "paragraph") {
            if (current.length != 0) {
                candidate.push(current);
            }
            current = [];
            for (const subitem of item.content) {
                candidate.push(subitem.content);
            }
        } else if (isCandidate) {
            break;
        }
    }
    candidate.push(current);
    return candidate;
}