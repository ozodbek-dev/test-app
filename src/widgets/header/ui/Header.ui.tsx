import { Badge, Button,  Layout, Tag } from "antd";
import Bell from "assets/images/icons/Bell";
import { Link } from "react-router";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMenuFold4Fill } from "react-icons/ri";

import Clock from "./Clock.ui";

const { Header } = Layout;

const HeaderUi = () => {

	return (
		<Header className='shadow-md flex p-0 bg-white fixed w-full z-[1] h-[8vh]'>
			<Button type='text' className='w-[64px] h-[64px] bg-[#ddebfb]' icon={<RiMenuFold4Fill className='w-10 h-6 ' />} />
			<div className='w-full flex justify-between px-5'>
				<Clock />

				<div className='flex items-center gap-2'>
					<div className='flex gap-4 items-center justify-center'>
						<div className=' items-center  text-lg'>
							<Tag
								style={{
									color: "white",
									backgroundColor: 'green',
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									fontWeight: 700,
									fontSize:"1rem",
									gap: "0.2rem",
									borderRadius: "10px",
									border: "none",
									cursor: "pointer",
								}}
								icon={<MdAdminPanelSettings />}
							>
								Admin
							</Tag>
						</div>
					</div>
					<div className={`w-[52px]  h-[52px]`}>
						<Link to='/notifications'>
							<Badge count={0} className='[&_.ant-badge-count]:bg-[#0EC562]'>
								<div className='flex items-center justify-center w-[52px] h-10 rounded-xl bg-[#F4F4F4] border border-[#E1E1E1]'>
									<Bell />
								</div>
							</Badge>
						</Link>
					</div>
				</div>
			</div>
		</Header>
	);
};

export default HeaderUi;
