import Container from "containers";
import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import toast from "react-hot-toast";
import { FastField, Field } from "formik";
import fields from "shared/ui/fields";
import { Button } from "antd";
import TrashIcon from "assets/images/icons/TrashIcon";
import UpdateIcon from "assets/images/icons/UpdateIcon";

function UpdateOptionUI() {
	const { queryClient, get, params } = useHooks();
	const { onModalClose, data } = useModalStore();
	return (
		<div className='p-4'>
			<Container.Form
				url={`option/${get(data, "id", get(params, "id"))}`}
				name='create_option'
				fields={[
					{
						name: "text",
						type: "string",
						value: get(data, "text"),
						required: true,
					},
					{
						name: "answer",
						type: "object",
						required: true,
						value: { value: get(data, "isCorrect", false) == "true" },
					},
					{
						name: "quizId",
						type: "string",
						required: true,
						value: get(data, "quizId","") || "",
					},
				]}
				onSuccess={() => {
					toast.success("Successfully created");
					onModalClose("update_option");
					queryClient.refetchQueries({ queryKey: ["get_quiz_options"] });
					queryClient.refetchQueries({ queryKey: ["options_list"] });
				}}
				onError={() => {
					toast.error("Something went wrong! Please try again!");
				}}
				isCustomizeData
				customizeData={(_, data) => {
					const { answer, ...rest } = data;
					if (get(data, "answer", "")) {
						return {
							...rest,
							isCorrect: get(answer, "value", false),
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

							<Field
								name={"answer"}
								component={fields.Select}
								isClearable={true}
								label={"Answer Type"}
								placeholder={"Select answer type"}
								options={[
									{ value: true, label: "Correct" },
									{ value: false, label: "Wrong" },
								]}
								rootClassName='w-[242px]'
							/>
							<div className='flex items-center gap-[1rem]'>
								<Button
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

export default UpdateOptionUI;
