import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2">
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Hizmet Şartları</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Gizlilik Politikası</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Imprint</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Erişebilirlik</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Reklam Bilgisi</Link>

        </footer>
    )
}

export default Footer