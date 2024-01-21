import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes"; 
import {extractEventsData} from "../extractEventData3.jsx"
import {eventTypeCard} from "./eventTypeCards.jsx"

const StudentLife = () => {
    const url = Routes.backendRoot + Routes.events;
    const [isLoading, content] = useFetchData(url); 
    
    const fullData = extractEventsData(content);
    const studentLifeEvents = fullData.filter(item => item.typeName === "Student Life");

    console.log(fullData);
    
    return (
        <div>
            {studentLifeEvents.map((event, index) => 
                eventTypeCard(event, index)
            )}
        </div>
    );
    
    };

export default StudentLife;