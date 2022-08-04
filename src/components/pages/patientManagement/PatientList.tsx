import { Button, Input, Space, Table, Typography, InputRef } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';

import { patientDataInterface } from '../../../redux/interface/patientDataInterface'
import { getPatientDataLS } from '../../../utils/LocalStorageData';
import PatientDetails from './PatientDetails';

const { Title } = Typography;

const PatientList: React.FC = () =>{
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  type DataIndex = keyof patientDataInterface

  const data: patientDataInterface[] | undefined = getPatientDataLS()

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<patientDataInterface> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<patientDataInterface> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: patientDataInterface, b: patientDataInterface): number =>
      a.firstName.localeCompare(b.firstName),
    ...getColumnSearchProps('firstName'),
    render: (text, record) => (
      <span>{record.firstName} {record.lastname} </span>
    )
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a: patientDataInterface, b: patientDataInterface): number =>
      a.email.localeCompare(b.email),
    ...getColumnSearchProps('email')
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    filters: [
      { text: 'Male', value: 'Male' },
      { text: 'Female', value: 'Female' },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: any, record):any => record.gender.includes(value),
  },
  {
    title: 'Ethnicity',
    dataIndex: 'ethnicity',
    key: 'ethnicity',
  },
  {
    title: 'DOB',
    dataIndex: 'DOB',
    key: 'DOB',
    sorter: (a: patientDataInterface, b: patientDataInterface): number =>
      a.DOB.localeCompare(b.DOB),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        < PatientDetails patientData={record} />
        <Link className='textSecondary' to={`/patient-upadate/${record.email}`}>Update</Link> 
      </Space>
    ),
  },
];

  return(
      <section className='container TableContainer'>
          <Title className='formContainerHeading' level={4}>Patient List</Title>
          <Table rowKey={record => record.email} columns={columns} dataSource={data} pagination={{ pageSize:3 }} />;
      </section>
  )
} 
export default PatientList;