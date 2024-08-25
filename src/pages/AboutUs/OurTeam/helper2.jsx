/* returns a list of 2 items
 * 0th item is image url
 * 1st item is array of members
 */
export function parseCellData(data) {
  let image = "";
  let members = [];

  let tempMember = { position: "", name: "", email: "", emailHyperlink: "" };
  let headingCounter = 0;

  // hardcoded - to skip the flawed data in /ourteam/relations
  let i = 0;
  while (i < data.length && data[i].type !== "image") {
    i++;
  }

  for (; i < data.length; i++) {
    const item = data[i];
    if (item.type === "image") {
      image = item.content;
    } else if (item.type === "heading") {
      if (headingCounter === 0) {
        tempMember.position = item.content;
        headingCounter = 1;
      } else {
        tempMember.name = item.content;
        headingCounter = 0;
      }
    } else if (item.type === "paragraph") {
      tempMember.email = item.content[0].content;
      tempMember.emailHyperlink = item.content[0].content;

      // reset
      members.push(tempMember);
      tempMember = { position: "", name: "", email: "", emailHyperlink: "" };
    }
  }

  return [image, members];
}
