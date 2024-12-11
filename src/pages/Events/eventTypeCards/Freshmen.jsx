import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes"; 
import {extractEventsData} from "../extractEventData3.jsx"
import {eventTypeCard} from "./eventTypeCards.jsx"

const Freshmen = () => {
    const url = Routes.backendRoot + Routes.events;
    const [isLoading, content] = useFetchData(url);
    const fullData = extractEventsData(content);
    const freshmenEvents = fullData.filter(item => item.typeName === "Freshmen Orientation Programme");

    return (
        <div>
            {freshmenEvents.map((event, index) => 
                eventTypeCard(event, index)
            )}
        </div>
    );
    
    };

export default Freshmen;