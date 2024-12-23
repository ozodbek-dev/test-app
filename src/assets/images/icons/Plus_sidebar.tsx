import { ISvgIconProps } from "shared/ui/SvgIcon";

export default function PlusIconSidebar({ fill = "", ...props }: ISvgIconProps): JSX.Element {
	return (
		<span role='img' aria-label='mail' className='anticon anticon-mail ant-menu-item-icon'>
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
				<path
					d='M21.75 9.75V14.25C21.75 14.6478 21.592 15.0294 21.3107 15.3107C21.0294 15.592 20.6478 15.75 20.25 15.75H15.75V20.25C15.75 20.6478 15.592 21.0294 15.3107 21.3107C15.0294 21.592 14.6478 21.75 14.25 21.75H9.75C9.35218 21.75 8.97064 21.592 8.68934 21.3107C8.40804 21.0294 8.25 20.6478 8.25 20.25V15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V9.75C2.25 9.35218 2.40804 8.97064 2.68934 8.68934C2.97064 8.40804 3.35218 8.25 3.75 8.25H8.25V3.75C8.25 3.35218 8.40804 2.97064 8.68934 2.68934C8.97064 2.40804 9.35218 2.25 9.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V8.25H20.25C20.6478 8.25 21.0294 8.40804 21.3107 8.68934C21.592 8.97064 21.75 9.35218 21.75 9.75Z'
					fill='#1464C0'
				/>
			</svg>
		</span>
	);
}
