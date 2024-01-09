export const extractFOP = (data) => {
  console.log(data);
  let headingCount = 0;
  let extractedText = []; // treat FOP title and question as one thing since they are unseperatable
  for (const item of data) {
    if (item.type === "heading") {
      const textContent = item.content;
      extractedText.push(textContent);
      if (headingCount === 1) {
        break;
      }
      headingCount++;
    }
  }
  return extractedText;
};

export const extractFOPDesc = (data) => {
  let extractedText = "";
  for (const item of data) {
    if (Array.isArray(item.content)) {
      extractedText = item.content[0].content;
      break;
    }
  }
  return extractedText;
};

export const extractFOPNUS = (data) => {
  let extractedText = "";
  for (const item of data) {
    if (item.content === "FOPs IN NUS") {
      extractedText = item.content;
    }
  }
  return extractedText;
};

export const extractFOPTypeDesc = (data) => {
  let extractedText = [];
  for (const item of data) {
    if (Array.isArray(item.content) && item.content.length === 3) {
      for (const desc of item.content) {
        extractedText.push(desc.content);
      }
      break;
    }
  }
  console.log(extractedText);
  return extractedText;
};

export const extractNexus = (data) => {
  let headingCount = 0;
  let extractedText = []; // treat Nexus title and description as one thing since they are unseperatable
  for (const item of data) {
    if (headingCount === 1) {
      extractedText.push(item.content[0].content);
      break;
    }
    if (item.type === "heading" && item.content === "WHAT IS NEXUS?") {
      extractedText.push(item.content);
      headingCount++;
    }
  }
  return extractedText;
};

export const extractFOPCategory = (data) => {
  let extractedText = [];
  let extractedLink = "";
  for (const item of data) {
    const content = item.content;
    if (
      Array.isArray(content) &&
      content.length === 3 &&
      content[1].attribute.link !== undefined
    ) {
      for (const item of content) {
        extractedText.push(item.content);
      }
      extractedLink = content[1].attribute.link;
    }
  }
  return [extractedText, extractedLink];
};

export const extractFAQ = (data) => {
  let FAQTitle = "";
  let extractedQuestion = [];
  let extractedAnswer = [];
  let start = false;
  for (const item of data) {
    if (start && Array.isArray(item.content) && item.content.length === 0) {
      break;
    }
    if (start && !Array.isArray(item.content)) {
      extractedQuestion.push(item.content);
    }
    if (start && Array.isArray(item.content)) {
      extractedAnswer.push(item.content[0].content);
    }
    if (item.content === "FAQs") {
      FAQTitle = item.content;
      start = true;
    }
  }
  return [FAQTitle, extractedAnswer, extractedQuestion];
};

export const extractTypesOfCamps = (data) => {
  let typeName = [];
  let typeDesc = [];
  for (const item of data) {
    if (item.type === "numbered_list_item") {
      typeName.push(item.content[0].content);
      typeDesc.push(item.content[1].content);
    }
  }
  return [typeName, typeDesc];
};
