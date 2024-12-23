import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";
import { Sidebar } from "widgets/sidebar";
import { Header } from "widgets/header";
import ModalProvider from "providers/ModalProvider";
const { Content } = Layout;

const AppLayout: React.FC = () => {
	return (
		<Layout className='h-full w-full'>
			<Sidebar />
			<Layout>
				<Header />
				<ModalProvider/>
				<Content
					className='!h-[92vh] mt-[8vh] ml-[100px] overflow-auto  min-h-[92vh] bg-[#eff2f5]  p-4'
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
