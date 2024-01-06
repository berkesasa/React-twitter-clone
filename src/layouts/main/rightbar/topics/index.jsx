import { Link } from "react-router-dom"
import { topics } from "../../../../utils/consts"
import Topic from "./topic"

function Topics() {
    return (
        <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c] overflow-hidden">
            <h5 className="h-12 flex items-center py-3 px-4 text-xl font-extrabold leading-6 text-[#e7e9ea]">İlgini çekebilecek gündemler</h5>
            <div className="grid">
                {topics.map((topic, index) => <Topic item={topic} key={index} />)}
            </div>
            <Link
            to="/trends"
            className="h-[52px] flex items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]">
                Daha Fazla Göster
            </Link>
        </section>
    )
}

export default Topics