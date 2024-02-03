import { FC } from "react";
import { DateRangePicker, InputField, Select } from "@app/components/form";
import { Button } from "@app/components";
import { useFormContext } from "react-hook-form";

const WithdrawalTransactionForm: FC<withdrawalTransactionFormProps> = (props) => {
  const { control } = useFormContext();
  const { masterData } = props;

  const transactionTypeOptions = masterData?.resData?.data?.transaction_type?.map((item: any) => item);
  const transactionStatusOptions = masterData?.resData?.data?.withdrawal_status?.map((item: any) => item)

  return (
    <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 md:gap-6">
          <InputField control={control} type="text" name="userId" id="userId" label="User Id" placeholder="Enter" />
          <InputField control={control} type="text" name="transactionId" id="transactionId" label="Transaction Id" placeholder="Enter" />
          <InputField control={control} type="number" name="amount" id="amount" label="Amount" placeholder="Enter" />
          <Select control={control} name="transactionType" options={transactionTypeOptions} label="Transaction Type" placeholder="Select" />
          <Select control={control} name="transactionStatus" options={transactionStatusOptions} label="Transaction Status" placeholder="Select" />
          <DateRangePicker name="dateRange" control={control} />
        </div>

        <div className="flex gap-2 mt-6 md:mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" type="reset">Clear</Button>
        </div>
    </div>
  )
}

export default WithdrawalTransactionForm