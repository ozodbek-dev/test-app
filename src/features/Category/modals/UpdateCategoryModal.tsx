

import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import UpdateCategoryUI from "../ui/UpdateCategoryUI";


function UpdateCategoryModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "update_category";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("update_category")}
			hasConfirm={false}
			childrenEl={UpdateCategoryUI}
			title={"Update Category"}
		/>
	);
}

export default UpdateCategoryModal;
