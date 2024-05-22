import { useGetChildInfoListQuery } from "@/api/myPage/myPage.query";
import { useMemo } from "react";

export const useGetChildListInfo = () => {
	const { data, isPending } = useGetChildInfoListQuery();

	const childList = useMemo(() => data?.child_list ?? [], [data?.child_list]);

	return { isPending, childList };
};
