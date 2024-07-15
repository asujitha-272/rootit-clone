import Header from "../components/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "../css/pages/career.css"
import SendPortfolioCta from "../components/SendPortfolioCta";
import JobApplyForm from "../components/JobApplyForm";


import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';




const openingCategories = [
  {
    categoryTitle: "Development",
    openings: [
      {
        title: "Graphic Designer",
        noOfOpenings: 1,
        role: "Intern",
        jobType: "Part-Time/Full-Time",
        mode: "Hybrid",
        description: "We're looking for a talented and passionate Graphic Designer to join our growing marketing team! You'll play a vital role in crafting visually compelling content that captures attention, strengthens our brand identity, and drives engagement across all our marketing channels.",
        workTime: "9 A.M. - 5 P.M. (Hybrid)",
        location: "Bengaluru",
        responsibilites: [
          "Design eye-catching static social media posts, website graphics, and marketing materials using illustration and design software.",
          "Create engaging video content for social media reels and other platforms, including animation and motion graphics.",
          "Develop dynamic social media posts incorporating elements like GIFs and video snippets.",
          "Collaborate closely with the marketing team to understand campaign goals and translate them into impactful visuals.",
          "Stay updated on design trends and best practices for social media marketing.",
          "Maintain a consistent brand voice and visual identity across all marketing materials."
        ]
      },
      {
        title: "Frontend Developer",
        noOfOpenings: 1,
        role: "Intern",
        jobType: "Full-Time",
        mode: "Remote",
        description: "We are looking for an experienced Frontend Developer proficient in Flutter to join our team. The ideal candidate will have a proven track record of building mobile applications with Flutter and a strong understanding of frontend development.",
        workTime: "9 A.M. - 5 P.M. (Hybrid)",
        location: "Bengaluru",
        responsibilites: [
          "Develop mobile applications using Flutter framework.",
          "Ensure high performance and responsiveness of applications.",
          "Stay updated with the latest Flutter and Dart technologies.",
          "Act as a primary point of contact for clients, understanding their needs, addressing concerns, and providing regular updates on project progress."
        ]
      }
    ]
  },
  {
    categoryTitle: "Design",
    openings: [
      {
        title: "Graphic Designer",
        noOfOpenings: 1,
        role: "Intern",
        jobType: "Part-Time/Full-Time",
        mode: "Hybrid",
        description: "We're looking for a talented and passionate Graphic Designer to join our growing marketing team! You'll play a vital role in crafting visually compelling content that captures attention, strengthens our brand identity, and drives engagement across all our marketing channels.",
        workTime: "9 A.M. - 5 P.M. (Hybrid)",
        location: "Bengaluru",
        responsibilites: [
          "Design eye-catching static social media posts, website graphics, and marketing materials using illustration and design software.",
          "Create engaging video content for social media reels and other platforms, including animation and motion graphics.",
          "Develop dynamic social media posts incorporating elements like GIFs and video snippets.",
          "Collaborate closely with the marketing team to understand campaign goals and translate them into impactful visuals.",
          "Stay updated on design trends and best practices for social media marketing.",
          "Maintain a consistent brand voice and visual identity across all marketing materials."
        ]
      },
      {
        title: "Frontend Developer",
        noOfOpenings: 1,
        role: "Intern",
        jobType: "Full-Time",
        mode: "Remote",
        description: "We are looking for an experienced Frontend Developer proficient in Flutter to join our team. The ideal candidate will have a proven track record of building mobile applications with Flutter and a strong understanding of frontend development.",
        workTime: "9 A.M. - 5 P.M. (Hybrid)",
        location: "Bengaluru",
        responsibilites: [
          "Develop mobile applications using Flutter framework.",
          "Ensure high performance and responsiveness of applications.",
          "Stay updated with the latest Flutter and Dart technologies.",
          "Act as a primary point of contact for clients, understanding their needs, addressing concerns, and providing regular updates on project progress."
        ]
      }
    ]
  }
]


function Career() {

  return (
    <div>
      <Header
        titlePart1="Career"
        titlePart2=""
        description="At Root IT, it's not about us, it's about what happens next."
        type="1"
      />


      <div className="jobs_container">
        <Container maxWidth="lg" className=" ">
          <h2 className="text-lg">We are always hiring</h2>
          <p className="text-semi">Apply for a wide range of positions we have to offer.</p>

          <div className="jobs">

            {
              openingCategories.map((category, index) => {
                return (
                  <div key={index} className="categories text-normal">

                    <Accordion defaultExpanded>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className="category__title text-md">
                        {category.categoryTitle}
                      </AccordionSummary>

                      <AccordionDetails>
                        <div className="openings__container">
                          {
                            category.openings.map((opening, index) => {

                              const { title, noOfOpenings, role, jobType, mode, description, workTime, location, responsibilites } = opening

                              return (
                                <div key={index} className="opening">

                                  <div className="opening__header">
                                    <h2 className="opening__title">{title}</h2>
                                    <p className="chip opening__noOfOpenings">+{noOfOpenings}</p>
                                    <p className="chip opening__role">{role}</p>
                                    <p className="chip opening__jobType">{jobType}</p>
                                    <p className="chip opening__mode">{mode}</p>
                                  </div>

                                  <p className="opening__description">{description}</p>
                                  <p className="opening__description">Work-Time: {workTime}</p>
                                  <p className="opening__description">Location: {location}</p>
                                  <p className="opening__description">Responsibilites:</p>

                                  <ul className="opening__responsibilites">
                                    {
                                      responsibilites.map((responsibility, index) => {
                                        return (
                                          <li key={index}>{responsibility}</li>
                                        )
                                      })
                                    }
                                  </ul>

                                  <JobApplyForm />
                                </div>
                              )
                            })
                          }
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                )
              })
            }

          </div>

        </Container>
      </div >

      <ImageBanner url="https://www.rootit.in/_next/static/media/career.59bdd5eb.svg" />

      <SendPortfolioCta />
    </div >
  )
}

export default Career