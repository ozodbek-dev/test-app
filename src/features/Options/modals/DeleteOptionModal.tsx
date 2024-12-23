import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import DeleteOptionUI from "../ui/DeleteOptionUI";

function DeleteOptionModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "delete_option";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("delete_option")}
			hasConfirm={false}
			childrenEl={DeleteOptionUI}
			title={"Delete Option"}
		/>
	);
}

export default  DeleteOptionModal;
