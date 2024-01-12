/* import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes"; */
import {extractEventsData} from "../extractEventData.jsx"
import {eventTypeCard} from "./eventTypeCards.jsx"
import {content} from "../eventsContent.jsx" // temporary, will remove once i can fetch data 

const StudentLife = () => {
    /*const url = Routes.backendRoot + Routes.ourTeam;
    const [isLoading, content] = useFetchData(url); */
    const fullData = extractEventsData(content);
    const studentLifeEvents = fullData.filter(item => item.typeName === "Student Life");

    return (
        <div>
            {studentLifeEvents.map(eventTypeCard)}
        </div>
    );
    
    };

export default StudentLife;