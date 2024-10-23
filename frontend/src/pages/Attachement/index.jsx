import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Attachment() {
  const translate = useLanguage();
  const entity = 'company';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name,phone,eamil',
  };
  const deleteModalLabels = ['name'];

  const Labels = {
    PANEL_TITLE: translate('Attachment'),
    DATATABLE_TITLE: translate('Attachment ist'),
    ADD_NEW_ENTITY: translate('Add New Attachment'),
    ENTITY_NAME: translate('Attachment'),
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
