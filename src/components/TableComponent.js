import { Space, Table } from "antd";
import { useState, useCallback } from "react";
const { Column } = Table;

// const data = [
//   {
//     id: 1,
//     name: "Huffman Butler",
//     email: "huffmanbutler@gology.com",
//     gender: "male",
//     address: {
//       street: "Clermont Avenue",
//       city: "Los Angeles",
//     },
//     phone: "+1 (895) 510-asdasdasd",
//   },
//   {
//     id: 11,
//     name: "Cassandra Nguyen",
//     email: "cassandranguyen@gology.com",
//     gender: "female",
//     address: {
//       street: "Hamilton Avenue",
//       city: "Chicago",
//     },
//     phone: "+1 (946) 426-2243",
//   },
// ];
const TableComponent = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Huffman Butler",
      email: "huffmanbutler@gology.com",
      gender: "male",
      address: {
        street: "Clermont Avenue",
        city: "Los Angeles",
      },
      phone: "+1 (895) 510-asdasdasd",
    },
    {
      id: 2,
      name: "Cassandra Nguyen",
      email: "cassandranguyen@gology.com",
      gender: "female",
      address: {
        street: "Hamilton Avenue",
        city: "Chicago",
      },
      phone: "+1 (946) 426-2243",
    },
  ]);

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
            {address.street}, {address.city}
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
