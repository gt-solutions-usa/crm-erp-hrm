import useLanguage from '@/locale/useLanguage';
import CrudModule from '@/modules/CrudModule/CrudModule';
import EmployeeForm from '@/forms/EmployeeForm';
import dayjs from 'dayjs';
import { useDate } from '@/settings';

export default function CustomerView() {
  const translate = useLanguage();
  const { dateFormat } = useDate();
  const entity = 'employee';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
    outputValue: '_id',
  };

  const deleteModalLabels = ['name', 'surname'];

  const dataTableColumns = [
    {
      title: translate('Product'),
      dataIndex: 'name',
    },
    {
      title: translate('Quantity'),
      dataIndex: 'surname',
    },
    {
      title: translate('Price'),
      dataIndex: 'birthday',
      // render: (date) => {
      //   return dayjs(date).format(dateFormat);
      // },
    },
    {
      title: translate('Discount'),
      dataIndex: 'department',
    },
    {
      title: translate('Amount'),
      dataIndex: 'position',
    },
    {
      title: translate('Tax%'),
      dataIndex: 'phone',
    },
  ];

  const readColumns = [
    {
      title: translate('first name'),
      dataIndex: 'name',
    },
    {
      title: translate('last name'),
      dataIndex: 'surname',
    },
    {
      title: translate('Birthday'),
      dataIndex: 'birthday',
      isDate: true,
    },
    {
      title: translate('birthplace'),
      dataIndex: 'birthplace',
    },
    {
      title: translate('gender'),
      dataIndex: 'gender',
    },
    {
      title: translate('Department'),
      dataIndex: 'department',
    },
    {
      title: translate('Position'),
      dataIndex: 'position',
    },
    {
      title: translate('address'),
      dataIndex: 'address',
    },
    {
      title: translate('state'),
      dataIndex: 'state',
    },
    {
      title: translate('Phone'),
      dataIndex: 'phone',
    },
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('employee'),
    DATATABLE_TITLE: translate('Food Item'),
    ADD_NEW_ENTITY: translate('Add New Item'),
    ENTITY_NAME: translate('employee'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <div className='w-screen flex items-center'>
    <CrudModule
      createForm={<EmployeeForm />}
      updateForm={<EmployeeForm isUpdateForm={true} />}
      config={config}
    />
    </div>

  );
}
