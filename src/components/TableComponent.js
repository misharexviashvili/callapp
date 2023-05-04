import { Space, Table } from "antd";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import useStore from "../zustand/zustand";
const { Column } = Table;

const TableComponent = () => {
  const [data, setData] = useState();
  const dispatchData = useStore((state) => state.saveData);

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
  }, []);
  const deleteUserHandler = useCallback((id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }, []);
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
            <button onClick={() => deleteUserHandler(item.id)}>Delete</button>
          </Space>
        )}
      />
    </Table>
  );
};
export default TableComponent;
