import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import About from "@/components/About";
import ServicesSection from "@/components/Services";

const HomePage: React.FC = () => {
    const childComponents = [
        
        <About/>,
        <ServicesSection/>,
        <ContactSection/>
    ];
    return (
        <>
        <Banner />
        {childComponents.map((component, index) => {
            return (
                <div key={index} className={`${index%2!=0? 'bg-slate-50': 'bg-white'} py-24 lg:py-32`}>
                    {component}
                </div>
            )
        })}
        </>
    )
}

export default HomePage;