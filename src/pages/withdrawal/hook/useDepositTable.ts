const useWithdrawalTable = () => {
    const columns = [
      {
        id: 1,
        name: "user Id",
      },
      {
        id: 2,
        name: "Amount",
      },
      {
        id: 3,
        name: "Withdrawal Request / Transaction no",
      },
      {
        id: 4,
        name: "Status",
      },
      {
        id: 5,
        name: "Type",
      },
      {
        id: 6,
        name: "View",
      },
      {
        id: 7,
        name: "Edit",
      },
    ];

    const data = [
      {
        id: "1",
        userId: 5324,
        amount: 13500,
        transactionNumber: 1148602759,
        status: "Pending",
        type: "Bank A/c",
      },
      {
        id: "2",
        userId: 3328,
        amount: 15000,
        transactionNumber: 1148057204,
        status: "Success",
        type: "Upi",
      },
      {
        id: "3",
        userId: 7392,
        amount: 4000,
        transactionNumber: 1159365929,
        status: "Failed",
        type: "Upi",
      },
      {
        id: "4",
        userId: 3591,
        amount: 50000,
        transactionNumber: 1149205739,
        status: "Success",
        type: "Bank A/c",
      },
    ];

    return { columns, data};
}

export default useWithdrawalTable;