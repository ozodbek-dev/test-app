import "./sidebar.scss";

import { Layout } from "antd";
import Navigation from "./Navigation.ui";

const { Sider } = Layout;
 const SidebarUi = () => {
	// const isCollapsedSidebar = useSelector((state: RootState) => state.system.isCollapsedSidebar);
	return (
		<Sider
			trigger={null}
			collapsible
			className='sidebar active fixed top-[8vh] border border-l-1 shadow-lg z-[10] '
			collapsed={false}
			theme='light'
		>
			<div className='py-10 flex justify-center'>
				<h1 className="text-2xl">Logo</h1>
			</div>
			<Navigation
				isCollapsed={true}
			/>
		</Sider>
	);
};


export default SidebarUi;