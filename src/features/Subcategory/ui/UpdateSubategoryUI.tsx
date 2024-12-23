import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import Container from "containers/index";
import { FastField } from "formik";
import fields from "shared/ui/fields";
import { Button } from "antd";
import TrashIcon from "assets/images/icons/TrashIcon";
import toast from "react-hot-toast";
import UpdateIcon from "assets/images/icons/UpdateIcon";
import useGet from "shared/hooks/useGet";
function UpdateSubcategoryUI() {
	const { queryClient, get } = useHooks();

	const { onModalClose, data } = useModalStore();
	const { data: category } = useGet({
		name: "get_singlecategory",
		url: `category/${get(data, "categoryId", "")}`,
		params: { hasQuery: false },
	});
	return (
		<div className='p-4'>
			<Container.Form
				url={`sub-category/${get(data, 'id', '')}`}
				name='create_subcategory'
				fields={[
					{
						name: "title",
						type: "string",
						value: get(data, "title", ""),
						required: true,
					},
					{
						name: "category",
						type: "object",
						value: category || {},
						required: true,
					},
				]}
				onSuccess={() => {
					toast.success("Successfully created");
					queryClient.refetchQueries({ queryKey: ["subcategory_list"], type: "active" });
					onModalClose("create_subcategory");
				}}
				onError={() => {
					toast.error("Xatolik sodir bo'ldi!");
				}}
				isCustomizeData
				customizeData={(_, data: any) => {
					data.categoryId = data.category.id;
					delete data.category;
					return data;
				}}
				contentType='json'
				method='patch'
			>
				{({ isPending, values }) => {
					console.log(values);
					return (
						<div className='flex flex-col gap-3'>
							<FastField
								name='title'
								label={"Subcategory title"}
								placeholder={"Subcategory title"}
								component={fields.InputText}
							/>

							<FastField
								name='category'
								label={"Select Category"}
								placeholder={"Category Id"}
								optionLabel={"title"}
								component={fields.AsyncSelect}
								optionValue={"id"}
								loadOptionsUrl={"category"}
							/>
							<div className='flex items-center gap-[1rem]'>
								<Button
									loading={isPending}
									htmlType='submit'
									className='flex items-center opacity-[80%] justify-center text-[16px] gap-[10px] w-[300px] h-[40px] hover:opacity-100 bg-[#1464C0] text-white rounded-[12px] hover:!text-white hover:!bg-[#1464C0]'
								>
									Update
									<UpdateIcon color="white" />
								</Button>
								<Button
									onClick={() => {}}
									loading={isPending}
									htmlType='reset'
									className='flex items-center opacity-[80%] justify-center text-[16px] gap-[10px] w-[300px] h-[40px] hover:opacity-100 bg-rose-800 text-white rounded-[12px] hover:!text-white hover:!bg-rose-800'
								>
									Clear
									<TrashIcon fill='white' />
								</Button>
							</div>
						</div>
					);
				}}
			</Container.Form>
		</div>
	);
}

export default UpdateSubcategoryUI;
