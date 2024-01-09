import Image from "next/image"
import { questionLogo, askUrl, dropDownUrl, searchUrl } from "@/constants/constant"
import PayoutsHeader from "./PayoutsHeader";
import Overview from "./Overview";
import Transactions from "./Transactions";


const Payouts = () => {

    return <div className="flex max-h-screen overflow-auto flex-col gap-8 w-full">
        <PayoutsHeader />

        <Overview />
        <Transactions />


    </div>;


}

export default Payouts