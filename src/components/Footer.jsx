import Container from '@mui/material/Container';
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Subscribe from './Subscribe';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "../css/components/footer.css"

function Footer() {
    return (
        <div className='footer'>
            <Container maxWidth="lg" className="footer__container">
                <Grid
                    xs={12}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    sx={{ fontSize: '12px' }}
                    className="footer__LogoLinks"
                >
                    <Grid>
                        <img src="https://www.rootit.in/_next/static/media/CompanyLogo.cfe9c291.svg" alt="" />
                    </Grid>
                    <Grid>
                        <ul className='footer__navItems'>
                            <li> <Link className='footer__navItem text-normal' to={"/"}>Home</Link> </li>
                            <li> <Link className='footer__navItem text-normal' to={"/services"}>Services</Link> </li>
                            <li> <Link className='footer__navItem text-normal' to={"/about"}>About</Link> </li>
                            <li> <Link className='footer__navItem text-normal' to={"/career"}>Career</Link> </li>
                            <li> <Link className='footer__navItem text-normal' to={"/work"}>Work</Link> </li>
                        </ul>
                    </Grid>
                </Grid>

                <Subscribe />


                <Grid
                    xs={12}
                    container
                    justifyContent="space-between"
                    // alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                >
                    <Grid className="footer_reachUs text-normal">
                        <p className='text-sm footer__subHeading'>Reach us at</p>
                        <p><span>Email - </span><a href="mailto:support@rootit.in">support@rootit.in</a></p>
                        <p><span>Call - </span>8610440573</p>
                        <p><span>Working hours - </span>Mon - Fri, 9am to 6pm</p>
                    </Grid>
                    <Grid>
                        <img src="https://www.rootit.in/_next/static/media/map.1dddf1f7.svg" alt="" />
                    </Grid>
                    <Grid className="footer_reachUs text-normal">
                        <p className='text-sm footer__subHeading'>Reach us at</p>
                        <p>H-20, Green Park Avenue,</p>
                        <p>Omalur Main Road,</p>
                        <p>Salem, Tamil Nadu IN.</p>

                        <a href="https://www.google.com/maps/place/Green+Park+Avenue/@11.668361,78.143092,15z/data=!4m6!3m5!1s0x3babf0464f7fd291:0x9b80328ccd2e88c!8m2!3d11.668361!4d78.143092!16s%2Fg%2F1pyqq4j3k?entry=ttu" className='link'>Get Directions <ArrowForwardIcon /></a>
                    </Grid>
                </Grid>


                <Grid
                    xs={12}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    className="footer__otherLinks"
                >
                    <Grid >
                        <p>©rootit solutions. 2024. All Rights Reserved.</p>
                    </Grid>
                    <Grid className="footer__socialIcons" >
                        <InstagramIcon className='footer__socialIcon' />
                        <LinkedInIcon className='footer__socialIcon' />
                    </Grid>
                    <Grid>
                        <ul className='footer__otherLink'>
                            <li> <Link className='link' to={"/"}>Privacy Policy</Link> </li>
                            <li> <Link className='link' to={"/"}>Terms and Conditions</Link> </li>
                            <li> <Link className='link' to={"/"}>Cookies</Link> </li>
                        </ul>
                    </Grid>
                </Grid>


            </Container>
        </div >
    )
}

export default Footer