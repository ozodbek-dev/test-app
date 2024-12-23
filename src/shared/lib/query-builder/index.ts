import { query } from "js-query-builder";
import { get } from "lodash";
import { TParams } from "shared/types/query.types";
const queryBuilder = (
	url: string,
	{ hasQuery = true, limit, page = 1, title_param = "", filter = {} }: TParams = {}
): string => {
	const queryObj = query(url);

	if (hasQuery) {
		if (page) queryObj.param("page", page);
		if (title_param) queryObj.param("title", title_param);
		if (limit) queryObj.param("pageSize", limit);

		if (Object.keys(filter).length) {
			Object.keys(filter).forEach((item: string) => {
				queryObj.param(item, filter[item]);
			});
		}

		return decodeURIComponent(queryObj.build());
	}

	return decodeURIComponent(queryObj.build()).split("?")[0];
};

export default queryBuilder;
