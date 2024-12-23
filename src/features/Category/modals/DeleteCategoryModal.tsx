import useModalStore from "shared/hooks/useModalStore";
import CustomModal from "shared/ui/modal";
import DeleteCategoryUI from "../ui/DeleteCategoryUi";

function DeleteCategoryModal() {
	const { isOpen, onModalClose, data, type } = useModalStore();
	const isModalOpen = isOpen && type === "delete_category";
	return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("delete_category")}
			hasConfirm={false}
			childrenEl={DeleteCategoryUI}
			title={"Delete Category"}
		/>
	);
}

export default DeleteCategoryModal;
