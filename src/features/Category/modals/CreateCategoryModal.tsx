

import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import CreateCategoryUI from "../ui/CreateCategoryUI";


function CreateCategoryModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "create_category";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("create_category")}
			hasConfirm={false}
			childrenEl={CreateCategoryUI}
			title={"Create Category"}
		/>
	);
}

export default CreateCategoryModal;
