import "./../index.css"
import Container from '@mui/material/Container';
import Grid from "@mui/material/Unstable_Grid2";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import "../css/components/sendPortfolioCta.css"

// Grid version 2
function SendPortfolioCta() {
    return (
        <Container maxWidth="lg" className="git">
            <Grid container spacing={2} className=" container">
                <Grid xs={12} md={8} lg={8}>
                    <h3 className="text-lg">We&apos;re here to listen and eager to collaborate with you.</h3>
                </Grid>
                <Grid className="cta__container">
                    <p className="text-normal cta__subText">Rush your portfolio to:</p>
                    <a href="mailto:careers@rootit.in" className="text-semi btn btn-sendMail">
                        careers@rootit.in <ArrowOutwardIcon />
                    </a>
                </Grid>

            </Grid>
        </Container>
    )
}

export default SendPortfolioCta