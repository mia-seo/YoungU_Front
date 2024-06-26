import { useModal } from "@/hooks/useModal";
import React from "react";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useDeleteWithdrawService } from "@/services/login/useDeleteWithdrawService";

export default function WithdrawalModal() {
	const { type, isOpen, onClose, setOpenChange } = useModal();
	const isModalOpen = isOpen && type === "withdrawal";
	const { mutate, onSuccess, onError } = useDeleteWithdrawService();

	const onWithdraw = () => {
		mutate(undefined, { onSuccess, onError });
		onClose();
	};
	return (
		<AlertDialog open={isModalOpen} onOpenChange={setOpenChange}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="head4 text-gray-20">회원탈퇴 확인</AlertDialogTitle>
					<AlertDialogDescription className="text-gray-60 body2">
						회원을 탈퇴하면 모든 데이터가 삭제됩니다.
						<br />
						탈퇴하시겠어요?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="gap-[10px]">
					<Button onClick={onClose} variant={"popup-secondary"} className="w-full">
						취소
					</Button>
					<Button onClick={onWithdraw} variant={"popup"} className="w-full">
						확인
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
