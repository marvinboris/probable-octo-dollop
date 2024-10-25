import Banner from "./ui/banner";
import ContactUs from "./ui/contact-us";
import Faq from "./ui/faq";
import News from "./ui/news";
import Services from "./ui/services";
import Testimonies from "./ui/testimonies";
import WorkWithUs from "./ui/work-with-us";

export function PageHome() {
    return (
        <>
            <Banner />
            <Services />
            <Testimonies />
            <WorkWithUs />
            <Faq />
            {/* <News /> */}
            <ContactUs />
        </>
    );
}
