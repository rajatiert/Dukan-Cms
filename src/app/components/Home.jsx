import Sidebar from "./Sidebar";
import Payouts from "./Payouts";
const Root = () => {
    return <div className=" flex flex-row bg-dukan-black95">
        <Sidebar />
        <Payouts/>
    </div>
}

export default Root;