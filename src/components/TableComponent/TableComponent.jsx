import { Table } from "antd";
import React, { useRef, useState } from "react";
import Loading from "../LoadingComponent/LoadingComponent";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const TableComponent = (props) => {
    const tableRef = useRef(null);
    const { selectionType = 'checkbox', data = [], isLoading = false, columns = [], handleDeleteMany, filename='Export excel' } = props
    const [rowSelectedKeys, setRowSelectedKeys] = useState([])
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setRowSelectedKeys(selectedRowKeys)
        },
        // getCheckboxProps: (record) => ({
        //     disabled: record.name === 'Disabled User',
        //     // Column configuration not to be checked
        //     name: record.name,
        // }),
    };
    const handleDeleteAll = () => {
        handleDeleteMany(rowSelectedKeys)
    }
    return (
        <Loading isLoading={isLoading}>
            <DownloadTableExcel
                filename={filename}
                sheet="users"
                currentTableRef={tableRef.current}
            >

                <ButtonComponent
                    size={40}
                    styleButton={{
                        background: 'green',
                        height: '48px',
                        width: '220px',
                        border: 'none',
                        borderRadius: '4px',
                    }}
                    textButton={'Export excel'}
                    styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>

            </DownloadTableExcel>
            {rowSelectedKeys.length > 0 && (
                <div style={{
                    background: 'blue',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: 10,
                    cursor: 'pointer',
                }}
                    onClick={handleDeleteAll}>
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
                dataSource={data}
                {...props}
            />
        </Loading>

    )
}
export default TableComponent