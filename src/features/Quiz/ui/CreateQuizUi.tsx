import Container from "containers";
import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import toast from "react-hot-toast";
import { FastField, Field } from "formik";
import fields from "shared/ui/fields";
import { Button } from "antd";
import PlusIcon from "assets/images/icons/PlusIcon";
import TrashIcon from "assets/images/icons/TrashIcon";
import ItemWrapper from "shared/ui/item-wrraper";

function CreateQuizUi() {
	const { queryClient, get, navigate } = useHooks();

	const { onModalClose } = useModalStore();
	return (
		<div className='p-4'>
			<Container.Form
				url='quiz'
				name='create_quiz'
				fields={[
					{
						name: "text",
						type: "string",
						value: "",
						required: true,
					},
					{
						name: "description",
						type: "string",
						value: "",
					},
					{
						name: "language",
						type: "object",
						required: true,
						value: { value: "UZ", label: "UZ" },
					},
					{
						name: "file",
						type: "object",
						required: true,
						value: "",
					},
					{
						name: "sybcategory",
						type: "object",
						value: {},
						required: true,
					},
				]}
				onSuccess={data => {
					console.log(data);
					toast.success("Successfully created");
					queryClient.refetchQueries({ queryKey: ["quiz_list"], type: "active" });
					onModalClose("create_quiz");
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
							image: get(file, 'name', ''),
							...rest,
						};
					}
					return data;
				}}
				contentType='json'
				method='post'
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
									Create
									<PlusIcon />
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

export default CreateQuizUi;
