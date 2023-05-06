import { Space, Table } from "antd";
import { IoTrashOutline } from "react-icons/io5";
import { useState } from "react";
import Modal from "./Modal";
import "./TableComponent.css";

const { Column } = Table;

const TableComponent = ({ data, deleteUser }) => {
  const [rowData, setRowData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => {
    setShowModal(true);

    // console.log("MODAL OPENED");
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="btnContainer">
        <button
          className="addBtn"
          onClick={() => {
            openModalHandler();
            setRowData(null);
          }}
        >
          Press here to add user
        </button>
        <button className="addBtn">
          <a href="/piechart">Show pie chart</a>
        </button>
      </div>
      <Modal rowData={rowData} shown={showModal} hideModal={hideModalHandler} />
      <Table
        dataSource={data}
        pagination={false}
        rowKey={(item) => item.id}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              setRowData(record);
              openModalHandler();
              // console.log("Row clicked", record);
            },
          };
        }}
      >
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
              <button className="deleteBtn" onClick={() => deleteUser(item.id)}>
                <IoTrashOutline size={18} color="red" />
              </button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default TableComponent;
