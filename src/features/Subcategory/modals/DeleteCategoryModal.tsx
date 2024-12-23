import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import DeleteSubcategoryUI from "../ui/DeleteSubcategoryUi";

function DeleteSubcategoryModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "delete_subcategory";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("delete_subcategory")}
			hasConfirm={false}
			childrenEl={DeleteSubcategoryUI}
			title={"Delete Subcategory"}
		/>
	);
}

export default DeleteSubcategoryModal;
