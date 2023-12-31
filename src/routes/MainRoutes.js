import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
//const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
//const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
//const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
//const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const WithdrawalPage = Loadable(lazy(() => import('views/withdrawal-page')));
const SuccessDeposit=Loadable(lazy(() => import('views/deposit-page/SuccessDeposit')));
const FailedDeposit=Loadable(lazy(() => import('views/deposit-page/FailedDeposit')));
const PendingDeposit=Loadable(lazy(() => import('views/deposit-page/PendingDeposit')));
const OpenedAccounts=Loadable(lazy(() => import('views/opened-accounts')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'failed-deposit',
          element: <FailedDeposit />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'success-deposit',
          element: <SuccessDeposit/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'pending-deposit',
          element: <PendingDeposit/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'opened-accounts',
          element: <OpenedAccounts/>
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'withdrawal-transactions',
      element: <WithdrawalPage />
    }
  ]
};

export default MainRoutes;
