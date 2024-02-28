export const extractAnnouncement = (data) => {
  let extractedText = "";
  for (const item of data) {
    if (item.type === "paragraph" && item.content.length > 0) {
      const textContent = item.content[0];
      if (textContent.type === "text" && textContent.content) {
        extractedText = textContent.content;
        break; // Stop processing once the text is extracted
      }
    }
  }
  console.log(extractedText);
  return extractedText;
};

export const extractBannerImages = (data) => {
  const bannerImages = [];
  let foundBannerHeading = false;

  for (const item of data) {
    if (item.type === "heading") {
      if (item.content === "Banner") {
        foundBannerHeading = true;
      } else {
        foundBannerHeading = false;
      }
    } else if (foundBannerHeading && item.type === "image") {
      bannerImages.push({
        url: item.content,
      });
    }
  }

  return bannerImages;
};

export const extractEventsImages = (data) => {
  const eventsImages = [];

  let foundEventsHeading = false;

  for (const item of data) {
    if (item.type === "heading") {
      if (item.content === "Slideshow") {
        foundEventsHeading = true;
      } else {
        foundEventsHeading = false;
      }
    } else if (foundEventsHeading && item.type === "image") {
      eventsImages.push({
        url: item.content,
      });
    }
  }

  return eventsImages;
};

export const extractInstagramUrls = (data) => {
  const instagramUrls = [];

  data.forEach((item) => {
    if (item.type === "paragraph") {
      item.content.forEach((contentItem) => {
        console.log(contentItem);
        if (
          contentItem.type === "text" &&
          contentItem.content.startsWith('https')
        ) {
          instagramUrls.push(contentItem.content);
        }
      });
    }
  });
  console.log(instagramUrls);
  return instagramUrls;
};
