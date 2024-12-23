/* eslint-disable @typescript-eslint/no-unused-expressions */
import { QueryClient } from "@tanstack/query-core";
import { UseMutationResult } from "@tanstack/react-query";
import { Form, Formik, FormikHandlers, FormikHelpers, FormikState } from "formik";
import useHooks from "shared/hooks/useHooks";
import usePost from "shared/hooks/usePost";
import { isArray } from "lodash";
import { FC, ReactNode } from "react";
import { TMethod, TParams } from "shared/types/query.types";
import * as Yup from "yup";
export type TFields = {
	name: string;
	type?: "object" | "array" | "number" | "string" | "boolean" | "date" | "email" | undefined;
	value?: any;
	required?: boolean;
	disabled?: boolean | string;
	min?: number;
	max?: number;
	minError?: string;
	maxError?: string;
	onSubmitKey?: any;
	errorMessage?: string;
	constantLength?: number;
	constantLengthError?: string;
	onSubmitValue?: (value: any, values: any) => any;
}[];

interface IFormContent {
	url: string;
	method: TMethod;
	name?: string;
	params?: TParams | undefined;
	contentType?: "form-data" | "json";
	children: (data: FormikState<any> & FormikHelpers<any> & FormikHandlers & UseMutationResult<any, any, any>) => ReactNode;
	onSuccess?: (
		data: object | string | number | object[] | string[] | number[] | { [key: string]: unknown },
		resetForm: (nextState?: Partial<FormikState<FormData>>, callback?: () => void) => void,

		queryClient: QueryClient,
		values: { [key: string]: unknown }
	) => any;
	onError?: (
		data: any,
		setFieldError: (field: string, message: string | undefined) => void,
		values: { [key: string]: unknown }
	) => void;
	fields: TFields;
	className?: string;
	customizeData?: (formData: FormData, data: { [key: string]: unknown }) => FormData | object;
	isCustomizeData?: boolean;
	validationSchema?: Yup.ObjectShape;

	// queryOptions?: UseQueryOptions<any, Error>;
}

const FormContent: FC<IFormContent> = ({
	url,
	method,
	name,
	onSuccess = () => {},
	onError = () => {},
	children,
	fields,
	params,
	className = "",
	customizeData = formData => formData,
	isCustomizeData = false,
	validationSchema = {},
	contentType = "form-data",
}) => {
	const { queryClient } = useHooks();
	const mutatePost = usePost();
	return (
		<Formik
			initialValues={
				isArray(fields)
					? fields.reduce(
							(prev, curr) => ({
								...prev,
								[curr.name]: curr.value ? curr.value : "",
							}),
							{}
					  )
					: {}
			}
			enableReinitialize={true}
			validationSchema={() => {
				if (!isArray(fields)) {
					return Yup.object().shape({});
				}

				const validationFields: any = {};

				fields.reverse().forEach(field => {
					let validationField: any;

					switch (field.type) {
						case "string":
							validationField = Yup.string().typeError("This filed must be string. Eg: Hello world");
							break;
						case "object":
							validationField = Yup.object();
							break;
						case "number":
							validationField = Yup.number().typeError("This field must be number. Eg:12");
							break;
						case "array":
							validationField = Yup.array().typeError("this field must be Array. Eg: [1,2,3,...]");
							break;
						case "boolean":
							validationField = Yup.boolean().typeError("This field must be Boolean. eg: true or false or 0 or 1 ");
							break;
						case "date":
							validationField = Yup.date().typeError("This field must be Date. eg: 12.12.2025");
							break;
						case "email":
							validationField = Yup.string()
								.email("This field must be email. example@as.co")
								.max(255)
								.required("Required field!");
							break;
						default:
							validationField = Yup.string();
					}

					if (field.required) {
						validationField = validationField.required(field.errorMessage ?? "Required field!");
					}

					if (field.min) {
						validationField = validationField.min(field.min, field.minError ?? "Very short!");
					}
					if (field.constantLength) {
						validationField = validationField.length(
							field.constantLength,
							field.constantLengthError ?? "The number of characters is exceeded!"
						);
					}

					if (field.max) {
						validationField = validationField.max(field.max, field.maxError ?? "Too long!");
					}

					validationField = validationField.nullable();

					validationFields[field.name] = validationField;
				});

				return Yup.object().shape({ ...validationFields, ...validationSchema });
			}}
			onSubmit={(values, { resetForm, setFieldError }) => {
				values = { ...values };
				fields.forEach(field => {
					if (Object.prototype.hasOwnProperty.call(field, "onSubmitValue")) {
						if (typeof field.onSubmitValue === "function") {
							if (Object.prototype.hasOwnProperty.call(field, "onSubmitKey")) {
								values[field.onSubmitKey] = field.onSubmitValue(values[field.name], values);
								delete values[field.name];
							} else {
								values[field.name] = field.onSubmitValue(values[field.name], values);
							}
						}
					}
					if (Object.prototype.hasOwnProperty.call(field, "disabled")) {
						if (field.disabled) {
							delete values[field.name];
						}
					}
				});

				const formData = new FormData();

				if (contentType === "form-data") {
					for (const key in values) {
						if (Object.prototype.hasOwnProperty.call(values, key) && values[key]) {
							formData.append(key, values[key]);
						}
					}
				}

				mutatePost.mutate(
					{
						url,
						method,
						data: isCustomizeData ? customizeData(formData, values) : contentType === "form-data" ? formData : values,
						params,
					},
					{
						onSuccess: data => {
							onSuccess(data.data, resetForm, queryClient, values);
							if (name) {
								queryClient.invalidateQueries({ queryKey: [`${name}`] });
							}
						},
						onError: error => onError(error, setFieldError, values),
					}
				);
			}}
		>
			{(props: FormikState<any> & FormikHelpers<any> & FormikHandlers) => {
				return (
					<Form
						className={className}
						onKeyDown={e => {
							e.key === "Enter" && e.preventDefault();
						}}
						onSubmit={e => {
							e.preventDefault();
							props.handleSubmit();
						}}
						autoComplete='off'
					>
						{/* <ScrollToFirstError /> */}
						{children({ ...props, ...mutatePost })}
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormContent;
