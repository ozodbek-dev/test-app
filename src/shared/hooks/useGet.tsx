import { QueryFunctionContext, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "shared/axiosInterceptor";
import queryBuilder from "shared/lib/query-builder";
import { GetRequestReturnType, TParams } from "shared/types/query.types";

interface IQueryKeyArgs {
	url: string;
	params?: TParams | undefined;
}

interface IProps {
	name: string;
	url: string;
	onSuccess?: (data: unknown) => void;
	onError?: (error: unknown) => void;
	queryOptions?: UseQueryOptions<any, any, any, any>;
	params?: TParams | undefined;
}

async function fetch({ queryKey }: QueryFunctionContext<[string, IQueryKeyArgs]>) {
	const { url, params } = queryKey[1];

	const res = await api.get<GetRequestReturnType>(queryBuilder(url, params));
	return res.data;
}

export default function useGet(args: IProps) {
	const { name, onSuccess, onError, queryOptions, url, params } = args;
	const query = useQuery({
		queryKey: [`${name}`, { url, params }],
    queryFn: fetch,
		...queryOptions,
  });
  
  useEffect(() => {
		if (query.isSuccess && onSuccess) {
			onSuccess(query.data);
		}
	}, [query.isSuccess, query.data, onSuccess]);

	useEffect(() => {
		if (query.isError && onError) {
			onError(query.error);
		}
	}, [query.isError, query.error, onError]);

  return query;
}
