type dateRangeType = {
    startDate:string;
    endDate:string;
}

interface searchFieldValue {
  amount?: number;
  transactionId?: string;
  transactionStatus?: string;
  transactionType?: string;
  userId?: string;
  dateRange?: dateRangeType;
}
