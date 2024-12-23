import Container from "containers";
import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import toast from "react-hot-toast";
import { FastField, Field } from "formik";
import fields from "shared/ui/fields";
import { Button } from "antd";
import TrashIcon from "assets/images/icons/TrashIcon";
import ItemWrapper from "shared/ui/item-wrraper";
import UpdateIcon from "assets/images/icons/UpdateIcon";
import useGet from "shared/hooks/useGet";

function UpdateQuizUi() {
	const { onModalClose, data } = useModalStore();
	const { queryClient, get, navigate } = useHooks();
	const { data: subcategory } = useGet({
		name: "get_singlesubcategory",
		url: `sub-category/${get(data, "subCategoryId", "")}`,
		params: { hasQuery: false },
	});

	return (
		<div className='p-4'>
			<Container.Form
				url={`quiz/${get(data, "id")}`}
				name='update_quiz'
				fields={[
					{
						name: "text",
						type: "string",
						value: get(data, "text", ""),
						required: true,
					},
					{
						name: "description",
						type: "string",
						value: get(data, "description", ""),
					},
					{
						name: "language",
						type: "object",
						required: true,
						value: { value: get(data, "language", "UZ"), label: get(data, "language", "UZ") },
					},
					{
						name: "file",
						type: "object",
						required: true,
						value: { name: get(data, "image", "") },
					},
					{
						name: "subcategory",
						type: "object",
						value: {
							id: get(subcategory, "id", ""),
							title: get(subcategory, "title", ""),
						},
						required: true,
					},
				]}
				onSuccess={data => {
					toast.success("Successfully created");
					queryClient.refetchQueries({ queryKey: ["quiz_list"], type: "active" });
					onModalClose("update_quiz");
					navigate(`/quiz/${data}`);
				}}
				onError={() => {
					toast.error("Something went wrong! Please try again!");
				}}
				isCustomizeData
				customizeData={(_, data) => {
					const { subcategory, language, file, ...rest } = data;
					console.log(file);
					if (get(subcategory, "id", "")) {
						return {
							subCategoryId: get(subcategory, "id", ""),
							language: get(language, "value", "UZ"),
							image: get(file, "name", ""),
							...rest,
						};
					}
					return data;
				}}
				contentType='json'
				method='patch'
			>
				{({ isPending }) => {
					return (
						<div className='flex flex-col gap-3'>
							<FastField name='text' label={"Text"} placeholder={"Enter Text"} component={fields.InputText} />
							<FastField
								name='description'
								label={"Description"}
								placeholder={"Enter  description"}
								component={fields.TextArea}
							/>
							<FastField
								name='subcategory'
								label={"Select Subcategory"}
								placeholder={"Subcategory"}
								optionLabel={"title"}
								component={fields.AsyncSelect}
								optionValue={"id"}
								loadOptionsUrl={"sub-category"}
							/>
							<Field
								name={"language"}
								component={fields.Select}
								isClearable={true}
								label={"Language"}
								placeholder={"Select the Language"}
								options={[
									{ value: "UZ", label: "UZ" },
									{ value: "RU", label: "RU" },
									{ value: "EN", label: "EN" },
								]}
								rootClassName='w-[242px]'
							/>
							<ItemWrapper id='files' title='Upload Image' extraTitle='JPEG, PNG, GIF, JPG'>
								<FastField component={fields.FileUpload} label={"Upload Image"} name='file' />
							</ItemWrapper>
							<div className='flex items-center gap-[1rem]'>
								<Button
									onClick={() => {}}
									loading={isPending}
									htmlType='submit'
									className='flex items-center opacity-[80%] justify-center text-[16px] gap-[10px] w-[300px] h-[40px] hover:opacity-100 bg-[#1464C0] text-white rounded-[12px] hover:!text-white hover:!bg-[#1464C0]'
								>
									Update
									<UpdateIcon color='white' />
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

export default UpdateQuizUi;
