import useModalStore from 'shared/hooks/useModalStore';
import CustomModal from 'shared/ui/modal';
import CreateQuizUi from '../ui/CreateQuizUi';

function CreateQuizModal() {
  	const { isOpen, onModalClose, data, type } = useModalStore();
		const isModalOpen = isOpen && type === "create_quiz";
 return (
		<CustomModal
			data={{
				isOpen: isModalOpen!,
				data: data,
			}}
			onCancel={() => onModalClose("create_quiz")}
			hasConfirm={false}
			childrenEl={CreateQuizUi}
			title={"Create Quiz"}
		/>
 );
}

export default CreateQuizModal
