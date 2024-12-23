import TableComponent from "containers/Table";
import { AddFn, DeleteFn, UpdateFn } from "containers/Table/components/Actions";
import dayjs from "dayjs";
import { get } from "lodash";
import useGet from "shared/hooks/useGet";
import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import AddBtn from "shared/ui/buttons/add-btn";
import { InputSearch } from "shared/ui/input-search";
import PageTitle from "shared/ui/page-title";
import queryBuilder from "shared/lib/query-builder";
import qs from "qs";

function CategoryUI() {
	const { navigate, query } = useHooks();

	const { data, isLoading } = useGet({
		url: "category",
		name: "category_list",
		params: {
			page: get(query, "page", 1) as number,
			filter: {
				title: get(query, "search_title", ""),
				limit: get(query, "limit", 20) as number,
			},
		},
	});
	const { onModalOpen } = useModalStore();
	return (
		<div className='w-full'>
			<div className='flex w-full justify-between'>
				<PageTitle>Category</PageTitle>
				<InputSearch
					placeholder='Search by title'
					value={get(query, "search_title", "") as string}
					onChange={value => {
						const querystr = qs.stringify({ ...query, search_title: value });
						navigate({ search: querystr }, { replace: true });
					}}
				/>
				<AddBtn onClick={() => onModalOpen({ type: "create_category" })}>Create category</AddBtn>
			</div>

			<div>
				<TableComponent
					items={get(data, "data", [])}
					columns={[
						{
							title: "№",
							render: (_, data, index): any => {
								return <span>{index + 1}</span>;
							},
						},
						{
							title: "ID",
							dataIndex: "id",
							render: (_, data) => {
								return <>{get(data, "id", "-") ?? "-"}</>;
							},
						},
						{
							title: "Category",
							render: (_, data) => {
								return <>{get(data, "title", "-") ?? "-"}</>;
							},
						},
						{
							title: "Last Updated",
							dataIndex: "updatedAt",
							render: (_, data) => {
								return get(data, "updatedAt", "") !== null ? dayjs(get(data, "updatedAt")).format("DD-MM-YYYY HH:mm") : "-";
							},
						},
						{
							title: "Actions",
							render: (_, data) => {
								return (
									<div className='flex gap-1'>
										<AddFn
											title='Add Subcategory'
											onClick={() => {
												const queryStr = queryBuilder(qs.stringify({ ...query, ...data }));
												navigate({ search: queryStr });
												onModalOpen({ type: "add_subcategory" });
											}}
										/>
										<DeleteFn
											onClick={() => {
												const queryStr = queryBuilder(qs.stringify({ id: data.id }));
												navigate({ search: queryStr });
												onModalOpen({ type: "delete_category" });
											}}
										/>
										<UpdateFn
											onClick={() => {
												const queryStr = queryBuilder(qs.stringify({ ...query, ...data }));
												navigate({ search: queryStr });
												onModalOpen({ type: "update_category" });
											}}
										/>
									</div>
								);
							},
						},
					]}
					meta={{
						currentPage: get(query, "page", 1) as number,
						totalCount: +get(data, "meta.total")!,
						perPage: get(query, "limit", 20) as number,
						pageCount: get(data, "meta.totalPages")!,
					}}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}

export default CategoryUI;
