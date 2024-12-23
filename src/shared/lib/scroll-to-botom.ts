export default function scrollToBottom(elementRef: any) {
	if (elementRef?.current) {
		setTimeout(() => {
			elementRef.current.scrollTop = elementRef.current.scrollHeight;
		}, 500);
	}
}
