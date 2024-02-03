import { lazy } from "react";
import { PROTECTED_ROUTES } from "@app/routes/route.constant";
import { routeList } from "@app/type/routeElement";

// lazy importing for code splitting
const DashBoard = lazy(() => import("@app/pages/dashboard"));
const Deposits = lazy(() => import("@app/pages/deposits"));
const ManageUpi = lazy(() => import("@app/pages/manageUpi"));
const ManageWithdrawal = lazy(() => import("@app/pages/manageWithdrawal"));
const ManageDepositAccount = lazy(() => import("@app/pages/manageDeposit"));
const Withdrawal = lazy(() => import("@app/pages/withdrawal"));
const ChangePassword = lazy(() => import("@app/pages/auth/changePassword"));
const TwoFactorAuth = lazy(() => import("@app/pages/auth/twoFactorAuth"));
const CreateAccount = lazy(() => import("@app/pages/createAccount"));

const routeList: Array<routeList> = [
  {
    path: PROTECTED_ROUTES.DASHBOARD,
    element: DashBoard,
    isLayoutWrapperRequire: true,
  },
  {
    path: PROTECTED_ROUTES.DEPOSITS,
    element: Deposits,
    isLayoutWrapperRequire: true,
  },
  {
    path: PROTECTED_ROUTES.MANAGE_UPI,
    element: ManageUpi,
    isLayoutWrapperRequire: true,
  },
  {
    path: PROTECTED_ROUTES.DEPOSIT_BANK_ACCOUNT,
    element: ManageDepositAccount,
    isLayoutWrapperRequire: true,
  },
  {
    path: PROTECTED_ROUTES.WITHDRAWAL_BANK_ACCOUNT,
    element: ManageWithdrawal,
    isLayoutWrapperRequire: true,
  },
  {
    path: PROTECTED_ROUTES.WITHDRAWALS,
    element: Withdrawal,
    isLayoutWrapperRequire: true,
  },
  {
    path: PROTECTED_ROUTES.CHANGE_PASSWORD,
    element: ChangePassword,
    isLayoutWrapperRequire: false,
  },
  {
    path: PROTECTED_ROUTES.TWO_FACTOR_AUTH,
    element: TwoFactorAuth,
    isLayoutWrapperRequire: true,
  },
  {
    path: PROTECTED_ROUTES.CREATE_ACCOUNT,
    element: CreateAccount,
    isLayoutWrapperRequire: true,
  },
];

export default routeList;
