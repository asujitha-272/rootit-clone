import "./../index.css"
import Container from '@mui/material/Container';
import Grid from "@mui/material/Unstable_Grid2";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../css/components/subcribe.css"
// Grid version 2
function Subscribe() {
    return (
        <Container maxWidth="lg" className="subscribe">
            <Grid container spacing={8} justifyContent={"space-between"} className="subscribe__container">
                <Grid xs={12} md={12} lg={6} className="subscribe__content">
                    <h3 className="text-md">
                        Get Smart, <span className="text-normal">Not spam !</span>
                    </h3>
                    <p className="text-normal">Our goal is to translate the positive effect of revolutionizing how companies engage with their clients and their team.</p>
                </Grid>
                <Grid xs={12} md={12} lg={6}>
                    <form action="" className="subscribe__form">
                        <input type="text" placeholder="Enter Your Email" className="text-normal" />
                        <button className=""><ArrowForwardIcon className="icon" /></button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Subscribe