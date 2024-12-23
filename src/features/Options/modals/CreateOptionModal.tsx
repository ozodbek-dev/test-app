import CustomModal from 'shared/ui/modal';
import CreateOptionUI from '../ui/CreateOptionUI';
import useModalStore from 'shared/hooks/useModalStore';

function CreateOptionModal() {
  	const { isOpen, onModalClose, data, type } = useModalStore();
		const isModalOpen = isOpen && type === "create_option";
 return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("create_option")}
			hasConfirm={false}
			childrenEl={CreateOptionUI}
			title={"Create Option"}
		/>
 );
}

export default CreateOptionModal
