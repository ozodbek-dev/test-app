import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import DeleteQuizUi from "../ui/DeleteQuizUi";

function DeleteQuizModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "delete_quiz";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("delete_quiz")}
			hasConfirm={false}
			childrenEl={DeleteQuizUi}
			title={"Delete Quiz"}
		/>
	);
}

export default DeleteQuizModal;
