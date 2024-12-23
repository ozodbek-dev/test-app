import { Spin } from "antd";

const Spinner = () => {
	return (
		<div className='fixed inset-0 flex justify-center items-center'>
			<Spin size='large' />
		</div>
	);
};

export default Spinner;
