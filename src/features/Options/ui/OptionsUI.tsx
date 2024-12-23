import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import TableComponent from "containers/Table";
import { DeleteFn, UpdateFn } from "containers/Table/components/Actions";
import dayjs from "dayjs";
import { get } from "lodash";
import useGet from "shared/hooks/useGet";
import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import copyToClipboard from "shared/lib/copy-to-clipboard";
import cn from "shared/lib/tailwind-cls.helper";
import { InputSearch } from "shared/ui/input-search";
import PageTitle from "shared/ui/page-title";

function OptionsUI() {
	const { query, qs, navigate } = useHooks();
	const { data, isLoading } = useGet({
		url: "option",
		name: "options_list",
		params: {
			page: get(query, "page", 1) as number,
			filter: {
				isCorrect: get(query, "isAnswerCorrect", ""),
				text: get(query, "text", ""),
				quizId: get(query, "quizId", ""),
				limit: get(query, "limit", 20) as number,
			},
		},
	});

	const { onModalOpen } = useModalStore();
	return (
		<div className='w-full'>
			<div className='flex w-full justify-between'>
				<PageTitle>Quiz</PageTitle>
				<div className='flex gap-2'>
					<InputSearch
						onChange={value => {
							const queryStr = qs.stringify({ ...query, text: value });
							navigate(
								{
									search: queryStr,
								},
								{ replace: true }
							);
						}}
						value={get(query, "text", "") as string}
						placeholder='Search by text'
					/>
					<InputSearch
						onChange={value => {
							const queryStr = qs.stringify({ ...query, quizId: value });
							navigate(
								{
									search: queryStr,
								},
								{ replace: true }
							);
						}}
						value={get(query, "quizId", "") as string}
						placeholder='Search by quizId'
					/>
				</div>
				<div>
					<Checkbox
						onChange={(e: CheckboxChangeEvent) => {
							const queryStr = qs.stringify({ ...query, isAnswerCorrect: e.target.checked });
							navigate(
								{
									search: queryStr,
								},
								{ replace: true }
							);
						}}
					>
						Filter by answer type
					</Checkbox>
				</div>
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
							width: 200,
							render: (_, data) => {
								return (
									<div className='line-clamp-1' onClick={() => copyToClipboard(get(data, "id", "") as string)}>
										{get(data, "id", "-") ?? "-"}
									</div>
								);
							},
						},
						{
							title: "Quiz ID",
							dataIndex: "quizId",
							width: 200,
							render: (_, data) => {
								return (
									<div onClick={() => copyToClipboard(get(data, "id", "") as string)} className='line-clamp-1'>
										{get(data, "quiz.id", "-") ?? "-"}
									</div>
								);
							},
						},
						{
							title: "Text",
							dataIndex: "text",
							render: (_, data) => {
								return <div className='line-clamp-3'>{get(data, "text", "-") ?? "-"}</div>;
							},
						},
						{
							title: "Is Correct",
							width: 100,
							render: (_, data) => {
								return get(data, "isCorrect", "") !== null ? (
									<div
										className={cn(
											`${get(data, "isCorrect") ? "bg-green-600" : "bg-red-900"}`,
											"text-white rounded-md p-1 flex items-center justify-center"
										)}
									>
										{`${get(data, "isCorrect", "")}`}
									</div>
								) : (
									"-"
								);
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
										<DeleteFn onClick={() => onModalOpen({ type: "delete_option", data })} />
										<UpdateFn onClick={() => onModalOpen({ type: "update_option", data })} />
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

export default OptionsUI;
