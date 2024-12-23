import { FieldProps } from "formik";
import { ChangeEvent } from "react";
import { Input, Spin } from "antd";
import ViewFile from "shared/ui/view-file";
import CloseIcon from "assets/images/icons/CloseIcon";
import usePost from "shared/hooks/usePost";
import useHooks from "shared/hooks/useHooks";
import toast from "react-hot-toast";

interface IProps extends FieldProps<any, any> {
	placeholder?: string;
	name: string;
	label: string;
	id: string;
	className?: string;
	rootClassName?: string;
	type?: "number" | "text";
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	oldUploadedFilesList?: string[];
	oldUploadedFilesName?: string;
	handleDelete?: (id: string) => void;
}

const FileUploader = (props: IProps) => {
	const {
		field: { value, name },
		placeholder = "",
		form: { setFieldValue, setFieldTouched, touched, errors },
		rootClassName = "",
		onChange = () => {},
	} = props;

	const { get } = useHooks();
	const { mutate, isPending: isLoading } = usePost();

	const handleRemoveFile = () => {
		setFieldValue(name, "");
	};

	const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const hasFile = e.target.files;
		const MAX_FILE_SIZE = 5120; // 5MB
		const allowedFormats = [".jpg", ".gif", ".jpeg", ".png"];

		if (hasFile) {
			const file = hasFile[0];
			const fileSizeKiloBytes = file.size / 1024;
			const fileExtension = "." + file.name.split(".").pop();

			if (!allowedFormats.includes(fileExtension)) {
				toast.error("File format is wrong!. Accepted ext: .jpg,.gif,jpeg,png");
				return;
			}

			if (fileSizeKiloBytes > MAX_FILE_SIZE) {
				toast.error("Image must be maximu 5 mb");
				return;
			}

			const formdata = new FormData();
			formdata.append("file", file);

			mutate(
				{
					url: "uploads/",
					data: formdata,
					method: "post",
				},
				{
          onSuccess: data => {
						setFieldValue(name, get(data, 'data', {}));
						onChange(e);
					},
				}
			);
		}
	};

	return (
		<div className={`${rootClassName} field-container`}>
			{!get(value, "name", "") && (
				<label
					htmlFor={name}
					className='h-[152px] flex flex-col items-center justify-center gap-2 cursor-pointer bg-[#F4F4F4] rounded-xl'
				>
					<div>
						{isLoading ? (
							<p>
								loading... <Spin />
							</p>
						) : (
							<>
								<span className='text-[15px] font-normal leading-[20px] text-[#101828]'>Drop file or</span>{" "}
								<span className='text-[#1464C0] underline'>attatch</span>
							</>
						)}
					</div>
					<span>Maximum 5 MB</span>
					<Input
						type='file'
						id={name}
						disabled={isLoading}
						placeholder={placeholder}
						name={name}
						status={touched[name] && errors[name] ? "error" : ""}
						onChange={handleFileUpload}
						onBlur={() => setFieldTouched(name, true)}
						className='hidden'
						accept='.jpeg,.png,.gif,.jpg'
					/>
				</label>
			)}
			<p>{errors[name] && touched[name] && <span>{errors[name]?.toString() ?? "Error"}</span>}</p>
			<div className='mt-4 gap-y-4'>
				{get(value, "name", "") && (
					<div className='flex flex-row justify-between'>
						<ViewFile
							className='w-full'
							file={get(value, "url", "")}
							name={get(value, "name", "no_name")}
							type={get(value, "extension", "pdf")}
							fileUrl={get(value, "url", "")}
						/>
						<div className='cursor-pointer mb-[10px] w-7 flex justify-center items-center' onClick={() => handleRemoveFile()}>
							<CloseIcon />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FileUploader;
