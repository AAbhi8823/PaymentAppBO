import { store } from "@app/store/store";
import { Provider } from "react-redux";
import { FC } from "react";
import { storeProviderProps } from "@app/type/storeProvider";

const StoreProvider: FC<storeProviderProps> = (props) => {
  const { children } = props;

  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvider