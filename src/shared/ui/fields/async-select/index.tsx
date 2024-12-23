
import cn from "shared/lib/tailwind-cls.helper";
import { get } from "lodash";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { IAsyncSelectProps } from "../input.types";
import useInputRef from "../hooks/useInputRef";
import api from "shared/axiosInterceptor";
import queryBuilder from "shared/lib/query-builder";
const AsyncSelect = ({
	loadOptionsUrl,
	loadOptionsParams = () => ({}),
	filterParams,
	loadOptionsKey = "data",
	onChange = () => {},
	extraOptions = [],
	isSearchable,
	disableOptions = [],
	isClearable,
	isDisabled,
	placeholder,
	optionLabel,
	optionValue,
	rootClassName,
	label,
	isMulti,
	menuPlacement,
	field: { value, name },
	form: { errors, setFieldValue, setFieldTouched, touched },
}: IAsyncSelectProps & any) => {
	const loadOptions = async (searchQuery: any, _: any, { page }: any) => {
		const { data } = await api.get(
			queryBuilder(loadOptionsUrl, {
				page,
				...filterParams,
				...loadOptionsParams(searchQuery),
			})
		);

		return {
			options: [...extraOptions, ...get(data, loadOptionsKey, data)],
			hasMore: get(data, "page", 1) < get(data, "last_page", 1),
			additional: { page: get(data, "page", 1) + 1 },
		};
	};

	const [selectedValue, setSelectedValue] = useState(null);
	const [isFocusIn, setFocusIn] = useState(false);

	const classNames = cn("field-container async-field relative", (selectedValue || isFocusIn) && "async-field--active");

	const customStyles = {
		menu: (props: any) => ({
			...props,
			zIndex: 10,
		}),
		option: (props: any, { isSelected }: { isSelected: boolean }) => ({
			...props,
			fontWeight: 400,
			lineHeight: "20px",
			fontSize: "15px",
			color: "#111111",
			cursor: "pointer",
			backgroundColor: isSelected ? "#E7EBF2" : "#fff",
			"&:hover": {
				backgroundColor: "#fff",
				color: "#888888",
			},
		}),
	};

	const asyncSelectRef = useInputRef<any>({ touched, errors, name });

	return (
		<div className={cn(classNames, rootClassName)}>
			{label && <p className='input__label'>{label}</p>}
			<AsyncPaginate
				id={name}
				key={value}
				name={name}
				className={cn(
					"[&_.css-13cymwt-control]:h-[40px] [&_.css-13cymwt-control]:pl-[6px] [&_.css-qbdosj-Input]:font-normal [&_.css-qbdosj-Input]:text-[16px] [&_.css-qbdosj-Input]:text-[#111111] [&_.css-qbdosj-Input]:leading-[20px] [&_.css-1u9des2-indicatorSeparator]:w-0  [&_.css-1jqq78o-placeholder]:font-normal [&_.css-1jqq78o-placeholder]:text-[15px] [&_.css-1jqq78o-placeholder]:leading-[20px] [&_.css-1jqq78o-placeholder]:text-[rgb(136,136,136)]",
					get(errors, name) && get(touched, name)
						? "[&_.css-13cymwt-control]:!border-rose-600"
						: "[&_.css-13cymwt-control]:!border-[rgb(233,233,233)]"
				)}
				loadOptions={loadOptions}
				debounceTimeout={300}
				styles={customStyles}
				value={value}
				onBlur={() => {
					setFocusIn(false);
					setFieldTouched(name, true);
				}}
				getOptionLabel={option => (typeof optionLabel === "function" ? optionLabel(option) : option[optionLabel])}
				getOptionValue={option => (typeof optionValue === "function" ? optionValue(option) : option[optionValue])}
				onChange={option => {
					onChange(option);
					setFieldValue(name, option);
					setSelectedValue(option);
				}}
				onFocus={() => setFocusIn(true)}
				noOptionsMessage={() => "Результатов не найдено"}
				additional={{
					page: 1,
				}}
				isOptionDisabled={option => disableOptions.reduce((prev: any, curr: any) => [...prev, curr.id], []).includes(option.id)}
				{...{
					isMulti,
					placeholder,
					isSearchable,
					menuPlacement,
					isClearable,
					isDisabled,
				}}
				selectRef={asyncSelectRef}
			/>
			<p>
				{!!get(errors, name) && !!get(touched, name) ? (
					<small className='text-red-500'>{get(errors, name)?.toString() ?? "Error"}</small>
				) : null}
			</p>
		</div>
	);
};

export default AsyncSelect;
