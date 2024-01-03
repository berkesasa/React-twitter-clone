import Premium from "../../../components/premium"
import Topics from "../../../components/topics"
import Search from "./search"

function Rightbar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
        </aside>
    )
}

export default Rightbar