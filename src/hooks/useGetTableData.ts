import { useEffect, useRef, useState } from "react";

const useGetTableData = <T>(initialData: Array<T>) => {
  const [tableData, setTableData] = useState(initialData);
  const prevDataRef = useRef<T[]>(initialData); // Store previous data in a ref

  useEffect(() => {
    if (prevDataRef.current !== initialData) {
      setTableData(initialData);
      prevDataRef.current = initialData; // Update ref after state update
    }
  }, [initialData]);

  return { tableData };
};

export default useGetTableData;
