const ROUTES = {
  // auth route or public route
  PUBLIC: {
    LOGIN: "/",
  },

  //protected route
  PROTECTED: {
    DASHBOARD: "/dashboard",
    DEPOSITS: "/deposits",
    MANAGE_UPI: "/manage-upi",
    DEPOSIT_BANK_ACCOUNT: "/deposit-bank-accounts",
    WITHDRAWAL_BANK_ACCOUNT: "/withdrawal-bank-accounts",
    WITHDRAWALS: "/withdrawal",
    CHANGE_PASSWORD: "/change-password",
    CREATE_ACCOUNT:"/create-account",
    TWO_FACTOR_AUTH: "/two-fact-auth",
  },
};

const { PUBLIC: PUBLIC_ROUTES, PROTECTED: PROTECTED_ROUTES } = ROUTES;

export { PUBLIC_ROUTES, PROTECTED_ROUTES };
