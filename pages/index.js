import styles from "../assets/styles/homepage.css"
import NavLinks from "../components/navLinks"
import SocialLinks from "../components/socialLinks";
    
const Index = () => {
    let roles = ["Frontend Developer","Backend Developer","Data Analyst","Web Analytics Implementor","Continous Learner"]
    let role = roles[Math.floor(Math.random()*roles.length)];
    return (
            <main className="main">
                <section className="name-introduction__container">
                    <h1>Raghav Sharma</h1>
                    <div className="role">I am {role}</div>
                </section>
                <section className="nav-links__container">
                    <NavLinks for="homepage" />
                </section>
                <section className="social-overlay__container">
                    <SocialLinks for="overlay" />
                </section>
            </main>);
}

export default Index;