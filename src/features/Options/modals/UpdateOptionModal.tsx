import CustomModal from "shared/ui/modal";
import useModalStore from "shared/hooks/useModalStore";
import UpdateOptionUI from "../ui/UpdateOptionUI";

function UpdateOptionModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "update_option";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("update_option")}
			hasConfirm={false}
			childrenEl={UpdateOptionUI}
			title={"Update Option"}
		/>
	);
}

export default UpdateOptionModal;
