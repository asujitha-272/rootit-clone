import Header from "../components/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";

import "../css/pages/work.css"

const projects = [
  {
    title: "Gate Security Control",
    description: "Step into a new era of security with Root it advanced gate security control project. Our team has developed a state-of-the-art solution to enhance access control, ensuring the safety and security of your premises. This project combines cutting-edge technology with design to create a robust gate security system.",
    features: [
      "License Plate Recognition",
      "Fully customization feature"
    ],
    thumbnail: "https://www.rootit.in/_next/static/media/gateSoftware.92cc6d21.svg",
    cardStyle: "1"
  },
  {
    title: "Canteen management",
    description: "It's our innovative canteen project! Our team embarked on a mission to revolutionize the dining experience, creating a dynamic and vibrant space for our clients and their employees / students. The primary goal of this project is to enhance the overall dining experience through thoughtful design, efficient operations, and a commitment to quality.",
    features: [
      "User friendly UI",
      "Sustainability Initiatives",
      "User freedom"
    ],
    thumbnail: "https://www.rootit.in/_next/static/media/canteenSoftware.e2781042.svg",
    cardStyle: "2"

  },
  {
    title: "Hostel management",
    description: "Discover the next level of hostel management with Root it's innovative solution. Our hostel management project aims to streamline and enhance the entire hostel experience, providing administrators, residents, and staff with powerful tools for efficient operations and improved living conditions.",
    features: [
      "Fully responsive",
      "Role based control"
    ],
    thumbnail: "https://www.rootit.in/_next/static/media/hostelSoftware.d9b90ca8.svg",
    cardStyle: "1"
  },
  {
    title: "Quality control",
    description: "Embark on a journey of efficiency and sustainability with RootIt Cotton Mill Management project. Our innovative solution is designed to revolutionize the cotton manufacturing process, with a primary focus on minimizing wastage, optimizing machine performance, and promoting sustainable practices.",
    features: [
      "Wastage Monitoring System",
      "Role based control"
    ],
    thumbnail: "https://www.rootit.in/_next/static/media/qualitySoftware.ed6bb79f.svg",
    cardStyle: "2"
  }
]

function Work() {
  return (
    <div>
      <Header
        titlePart1="Our"
        titlePart2="Work"
        description="See how we help our clients become the future best versions of themselves each and every day."
        type="2"
      />

      <div className="projects__container">
        <Container maxWidth="lg" className="">
          <div className="projects">

            {


              projects.map((project, index) => {
                const { title, description, features, thumbnail, cardStyle } = project

                return (
                  <Grid container direction={(cardStyle === "1" ? "row-reverse" : "row")} spacing={5} key={index}>
                    <Grid xs={12} md={6} lg={6} className="project__content">
                      <h2 className="text-lg">{title}</h2>
                      <p className="text-md">{description}</p>
                      <div className="project__features">
                        {
                          features.map((feature, index) => {
                            return (
                              <div key={index} className="text-semi project__feature">{feature}</div>
                            )
                          })
                        }
                      </div>
                    </Grid>
                    <Grid xs={12} md={6} lg={6} className="thumbnail">
                      <img src={thumbnail} alt="" />
                    </Grid>
                  </Grid>
                )
              })


            }
          </div>

        </Container>
      </div>



      <GetInTouch />

    </div>
  )
}

export default Work