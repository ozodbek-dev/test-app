import { ISvgIconProps, SvgIcon } from "shared/ui/SvgIcon";

export default function PlusIcon({ fill = "", ...props }: ISvgIconProps): JSX.Element {
	return (
		<span role='img' aria-label='mail' className='anticon anticon-mail ant-menu-item-icon'>
			<SvgIcon scale={20} viewBox='0 0 20 20' fill={fill} {...props}>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M9.99935 3.33398C10.4596 3.33398 10.8327 3.70708 10.8327 4.16732V15.834C10.8327 16.2942 10.4596 16.6673 9.99935 16.6673C9.53911 16.6673 9.16602 16.2942 9.16602 15.834V4.16732C9.16602 3.70708 9.53911 3.33398 9.99935 3.33398Z'
					fill={fill ? fill : "white"}
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M3.33398 9.99935C3.33398 9.53911 3.70708 9.16602 4.16732 9.16602H15.834C16.2942 9.16602 16.6673 9.53911 16.6673 9.99935C16.6673 10.4596 16.2942 10.8327 15.834 10.8327H4.16732C3.70708 10.8327 3.33398 10.4596 3.33398 9.99935Z'
					fill={fill ? fill : "white"}
				/>
			</SvgIcon>
		</span>
	);
}
