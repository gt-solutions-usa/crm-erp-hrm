import { useCallback, useEffect, useState } from 'react';

import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  RedoOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import { Dropdown, Table, Button, Input, Form, InputNumber, Select } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

import useLanguage from '@/locale/useLanguage';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { generate as uniqueId } from 'shortid';
import { DialogClose } from '@radix-ui/react-dialog';

export default function DataTable({ config, extra = [] }) {
  const translate = useLanguage();

  const [products, setProducts] = useState([
    {
      name: 'Spaghetti',
      quantity: 5,
      price: 1.5,
      discount: 0.1,
      amount: 7.5,
      tax: 0.05,
    },
    {
      name: 'Pizza',
      quantity: 3,
      price: 0.75,
      discount: 0.05,
      amount: 2.14,
      tax: 0.03,
    },
    {
      name: 'Fried Chicken',
      quantity: 2,
      price: 1.25,
      discount: 0.0,
      amount: 2.5,
      tax: 0.07,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    setProducts([...products, {
      ...values,
      name: 'Pizza'
    }]);
    setIsModalOpen(false);
  };

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
            onChange={() => { }}
            placeholder={translate('search')}
            allowClear
          />,
          <Button onClick={() => { }} key={`${uniqueId()}`} icon={<RedoOutlined />}>
            {translate('Refresh')}
          </Button>,

          <>
            <Dialog open={isModalOpen} onClose={handleCancel}>
              <DialogTrigger>
                <Button onClick={() => setIsModalOpen(true)} type="primary">
                  Add New Item
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Item</DialogTitle>
                </DialogHeader>
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    // rules={[{ required: true, message: 'Please input product name!' }]}
                  >
                    <Select
                      placeholder="Select a product"
                      defaultValue='Pizza'
                      options={[
                        { value: 'Pizza', label: 'Pizza' },
                        { value: 'Burger', label: 'Burger' },
                        { value: 'Fries', label: 'Fries' },
                        { value: 'Salad', label: 'Salad' },
                        { value: 'Drink', label: 'Drink' },
                      ]}
                      onChange={(v) => {console.log(v)}}
                    >
                      
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[{ required: true, message: 'Please input quantity!' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input price!' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    label="Discount"
                    name="discount"
                    rules={[{ required: true, message: 'Please input discount!' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    label="Amount"
                    name="amount"
                    rules={[{ required: true, message: 'Please input amount!' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    label="Tax"
                    name="tax"
                    rules={[{ required: true, message: 'Please input tax!' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </DialogContent>
            </Dialog>
          </>

        ]}
        style={{
          padding: '20px 0px',
          direction: true
        }}
      ></PageHeader>

      <Table
        columns={config.dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={products}
        pagination={{ current: 1, pageSize: 10, total: 0 }}
        loading={false}
        onChange={() => { }}
        scroll={{ x: true }}
      />
    </>
  );
}
