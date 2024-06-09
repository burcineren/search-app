import axios from 'axios';

export async function fetchData() {
  try {
    const dataUrl = import.meta.env.VITE_DATA_URL;
    const colsUrl = import.meta.env.VITE_COLS_URL;

    if (!dataUrl || !colsUrl) {
      throw new Error("Environment variables for API URLs are not defined.");
    }

    const [dataRes, colsRes] = await Promise.all([
      axios.get(dataUrl),
      axios.get(colsUrl),
    ]);

    const dataItem = dataRes.data;
    const colsItem = colsRes.data;

    return dataItem.map((responseItem: any) => {
      const bindingObject: any = {};
      for (const key in colsItem) {
        bindingObject[colsItem[key]] = responseItem[key];
      }
      return bindingObject;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
