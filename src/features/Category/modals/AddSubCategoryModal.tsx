import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import AddSubCategoryUI from "../ui/AddSubCategoryUi";

function AddSubCategoryModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "add_subcategory";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("add_subcategory")}
			hasConfirm={false}
			childrenEl={AddSubCategoryUI}
			title={"Add Subcategory"}
		/>
	);
}

export default AddSubCategoryModal;
