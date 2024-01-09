import { logoUrl } from "@/constants/constant";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { SidebarOptions } from "@/constants/constant";
import { creditsLogo } from "@/constants/constant";



const Sidebar = () => {

    return <div className="min-w-56 min-h-screen py-4 px-3.5 flex flex-col bg-dukan-darkBlue justify-between">

        <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-3">
                <Image src={logoUrl} width="39" height="39" alt="logoIcon"/>
                <div className="flex flex-row w-full gap-3 justify-between ">
                    <div className="flex flex-col gap-1 ">
                        <div className="text-white text-[15px] font-normal">Nishyan</div>
                        <div className="text-[13px] text-white opacity-80">Visit store</div>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center ">
                        <FaAngleDown className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                {SidebarOptions?.map((option) => {
                  
                    const imageUrl = option?.icon;
                    return <div key={option?.label} className={`flex flex-row px-4 py-2 gap-3 hover:bg-dukan-lightGray  rounded-lg ${option?.label == "Payouts" && "bg-dukan-lightGray"}`}>  <div>
                        <img src={imageUrl} width="20" height="20" alt="sideBar icon" /></div> <div className=" text-sm font-medium opacity-80 text-white " >{option?.label}</div>
                    </div>
                })}
            </div>

        </div>
        <div className="flex flex-row gap-3 rounded-lg bg-dukan-lightGray px-3 py-[6px] items-center">
            <div className="">
                <Image src={creditsLogo} width="36" height="36" alt="creditsIcon"/>
                
            </div>
            <div className="flex flex-col justify-between">
                   <p className="text-[13px] font-normal opacity-80 text-white">Available credits</p>
                   <p className="text-base font-medium text-white">222.10</p>
            </div>
        </div>
    </div>

}

export default Sidebar;