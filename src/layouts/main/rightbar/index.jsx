import Premium from "../../../components/premium"
import Search from "./search"

function Rightbar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
        </aside>
    )
}

export default Rightbar