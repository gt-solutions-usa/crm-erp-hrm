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

  const foodOptions = [
    { name: 'Spaghetti', price: 200 },
    { name: 'Pizza', price: 800 },
    { name: 'Fried Chicken', price: 300 },
    { name: 'Burger', price: 450 },
    { name: 'Fries', price: 100 },
    { name: 'Soda', price: 70 },
    { name: 'Water', price: 50 },
    { name: 'Salad', price: 150 },
    { name: 'Ice Cream', price: 100 },
    { name: 'Cake', price: 1000 },
  ];

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

  const [formData, setFormData] = useState({
    name: 'Pizza',
    quantity: 1,
    price: 800,
    discount: 0,
    amount: 1,
    tax: 0,
  });

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = () => {
    setProducts([...products, formData]);
    setIsModalOpen(false);
    setFormData({
      name: 'Pizza',
      quantity: 1,
      price: 800,
      discount: 0,
      amount: 1,
      tax: 0,
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value})
    setFormData({ ...formData, [name]: value});
  };

  const handleNameChange = (e) => {
    const selectedFood = foodOptions.find((option) => option.name === e.target.value);
    setFormData({
      ...formData,
      name: e.target.value,
      price: selectedFood ? selectedFood.price : 0,
      amount: (selectedFood ? selectedFood.price : 0) * formData.quantity - formData.discount,
    });
  };

  const handleQuantityChange = (e) => {
    setFormData({
      ...formData,
      quantity: parseInt(e.target.value),
      amount: formData.price * parseInt(e.target.value) - formData.discount,
    });
  };

  const handleDiscountChange = (e) => {
    setFormData({
      ...formData,
      discount: parseInt(e.target.value),
      amount: formData.price * formData.quantity - parseInt(e.target.value),
    });
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
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <label htmlFor="name">Name:</label>
                    <select
                      id="name"
                      value={formData.name}
                      onChange={handleNameChange}
                      className="w-full border rounded px-3 py-2"
                    >
                      {foodOptions.map((option) => (
                        <option key={option.name} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      type="number"
                      id="quantity"
                      value={formData.quantity}
                      onChange={handleQuantityChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <label htmlFor="price">Price:</label>
                    <input
                      type="number"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2"
                      readOnly
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <label htmlFor="discount">Discount:</label>
                    <input
                      type="number"
                      id="discount"
                      name='discount'
                      value={formData.discount}
                      onChange={handleDiscountChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <label htmlFor="amount">Amount:</label>
                    <input
                      type="number"
                      id="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2"
                      readOnly
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <label htmlFor="tax">Tax:</label>
                    <input
                      type="number"
                      id="tax"
                      name='tax'
                      value={formData.tax}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <button onClick={onFinish} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
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
