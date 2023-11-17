import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import TopHeader from "../components/Banner/TopHeader";
import CouponLists from "../components/CouponLists";
import DealsOfDay from "../components/DealsOfDay";
import CouponCategories from "../components/CouponCategories";
import PopularMembership from "../components/PopularMembership";
import NewsLetter from "../components/NewsLetter";
import HowWorks from "../components/HowWorks";
import JoinTeam from "../components/JoinTeam";
import CategoriesTable from "../components/CategoriesTable";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <header>
                <TopHeader />
                <NavBar />
            </header>

            <main>
                <Banner image="./banner-image.png" />
                <CouponLists />

                <DealsOfDay></DealsOfDay>

                <CouponCategories></CouponCategories>

                <Banner noPagination={true} image="./image 10.png"></Banner>

                <PopularMembership></PopularMembership>

                <NewsLetter></NewsLetter>

                <HowWorks></HowWorks>

                <JoinTeam></JoinTeam>

                <CategoriesTable />
            </main>

            <Footer></Footer>
        </>
    );
};

export default HomePage;
