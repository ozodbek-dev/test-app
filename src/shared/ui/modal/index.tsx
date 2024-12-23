import {  Modal } from "antd";
import CloseIcon from "assets/images/icons/CloseIcon";

interface IProps {
	data: { isOpen: boolean; data: any };
	onCancel: () => void;
	childrenEl: React.ComponentType<any>;
	title?: string;
	className?: string;
	hasConfirm?: boolean;
}

const CustomModal: React.FC<IProps> = props => {
	const {
		data: { isOpen, data },
		onCancel = () => { },
		childrenEl: ChildEl,
		title,
		className,
		hasConfirm = false,
	} = props;
	return (
		<Modal
			open={isOpen}
			onCancel={() => {
				onCancel();
			}}
			maskClosable={hasConfirm ? false : true}
			closeIcon={
				<div className='w-[40px] h-[40px] bg-[#A6A6A6] flex items-center justify-center p-[10px] border-0 rounded-[12px] hover:!bg-red-900'>
					<CloseIcon fill='#fff' />
				</div>
			}
			closable={hasConfirm ? false : true}
			footer={null}
			centered
			title={title}
			className={`${className} ${hasConfirm ? "" : "[&_.ant-modal-content]:bg-[#EFF2F5] [&_.ant-modal-header]:bg-[#EFF2F5]"} 
      }] [&_.ant-modal-close]:right-[-40px] [&_.ant-modal-content]:rounded-[12px] [&_.ant-modal-header]:rounded-t-[12px] [&_.ant-modal-close]:top-[0px] [&_.ant-modal-content]:p-0 [&_.ant-modal-title]:px-[20px] [&_.ant-modal-title]:pt-[20px] [&_.ant-modal-title]:text-[24px] [&_.ant-modal-title]:not-italic [&_.ant-modal-title]:font-semibold [&_.ant-modal-title]:leading-[32px] [&_.ant-modal-title]:text-[#1464C0]`}
		>
			<ChildEl {...{ data, isOpen, onCancel }} />
		</Modal>
	);
};

export default CustomModal;
