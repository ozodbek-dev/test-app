import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import Container from "containers/index";
import { FastField } from "formik";
import fields from "shared/ui/fields";
import { Button } from "antd";
import PlusIcon from "assets/images/icons/PlusIcon";
import TrashIcon from "assets/images/icons/TrashIcon";
import toast from "react-hot-toast";
function CreateCategoryUI() {
	const {  queryClient } = useHooks();

	const { onModalClose } = useModalStore();
	return (
		<div className='p-4'>
			<Container.Form
				url='category'
				name='create_category'
				fields={[
					{
						name: "title",
						type: "string",
						value: "",
						required: true,
					},
				]}
				onSuccess={() => {
					toast.success("Successfully created");
					queryClient.refetchQueries({ queryKey: ["category_list"],type:'active' });
					onModalClose("create_category");
				}}
				onError={() => {
					toast.error("Xatolik sodir bo'ldi!");
				}}
				contentType='json'
				method='post'
			>
				{({ isPending }) => {
					return (
						<div className='flex flex-col gap-3'>
							<FastField name='title' label={"Category Title"} placeholder={"Title"} component={fields.InputText} />
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

export default CreateCategoryUI;
