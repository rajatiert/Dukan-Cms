"use client"
import Image from "next/image";
import { searchUrl, sortUrl, downloadUrl } from "@/constants/constant";
import { orderData } from "@/constants/constant";
import { Fragment } from "react";
import { greenUrl , grayUrl } from "@/constants/constant";
import { convertToCSV } from "@/utility/payoutUtility";

const TransactionTable = () => {
    return (
        <div className="flex flex-col gap-3 w-full bg-white p-3 rounded-[4px]">
            <div className="flex flex-row  justify-between ">
                <div className="flex flex-row gap-2 px-4 justify-center items-center py-3.5 text-sm border-[1px] border-dukan-black85 rounded-[4px]">
                    <div><Image src={searchUrl} width="14" height="14" alt="searchIcon"/></div>
                    <input type="text" className="focus:outline-none bg-white placeholder:text-sm" placeholder="Order Id or Transaction Id" />
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row gap-2 px-4 justify-center items-center py-3.5 text-sm border-[1px] border-dukan-black85 rounded-[4px]">
                        <p className="text-[16px] text-dukan-black30">Sort</p>
                        <div><Image src={  sortUrl} width="14" height="14" alt="sortIcon" /></div>
                    </div>
                    <div onClick={()=>convertToCSV(orderData)} className="flex flex-row gap-2 px-4 justify-center items-center py-3.5 text-sm border-[1px] border-dukan-black85 rounded-[4px]">

                        <div><Image src={downloadUrl} width="20" height="20" alt="sortIcon"/></div>
                    </div>
                </div>

            </div>
            <table className="w-full">
                <thead>
                <tr className="bg-dukan-black95 ">
                    <th className="px-3 py-2.5  rounded-l-[4px] text-dukan-black30 font-medium text-center">Order Id</th>
                    <th className="px-3 py-2.5   text-dukan-black30 font-medium text-center">Status</th>
                    <th className="px-3 py-2.5  ] text-dukan-black30 font-medium text-center">Transaction Id</th>
                    <th className="px-3 py-2.5   text-dukan-black30 font-medium text-center">Refund Date</th>
                    <th className="px-3 py-2.5  rounded-r-[4px] text-dukan-black30 font-medium text-center">Order Amount</th>

                </tr>
                </thead>
                <tbody>
                    {
                        orderData?.map((order, index)=>{
                            return <tr key={order?.OrderID} className="border-b-[1px] border-dukan-black85">
                                <td className="text-center py-3.5 px-3 text-dukan-primaryBlue text-sm font-normal ">{order?.OrderID}</td>
                                <td className=" py-3.5 px-3 font-normal text-dukan-black12 flex flex-row justify-center gap-2">
                                     <><Image src={order?.Status === "Successful" ? greenUrl : grayUrl} width="10" height="10" alt="icon"/></>
                                    <p>{order?.Status}</p> 
                                    </td>
                                <td className="text-center py-3.5 px-3 font-normal text-dukan-black30">{order?.TransactionID}</td>
                                <td className="text-center py-3.5 px-3 font-normal text-dukan-black30">{order?.RefundDate}</td>
                                <td className="text-center py-3.5 px-3 font-normal text-dukan-black12">{order?.OrderAmount}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>



        </div>
    )
}

export default TransactionTable;