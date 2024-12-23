import TableComponent from "containers/Table";
import { AddFn, DeleteFn, UpdateFn, ViewFn } from "containers/Table/components/Actions";
import dayjs from "dayjs";
import { get } from "lodash";
import useGet from "shared/hooks/useGet";
import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import copyToClipboard from "shared/lib/copy-to-clipboard";
import AddBtn from "shared/ui/buttons/add-btn";
import PageTitle from "shared/ui/page-title";

function QuizUi() {
	const { navigate, query, qs } = useHooks();

	const { data, isLoading } = useGet({
		url: "quiz",
		name: "quiz_list",
		params: {
			page: get(query, "page", 1) as number,
			limit:get(query,'limit',20) as number
		},
	});
	const { onModalOpen } = useModalStore();
	return (
		<div className='w-full'>
			<div className='flex w-full justify-between'>
				<PageTitle>Quiz</PageTitle>
				<AddBtn onClick={() => onModalOpen({ type: "create_quiz" })}>Create Quiz</AddBtn>
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
							width: 300,
							render: (_, data) => {
								return (
									<div onClick={() => copyToClipboard(get(data, "id", ""))} className='line-clamp-1'>
										{get(data, "id", "-") ?? "-"}
									</div>
								);
							},
						},
						{
							title: "Text",
							width: 300,
							render: (_, data) => {
								return <div className={`line-clamp-2`}>{get(data, "text", "") ?? "-"}</div>;
							},
						},
						{
							title: "Language",
							width: 50,
							render: (_, data) => {
								return <>{get(data, "language", "-") ?? "-"}</>;
							},
						},
						{
							title: "SubCategory",
							render: (_, data) => {
								return get(data, "subCategory.title", "") !== null ? get(data, "subCategory.title") : "-";
							},
						},
						{
							title: "UpdatedAt",
							dataIndex: "updatedAt",
							render: (_, data) => {
								return get(data, "updatedAt", "") !== null ? dayjs(get(data, "updatedAt")).format("DD-MM-YYYY HH:mm") : "-";
							},
						},
						{
							title: "CreatedAt",
							dataIndex: "createdAt",
							render: (_, data) => {
								return get(data, "updatedAt", "") !== null ? dayjs(get(data, "createdAt")).format("DD-MM-YYYY HH:mm") : "-";
							},
						},
						{
							title: "Actions",
							render: (_, data) => {
								return (
									<div className='flex gap-1'>
										<ViewFn onClick={() => navigate(`${get(data, "id")}`)} />
										<AddFn
											title='Add Option'
											onClick={() => {
												console.log(get(data, "id", ""));
												onModalOpen({ type: "create_option", data: { quizId: get(data, "id", "") } });
											}}
										/>
										<DeleteFn
											onClick={() => {
												const queryStr = qs.stringify({ ...query, ...data });
												navigate({ search: queryStr });
												onModalOpen({ type: "delete_quiz", data: null });
											}}
										/>
										<UpdateFn onClick={() => onModalOpen({ type: "update_quiz", data })} />
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

export default QuizUi;
