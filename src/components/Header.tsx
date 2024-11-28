import Navbar from "./Navbar"
const Header: React.FC = () => {
    const listItems = ['About', 'Projects', 'Services', 'blog', 'Resume'];
    return(
        <>
        <header className="">
            <Navbar navList={listItems}/>
        </header>
        </>
    )
}
export default Header