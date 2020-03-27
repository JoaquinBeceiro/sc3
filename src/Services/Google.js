import { Enviroment } from "../Lib/Config";
import { GoogleSpreadsheet } from "google-spreadsheet";

const getDoc = async () => {
  try {
    const jsonFile = require("../google.json");
    const doc = new GoogleSpreadsheet(Enviroment.GOOGLE_SPREADSHEET_ID);
    await doc.useServiceAccountAuth(jsonFile);
    await doc.loadInfo();

    return doc;
  } catch (e) {
    alert(`Hubo un error en la autenticación: ${e.message}`);
    return null;
  }
};

const addRow = async (rowData, sheetIndex) => {
  try {
    const doc = await getDoc();
    const sheet = doc.sheetsByIndex[sheetIndex];
    await sheet.addRow(rowData);
  } catch (e) {
    alert(`Hubo un error en la autenticación: ${e.message}`);
    return null;
  }
};

const getRows = async sheetIndex => {
  try {
    const doc = await getDoc();
    const sheet = doc.sheetsByIndex[sheetIndex];
    const fetchedRows = await sheet.getRows();
    return fetchedRows;
  } catch (e) {
    alert(`Hubo un error en la autenticación: ${e.message}`);
    return null;
  }
};

export default {
  getRows,
  addRow
};
