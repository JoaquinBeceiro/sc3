import React, { useEffect, useState } from "react";
import { TitleComponent } from "../../Components";
import GoogleSpreadsheetService from "../../Services/Google";

const Main = props => {
  const [googleRows, setGoogleRows] = useState([]);

  useEffect(() => {
    getRows();
  }, []);

  const getRows = async () => {
    const rows = await GoogleSpreadsheetService.getRows(0);
    if (rows) {
      console.log("rows", rows);
      setGoogleRows(rows);
    }
  };

  return (
    <div>
      <TitleComponent>TODO: Main screen</TitleComponent>
      <ul>
        {googleRows &&
          googleRows.map(({ rowIndex, _rawData }) => (
            <li key={rowIndex}>{_rawData.join(",")}</li>
          ))}
      </ul>
    </div>
  );
};

export default Main;
