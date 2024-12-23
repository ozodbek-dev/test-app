import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "shared/axiosInterceptor";
import queryBuilder from "shared/lib/query-builder";
import { TMethod, TParams } from "shared/types/query.types";

interface IPostOptions {
	method: TMethod;
	url: string;
	data: any;
	params?: TParams | undefined;
	config?: AxiosRequestConfig;
}

interface IPostProps extends UseMutationOptions<AxiosResponse, Error, IPostOptions> {
	onSuccess?: (data: AxiosResponse) => unknown;
	onError?: (error: Error) => unknown;
}

export async function postData(options: IPostOptions): Promise<AxiosResponse> {
	const { method = "post", url, data, params, config } = options;
	return await api[method](queryBuilder(url, params), data, config);
}

const usePost = ({ onSuccess, onError, ...params }: IPostProps = {}) => {
  return useMutation<AxiosResponse, Error, IPostOptions>({
    mutationFn:postData,
		onSuccess,
		onError,
		...params,
	});
};

export default usePost;
