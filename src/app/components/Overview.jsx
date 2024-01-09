import Image from "next/image";
import { arrowUrl, questionLogo, questionMarkUrl, arrowRightUrl, arrowRightColor } from "@/constants/constant";

const Overview = () => {
    return (
        <div className="flex flex-col gap-6 w-full py-3 px-8">
            <div className="flex flex-row justify-between">
                <div>
                    <p className="text-dukan-black12 font-medium text-xl">Overview</p>
                </div>

                <div className="flex flex-row justify-center items-center gap-[6px] w-[137px] h-9 bg-white border-[1px] border-dukan-black85 rounded-[6px] ">
                    <p className="text-[16px]">This month</p>
                    <div>
                        <Image src={arrowUrl} width="16" height="16" alt="overviewIcon" />
                    </div>
                </div>

            </div>

            <div className="flex flex-row w-full gap-5 ">
                <div className="w-1/3 min-h-[154px] bg-dukan-primaryBlue flex flex-col justify-between rounded-md ">

                    <div className="flex flex-col justify-between p-4  ">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center gap-2">

                                <p className="text-white font-normal text-[16px]">Next Payout</p>
                                <div><Image className="text-white" src={questionMarkUrl} width="14" height="14" alt="questionMark" /></div>
                            </div>
                            <div className="flex flex-row justify-between text-white">
                                <p className="font-medium text-[32px]">₹ 2,312.23</p>
                                <div className="flex flex-row justify-center items-center">
                                    <p className="font-medium text-[16px] self-center underline">23 orders</p>
                                    <div>
                                        <Image src={arrowRightUrl} width="24" height="24" alt="arrowIcon" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row py-2 px-6 rounded-md bg-dukan-hoverBlue justify-between">
                        <p className="text-dukan-black95 text-sm font-normal ">Next Payout Day:</p>
                        <p className="text-dukan-black95 text-sm font-medium ">Today, 4.00PM</p>
                    </div>
                </div>

                <div className="w-2/3 flex flex-row gap-5">
                    <div className="flex flex-col justify-between max-h-[118px]  w-full rounded-[6px] p-4 bg-white">
                        <div className="flex flex-row text-black items-center gap-2">
                            <p className="font-normal text-[16px]">Amount Pending</p>
                            <div><Image src={questionLogo} width="14" height="14" alt="pendingIcon" /></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-[32px] font-medium whitespace-nowrap ">₹ 92,312</p>
                            <div className="flex flex-row underline text-dukan-primaryBlue items-center ">
                                <p className="text-[16px] whitespace-nowrap">13 orders</p>
                                <div>
                                    <Image src={arrowRightColor} width="24" height="24" alt="arrowRightIcon" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-[118px]  w-full rounded-[6px] p-4 bg-white">
                        <div className="flex flex-row text-black items-center gap-2 ">
                            <p className="font-normal text-[16px]">Amount Processed</p>
                            <div><Image src={questionLogo} width="14" height="14" alt="amountProcessedIcon" /></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-[32px] font-medium whitespace-nowrap">₹ 23,92,312.19</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Overview;