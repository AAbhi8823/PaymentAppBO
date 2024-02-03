import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@app/store/features/authSlice";
import { loginApi } from "@app/store/services/loginApi";
import { manageUpi } from "@app/store/services/manageUpiList";
import { changePasswordApi } from "@app/store/services/changePasswordApi";
import { withdrawalBankAccountApi } from "@app/store/services/withdrawalBankAccountApi";
import { depositBankAccountApi } from "@app/store/services/depositBankAccountApi";
import { createNewAccountApi } from "@app/store/services/createNewAccountApi";
import { masterApi } from "@app/store/services/masterApi";
import { withdrawalSearchApi } from "@app/store/services/withdrawalSearchApi";
import { changeWithdrawalStatusApi } from "@app/store/services/changeWithdrawalStatusApi";
import { depositSearchApi } from "@app/store/services/depositSearchApi";
import { changeDepositStatusApi } from "@app/store/services/changeDepositStatusApi";
import { manageDepositBankAccountApi } from "@app/store/services/manageDepositBankAccountApi";
import { manageWithdrawalBankAccountApi } from "@app/store/services/manageWithdrawalBankAccountApi";

export const store = configureStore({
  reducer: {
    authReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [manageUpi.reducerPath]: manageUpi.reducer,
    [changePasswordApi.reducerPath]: changePasswordApi.reducer,
    [withdrawalBankAccountApi.reducerPath]: withdrawalBankAccountApi.reducer,
    [depositBankAccountApi.reducerPath]: depositBankAccountApi.reducer,
    [createNewAccountApi.reducerPath]: createNewAccountApi.reducer,
    [masterApi.reducerPath]: masterApi.reducer,
    [withdrawalSearchApi.reducerPath]: withdrawalSearchApi.reducer,
    [changeWithdrawalStatusApi.reducerPath]: changeWithdrawalStatusApi.reducer,
    [depositSearchApi.reducerPath]: depositSearchApi.reducer,
    [changeDepositStatusApi.reducerPath]: changeDepositStatusApi.reducer,
    [manageDepositBankAccountApi.reducerPath]:
      manageDepositBankAccountApi.reducer,
    [manageWithdrawalBankAccountApi.reducerPath]:
      manageWithdrawalBankAccountApi.reducer,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginApi.middleware,
      manageUpi.middleware,
      changePasswordApi.middleware,
      withdrawalBankAccountApi.middleware,
      depositBankAccountApi.middleware,
      createNewAccountApi.middleware,
      masterApi.middleware,
      withdrawalSearchApi.middleware,
      changeWithdrawalStatusApi.middleware,
      depositSearchApi.middleware,
      changeDepositStatusApi.middleware,
      manageDepositBankAccountApi.middleware,
      manageWithdrawalBankAccountApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
