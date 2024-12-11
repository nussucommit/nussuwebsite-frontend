export const extractImage = (data) => {
  let extractedImage = '';
  for (const item of data) {
    if (item.type === 'image' && item.content) {
      extractedImage = item.content;
      break;
    }
  }
  return extractedImage;
};

export const extractHeading = (data) => {
  let extractedHeading = '';
  for (const item of data) {
    if (item.type === 'heading' && item.content) {
      extractedHeading = item.content;
      break;
    }
  }
  return extractedHeading;
};

export const extractStructureDetails = (data) => {
  let details = { heading: "", paragraphs: [] };
  let foundSection = false;

  for (const item of data) {
    if (item.type === 'heading' && item.content === 'Structure') {
      details.heading = item.content;
      foundSection = true;
    } else if (foundSection && (item.type === 'paragraph' || item.type === 'heading')) {
      if (item.type === 'heading' && item.content !== 'NUSSU EXCO') {
        break;
      } else {
        const paragraphs = Array.isArray(item.content) ? item.content : [item.content];
        details.paragraphs.push({
          type: item.type,
          content: paragraphs.map((paragraph) => paragraph.content),
        });
      }
    }
  }

  return details;
};


export const extractImageDetails = (data) => {
  let details = {};
  for (const item of data) {
    if (item.type === 'image' && item.content) {
      details.imageUrl = item.content;
    }
  }
  return details;
};

export const extractNussuCouncilDetails = (data) => {
  let details = { heading: "", paragraphs: [] };
  let foundSection = false;

  for (const item of data) {
    if (item.type === 'heading' && item.content === 'NUSSU Council') {
      details.heading = item.content;
      foundSection = true;
    } else if (foundSection && (item.type === 'paragraph' || item.type === 'heading')) {
      if (item.type === 'heading') {
        break;
      } else if (item.type === 'paragraph') {
        const paragraphs = Array.isArray(item.content) ? item.content.map(p => p.content) : [item.content];
        details.paragraphs.push(...paragraphs);
      }
    }
  }

  return details;
};

export const extractNussuExcoDetails = (data) => {
  let details = { heading: "", sections: [] };
  let foundSection = false;
  let currentSection = null;

  for (const item of data) {
    if (item.type === 'heading' && item.content === 'NUSSU EXCO') {
      details.heading = item.content;
      foundSection = true;
    } else if (foundSection && (item.type === 'paragraph' || item.type === 'heading')) {
      if (item.type === 'heading') {
        if (item.content === 'NUSSU EXCO' || item.content === 'NUSSU Committees') {
          break;
        } else {
          currentSection = { heading: item.content, paragraphs: [] };
          details.sections.push(currentSection);
        }
      } else if (item.type === 'paragraph') {
        const paragraphs = Array.isArray(item.content) ? item.content.map(p => p.content) : [item.content];
        if (currentSection) {
          currentSection.paragraphs.push(...paragraphs);
        }
      }
    }
  }

  return details;
};

export const extractNussuCommitteesDetails = (data) => {
  let details = { heading: "", sections: [] };
  let foundSection = false;
  let currentSection = null;

  for (const item of data) {
    if (item.type === 'heading' && item.content === 'NUSSU Committees') {
      details.heading = item.content;
      foundSection = true;
    } else if (foundSection && (item.type === 'paragraph' || item.type === 'heading')) {
      if (item.type === 'heading') {
        if (item.content === 'NUSSU Committees' || item.content === 'NUSSU Projects') {
          break;
        } else {
          currentSection = { heading: item.content, paragraphs: [] };
          details.sections.push(currentSection);
        }
      } else if (item.type === 'paragraph') {
        const paragraphs = Array.isArray(item.content) ? item.content.map(p => p.content) : [item.content];
        if (currentSection) {
          currentSection.paragraphs.push(...paragraphs);
        }
      }
    }
  }

  return details;
};

export const extractNussuProjectsDetails = (data) => {
  let details = { heading: "", sections: [] };
  let foundSection = false;
  let currentSection = null;

  for (const item of data) {
    if (item.type === 'heading' && item.content === 'NUSSU Projects') {
      details.heading = item.content;
      foundSection = true;
    } else if (foundSection && (item.type === 'paragraph' || item.type === 'heading')) {
      if (item.type === 'heading') {
        if (item.content === 'NUSSU Projects' || item.content === 'NUSSU Constituent Clubs') {
          break;
        } else {
          currentSection = { heading: item.content, paragraphs: [] };
          details.sections.push(currentSection);
        }
      } else if (item.type === 'paragraph') {
        const paragraphs = Array.isArray(item.content) ? item.content : [{ content: item.content, attribute: {} }]; // Ensure paragraphs is an array of objects
        if (currentSection) {
          currentSection.paragraphs.push(...paragraphs);
        }
      }
    }
  }

  return details;
};

export const extractNussuConstituentClubsDetails = (data) => {
  let details = { heading: "", sections: [] };
  let foundSection = false;
  let currentSection = {};

  for (const item of data) {
    if (item.type === 'heading' && item.content === 'NUSSU Constituent Clubs') {
      details.heading = item.content;
      foundSection = true;
    } else if (foundSection && (item.type === 'paragraph' || item.type === 'heading' || item.type === 'image')) {
      if (item.type === 'heading') {
        if (item.content === 'Union Constitution and Regulations' || item.content === 'NUSSU Constituent Clubs') {
          break;
        } else if (currentSection) {
          currentSection = { heading: item.content, paragraphs: [], image: null };
          details.sections.push(currentSection);
        } else {
          currentSection.heading = item.content;
        }
      } else if (item.type === 'paragraph') {
        const paragraphs = Array.isArray(item.content) ? item.content.map(p => p.content) : [item.content];
        if (currentSection) {
          currentSection.paragraphs.push(...paragraphs);
        }
      } else if (item.type === 'image') {
        if (currentSection) {
          currentSection.image = item.content;
        }
      }
    }
  }

  return details;
};



export const extractUnionConstitutionandRegulation = (data) => {
  let details = {heading: "", docs: []}
  let isUnionConstitutionandRegulation = false;
  for (const item of data) {
    if (isUnionConstitutionandRegulation) {
      if (item.type === 'heading') {
        details.heading = item.content
      } else if (item.type === "file") {
        const doc = {
          url: item.url,
          name: item.name
        }
        details.docs.push(doc)
      }
    } else if (item.type === "heading" && item.content === "Union Constitution and Regulations") {
      isUnionConstitutionandRegulation = true;
    }
  }
  return details;
}

