export const extractHistoryData = (data) => {
    const extractedhistoryData = [];
  
    for (let i = 0; i < data.length; i += 4) {
      const year = data[i].content;
      const image = data[i + 1].content;
      const heading = data[i + 2].content;
      const paragraph = data[i + 3].content[0].content;
  
      extractedhistoryData.push({ year, image, heading, paragraph });
    }
  
    return extractedhistoryData;
};
