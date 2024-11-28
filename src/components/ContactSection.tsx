import ContactCard from "./ContactCard"

const ContactSection: React.FC = () => {
    const cardprops = {
        details: { 
            "Name":"Sarika Mangalpally",
            "Profession":"Software Engineer",
            "Email":"sarikamangalpally@hotmail.com",
            "Phone":"+1 623-286-9114",
            "LinkedIn":"https://www.linkedin.com/in/sarikamangalpally"
        }
    }
    return (
        <div className="mx-auto px-5 ">
            <ContactCard details={cardprops.details}/>
        </div>
    )
}
export default ContactSection