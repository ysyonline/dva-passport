import React, { Component, PropTypes } from 'react';
import { Table, Popconfirm, Pagination, } from 'antd';
import { getPermissionStatus, getIsAdminStatus } from '../../utils/helper';

const PermissionList = ({
  total,
  current,
  loading,
  dataSource,
  onPageChange,
  onDeleteItem,
  onEditItem,
}) => {

  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: 'scope',
    dataIndex: 'scope',
    key: 'scope',
  }, {
    title: 'key',
    dataIndex: 'key',
    key: 'key',
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
  }, {
    title: '更新时间',
    dataIndex: 'updated_at',
    key: 'updated_at',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record, index) => {
      return (
        <div>
          <a onClick={() => onEditItem(record)}>编辑</a>
          &nbsp;&nbsp;
          <Popconfirm title="确定要删除吗？" onConfirm={() => onDeleteItem(record.id)}>
            <a>删除</a>
          </Popconfirm>
        </div>
      );
    },
  }];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={10}
        onChange={onPageChange}
      />
    </div>
  );
}

PermissionList.propTypes = {
}

export default PermissionList;
