const extractData = (data, match, isNotDupe = true) => {
  let extracted = [];
  let isMatch = false;
  let isFairUse = false;
  for (const item of data) {
    if (isMatch && (isNotDupe || isFairUse) && item.type === "paragraph") {
      let currParagraph = {
        type: "paragraph",
        content: ""
      }
      let currSentence = "";
      for (const subitem of item.content) {
        currSentence += subitem.content;
      }
      currParagraph.content = currSentence;
      extracted.push(currParagraph);
    } else if (isMatch && (isNotDupe || isFairUse) && item.type === "quote") {
      let currParagraph = {
        type: "quote",
        content: ""
      }
      let currSentence = "";
      for (const subitem of item.content) {
        currSentence += subitem.content;
      }
      currParagraph.content = currSentence;
      extracted.push(currParagraph);
    } else if (isMatch && (isNotDupe || isFairUse) && item.type === "image") {
      let currImage = {
        type: "image",
        content: item.content
      }
      extracted.push(currImage);
    } else if (isMatch && (isNotDupe || isFairUse) && item.type === "file") {
      let currFile = {
        type: "file",
        content: item.url
      }
      extracted.push(currFile);
    } else if (isMatch && (isNotDupe || isFairUse) && item.type === "bulleted_list_item") {
      let currBullet = {
        type: "bullet",
        content: ""
      }
      let currSentence = ""
      for (const subitem of item.content) {
        currSentence += subitem.content;
      }
      currBullet.content = currSentence
      extracted.push(currBullet);
    } else if (isMatch && (isNotDupe || isFairUse) && item.type === "numbered_list_item") {
      let currNumber = {
        type: "number",
        content: ""
      }
      let currSentence = ""
      for (const subitem of item.content) {
        currSentence += subitem.content;
      }
      currNumber.content = currSentence
      extracted.push(currNumber);
    } else if (item.type === "heading" && (isNotDupe || isFairUse) && item.content === match) {
      isMatch = true;
    } else if (item.type === "heading" && item.content === "Fair Use") {
      isFairUse = true;
    } else if (isMatch === true) {
      break;
    }
  }
  return extracted;
}

export const extractAnnouncements = (data) => {
  return extractData(data, "Announcements");
}

export const extractProcess = (data) => {
  return extractData(data, "Process for Publicity Requests");
}

export const extractNotes = (data) => {
  return extractData(data, "Notes")
}

export const extractElligibility = (data) => {
  return extractData(data, "Eligibility to use Publicity Platforms")
}

export const extractGeneral = (data) => {
  return extractData(data, "General Guidelines on Publicity Materials")
}

export const extractPublicityMaterials = (data) => {
  return extractData(data, "Publicity Materials Required")
}

export const extractMaterialsEDM = (data) => {
  return extractData(data, "Electronic Digital Mailer (EDM)")
}

export const extractMaterialsInstagram = (data) => {
  return extractData(data, "Instagram")
}

export const extractMaterialsTelegram = (data) => {
  return extractData(data, "Telegram Channel")
}

export const extractMaterialsNoticeboards = (data) => {
  return extractData(data, "Noticeboards")
}

export const extractFairUse = (data) => {
  return extractData(data, "Fair Use")
}

export const extractFairUseEDM = (data) => {
  return extractData(data, "Electronic Digital Mailer (EDM)", false)
}

export const extractFairUseTelegram = (data) => {
  return extractData(data, "Telegram Channel", false)
}

export const extractFairUseInstagram = (data) => {
  return extractData(data, "Instagram Story or Post Sharing")
}

export const extractPDP = (data) => {
  return extractData(data, "Personal Data Protection")
}

export const extractApproval = (data) => {
  return extractData(data, "Approval of Publicity Materials")
}

export const extractNUSSUOrganisations = (data) => {
  return extractData(data, "NUSSU Constituent Clubs, Associate Bodies and other NUS-registered Organisations")
}

export const extractCouncilProjects = (data) => {
  return extractData(data, "Council, EXCO, Committees or Projects")
}

export const extractDesignConsiderations = (data) => {
  return extractData(data, "Design Considerations")
}

export const extractUnionBrandingRequirements = (data) => {
  return extractData(data, "Union branding requirements")
}

export const extractDesign= (data) => {
  return extractData(data, "Design")
}

export const extractContent = (data) => {
  return extractData(data, "Content")
}

export const extractLinks= (data) => {
  return extractData(data, "Links")
}

export const extractDirectives = (data) => {
  return extractData(data, "Directives")
}

