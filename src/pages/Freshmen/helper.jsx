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
    }
    break;
  }
  return extractedText;
};

export const extractNexus = (data) => {
  let headingCount = 0;
  let extractedText = []; // treat Nexus title and description as one thing since they are unseperatable
  for (const item of data) {
    if (item.type === "heading" && item.content === "WHAT IS NEXUS?") {
      extractedText.push(item.content);
    }
    if (headingCount === 1) {
      extractedText.push(item.content[0].content);
      break;
    }
    headingCount++;
  }
};

export const extractFOPCategory = (data) => {
  let extractedText = [];
  let extractedLink = "";
  let headingCount = 0;
  for (const item of data) {
    const content = item.content;
    if (headingCount === 1) {
      for (const item of content) {
        if ("link" in item.attribute) {
          extractedLink = item.attribute.link;
        }
        extractedText.push(item.content);
      }
      break;
    }
    if (Array.isArray(content) && content.length === 3) {
      for (const item of content) {
        extractedText.push(item.content);
      }
      headingCount++;
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
    if (Array.isArray(item.content) && item.content.length === 0 && start) {
      break;
    }
    if (start && !Array.isArray(item.content)) {
      console.log(1111);
      console.log(item.content);
      extractedQuestion.push(item.content);
    }
    if (start && Array.isArray(item.content)) {
      console.log(2222);
      console.log(item.content);
      extractedAnswer.push(item.content);
    }
    if (item.content === "FAQs") {
      FAQTitle = item.content;
      start = true;
    }
  }
  console.log([FAQTitle, extractedAnswer, extractedQuestion]);
  return [FAQTitle, extractedAnswer, extractedQuestion];
};
