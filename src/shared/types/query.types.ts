export type TParams = {
	page?: number;
	title_param?: string | string[];
	limit?: number;
	filter?: any;
	hasQuery?: boolean;
};

export type TMeta = {
	currentPage: number;
	pageCount: number;
	perPage: number;
	totalCount: number;
};




export interface IPermission {
	id: string;
	type: string;
	name: string;
	description: string;
	createdAt: string;
	updatedAt: string;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export type GetRequestReturnType = {
	data:
		| {
				items: any;
				meta?: TMeta;
		  }
		| any;
};

export type TMethod = "post" | "put" | "delete" | "patch" | "get";
export type TObject = Record<string, unknown>;
