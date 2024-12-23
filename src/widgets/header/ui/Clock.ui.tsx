
import { useEffect, useState } from "react";

const Clock = () => {
	const currentDate: Date = new Date();
	const options: Intl.DateTimeFormatOptions = {
		month: "long",
	};
	const date: string = new Intl.DateTimeFormat("en", options).format(currentDate);

	const time = new Date().toLocaleTimeString(navigator.language, {
		hour: "2-digit",
		minute: "2-digit",
	});

	const [ctime, setCtime] = useState(time);

	useEffect(() => {
		const timeout = setInterval(() => {
			setCtime(
				new Date().toLocaleTimeString(navigator.language, {
					hour: "2-digit",
					minute: "2-digit",
				})
			);
		}, 1000);

		return () => {
			clearInterval(timeout);
		};
	}, []);

	return (
		<div className='flex flex-col justify-center h-full'>
			<span className='text-2xl'>{ctime}</span>
			<span className='text-sm'>
				{date} {new Date().getDate()}
			</span>
		</div>
	);
};
export default Clock;
