import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import styles from "./ourteam.module.css";
import CellCard from "./Cell/CellCard";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useEffect, useState } from "react";
import { parseCellData } from "./helper2";

const cells = [
  {
    cellName: "Pres",
    title: "Presidential & Internal Cell",
    url: "/presidential",
  },
  {
    cellName: "Rel",
    title: "Relations Cell",
    url: "/relations",
  },
  {
    cellName: "Sec",
    title: "Secretariat Cell",
    url: "/secretariat",
  },
  {
    cellName: "Fin",
    title: "Finance Cell",
    url: "/finance",
  },
  {
    cellName: "Comms",
    title: "Communications Cell",
    url: "/communications",
  },
  {
    cellName: "Life",
    title: "Student Life Cell",
    url: "/studentlife",
  },
  {
    cellName: "Welfare",
    title: "Student Welfare Cell",
    url: "/studentwelfare",
  },
];

const OurTeam = () => {
  // state
  const baseUrl = Routes.backendRoot + Routes.ourTeam;
  const [selectedCell, setSelectedCell] = useState(cells[0]);
  const [cellData, setCellData] = useState({ image: "", members: [] });
  const handleCellChange = (cell) => {
    setSelectedCell(cell);
  };

  // fetch data
  const fullUrl = `${baseUrl}${selectedCell.url}`;
  const [isLoading, content] = useFetchData(fullUrl);
  useEffect(() => {
    if (content.length > 0) {
      const [image, members] = parseCellData(content);
      setCellData({ image, members });
    }
  }, [content]);

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Cell selection */}
      <div className={styles["cell-selection"]}>
        <div className={styles["cells"]}>
          {cells.map((cell) => (
            <button
              key={cell.cellName}
              onClick={() => handleCellChange(cell)}
              className={`${
                selectedCell === cell ? styles.selected : styles.unselected
              } ${styles.cell}`}
            >
              {cell.cellName}
            </button>
          ))}
        </div>
      </div>

      {/* Cell Content */}
      <div>
        {isLoading ? (
          <div className={styles.wrapper}></div>
        ) : (
          <CellCard
            cellName={selectedCell.title}
            image={cellData.image}
            members={cellData.members}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;
