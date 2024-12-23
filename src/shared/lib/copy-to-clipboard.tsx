import toast from "react-hot-toast";

export default async function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text).then(() => toast.success("Copied!"));
}
