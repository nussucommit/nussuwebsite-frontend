import styles from "./president.module.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";

const PresidentsMessage = () => {
  const url = Routes.backendRoot + Routes.presidentMessage;
  const [isLoading, content] = useFetchData(url);

  function renderTextItem(textItem, textIndex) {
    if (textItem.attribute && textItem.attribute.link) {
      return <a key={textIndex} href={textItem.attribute.link}>{textItem.content}</a>;
    } else if (textItem.attribute && textItem.attribute.bold) {
      return <strong key={textIndex}>{textItem.content}</strong>;
    } else if (textItem.attribute && textItem.attribute.italic) {
      return <em key={textIndex}>{textItem.content}</em>;
    } else {
      return <span key={textIndex}>{textItem.content}</span>;
    }
  }

  return (
    <div>
      <Navbar />
      <div className = {styles.textGeneral}>
        <div className = {styles.container}>
    
          <h1 className = {styles.textTitle}> <br></br> President's<span className={styles.orangeText}>Message</span></h1>
          <svg width="395" height="1" viewBox="0 0 395 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="395" y2="0.5" stroke="black"/>
          </svg>
    
          <div className = {styles.textBody}>
            {content.map((item, index) => {
                switch (item.type) {
                  case 'heading':
                    return <h3 key={index} className = {styles.subTitle}>{item.content}</h3>;
                  case 'paragraph':
                    return (
                      <p key={index} >
                        {item.content.map((textItem, textIndex) => renderTextItem(textItem, textIndex))}
                      </p>
                    );
                  case 'image':
                    return <img key={index} src={item.content} alt="Content" />;
                  case 'bulleted_list_item':
                    return (
                      <ul key={index}>
                        {item.content.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem.content}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default PresidentsMessage;
