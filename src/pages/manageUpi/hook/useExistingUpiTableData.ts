const useExistingUpiTableData = () => {
  const columns: Array<columns> = [
    {
      id: 1,
      name: "Upi Id's",
    },
    {
      id: 2,
      name: "Status",
    },
    {
      id: 3,
      name: "Edit Action",
    },
    {
      id: 4,
      name: "Delete Action",
    },
  ];

  const data = [
    {
      id: 1,
      upiId: "987622154@paytm",
      isActive: false,
      editBtnText: "Edit",
      deleteBtnText: "Delete",
    },
    {
      id: 2,
      upiId: "arbazakhter@ybl",
      isActive: false,
      editBtnText: "Edit",
      deleteBtnText: "Delete",
    },
  ];

  return { columns, data };
};

export default useExistingUpiTableData;
