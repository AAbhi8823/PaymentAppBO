import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactToastify } from "@app/components";
import { getConvertedTime } from "@app/utils/getConvertTime";
import { getConvertedDate } from "@app/utils/getConvertedDate";
import sideDrawerSchema from "@app/schema/sideDrawerSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const useSideDrawer = (initialState = true) => {
  const [isDrawerClose, setIsDrawerClose] = useState(initialState);
  const [isEdit, setIsEdit] = useState(false);
  const [isStatusPending, setIsStatusPending] = useState(false);
  const methods = useForm<drawerFormSchemaType>({
    mode: "onChange",
    resolver: yupResolver(sideDrawerSchema),
  });
  const { setValue } = methods;

  const autoPopulateDrawerForm = (el) => {
    setValue("userId", el?._id);
    setValue("amount", el?.amount);
    setValue("transactionNo", el?.transaction_id);
    setValue("transactionStatus", el?.transaction_status);
    setValue(
      "transactionDate",
      getConvertedDate(el?.createdAt.split("T")?.[0])
    );
    setValue(
      "transactionTime",
      getConvertedTime(el?.createdAt.split("T")?.[1])
    );
    setValue("accountType", el?.transaction_type);
  };

  const handleEdit = (el) => {
    setIsDrawerClose(!isDrawerClose);
    autoPopulateDrawerForm(el);
    setIsEdit(true);

    if (el?.transaction_status?.toLowerCase() === "pending") {
      setIsStatusPending(true);
      return;
    }

    setIsStatusPending(false);
    ReactToastify("only pending status can be change", "error");
  };

  const handleView = <T>(el: T) => {
    setIsDrawerClose(!isDrawerClose);
    autoPopulateDrawerForm(el);
    setIsEdit(false);
  };

  return {
    isDrawerClose,
    isEdit,
    handleEdit,
    handleView,
    methods,
    setIsDrawerClose,
    isStatusPending,
  };
};

export default useSideDrawer;
