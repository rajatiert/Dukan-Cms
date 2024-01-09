import TransactionTable from "./TransactionTable";
const Transactions = () => {

    return (
        <div className="flex flex-col gap-6 py-3 px-8 w-full">
            <div className="flex flex-col gap-6 min-w-[252px]">
                <p className="font-medium text-xl text-dukan-black12">Transactions | This Month</p>
                <div className="flex flex-row gap-3 items-center">
                    <button className="rounded-[40px] bg-dukan-black90 py-[6px] px-4">
                        <p className="text-dukan-black50 text-sm">Payouts (22)</p>
                    </button>
                    <button className="rounded-[40px] bg-dukan-primaryBlue py-[6px] px-4" ><p className="text-white text-sm"> Refund (6)</p></button>
                </div>
            </div>
            <TransactionTable/>
        </div>
    )


}

export default Transactions;