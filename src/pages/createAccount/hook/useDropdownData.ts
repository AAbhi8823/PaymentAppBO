const useDropDownData = () => {
    const accountTypeOption = [
      {
        label: "Master",
        value: "master",
      },
      {
        label: "Manager",
        value: "manager",
      },
      {
        label: "Agent",
        value: "agent",
      },
    ];

    return { accountTypeOption };
}

export default useDropDownData;