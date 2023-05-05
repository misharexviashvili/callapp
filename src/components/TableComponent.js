import { Space, Table } from "antd";
import { IoTrashOutline } from "react-icons/io5";
const { Column } = Table;
const TableComponent = ({ data, deleteUser }) => {
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
              onClick={() => deleteUser(item.id)}
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
