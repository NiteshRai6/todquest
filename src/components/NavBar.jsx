import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
    return (
        <nav className="bg-dark center text-white">
            <input type="checkbox" id='toggle-menu' className='hidden' />
            <label htmlFor='toggle-menu' className='text-xl lg:hidden py-2'><GiHamburgerMenu /></label>
            <ul className="flex m-nav">
                <li className="active">Home</li>
                <li>Deals</li>
                <li>Coupon</li>
                <li>Stores</li>
                <li>Contact us</li>
            </ul>
        </nav>
    );
};

export default NavBar;
