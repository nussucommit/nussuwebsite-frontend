export const extractPersonsData = (data) => {
	const cellsData = [];
	const imagesData = [];
	const personsData = [];

	let currentPerson = {};
	let headingCounter = 0;
	
	for (const item of data) {
		if (item.content.toString().toLowerCase().includes("cell")) {
			cellsData.push(item);
			continue;
		}
		if (item.type === "image") {
			imagesData.push(item);
		}
		if (item.type === "heading") {
			if (headingCounter === 0) {
				currentPerson.position = item.content;
				headingCounter++;
			} else if (headingCounter === 1) {
				currentPerson.name = item.content;
			}
		}
		if (item.type === "paragraph") {
			const emailData = item.content[0];
			currentPerson.email = emailData.content;
			currentPerson.emailHyperlink = emailData.attribute.link;
			personsData.push({...currentPerson});
			currentPerson = {};
			headingCounter = 0;
		}
	}

	return [cellsData, imagesData, personsData];
}

const obj = [
    {
        "type": "heading",
        "content": "Presidential Cell"
    },
    {
        "type": "image",
        "content": "https://prod-files-secure.s3.us-west-2.amazonaws.com/58192aff-311a-42ce-88ef-f7a68a1798f3/9486b7db-005c-4b38-b48f-df03db455874/PRS-GRP-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231231T123156Z&X-Amz-Expires=3600&X-Amz-Signature=0a9d9ce46b3b365d9aab1b5cbffe4ab42880524a1adfeae3b27cfb5b15957624&X-Amz-SignedHeaders=host&x-id=GetObject"
    },
    {
        "type": "heading",
        "content": "President"
    },
    {
        "type": "heading",
        "content": "Lee Yat Bun"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "NUSSU.president@u.nus.edu",
                "attribute": {
                    "link": "mailto:NUSSU.president@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Executive Assistant to the President"
    },
    {
        "type": "heading",
        "content": "Tia Shi Ting"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "NUSSU.president@u.nus.edu",
                "attribute": {
                    "link": "mailto:NUSSU.president@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Internal Cell"
    },
    {
        "type": "image",
        "content": "https://prod-files-secure.s3.us-west-2.amazonaws.com/58192aff-311a-42ce-88ef-f7a68a1798f3/fcf35c9c-aee5-496f-8ba4-7c32c7a79510/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231231T123156Z&X-Amz-Expires=3600&X-Amz-Signature=0cbf98cc6d83030b7176c582399be4942a1f6476e353370e4ce7505811876e04&X-Amz-SignedHeaders=host&x-id=GetObject"
    },
    {
        "type": "heading",
        "content": "Vice President Internal"
    },
    {
        "type": "heading",
        "content": "Nick Woo Wei Xuan"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "vicepresident.int@u.nus.edu",
                "attribute": {
                    "link": "mailto:vicepresident.int@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Executive Assistant to the Vice President Internal"
    },
    {
        "type": "heading",
        "content": "Jiang Yixuan"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "ea.int@u.nus.edu",
                "attribute": {
                    "link": "mailto:ea.int@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Director of Policy"
    },
    {
        "type": "heading",
        "content": "Ray Rishi Singh Kairon"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "policydirector.ray@u.nus.edu",
                "attribute": {
                    "link": "mailto:policydirector.ray@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Director of Policy"
    },
    {
        "type": "heading",
        "content": "Pranay Nalwade"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "policydirector.pranay@u.nus.edu",
                "attribute": {
                    "link": "mailto:policydirector.pranay@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Union Relations Officer"
    },
    {
        "type": "heading",
        "content": "Lim Xiaoen Emma"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "vicepresident.int@u.nus.edu",
                "attribute": {
                    "link": "mailto:vicepresident.int@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Union Relations Officer"
    },
    {
        "type": "heading",
        "content": "Lin Jiayong"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "vicepresident.int@u.nus.edu",
                "attribute": {
                    "link": "mailto:vicepresident.int@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Union Relations Officer"
    },
    {
        "type": "heading",
        "content": "Heng Ruo Wei"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "vicepresident.int@u.nus.edu",
                "attribute": {
                    "link": "mailto:vicepresident.int@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Union Relations Officer"
    },
    {
        "type": "heading",
        "content": "Anika w"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "vicepresident.int@u.nus.edu",
                "attribute": {
                    "link": "mailto:vicepresident.int@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Union Relations Officer"
    },
    {
        "type": "heading",
        "content": "Nick Woo Wei Xuan"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "vicepresident.int@u.nus.edu",
                "attribute": {
                    "link": "mailto:vicepresident.int@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Union Relations Officer"
    },
    {
        "type": "heading",
        "content": "Nick Woo Wei Xuan"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "vicepresident.int@u.nus.edu",
                "attribute": {
                    "link": "mailto:vicepresident.int@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Relations Cell"
    },
    {
        "type": "heading",
        "content": "Secretariat Cell"
    },
    {
        "type": "heading",
        "content": "Finance Cell"
    },
    {
        "type": "heading",
        "content": "Communications Cell"
    },
    {
        "type": "image",
        "content": "https://prod-files-secure.s3.us-west-2.amazonaws.com/58192aff-311a-42ce-88ef-f7a68a1798f3/2d611088-fed0-441c-93d6-bd229ca9bdf2/COM-GRP-3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231231T123156Z&X-Amz-Expires=3600&X-Amz-Signature=54a51ec1f25bbef68f9b5588a8b90f369d9c11aacc577b9d4c41c253a671ebf5&X-Amz-SignedHeaders=host&x-id=GetObject"
    },
    {
        "type": "heading",
        "content": "Communications Secretary"
    },
    {
        "type": "heading",
        "content": "Marciano Renzo William"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "NUSSU.CommunicationsSec@u.nus.edu",
                "attribute": {
                    "link": "mailto:NUSSU.CommunicationsSec@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Director of Operations"
    },
    {
        "type": "heading",
        "content": "Melissa Anastasia Harijanto"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00447@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00447@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Platforms Executive"
    },
    {
        "type": "heading",
        "content": "Livia Michelle"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00447@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00447@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Platforms Executive"
    },
    {
        "type": "heading",
        "content": "Kenz Antonius"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00447@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00447@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Platforms Executive"
    },
    {
        "type": "heading",
        "content": "Janice Chen"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00444@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00444@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Platforms Executive"
    },
    {
        "type": "heading",
        "content": "Lim Yi Xi Chelsea"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00444@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00444@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Media Relations and Productions Executive"
    },
    {
        "type": "heading",
        "content": "Ko Hyejeon"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00448@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00448@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Media Relations and Productions Executive"
    },
    {
        "type": "heading",
        "content": "Khush Vardhan Saraf"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00448@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00448@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Media Relations and Productions Executive"
    },
    {
        "type": "heading",
        "content": "Bryan Castorius Halim"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00448@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00448@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Media Relations and Productions Executive"
    },
    {
        "type": "heading",
        "content": "Yashma Sonara"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00448@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00448@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Director of The Ridge"
    },
    {
        "type": "heading",
        "content": "Amber Tay Yi Xuan"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00452@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00452@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Chief Director of The Ridge"
    },
    {
        "type": "heading",
        "content": "Ong Sin Yee"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00454@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00454@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Director of Videography & Photography Committee"
    },
    {
        "type": "heading",
        "content": "Leow Yong Sheng"
    },
    {
        "type": "paragraph",
        "content": [
            {
                "type": "text",
                "content": "scb00451@u.nus.edu",
                "attribute": {
                    "link": "mailto:scb00452@u.nus.edu"
                }
            }
        ]
    },
    {
        "type": "heading",
        "content": "Student Life Cell"
    },
    {
        "type": "heading",
        "content": "Student Welfare Cell"
    }
]
console.log(extractPersonsData(obj)[2])