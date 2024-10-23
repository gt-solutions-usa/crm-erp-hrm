import { useCallback, useEffect } from 'react';

import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  RedoOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import { Dropdown, Table, Button, Input } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { selectListItems } from '@/redux/crud/selectors';
import useLanguage from '@/locale/useLanguage';
import { dataForTable } from '@/utils/dataStructure';
import { useMoney, useDate } from '@/settings';

import { generate as uniqueId } from 'shortid';

import { useCrudContext } from '@/context/crud';
import { selectLangDirection } from '@/redux/translate/selectors';

export default function DataTable({ config, extra = [] }) {
  const translate = useLanguage();

  const items = [
    {
      label: translate('Show'),
      key: 'read',
      icon: <EyeOutlined />,
    },
    {
      label: translate('Edit'),
      key: 'edit',
      icon: <EditOutlined />,
    },
    ...extra,
    {
      type: 'divider',
    },

    {
      label: translate('Delete'),
      key: 'delete',
      icon: <DeleteOutlined />,
    },
  ];

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        backIcon={<ArrowLeftOutlined />}
        title='Food'
        ghost={false}
        extra={[
          <Input
            key={`searchFilterDataTable}`}
            onChange={() => {}}
            placeholder={translate('search')}
            allowClear
          />,
          <Button onClick={() => {}} key={`${uniqueId()}`} icon={<RedoOutlined />}>
            {translate('Refresh')}
          </Button>,

          
          <Button onClick={() => {}} type="primary">
          Add New Item
          </Button>
        ]}
        style={{
          padding: '20px 0px',
          direction:true
        }}
      ></PageHeader>

      <Table
        columns={config.dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={[]}
        pagination={{current: 1, pageSize: 10, total: 0}}
        loading={false}
        onChange={() => {}}
        scroll={{ x: true }}
      />
    </>
  );
}
