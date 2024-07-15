import Header from "../components/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";

import "../css/pages/about.css"


const principles = [
    {
        title: "Strategic Partnership",
        description: "We don't just build solutions, we become an extension of your team. Together, we craft a digital roadmap aligned with your long-term goals.",
        icon: "https://www.rootit.in/_next/static/media/strategicPartnership.624189f0.svg"
    },
    {
        title: "Unwavering Helpfulness",
        description: "We provide ongoing support, clear communication, and expert guidance throughout every step of your digital journey.",
        icon: "https://www.rootit.in/_next/static/media/unwaveringHelpfulness.d534255e.svg"
    },
    {
        title: "Revolutionary Thinking",
        description: "We challenge the status quo and embrace innovation. Our solutions push boundaries and redefine what's possible in the tech landscape.",
        icon: "https://www.rootit.in/_next/static/media/revolutionaryThinking.5427cc8c.svg"
    },
    {
        title: "Disciplined Execution",
        description: "We combine creativity with a rigorous approach. We deliver projects on time, within budget, and exceeding your expectations.",
        icon: "https://www.rootit.in/_next/static/media/disciplinedExecution.fad383a4.svg"
    },
    {
        title: "Unmatched Expertise",
        description: "Our team is comprised of passionate tech savants with cutting-edge skills and a deep understanding of your industry's needs.",
        icon: "https://www.rootit.in/_next/static/media/unmatchedExpertise.c006eb39.svg"
    },
    {
        title: "Professionalism at its Core",
        description: "Transparency, integrity, and clear communication are the cornerstones of every interaction. We build trust and lasting relationships.",
        icon: "https://www.rootit.in/_next/static/media/professionalism.4264ec61.svg"
    },
    {
        title: "Active Listening & Empathy",
        description: "We take the time to understand your unique challenges and goals. Our solutions are tailored to your specific needs and vision.",
        icon: "https://www.rootit.in/_next/static/media/activeListening.cc176384.svg"
    }
]


function About() {
    return (
        <div>
            <Header
                titlePart1="About"
                titlePart2="Us"
                description="Our story, our culture, your future"
                type="1"
            />

            <Container maxWidth="lg" className=" about">
                <Grid container spacing={4} className="text-semi about__intro">
                    <Grid xs={12} md={7} className="about__intro">
                        <p className="bg-orange-300">
                            Imagine a team of passionate young professionals,
                            united by a fire to bridge market gaps and deliver
                            world-class service. That&apos;s us! We&apos;re a dynamic
                            group of experts, each wielding specialized skills
                            to craft exceptional products. Our approach is
                            refreshingly unique - we leverage cutting-edge
                            technology to tackle your challenges head-on and
                            deliver innovative solutions that perfectly align
                            with your needs. We don&apos;t just build products, we
                            build partnerships. We believe in collaborating
                            closely with our clients to understand their vision
                            and craft solutions that exceed expectations.
                        </p>
                    </Grid>
                    <Grid xs={12} md={5} className="about__image">
                        <img
                            src="https://www.rootit.in/_next/static/media/aboutSideImg.16a89c9e.svg"
                            alt=""
                        />
                    </Grid>
                </Grid>
                <p className="text-semi about__outro">
                    Think of us as your secret weapon in the digital arena.
                    Forget about the competition - with our expertise by your
                    side, victory is practically guaranteed. Our diverse team
                    brings a wealth of specialized skills to the table, ensuring
                    exceptional product creation every time. We&apos;re more than
                    just a team; we&apos;re an extension of your own, driving
                    innovation and propelling your success.
                </p>
            </Container>

            <ImageBanner url="https://www.rootit.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTeam.2569d17c.gif&w=1920&q=75" />

            <Container maxWidth="lg" className=" about__principlesContainer">
                <h2 className="text-lg about__principlesHeading">Our Core Principles</h2>
                <Grid container className="about__principles">
                    {
                        principles.map((principle, i) => {
                            const { title, description, icon } = principle

                            return (
                                <Grid container className="principle" spacing={2} key={i}>
                                    <Grid xs={12} md={2} lg={1}>
                                        <div className="principle__imageContainer">
                                            <img className="principle__image" src={icon} alt="" />
                                        </div>
                                    </Grid>
                                    <Grid container xs={12} md={10} lg={10}>
                                        <Grid xs={12} md={12}>
                                            <h3 className="principle__title text-md">{title}</h3>
                                            <p className="principle__description text-semi">{description}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>

            <GetInTouch />
        </div>
    );
}

export default About;
