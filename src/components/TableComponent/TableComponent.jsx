import { Table } from "antd";
import React, { useState, useRef } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useMemo } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const TableComponent = (props) => {
  const {
    selectionType = "checkbox",
    data: dataSource = [],
    isLoading = false,
    columns,
    filename = [],
    handleDelteMany,
  } = props;
  const [rowSelectedKeys, setRowSelectedKeys] = useState([])

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowSelectedKeys(selectedRowKeys);
    },
  };
  const handleDeleteAll = () => {
    handleDelteMany(rowSelectedKeys);
  };
  const tableRef = useRef(null);

  return (
    <Loading isLoading={isLoading}>
      <DownloadTableExcel
        filename={filename}
        // sheet="users"
        currentTableRef={tableRef.current}
      >
        <ButtonComponent
          size={40}
          styleButton={{
            background: "green",
            height: "36px",
            borderRadius: "4px",
          }}
          textbutton={"Xuất Excel"}
          styleTextButton={{ color: "#fff", fontSize: "14px" }}
        />
      </DownloadTableExcel>
      {rowSelectedKeys.length >= 2 && (
        <div
          style={{
            background: "#1d1ddd",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={handleDeleteAll}
        >
          Xóa tất cả
        </div>
      )}

      <Table
        ref={tableRef}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataSource}
        {...props}
      />
    </Loading>
  );
};

export default TableComponent;
