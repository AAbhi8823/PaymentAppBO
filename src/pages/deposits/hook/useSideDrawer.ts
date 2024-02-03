import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactToastify } from "@app/components";
import { getConvertedTime } from "@app/utils/getConvertTime";
import { getConvertedDate } from "@app/utils/getConvertedDate";
import { yupResolver } from "@hookform/resolvers/yup";
import sideDrawerSchema from "@app/schema/sideDrawerSchema";

const defaultValues = {
  userId: "",
  amount: null,
  transactionNo: null,
  transactionStatus: null,
  transactionDate: null,
  transactionTime: null,
  newField: null,
};

const useSideDrawer = (initialState = true) => {
  const [isDrawerClose, setIsDrawerClose] = useState(initialState);
  const [isStatusPending, setIsStatusPending] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const methods = useForm<drawerFormSchemaType>({
    defaultValues: defaultValues,
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
    setValue("screenshot", el?.screenshot);
  };

  const handleEdit = (el) => {
    setIsDrawerClose(!isDrawerClose);
    autoPopulateDrawerForm(el);
    setIsEdit(true);

    if (el?.transaction_status?.toLowerCase() === "manual") {
      setIsStatusPending(true);
      return;
    }

    setIsStatusPending(false);
    ReactToastify("only Manual status can be edited", "error");
  };

  const handleView = (el) => {
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
