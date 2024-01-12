/* import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes"; */
import {extractEventsData} from "../extractEventData.jsx"
import {eventTypeCard} from "./eventTypeCards.jsx"
import {content} from "../eventsContent.jsx" // temporary, will remove once i can fetch data 

const Freshmen = () => {
    /*const url = Routes.backendRoot + Routes.ourTeam;
    const [isLoading, content] = useFetchData(url); */
    const fullData = extractEventsData(content);
    const freshmenEvents = fullData.filter(item => item.typeName === "Freshmen Orientation Programme");

    return (
        <div>
            {freshmenEvents.map(eventTypeCard)}
        </div>
    );
    
    };

export default Freshmen;