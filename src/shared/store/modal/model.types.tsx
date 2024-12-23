export interface ModalStore {
	type: ModalType | null;
	data?: any;
	isOpen?: boolean;
}
export type ModalType =
	| "create_category"
	| "update_category"
	| "delete_category"
	| "create_subcategory"
	| "update_subcategory"
	| "delete_subcategory"
	| "add_subcategory"
	| "create_quiz"
	| "update_quiz"
	| "delete_quiz"
	| "create_option"
	| "update_option"
	| "delete_option";
