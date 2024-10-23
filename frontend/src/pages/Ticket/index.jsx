import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Ticket() {
  const translate = useLanguage();
  const entity = 'company';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name,phone,eamil',
  };
  const deleteModalLabels = ['name'];

  const Labels = {
    PANEL_TITLE: translate('Ticket'),
    DATATABLE_TITLE: translate('Ticket List'),
    ADD_NEW_ENTITY: translate('Add New Ticket'),
    ENTITY_NAME: translate('Ticket'),
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
