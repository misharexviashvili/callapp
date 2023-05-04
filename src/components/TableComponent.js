import { Space, Table } from "antd";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import useStore from "../zustand/zustand";
import { IoTrashOutline } from "react-icons/io5";
import "./TableComponent.css";
const { Column } = Table;

const TableComponent = () => {
  const [data, setData] = useState();
  const dispatchData = useStore((state) => state.saveData);
  const deleteUserHandler = useCallback((id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    axios.delete(`http://127.0.0.1:5000/api/data/${id}`);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await axios.get("http://127.0.0.1:5000/api/data");
        console.log(fetchedData);
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
    <Table dataSource={data} pagination={false} rowKey={(item) => item.id}>
      <Column title="Id" dataIndex="id" key="id" />
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Gender" dataIndex="gender" key="gender" />
      <Column
        title="Address"
        dataIndex="address"
        key="address"
        render={(address) => (
          <p>
            {address?.street}, {address?.city}
          </p>
        )}
      />
      <Column title="Phone" dataIndex="phone" key="phone" />
      <Column
        title="Action"
        key="action"
        render={(item) => (
          <Space size="middle">
            <button
              className="deleteBtn"
              onClick={() => deleteUserHandler(item.id)}
            >
              <IoTrashOutline size={18} color="red" />
            </button>
          </Space>
        )}
      />
    </Table>
  );
};
export default TableComponent;
