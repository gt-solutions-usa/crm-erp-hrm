import useLanguage from '@/locale/useLanguage';
import CrudModule from '@/modules/CrudModule/CrudModule';
import EmployeeForm from '@/forms/EmployeeForm';
import dayjs from 'dayjs';
import { useDate } from '@/settings';
import DataTable from './DataTable';
import { CrudLayout } from '@/layout';

export default function CustomerView() {
  const translate = useLanguage();
  const { dateFormat } = useDate();
  const entity = 'food';
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
      dataIndex: 'quantity',
    },
    {
      title: translate('Price'),
      dataIndex: 'price',
      // render: (date) => {
      //   return dayjs(date).format(dateFormat);
      // },
    },
    {
      title: translate('Discount%'),
      dataIndex: 'discount',
    },
    {
      title: translate('Tax%'),
      dataIndex: 'tax',
    },
    {
      title: translate('Amount'),
      dataIndex: 'amount',
    },
  ];

  const readColumns = [
    {
      title: translate('Product'),
      dataIndex: 'name',
    },
    {
      title: translate('Quantity'),
      dataIndex: 'quantity',
    },
    {
      title: translate('Price'),
      dataIndex: 'price',
      // render: (date) => {
      //   return dayjs(date).format(dateFormat);
      // },
    },
    {
      title: translate('Discount'),
      dataIndex: 'discount',
    },
    {
      title: translate('Tax%'),
      dataIndex: 'tax',
    },
    {
      title: translate('Amount'),
      dataIndex: 'amount',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('Food'),
    DATATABLE_TITLE: translate('Food Item'),
    ADD_NEW_ENTITY: translate('Add New Item'),
    ENTITY_NAME: translate('food'),
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

  function FixHeaderPanel({ config }) {
    const { crudContextAction } = useCrudContext();
  
    const { collapsedBox } = crudContextAction;
  
    const addNewItem = () => {
      collapsedBox.close();
    };
  
    return (
      <Row gutter={8}>
        <Col className="gutter-row" span={21}>
          <SearchItem config={config} />
        </Col>
        <Col className="gutter-row" span={3}>
          <Button onClick={addNewItem} block={true} icon={<PlusOutlined />}></Button>
        </Col>
      </Row>
    );
  }
  return (
    <div className='w-screen flex items-center'>
    <CrudLayout
      config={config}
      fixHeaderPanel={<FixHeaderPanel config={config} />}
      // sidePanelBottomContent={
      //   <CreateForm config={config} formElements={createForm} withUpload={withUpload} />
      // }
      // sidePanelTopContent={
      //   <SidePanelTopContent config={config} formElements={updateForm} withUpload={withUpload} />
      // }
    >
    <DataTable config={config} />
    </CrudLayout>
    </div>

  );
}
