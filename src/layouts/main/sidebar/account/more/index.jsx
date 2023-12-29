import { useAccounts } from "../../../../../store/auth/hooks"


function More() {
    const accounts = useAccounts()
    return (
        <div>
            {accounts.map((account, index) => (
                <button key={index} className="py-3 px-4 flex text-left">
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 text-[15px] leading-[20px]">
                        <h6 className="font-bold">{account.fullName}</h6>
                        <div className="text-[#8b98a5]">
                            @{account.username}
                        </div>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default More