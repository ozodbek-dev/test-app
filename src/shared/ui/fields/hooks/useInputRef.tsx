/* eslint-disable react-hooks/exhaustive-deps */
import { InputRef } from "antd";
import { FormikErrors, FormikTouched } from "formik";
import useHooks from "shared/hooks/useHooks";
import { useEffect, useRef } from "react";
type TuseRefProps = {
	errors: FormikErrors<any>;
	name: string;
	touched: FormikTouched<any>;
};

const useInputRef = <T extends InputRef>({ errors, name, touched }: TuseRefProps) => {
	const { get } = useHooks();
	const inputRef = useRef<T>(null);

	useEffect(() => {
		if (get(errors, name) && get(touched, name)) {
			inputRef.current?.focus();
			inputRef.current?.blur();
		}
	}, [errors, touched, name]);
	return inputRef;
};

export default useInputRef;
