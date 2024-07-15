import "./../index.css"
import Container from '@mui/material/Container';
import Grid from "@mui/material/Unstable_Grid2";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import "../css/components/getInTouch.css"
// Grid version 2
function GetInTouch() {
    return (
        <Container maxWidth="lg" className="git">
            <Grid container spacing={2} className=" git__container">
                <Grid xs={12} md={8} lg={8}>
                    <h3 className="text-xl">Let&apos;s Discuss</h3>
                    <p className="principle__description text-md">We&apos;d love to hear from you!</p>
                </Grid>
                <Grid >
                    <button className="btn btn-primary text-semi">Get in touch <ArrowOutwardIcon /></button>
                </Grid>

            </Grid>
        </Container>
    )
}

export default GetInTouch