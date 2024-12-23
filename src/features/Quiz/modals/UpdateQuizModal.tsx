import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import UpdateQuizUi from "../ui/UpdateQuizUi";

function UpdateQuizModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "update_quiz";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("update_quiz")}
			hasConfirm={false}
			childrenEl={UpdateQuizUi}
			title={"Update Quiz"}
		/>
	);
}

export default UpdateQuizModal;
