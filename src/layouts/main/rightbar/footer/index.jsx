import { Popover } from "@headlessui/react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2">
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Hizmet Şartları</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Gizlilik Politikası</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Imprint</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Erişebilirlik</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Reklam Bilgisi</Link>
            <div className="w-full">
                <Popover className="relative leading-4 max-w-max">
                    <Popover.Button
                        className="text-[#71767b] outline-none  text-[13px] hover:underline inline-flex items-end"
                    >
                        Daha Fazla
                        <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
                            <path
                            fill="currentColor"
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                        </svg>
                    </Popover.Button>
                    <Popover.Panel className="w-[178px] max-w-[384px] bg-black shadow-box rounded-xl absolute bottom-0 right-0 h-auto">
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] block transition-colors">
                            Hakkında
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] block transition-colors">
                            X Uygulamasını İndir
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] block transition-colors">
                            İşletmeler İçin X
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] block transition-colors">
                            Geliştiriciler
                        </Link>
                    </Popover.Panel>
                </Popover>
            </div>
        </footer>
    )
}

export default Footer