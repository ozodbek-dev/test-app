import { RootState } from "shared/store";
import { ModalStore, ModalType } from "shared/store/modal/model.types";
import { useAppSelector } from "./useAppSelector";
import { useAppDispatch } from "./useAppDispatch";
import { onClose, onOpen } from "shared/store/modal";

const useModalStore = () => {
	const modalStore: ModalStore = useAppSelector((state: RootState) => state.modal);
	const dispatch = useAppDispatch();
	const onModalOpen = ({ data = {}, type }: { data?: any; type: ModalType }) => {
		dispatch(onOpen({ data, type }));
	};
	const onModalClose = (type: ModalType) => {
		if (modalStore.type === type) {
			dispatch(onClose());
		}
	};
	return { onModalClose, onModalOpen, ...modalStore };
};

export default useModalStore;
