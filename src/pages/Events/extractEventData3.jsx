export const extractEventsData = (data) => {
    const eventsData = [];
    let currentEventsType = { typeName: null, events: [] };
    let currentEvent = { orientationIndex: 0, eventName: null, description: '', imageLink: null };

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        let isNewEventType = (i + 1 < data.length) && (data[i + 1].type === "heading");

        if (item.type === "heading") {
            if (isNewEventType) {
                if (currentEvent.eventName !== null) {
                    currentEventsType.events.push({...currentEvent});
                }
                if (currentEventsType.typeName !== null) {
                    eventsData.push({...currentEventsType});
                }
                currentEventsType = { typeName: item.content, events: [] };
                currentEvent = { orientationIndex: 0, eventName: null, description: '', imageLink: null };
            } else {
                if (currentEvent.eventName !== null) {
                    currentEventsType.events.push({...currentEvent});
                    currentEvent = { orientationIndex: currentEventsType.events.length % 2, eventName: null, description: '', imageLink: null };
                }
                currentEvent.eventName = item.content;
            }
        } else if (item.type === "paragraph") {
            currentEvent.description += item.content.map(c => c.content).join("\n");
        } else if (item.type === "image") {
            currentEvent.imageLink = item.content;
        }
    }

    // Add the last event and event type if they exist
    if (currentEvent.eventName) {
        currentEventsType.events.push({...currentEvent});
    }
    if (currentEventsType.typeName) {
        eventsData.push({...currentEventsType});
    }

    return eventsData;
};
