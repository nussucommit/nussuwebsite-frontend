import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes"; 
import {extractEventsData} from "../extractEventData3.jsx"
import {eventTypeCard} from "./eventTypeCards.jsx"

const Welfare = () => {
    const url = Routes.backendRoot + Routes.events;
    const [isLoading, content] = useFetchData(url); 
    const fullData = extractEventsData(content);
    const welfareEvents = fullData.filter(item => item.typeName === "Welfare");

    return (
        <div>
            {welfareEvents.map((event, index) => 
                eventTypeCard(event, index)
            )}
        </div>
    );
    
    };

export default Welfare;