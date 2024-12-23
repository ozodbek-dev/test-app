import { MdQuiz } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { ImListNumbered } from "react-icons/im";



export interface IMenuItem {
	key: string;
	label: string;
	icon?: React.ReactNode;
	children?: IMenuItem[];
	route: string;
}

export const items: IMenuItem[] = [
					{
						key: "category",
						label: "Category",
						icon: <BiSolidCategory size={25} width={25} />,
						route: "/",
					},
					{
						key: "subcategory",
						label: "Subcategory",
						icon: <MdCategory size={25} width={25} />,
						route: "/sub-category",
					},
					{
						key: "quiz",
						label: "Quiz",
						icon: <MdQuiz size={25} width={25} />,
						route: "quiz",
					},
					{
						key: "options",
						label: "Options",
						icon: <ImListNumbered size={25} width={25} />,
						route: "options",
					},
				];
