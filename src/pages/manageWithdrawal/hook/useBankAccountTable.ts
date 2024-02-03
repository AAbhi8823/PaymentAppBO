const useBankAccountTable = () => {
  const columns = [
    {
      id: 1,
      name: "Bank account Number",
    },
    {
      id: 2,
      name: "Bank Name",
    },
    {
      id: 3,
      name: "Branch Name",
    },
    {
      id: 4,
      name: "Total amount",
    },
    {
      id: 5,
      name: "Status",
    },
    {
      id: 6,
      name: "Edit Action",
    },
    {
      id: 7,
      name: "Delete Action",
    },
  ];

  const data = [
    {
      id: 1,
      bankAccountNumber: 8734727492372,
      bankName: "HDFC",
      branchName: "Greater Noida",
      totalAmount: 4000,
      isActive: true,
    },
    {
      id: 2,
      bankAccountNumber: 889889898989,
      bankName: "Yes Bank",
      branchName: "Lucknow",
      totalAmount: 7000,
      isActive: false,
    },
    {
      id: 3,
      bankAccountNumber: 355800009798,
      bankName: "Bank of India",
      branchName: "New Delhi",
      totalAmount: 5000,
      isActive: true,
    },
    {
      id: 4,
      bankAccountNumber: 896234932423,
      bankName: "Punjab National Bank",
      branchName: "Noida",
      totalAmount: 3000,
      isActive: false,
    },
  ];

  return { columns, data };
};

export default useBankAccountTable;
