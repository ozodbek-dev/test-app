import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import lodash from "lodash";
import qs from "qs";
import { useLocation, useNavigate, useParams } from "react-router";

const useHooks = () => {
	const queryClient = useQueryClient();
	const location = useLocation();
	const params = useParams();
	const query = qs.parse(location.search, { ignoreQueryPrefix: true });
	const navigate = useNavigate();
	const dateConverter = (date: number | undefined, expectingType: "string" | "object", format?: string | undefined) => {
		if (expectingType === "string") return date ? dayjs.unix(+date).format(format) : null;
		else if (expectingType === "object") return date ? dayjs.unix(+date) : null;
		return null;
	};

	return {
		query,
		location,
		params,
		navigate,
		qs,
		queryClient,
		dateConverter,
		...lodash,
	};
};

export default useHooks;
