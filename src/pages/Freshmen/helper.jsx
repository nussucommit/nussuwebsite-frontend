export const extractHeading = (data) => {
  let extractedText = "";
  for (const item of data) {
    if (item.type === "heading" && item.count.length > 0) {
      const textContent = item.content[0];
      if (textContent.type === "text" && textContent.content) {
        extractedText = textContent.content;
        break;
      }
    }
  }
  return extractedText;
};

export const extractFOP = (data) => {
  let extractedText = "";
  for (const item of data) {
    if (
      item.type === "heading" &&
      item.content === "WHAT IS NUS FRESHMEN ORIENTATION PROGRAMME (FOP)?" &&
      item.count.length > 0
    ) {
      const textContent = item.content[0];
      if (textContent.type === "text" && textContent.content) {
        extractedText = textContent.content;
        break;
      }
    }
  }
  return extractedText;
};


