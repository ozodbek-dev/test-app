import { InputProps } from "antd";
import { FieldProps } from "formik";

export interface ICustomInputProps extends InputProps {
	label: string;
	rootClassName?: string;
	isDisabled?: boolean;
	step?: string | number;
	errorMessage?: string;
}


export type TCustomInputPropsAndFieldProps = ICustomInputProps & FieldProps;