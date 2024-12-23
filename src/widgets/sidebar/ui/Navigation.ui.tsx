import { NavLink } from "react-router";

import { items } from "./data";

interface IProps {
	isCollapsed: boolean;
}

const Navigation = (props: IProps) => {
	const { isCollapsed } = props;

	return (
		<div className='navigation'>
			<div className='navigation-list divide-y'>
				{items.map((item, index) => {
					return (
						<NavLink
							to={item.route}
							key={index}
							className={({ isActive }) => `navigation-item ${isActive ? "active" : ""} ${isCollapsed ? "hide" : ""}`}
						>
							{item.icon} <span className='navigation-item-text'>{item.label}</span>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Navigation;
