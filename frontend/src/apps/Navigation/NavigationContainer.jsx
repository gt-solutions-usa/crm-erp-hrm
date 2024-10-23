import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';

import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/logo-icon.png';
import logoText from '@/style/images/logo-text.svg';

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
  ReconciliationOutlined,
  UsergroupAddOutlined,
  BulbOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  CodeSandboxOutlined,
  ShoppingCartOutlined,
  CheckSquareOutlined,
  RedEnvelopeOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

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
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/crm/'}>{translate('dashboard')}</Link>,
    },
    {
      key: 'product',
      icon: <CodeSandboxOutlined />,
      // label: <Link to={'/crm/product'}>{translate('products')}</Link>,
      label: <Link to={'/crm/product'}>{translate('Inventory')}</Link>,
    },
    {
      key: 'expenses',
      icon: <PlusSquareOutlined />,
      label: <Link to={'/crm/expenses'}>{translate('Purchase')}</Link>,
      // label: <Link to={'/crm/expenses'}>{translate('expenses')}</Link>,
    },
    {
      key: 'sale',
      icon: <MinusSquareOutlined />,
      label: <Link to={'/crm/sale'}>{translate('Sale')}</Link>,
    },
    {
      key: 'accounts',
      icon: <WalletOutlined />,
      label: <Link to={'/crm/accounts'}>{translate('Accounts')}</Link>,
    },
    {
      key: 'report',
      icon: <FileOutlined />,
      label: <Link to={'/crm/report'}>{translate('Report')}</Link>,
    },
    {
      key: 'pos',
      icon: <ShoppingCartOutlined />,
      label: <Link to={'/crm/pos'}>{translate('POS')}</Link>,
    },
    {
      key: 'offer',
      icon: <CheckSquareOutlined />,
      label: <Link to={'/crm/offer'}>{translate('Offer')}</Link>,
    },
    {
      key: 'media',
      icon: <FileImageOutlined />,
      label: <Link to={'/crm/media'}>{translate('Media')}</Link>,
    },
    {
      key: 'email',
      icon: <RedEnvelopeOutlined />,
      label: <Link to={'/crm/email'}>{translate('Email')}</Link>,
    },
    {
      key: 'store',
      icon: <CheckSquareOutlined />,
      label: <Link to={'/crm/store'}>{translate('Store')}</Link>,
    },
    
    {
      label: translate('Settings'),
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'generalSettings',
          label: <Link to={'/crm/settings'}>{translate('settings')}</Link>,
        },

        {
          key: 'paymentMode',
          label: <Link to={'/crm/payment/mode'}>{translate('payments_mode')}</Link>,
        },
        {
          key: 'taxes',
          label: <Link to={'/crm/taxes'}>{translate('taxes')}</Link>,
        },
        {
          key: 'about',
          label: <Link to={'/crm/about'}>{translate('about')}</Link>,
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

  const langDirection = useSelector(selectLangDirection);
  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      width={256}
      style={{
        overflow: 'auto',
        height: '100vh',
        direction: langDirection,
        position: isMobile ? 'absolute' : 'relative',
        bottom: '20px',
        ...(!isMobile && {
          background: 'none',
          border: 'none',
          [langDirection === 'rtl' ? 'right' : 'left']: '20px',
          top: '20px',
          borderRadius: '8px',
        }),
      }}
      theme={'light'}
    >
      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
        }}
      >
        <img src={logoIcon} alt="Logo" style={{ marginLeft: '-5px', height: '40px' }} />


        {!showLogoApp && (
          // <img
          //   src={logoText}
          //   alt="Logo"
          //   style={{
          //     marginTop: '3px',
          //     marginLeft: '10px',
          //     height: '38px',
          //   }}
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
          width: 256,
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

  const langDirection = useSelector(selectLangDirection);
  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ [langDirection === 'rtl' ? 'marginRight' : 'marginLeft']: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={250}
        contentWrapperStyle={{
          boxShadow: 'none',
        }}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        placement={langDirection === 'rtl' ? 'right' : 'left'}
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}
