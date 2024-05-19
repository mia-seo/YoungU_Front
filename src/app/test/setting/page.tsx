"use client";

import { SpeechBubble } from "@/components/atoms/SpeechBubble/Index";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import React, { use, useEffect, useState } from "react";

import MaleIcon from "../../../../public/icons/male.svg";
import FemaleIcon from "../../../../public/icons/female.svg";
// import { ReactComponent as MaleIcon } from "../../../../public/icons/male.svg";
import femaleIcon from "../../../../public/icons/female.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChildInfoInterface } from "@/api/child/child.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const childAgeData = [
	{
		age: "4",
		text: "4세 반",
	},
	{
		age: "5",
		text: "5세 반",
	},
	{ age: "6", text: "6세 반" },
	{
		age: "7",
		text: "7세 반",
	},
];

function page() {
	// 아이 정보 상태
	const [childInfo, setChildInfo] = useState<ChildInfoInterface>({
		chl_nck_nm: "",
		chl_sex: "",
		chl_age: "",
	});

	const onClickHandler = (sex: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setChildInfo({ ...childInfo, chl_sex: sex });
	};

	useEffect(() => {
		console.log(childInfo);
	}, [childInfo]);

	return (
		<div className="px-[2rem] py-[1rem] w-full h-full">
			<p className=" text-mint-200 body1 bg-mint-10 w-full h-[56px] flex justify-center items-center rounded-[8px] mt- ">
				검사를 진행할 아이 정보를 작성해주세요.
			</p>
			<div className="flex flex-col justify-center items-center w-full py-[1rem] border-b-[1px] border-gray-97">
				<SpeechBubble text="01" />
				<p className="body0 my-[10px]">우리 아이 별명은</p>
				<div className="flex w-full items-center justify-between">
					<Input
						type="text"
						defaultValue={""}
						placeholder="별명을 입력해 주세요."
						className="h-[40px] w-[85%] border-gray-95 rounded-[6px] placeholder:text-gray-95 body2 focus:border-orange-100"
						value={childInfo.chl_nck_nm}
						onChange={(e) => setChildInfo({ ...childInfo, chl_nck_nm: e.target.value })}
					/>
					<p className="body01 mx-1">에요.</p>
				</div>
				<p className="body3 text-gray-80 my-2">*별명은 최대 10자로 한글, 영어, 숫자만 사용 가능해요</p>
			</div>
			<div className="flex flex-col justify-center items-center w-full py-[1rem] border-b-[1px] border-gray-97">
				<SpeechBubble text="02" />
				<p className="body0 my-[10px]">우리 아이 성별은</p>
				<div className="flex w-full items-center  justify-between">
					<Button
						variant={"blank"}
						size={"sm"}
						className={`text-gray-60 ${childInfo.chl_sex === "man" ? "border-orange-100 text-orange-100" : ""} `}
						onClick={(e) => onClickHandler("man", e)}>
						{/* <Image src={maleIcon} alt="male" className="mx-1" /> */}
						<MaleIcon fill={childInfo.chl_sex === "man" ? "#F6714E" : "#8A8A8A"} />
						남자
					</Button>
					<Button
						variant={"blank"}
						size={"sm"}
						className={`text-gray-60 ${childInfo.chl_sex === "female" ? "border-orange-100 text-orange-100" : ""} `}
						onClick={(e) => onClickHandler("female", e)}>
						<FemaleIcon fill={childInfo.chl_sex === "female" ? "#F6714E" : "#8A8A8A"} />
						여자
					</Button>
					<p className="body01">에요.</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center w-full py-[1rem] border-b-[1px] border-gray-97">
				<SpeechBubble text="03" />
				<p className="body0 my-[10px]">우리 아이는</p>
				<div className="flex w-full items-center  justify-between">
					<Select onValueChange={(value) => setChildInfo({ ...childInfo, chl_age: value })}>
						<SelectTrigger className="w-[80%] border-b-[1px] border-gray-97  ">
							<SelectValue placeholder="반을 선택해주세요." className="text-gray-95 placeholder:text-gray-95" />
						</SelectTrigger>
						<SelectContent className="border-b-[1px] border-gray-97 z-10 bg-WHITE ">
							{childAgeData.map((data: any) => (
								<SelectItem
									className="focus:bg-orange-10 focus:text-orange-100 h-[42px]"
									value={data.age}
									key={data.age}>
									{data.text}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<p className="body01 mx-1">에 갈거예요.</p>
				</div>

				<Button
					size={"lg"}
					variant="primary"
					className="my-3 text-WHITE bg-orange-100 h-[56px] text-[1rem]"
					type="submit">
					저장하고 검사 시작하기
				</Button>
			</div>
		</div>
	);
}

export default page;
