import { setCurrentAccount } from "../../../../../store/auth/actions"
import { useAccounts, useAccount } from "../../../../../store/auth/hooks"
import classNames from "classnames"

function More({close}) {
    const currentAccount = useAccount()
    const accounts = useAccounts()
    return (
        <div>
            {accounts.map((account, index) => (
                <button
                    type="button"
                    disabled = {currentAccount.id === account.id}
                    onClick={() => {
                        setCurrentAccount(account)
                        close()
                    }}
                    key={index} className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors", { "hover:bg-[#eff3f41a]": currentAccount.id !== account.id })}>
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 flex-1 text-[15px] leading-[20px]">
                        <h6 className="font-bold">{account.fullName}</h6>
                        <div className="text-[#8b98a5]">
                            @{account.username}
                        </div>
                    </div>
                    {currentAccount.id === account.id && (
                        <svg className="mr-2 ml-3" width={18.75} height={18.75} fill="#00BA7C" viewBox="0 0 24 24"><path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" /></svg>
                    )}
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3" />
            <button className="px-4 py-3 text-left transition-colors hover:bg-[#eff3f41a] w-full leading-[20px] text-[15px] font-bold text-[#e7e9ea]">
                Var olan bir hesap ekle
            </button>
            <button className="px-4 py-3 text-left transition-colors hover:bg-[#eff3f41a] w-full leading-[20px] text-[15px] font-bold text-[#e7e9ea]">
                Hesapları Yönet
            </button>
            <button className="px-4 py-3 text-left transition-colors hover:bg-[#eff3f41a] w-full leading-[20px] text-[15px] font-bold text-[#e7e9ea]">
                <div className="max-w-[228px] ">
                    @BerkeSasa hesabından çıkış yap
                </div>
            </button>
        </div>
    )
}

export default More