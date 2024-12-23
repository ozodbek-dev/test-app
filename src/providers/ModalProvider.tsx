import AddSubCategoryModal from "features/Category/modals/AddSubCategoryModal";
import CreateCategoryModal from "features/Category/modals/CreateCategoryModal";
import DeleteCategoryModal from "features/Category/modals/DeleteCategoryModal";
import UpdateCategoryModal from "features/Category/modals/UpdateCategoryModal";
import CreateOptionModal from "features/Options/modals/CreateOptionModal";
import CreateQuizModal from "features/Quiz/modals/CreateQuizModal";
import DeleteQuizModal from "features/Quiz/modals/DeleteQuizModal";
import UpdateOptionModal from "features/Options/modals/UpdateOptionModal";
import UpdateQuizModal from "features/Quiz/modals/UpdateQuizModal";
import CreateSubcategoryModal from "features/Subcategory/modals/CreateSubcategoryModal";
import DeleteSubcategoryModal from "features/Subcategory/modals/DeleteCategoryModal";
import UpdateSubategoryModal from "features/Subcategory/modals/UpdateSubategoryModal";
import DeleteOptionModal from "features/Options/modals/DeleteOptionModal";

function ModalProvider() {
	return (
		<>
			<CreateCategoryModal />
			<DeleteCategoryModal />
			<UpdateCategoryModal />
			<AddSubCategoryModal />
			<CreateSubcategoryModal />
			<DeleteSubcategoryModal />
			<UpdateSubategoryModal />
			<CreateQuizModal />
      <UpdateQuizModal />
      <DeleteQuizModal />
      <CreateOptionModal />
			<UpdateOptionModal />
			<DeleteOptionModal/>
		</>
	);
}

export default ModalProvider;
