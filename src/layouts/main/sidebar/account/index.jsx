import { Popover } from "@headlessui/react"
import { useAccount } from "../../../../store/auth/hooks"
import More from "./more"

function Account() {

    const account = useAccount()

    return (
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button className="my-3 p-3 rounded-full  hover:bg-[#eff3f41a] w-full flex transition-colors text-left items-center outline-none">
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 text-[15px] leading-[20px]">
                        <h6 className="font-bold">{account.fullName}</h6>
                        <div className="text-[#8b98a5]">
                            @{account.username}
                        </div>
                    </div>
                </Popover.Button>
                <Popover.Panel className="absolute bottom-full w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl">
                    <More />
                </Popover.Panel>
            </Popover>
        </div>
    )
}

export default Account