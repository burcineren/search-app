import axios from "axios";

export async function fetchData() {
  try {
    const [dataRes, colsRes] = await Promise.all([
      axios.get("http://localhost:3000/data"),
      axios.get("http://localhost:3000/cols"),
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
