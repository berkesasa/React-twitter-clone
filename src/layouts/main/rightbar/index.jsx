import Premium from "./premium"
import Topics from "./topics"
import Search from "./search"
import WhoFollow from "./whofollow"

function Rightbar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
            <WhoFollow />
        </aside>
    )
}

export default Rightbar