import useHooks from "shared/hooks/useHooks";
import useModalStore from "shared/hooks/useModalStore";
import Container from "containers/index";
import { Button } from "antd";
import toast from "react-hot-toast";
function DeleteOptionUI() {
	const { onModalClose , data} = useModalStore();
	const { queryClient, get } = useHooks();
	return (
		<div className='p-4'>
			<Container.Form
				url={`option/${get(data, "id", "no-data")}`}
				name='delete_option'
				fields={[]}
        onSuccess={async () => {
					toast.success("Successfully Deleted");
					await queryClient.refetchQueries({ queryKey: ["get_quiz_options"], type: "active" });
					await queryClient.refetchQueries({ queryKey: ["options_list"], type: "active" });
					onModalClose("delete_option");
				}}
				onError={() => {
					toast.error("Something went wrong!");
				}}
				method='delete'
			>
				{({ isPending }) => {
					return (
						<div className='flex flex-col gap-3'>
							<p>Are you sure? </p>
							<div className='flex items-center gap-[1rem]'>
								<Button
									loading={isPending}
									onClick={() => onModalClose("delete_category")}
									htmlType='reset'
									className='flex items-center opacity-[80%] justify-center text-[16px] gap-[10px] w-[300px] h-[40px] hover:opacity-100 bg-red-800 text-white rounded-[12px] hover:!text-white hover:!bg-red-800'
								>
									No
								</Button>
								<Button
									onClick={() => {}}
									loading={isPending}
									htmlType='submit'
									className='flex items-center opacity-[80%] justify-center text-[16px] gap-[10px] w-[300px] h-[40px] hover:opacity-100 bg-[#1464C0] text-white rounded-[12px] hover:!text-white hover:!bg-[#1464C0]'
								>
									Yes
								</Button>
							</div>
						</div>
					);
				}}
			</Container.Form>
		</div>
	);
}

export default DeleteOptionUI;
