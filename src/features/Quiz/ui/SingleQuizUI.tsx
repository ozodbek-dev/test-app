/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import { useRef } from "react";
import useGet from "shared/hooks/useGet";
import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import AddBtn from "shared/ui/buttons/add-btn";
import DeleteBtn from "shared/ui/buttons/delete-btn";
import EditBtn from "shared/ui/buttons/edit-btn";
import GoBackBtn from "shared/ui/buttons/go-back";
import FixedBox from "shared/ui/fixed-box";
import ItemWrapper from "shared/ui/item-wrraper";
import PageTitle from "shared/ui/page-title";
import SimpleTable from "shared/ui/simple-table";

function SingleQuizUI() {
	const { params, get } = useHooks();
	const { onModalOpen } = useModalStore();
	const { data } = useGet({ url: `quiz/${get(params, "id", "")}`, name: "get_single_quiz" });
	const { data: subcategory } = useGet({ url: `sub-category/${get(data, "subCategoryId", "")}`, name: "get_single_subcategory" });
	const { data: options } = useGet({
		url: `option`, 
		name: "get_quiz_options",
		params: {
			filter: {
				quizId: get(params, "id", ""),
			},
			limit: 50,
		},
	});
	const ref = useRef(null);

	return (
		<div ref={ref} className='flex flex-col gap-3 max-w-[80%] mx-auto pb-[5rem]'>
			<div className='flex w-full justify-between items-center flex-wrap'>
				<GoBackBtn/>
				<PageTitle>Quiz</PageTitle>
				<p className='text-gray-400 text-md'>{get(params, "id", "")}</p>
			</div>

			<ItemWrapper title={`Quiz`}>
				<SimpleTable
					data={[
						{
							title: "ID",
							value: get(data, "id", "no data"),
						},
						{
							title: "Description",
							value: get(data, "description", "no data"),
						},
						{
							title: "text",
							value: get(data, "text", "no data"),
						},
						{
							title: "Language",
							value: get(data, "language", "no data"),
						},
						{
							title: "Image",
							value: get(data, "image", "no data"),
						},
						{
							title: "CreatedAt",
							value: dayjs(get(subcategory, "createdAt", "no data")).format("DD.MM.YYYY HH:MM"),
						},
						{
							title: "UpdatedAt",
							value: dayjs(get(subcategory, "updatedAt", "no data")).format("DD.MM.YYYY HH:MM"),
						},
					]}
				/>
			</ItemWrapper>
			<ItemWrapper
				title={`Subcategory`}
				extraComponent={<EditBtn onClick={() => onModalOpen({ type: "update_subcategory", data: subcategory })}>Edit</EditBtn>}
			>
				<SimpleTable
					data={[
						{
							title: "ID",
							value: get(subcategory, "id", "no data"),
						},
						{
							title: "Title",
							value: get(subcategory, "title", "no data"),
						},
						{
							title: "CreatedAt",
							value: dayjs(get(subcategory, "createdAt", "no data")).format("DD.MM.YYYY HH:MM"),
						},
						{
							title: "UpdatedAt",
							value: dayjs(get(subcategory, "updatedAt", "no data")).format("DD.MM.YYYY HH:MM"),
						},
					]}
				/>
			</ItemWrapper>
			<ItemWrapper title={`OPTIONS`}>
				<div className='flex flex-col gap-3'>
					{options?.data?.filter((el: any) => el.quiz.id === get(params, "id", "")).length ? (
						options?.data
							.filter((el: any) => el.quiz.id === get(params, "id", ""))
							.map((item: any, index: number) => {
								return (
									<SimpleTable
										key={item.id}
										count={index + 1}
										title={
											<div className='flex gap-2 items-center ml-auto'>
												<EditBtn onClick={() => onModalOpen({ type: "update_option", data: item })}>Edit</EditBtn>
												<DeleteBtn onClick={() => onModalOpen({ type: "delete_option", data: item })}>Delete</DeleteBtn>
											</div>
										}
										data={[
											{
												title: "ID",
												value: get(item, "id", "no data"),
											},
											{
												title: "Text",
												value: get(item, "text", "no data"),
											},
											{
												title: "Language",
												value: get(item, "language", "UZ"),
											},
											{
												title: "is Correct",
												value: `${get(item, "isCorrect", "no data")}`,
											},
											{
												title: "CreatedAt",
												value: dayjs(get(subcategory, "createdAt", "no data")).format("DD.MM.YYYY HH:MM"),
											},
											{
												title: "UpdatedAt",
												value: dayjs(get(subcategory, "updatedAt", "no data")).format("DD.MM.YYYY HH:MM"),
											},
										]}
									/>
								);
							})
					) : (
						<h1>NO OPTIONS FOUND</h1>
					)}
				</div>
			</ItemWrapper>
			<FixedBox rootClassName='w-full items-center  justify-center gap-4'>
				<AddBtn onClick={() => onModalOpen({ type: "create_quiz" })}>Create Quiz</AddBtn>
				<AddBtn className='!bg-red-900  hover:!bg-red-700 transition-all' onClick={() => onModalOpen({ type: "create_option" })}>
					Add Option
				</AddBtn>
				<EditBtn
					onClick={() => {
						onModalOpen({ type: "update_quiz", data });
					}}
				>
					Edit
				</EditBtn>
				<DeleteBtn
					onClick={() => {
						onModalOpen({ type: "delete_quiz", data });
					}}
				>
					Delete
				</DeleteBtn>
			</FixedBox>
		</div>
	);
}

export default SingleQuizUI;
