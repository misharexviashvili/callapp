import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import useStore from "../zustand/zustand";
import TableComponent from "./TableComponent";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [data, setData] = useState();

  const dispatchData = useStore((state) => state.saveData);
  const deleteUserHandler = useCallback(async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/data/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
      alert("Something went wrong, please reload the page");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await axios.get("http://127.0.0.1:5000/api/data");
        // console.log(fetchedData);
        setData(fetchedData.data);
        // Saves data in Zustand store (Callapp requirement✔️)
        dispatchData(fetchedData.data);
      } catch (err) {
        console.log(err);
        alert("Something went wrong, please try again later");
      }
    };
    getData();
  }, [dispatchData]);

  return (
    <div className="mainDiv">
      <TableComponent deleteUser={deleteUserHandler} data={data} />
    </div>
  );
};
export default HomeScreen;
