export default function Navbar(){
    return(
        <>
            <nav className={"w-full py-4"}>
                <div className={"flex justify-between text-md"}>
                    <ul className={"flex gap-3 items-center ml-5"}>
                        <li className={"text-3xl"}>Icon</li>
                        <li>Live</li>
                        <li>Push</li>
                        <li>Note</li>
                        <li>Shop</li>
                        <li>Packs</li>
                        <li>Help</li>
                        <li>More +</li>
                    </ul>
                    <ul className={"flex gap-4 mr-5 text-sm items-center"}>
                        <li>Try Live 12 for free</li>
                        <li>Log in or register</li>
                    </ul>
                </div>
            </nav>
            <div>
                <hr/>
            </div>
            <nav className={"w-full py-4 sticky top-0 backdrop-blur"}>
                <div className={"flex justify-between text-md"}>
                    <ul className={"flex gap-3 items-center ml-5"}>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>Apprenticeships</li>
                    </ul>
                </div>
            </nav>

        </>
    )
}