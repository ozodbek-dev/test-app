import PdfFile from "assets/images/icons/PdfFile";
interface IProp {
	name?: string;
	type?: string;
	file?: string;
	id?: string;
	isDeletable?: boolean;
	className?: string;
	fileUrl?: string;
	handleDelete?: (id: string) => void;
}
const ViewFile = (prop: IProp) => {
	const { name,  type, id, className,} = prop;
	return (
		<div
			key={id}
			className={`flex items-center justify-between bg-[#F4F4F4] rounded-[4px] px-[12px] py-[8px] mb-[10px] ${className} `}
		>
			<div className='flex items-center'>
				<div className='flex flex-col items-center'>
					<PdfFile />
					<span className='text-[#888888]'>{type}</span>
				</div>
				<h1 className='ml-[16px] text-[16px not-italic font-normal leading-[20px] text-[#111] '>{name}</h1>
			</div>
			<div className='flex items-center'>
				<p className='mr-[16px] text-[16px] not-italic font-normal leading-[20px] text-[#4D4D4D] '>{type}</p>
			</div>
		</div>
	);
};
export default ViewFile;
