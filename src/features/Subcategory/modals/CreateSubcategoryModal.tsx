

import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import CreateSubcategoryUI from "../ui/CreateSubcategoryUI";


function CreateSubcategoryModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "create_subcategory";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("create_subcategory")}
			hasConfirm={false}
			childrenEl={CreateSubcategoryUI}
			title={"Create Subategory"}
		/>
	);
}

export default CreateSubcategoryModal;
