import Image from "next/image"
import { questionLogo, askUrl, dropDownUrl, searchUrl } from "@/constants/constant"


const PayoutsHeader = () => {
    return <div className="flex w-full min-w-[754px] sticky top-0 bg-white flex-row justify-between items-start py-3 px-8 shadow h-16">
        <div className="flex flex-row gap-4 self-center items-center ">
            <p className="text-xl font-medium text-dukan-black">Payouts</p>
            <div className="flex flex-row items-center gap-[6px] ">
                <div><Image src={questionLogo} width="13" height="13" alt="payoutIcon" /></div>
                <p className="font-normal text-xs text-dukan-black30">How it works</p>
            </div>
        </div>
        <div className="flex flex-row w-[400px] gap-2 rounded-lg bg-dukan-black95 items-center px-4 py-[9px]">
            <div>
                <Image src={searchUrl} width="16" height="16"  alt="searchIcon" />
            </div>
            <div className="w-full">
                <input type="text" placeholder="Search features, tutorials, etc." className="focus:outline-none w-full bg-dukan-black95" />
            </div>
        </div>
        <div className="flex flex-row items-end">
            <div className="flex flex-row gap-3">
                <div>
                    <Image src={askUrl} width="40" height="40" alt="icon"/>
                </div>
                <div>
                    <Image src={dropDownUrl} width="40" height="40" alt="icon"/>
                </div>
            </div>
        </div>
    </div>
}

export default PayoutsHeader