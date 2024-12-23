import Container from "containers";
import useHooks from "shared/hooks/useHooks";
import toast from "react-hot-toast";
import useModalStore from "shared/hooks/useModalStore";
import { Button } from "antd";
function DeleteQuizUi() {
	const { get,  queryClient, navigate } = useHooks();
	const { onModalClose, data } = useModalStore();
	return (
		<div className='p-4'>
			<Container.Form
				url={`quiz/${get(data, "id", "no-data")}`}
				name='delete_quiz'
				fields={[]}
				onSuccess={async () => {
					toast.success("Successfully Deleted");
					await queryClient.refetchQueries({ queryKey: ["quiz_list"], type: "active" });
          onModalClose("delete_quiz");
          if (data) {
            navigate('quiz')
          }
				}}
				onError={() => {
					toast.error("Xatolik sodir bo'ldi!");
				}}
				method='delete'
			>
				{({ isPending }) => {
					return (
						<div className='flex flex-col gap-3'>
							<p>Are you sure? </p>
							<div className='flex items-center gap-[1rem]'>
								<Button
									onClick={() => onModalClose("delete_quiz")}
									loading={isPending}
									htmlType='reset'
									className='flex items-center opacity-[80%] justify-center text-[16px] gap-[10px] w-[300px] h-[40px] hover:opacity-100 bg-red-800 text-white rounded-[12px] hover:!text-white hover:!bg-red-800'
								>
									No
								</Button>
								<Button
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

export default DeleteQuizUi;
