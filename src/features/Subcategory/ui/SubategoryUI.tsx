import TableComponent from "containers/Table";
import { DeleteFn, UpdateFn, ViewFn } from "containers/Table/components/Actions";
import dayjs from "dayjs";
import useGet from "shared/hooks/useGet";
import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import AddBtn from "shared/ui/buttons/add-btn";
import { InputSearch } from "shared/ui/input-search";
import PageTitle from "shared/ui/page-title";
import queryBuilder from "shared/lib/query-builder";
import copyToClipboard from "shared/lib/copy-to-clipboard";

function SubcategoryUI() {
	const { navigate, query, get, qs } = useHooks();

	const { data, isLoading } = useGet({
		url: "sub-category",
		name: "subcategory_list",
		params: {
			page: get(query, "page", 1) as number,
			filter: {
				title: get(query, "search_title", "") as string,
				categoryId: get(query, "categoryID", "") as string,
				limit: get(query, "limit", 20) as number,
			},
		},
	});
	const { onModalOpen } = useModalStore();
	return (
		<div className='w-full'>
			<div className='flex w-full justify-between'>
				<PageTitle>Subcategories</PageTitle>
				<div className='flex gap-3 items-center '>
					<InputSearch
						placeholder='Search by title'
						value={get(query, "search_title", "") as string}
						onChange={value => {
							const querystr = qs.stringify({ ...query, search_title: value });
							navigate({ search: querystr }, { replace: true });
						}}
					/>
					<InputSearch
						placeholder='Search by category ID'
						value={get(query, "categoryID", "") as string}
						onChange={value => {
							const querystr = qs.stringify({ ...query, categoryID: value });
							navigate({ search: querystr }, { replace: true });
						}}
					/>
				</div>
				<AddBtn onClick={() => onModalOpen({ type: "create_subcategory" })}>Create subcategory</AddBtn>
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
								return (
									<div className='cursor-pointer' onClick={() => copyToClipboard(get(data, "id", "-"))}>
										{get(data, "id", "-") ?? "-"}
									</div>
								);
							},
						},
						{
							title: "Title",
							dataIndex: "title",
							render: (_, data) => {
								return <div className='cursor-pointer'>{get(data, "title", "-") ?? "-"}</div>;
							},
						},
						{
							title: "Category Id",
							render: (_, data) => {
								return (
									<div className='cursor-pointer' onClick={() => copyToClipboard(get(data, "category.id", "-"))}>
										{get(data, "category.id", "-") ?? "-"}
									</div>
								);
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
										<ViewFn
											onClick={() => {
												navigate(`${get(data, "id", "")}`);
											}}
										/>
										<DeleteFn
											onClick={() => {
												const queryStr = queryBuilder(qs.stringify({ id: data.id }));
												navigate({ search: queryStr });
												onModalOpen({ type: "delete_subcategory", data });
											}}
										/>
										<UpdateFn
											onClick={() => {
												const queryStr = queryBuilder(qs.stringify({ ...query, ...data }));
												navigate({ search: queryStr });
												onModalOpen({ type: "update_subcategory", data });
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

export default SubcategoryUI;
