

import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import UpdateSubcategoryUI from "../ui/UpdateSubategoryUI";


function UpdateSubategoryModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "update_subcategory";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("update_subcategory")}
			hasConfirm={false}
			childrenEl={UpdateSubcategoryUI}
			title={"Update Subcategory"}
		/>
	);
}

export default UpdateSubategoryModal;
