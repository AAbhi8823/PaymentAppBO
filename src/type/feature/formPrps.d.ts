type transactionStatus = {
  pending: string;
  failed: string;
};

interface formProps {
  transactionStatusOptions: Array<transactionStatus>;
  isStatusPending?: boolean;
  formId: string;
  isEdit?: boolean;
}
