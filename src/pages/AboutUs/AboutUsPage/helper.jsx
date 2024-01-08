export const extractImage = (data) => {
    let extractedImage = "";
    for (const item of data) {
      if (item.type === "image" && item.content) {
        extractedImage = item.content;
        break;
      }
    }
    return extractedImage;
  };
  
  export const extractHeading = (data) => {
    let extractedHeading = "";
    for (const item of data) {
      if (item.type === "heading" && item.content) {
        extractedHeading = item.content;
        break;
      }
    }
    return extractedHeading;
  };
  
  export const extractParagraphs = (data) => {
    const extractedParagraphs = [];
    let currentHeading = null;
  
    for (const item of data) {
      const { type, content } = item;
      
      if (type === "heading") {
        currentHeading = content;
      } else if (type === "paragraph" && content.length > 0) {
        const { type: textType, content: textContent } = content[0];
        
        if (textType === "text" && textContent) {
          if (currentHeading !== "Our Vision" && currentHeading !== "Our Mission") {
            extractedParagraphs.push(textContent);
          }
        }
      }
    }
  
    return extractedParagraphs;
  };
  
  export const extractVision = (data) => {
    const extractedVision = {
      heading: "",
      content: "",
    };
    let foundVisionHeading = false;
    for (const item of data) {
      if (item.type === "heading" && item.content === "Our Vision") {
        foundVisionHeading = true;
      } else if (foundVisionHeading && item.type === "paragraph" && item.content.length > 0) {
        const textContent = item.content[0];
        if (textContent.type === "text" && textContent.content) {
          extractedVision.heading = "Our Vision";
          extractedVision.content = textContent.content;
          break;
        }
      }
    }
    return extractedVision;
  };
  
  export const extractMission = (data) => {
    const extractedMission = {
      heading: "",
      content: "",
    };
    let foundMissionHeading = false;
    for (const item of data) {
      if (item.type === "heading" && item.content === "Our Mission") {
        foundMissionHeading = true;
      } else if (foundMissionHeading && item.type === "paragraph" && item.content.length > 0) {
        const textContent = item.content[0];
        if (textContent.type === "text" && textContent.content) {
          extractedMission.heading = "Our Mission";
          extractedMission.content = textContent.content;
          break;
        }
      }
    }
    return extractedMission;
  };
  