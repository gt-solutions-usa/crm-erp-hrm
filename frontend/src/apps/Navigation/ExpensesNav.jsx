import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';

import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/logo-icon.png';
import logoText from '@/style/images/logo-text.svg';
import { useNavigate } from 'react-router-dom';
import useResponsive from '@/hooks/useResponsive';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  ContainerOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  FileOutlined,
  ShopOutlined,
  FilterOutlined,
  WalletOutlined,
  UsergroupAddOutlined,
  BulbOutlined,
  LinkOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export default function Navigation() {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />; 
}

function Sidebar({ collapsible, isMobile = false }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1));

  const translate = useLanguage();
  const navigate = useNavigate();

  const items = [
    {
      key: 'contact',
      icon: <UsergroupAddOutlined />,
      label: <Link to={'/erp/customer'}>{translate('Contact')}</Link>,
    },
    {
      key: 'company',
      icon: <ShopOutlined />,
      label: <Link to={'/erp/company'}>{translate('companies')}</Link>,
    },
    {
      key: 'opportunity',
      // icon: <FilterOutlined />,
      icon: <BulbOutlined />,
      // label: <Link to={'/erp/lead'}>{translate('leads')}</Link>,
      label: <Link to={'/erp/opportunity'}>{translate('Opportunity')}</Link>,
    },
    {
      key: 'quote',
      icon: <FileOutlined />,
      label: <Link to={'/erp/quote'}>{translate('Quote')}</Link>,
    },
    {
      key: 'task',
      icon: <CheckSquareOutlined />,
      label: <Link to={'/erp/task'}>{translate('Task')}</Link>,
    },
    {
      key: 'note',
      icon: <FileOutlined />,
      label: <Link to={'/erp/note'}>{translate('Note')}</Link>,
    },
    {
      key: 'attachment',
      icon: <LinkOutlined />,
      label: <Link to={'/erp/attachment'}>{translate('Attachment')}</Link>,
    },
    {
      key: 'ticket',
      icon: <TagOutlined />,
      label: <Link to={'/erp/ticket'}>{translate('Ticket')}</Link>,
    },
    {
      label: translate('Settings'),
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'generalSettings',
          label: <Link to={'/erp/settings'}>{translate('settings')}</Link>,
        },

        {
          key: 'paymentMode',
          label: <Link to={'/payment/mode'}>{translate('payments_mode')}</Link>,
        },
        {
          key: 'taxes',
          label: <Link to={'/taxes'}>{translate('taxes')}</Link>,
        },
        {
          key: 'about',
          label: <Link to={'/about'}>{translate('about')}</Link>,
        },
      ],
    },
  ];

  useEffect(() => {
    if (location)
      if (currentPath !== location.pathname) {
        if (location.pathname === '/') {
          setCurrentPath('dashboard');
        } else setCurrentPath(location.pathname.slice(1));
      }
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'relative',
        bottom: '20px',
        ...(!isMobile && {
          background: 'none',
          border: 'none',
          left: '20px',
          top: '20px',
          borderRadius: '8px',
        }),
      }}
      theme={'light'}
    >
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logoIcon} alt="Logo" style={{ marginLeft: '-5px', height: '60px' }} />

        {!showLogoApp && (
          // <img
          //   src={logoText}
          //   alt="Logo"
          //   style={{ marginTop: '3px', marginLeft: '10px', height: '38px' }}
          // />
          <></>
        )}
      </div>
      <Menu
        items={items}
        mode="inline"
        theme={'light'}
        selectedKeys={[currentPath]}
        style={{
          background: 'none',
          border: 'none',
        }}
      />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ marginLeft: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={250}
        contentWrapperStyle={{
          boxShadow: 'none',
        }}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}
