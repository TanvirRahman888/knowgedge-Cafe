import profilePic from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between items-center border-b-2 pb-4">
            <h1 className='text-3xl '>Knowledge Cafe</h1>
            <img src={profilePic} alt="" />
        </div>
    );
};

export default Header;