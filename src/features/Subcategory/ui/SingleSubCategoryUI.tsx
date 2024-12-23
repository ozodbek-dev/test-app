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

function SingleSubcategoryUi() {
	const { params, get } = useHooks();
	const { onModalOpen } = useModalStore();
  const { data } = useGet({ url: `sub-category/${get(params, "id", "")}`, name: "get_single_subcategory" });
    const { data: category } = useGet({
      name: "get_singlecategory",
      url: `category/${get(data, "categoryId", "")}`,
      params: { hasQuery: false },
    });
	const ref = useRef(null);

	return (
		<div ref={ref} className='flex flex-col gap-3 max-w-[80%] mx-auto pb-[5rem]'>
			<div className='flex w-full justify-between items-center flex-wrap'>
				<GoBackBtn />
				<PageTitle>Subcategory</PageTitle>
				<p className='text-gray-400 text-md'>{get(params, "id", "")}</p>
			</div>

			<ItemWrapper title={`Subcategory`} extraTitle={get(data, "id", "")}>
				<SimpleTable
					data={[
						{
							title: "ID",
							value: get(data, "id", "no data"),
						},
						{
							title: "Title",
							value: get(data, "title", "no data"),
						},
						{
							title: "CategoryId",
							value: get(data, "categoryId", "no data"),
						},
						{
							title: "CreatedAt",
							value: dayjs(get(data, "createdAt", "no data")).format("DD.MM.YYYY HH:MM"),
						},

						{
							title: "UpdatedAt",
							value: dayjs(get(data, "updatedAt", "no data")).format("DD.MM.YYYY HH:MM"),
						},
					]}
				/>
			</ItemWrapper>
			<ItemWrapper title={`Category`} extraTitle={get(category, "id", "")}>
				<SimpleTable
					data={[
						{
							title: "ID",
							value: get(category, "id", "no data"),
						},
						{
							title: "Title",
							value: get(category, "title", "no data"),
						},
						{
							title: "CreatedAt",
							value: dayjs(get(category, "createdAt", "no data")).format("DD.MM.YYYY HH:MM"),
						},

						{
							title: "UpdatedAt",
							value: dayjs(get(category, "updatedAt", "no data")).format("DD.MM.YYYY HH:MM"),
						},
					]}
				/>
			</ItemWrapper>

			<FixedBox rootClassName='w-full items-center  justify-center gap-4'>
				<AddBtn onClick={() => onModalOpen({ type: "create_subcategory" })}>Create</AddBtn>
				<EditBtn
					onClick={() => {
						onModalOpen({ type: "update_subcategory", data });
					}}
				>
					Edit
				</EditBtn>
				<DeleteBtn
					onClick={() => {
						onModalOpen({ type: "delete_subcategory", data });
					}}
				>
					Delete
				</DeleteBtn>
			</FixedBox>
		</div>
	);
}

export default SingleSubcategoryUi;
