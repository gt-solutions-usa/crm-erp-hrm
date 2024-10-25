import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { selectAppSettings } from '@/redux/settings/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'antd';

import { useAppContext } from '@/context/appContext';

import Navigation from '@/apps/Navigation/NavigationContainer';
import ExpensesNav from '@/apps/Navigation/ExpensesNav';
import HeaderContent from '@/apps/Header/HeaderContainer';
import PageLoader from '@/components/PageLoader';

import { settingsAction } from '@/redux/settings/actions';

import { translateAction } from '@/redux/translate/actions';
import { selectSettings } from '@/redux/settings/selectors';

import AppRouter from '@/router/AppRouter';

import useResponsive from '@/hooks/useResponsive';

import storePersist from '@/redux/storePersist';
import { selectLangDirection } from '@/redux/translate/selectors';
import { useLocation } from 'react-router-dom';

export default function ErpCrmApp() {
  const location = useLocation()

  let PAGE = ''
  if (location?.pathname?.includes('crm')) {
    PAGE = 'crm'
  } else if (location?.pathname?.includes('erp')) {
    PAGE = 'erp'
  }

  const { Content } = Layout;

  const { state: stateApp, appContextAction } = useAppContext();
  const { app } = appContextAction;
  const { isNavMenuClose, currentApp } = stateApp;

  const { isMobile } = useResponsive();

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(settingsAction.list({ entity: 'setting' }));
  }, []);

  const appSettings = useSelector(selectAppSettings);

  const { isSuccess: settingIsloaded } = useSelector(selectSettings);

  useEffect(() => {
    const { loadDefaultLang } = storePersist.get('firstVisit');
    if (appSettings.idurar_app_language && !loadDefaultLang) {
      dispatch(translateAction.translate(appSettings.idurar_app_language));
      window.localStorage.setItem('firstVisit', JSON.stringify({ loadDefaultLang: true }));
    }
  }, [appSettings]);
  const langDirection = useSelector(selectLangDirection);

  if (settingIsloaded)
    return (
      <Layout hasSider style={{ flexDirection: langDirection === 'rtl' ? 'row-reverse' : 'row' }}>
        {PAGE === 'crm' ? <Navigation /> : PAGE === 'erp' ? <ExpensesNav /> : <></>}
        {/* <Navigation /> */}

        {isMobile ? (
          <Layout style={{ marginLeft: 0 }}>
            {location.pathname !== '/customer' && <HeaderContent />}
            <Content
              style={{
                margin: '40px auto 30px',
                overflow: 'initial',
                width: '100%',
                padding: '0 25px',
                maxWidth: 'none',
              }}
            >
              <AppRouter />
            </Content>
          </Layout>
        ) : (
          <Layout>
            {location.pathname !== '/customer' && <HeaderContent />}
            <Content
              style={{
                margin: PAGE==='' ? '' : '40px auto 30px',
                overflow: 'initial',
                width: '100%',
                padding: PAGE==='' ? '' : '0 50px',
                maxWidth: 1400,
              }}
            >
              <AppRouter />
            </Content>
          </Layout>
        )}
      </Layout>
    );
  else return <PageLoader />;
}
