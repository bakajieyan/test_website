/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-scroll";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/image.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import SectionHeader from "components/section-header";

export default function Banner2() {
    return (
        <section sx={styles.banner} id="home2">
            <Container sx={styles.banner.container}>
                <Box sx={styles.banner.contentBox}>
                    <Heading as="h1" variant="heroPrimary">
                        <u>
                            <i>Axie Scholar </i>
                        </u>{" "}
                        <br></br>Tracker
          </Heading>
                    <Text as="p" variant="heroSecondary">
                    Track all your scholars in one place. With our set of tools, you can track multiple accounts on their SLP daily average, win rates, amount of battles in PVE and PVP for player management. More management tools to come.
                        </Text>
                    <Button variant="primary">
                        <Link to="/tracker"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Use Tool
                        </Link>
                    </Button>
                </Box>
                <Box sx={styles.banner.imageBox}>
                    <Image src={BannerImg} alt="banner" />
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    banner: {
        pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
        pb: [2, null, 0, null, 2, 0, null, 5],
        position: "relative",
        zIndex: 2,
        "&::before": {
            position: "absolute",
            content: '""',
            bottom: 6,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: "bottom left",
            backgroundSize: "36%",
        },
        "&::after": {
            position: "absolute",
            content: '""',
            bottom: "40px",
            right: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: "bottom right",
            backgroundSize: "32%",
        },
        container: {
            minHeight: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        contentBox: {
            width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
            mx: "auto",
            textAlign: "center",
            mb: ["40px", null, null, null, null, 7],
        },
        imageBox: {
            justifyContent: "center",
            textAlign: "center",
            display: "inline-flex",
            mb: [0, null, -6, null, null, "-40px", null, -3],
            img: {
                position: "relative",
                height: [245, "auto"],
            },
        },
    },
};
