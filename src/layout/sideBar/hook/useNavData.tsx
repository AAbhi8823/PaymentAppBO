import { navList } from "@app/type/layout/sidebar";
import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { PROTECTED_ROUTES } from "@app/routes/route.constant";
import { RiLuggageDepositLine } from "react-icons/ri";
import { TbDashboard } from "react-icons/tb";
import { RiCashLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi"
import { SiGnuprivacyguard } from "react-icons/si";

const useNavData = () => {
  const location = useLocation();

  const isCurrentLocationMatched = useCallback(
    (expectedLocation: string) => {
      return expectedLocation === location.pathname ? true : false;
    },
    [location.pathname]
  );

  useEffect(() => {
    isCurrentLocationMatched(location.pathname);
  }, [location.pathname, isCurrentLocationMatched]);

  const navList: Array<navList> = [
    {
      id: 1,
      name: "Dashboard",
      to: PROTECTED_ROUTES.DASHBOARD,
      isActive: isCurrentLocationMatched(PROTECTED_ROUTES.DASHBOARD),
      child: null,
      icon: <TbDashboard size="24" />
    },
    {
      id: 2,
      name: "Deposits",
      to: PROTECTED_ROUTES.DEPOSITS,
      isActive: isCurrentLocationMatched(PROTECTED_ROUTES.DEPOSITS),
      child: null,
      icon: <RiLuggageDepositLine size={24} />,
    },
    {
      id: 3,
      name: "Withdrawal",
      to: PROTECTED_ROUTES.WITHDRAWALS,
      isActive: isCurrentLocationMatched(PROTECTED_ROUTES.WITHDRAWALS),
      child: null,
      icon: <BiMoneyWithdraw size={24} />,
    },
    {
      id: 4,
      name: "Manage deposit",
      icon: <RiCashLine size={24} />,
      to: null,
      child: [
        {
          id: 1,
          to: PROTECTED_ROUTES.MANAGE_UPI,
          isActive: isCurrentLocationMatched(PROTECTED_ROUTES.MANAGE_UPI),
          name: "Upi Account",
        },
        {
          id: 2,
          name: "Bank Accounts",
          to: PROTECTED_ROUTES.DEPOSIT_BANK_ACCOUNT,
          isActive: isCurrentLocationMatched(PROTECTED_ROUTES.DEPOSIT_BANK_ACCOUNT),
        }
      ],
    },
    {
      id: 5,
      name: "Manage Withdrawal",
      icon: <BiMoneyWithdraw size={24} />,
      to: null,
      child: [
        {
          id: 1,
          to: PROTECTED_ROUTES.MANAGE_UPI,
          isActive: isCurrentLocationMatched(PROTECTED_ROUTES.MANAGE_UPI),
          name: "Upi Account",
        },
        {
          id: 2,
          name: "Bank Accounts",
          to: PROTECTED_ROUTES.WITHDRAWAL_BANK_ACCOUNT,
          isActive: isCurrentLocationMatched(PROTECTED_ROUTES.WITHDRAWAL_BANK_ACCOUNT),
        }
      ],
    },
    {
      id: 6,
      name: "Create Account",
      to: PROTECTED_ROUTES.CREATE_ACCOUNT,
      isActive: isCurrentLocationMatched(PROTECTED_ROUTES.CREATE_ACCOUNT),
      icon: < SiGnuprivacyguard size={24} />,
      child: null,
    },
  ];

  return navList;
};

export default useNavData;
