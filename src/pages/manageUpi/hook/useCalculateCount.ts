import { useMemo} from "react";

const useCalculateCount = <T>(allUpiData:Array<T>) => {
    const totalUpiCount = useMemo(() => {
      return allUpiData?.length;
    }, [allUpiData]);

    const activeUpiCount = useMemo(() => {
        return allUpiData?.filter((item) => item?.isActive === true)?.length
    }, [allUpiData])

    const nonActiveUpiCount = useMemo(() => {
        return allUpiData?.filter((item) => item?.isActive === false)?.length
    }, [allUpiData])

    return { totalUpiCount, activeUpiCount, nonActiveUpiCount };
}

export default useCalculateCount;