/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-scroll";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import TextFeature from 'components/text-feature';
import FeatureThumb from 'assets/logo5.png';
import ShapeLeft from "assets/shape-left.png";
import shapePattern from 'assets/shape-pattern2.png';
import ShapeRight from "assets/shape-right.png";

const data = {
    subTitle: 'Core features',
    title: 'Ape Army Guild',
    description:
        'is a Organization where Developers, Investors, P2E Games, NFTs and Communities interact Together',
    btnName: 'Learn More',
    btnURL: '#',
};

const data2 = {
    path:'roadmap'
};

export default function Banner() {
    return (
        <section sx={styles.banner} id="home">
            <Container sx={styles.containerBox}>

                <Box sx={styles.thumbnail}>
                    <Image src={FeatureThumb} alt="Thumbnail" />
                    <Box sx={styles.shapeBox}>
                    </Box>
                </Box>
                <br />
                <Box sx={styles.banner.contentBox}>
                    <Heading as="h1" variant='heroPrimary'>
                        Ape Army Guild
          </Heading>
                    <Text as="p" variant="heroSecondary">
                        is a Organization where Developers, Investors, P2E Games, NFTs and Communities interact Together
          </Text>
                    <Button to='roadmap' variant="primary">
                        <Link to={data2.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Roadmap
                        </Link>
                    </Button>
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
            backgroundColor: 'white',
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
    containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 7, 0, null, 7],
    },
    contentBox: {
        flexShrink: 0,
        px: [0, null, '30px', 0],
        textAlign: ['center', null, null, 'left'],
        width: ['100%', '80%', null, 340, 400, 430, null, 485],
        pb: ['50px', '60px', null, 0],
        mx: ['auto', null, null, 0],
        '.description': {
            pr: [0, null, 6, 7, 6],
        },
    },
    thumbnail: {
        display: 'inline-flex',
        position: 'relative',
        mr: 'auto',
        ml: ['auto', null, null, null, 7],
        '> img': {
            position: 'relative',
            zIndex: 1,
            height: [310, 'auto'],
        },
    },
    shapeBox: {
        position: 'absolute',
        bottom: -65,
        right: -165,
        zIndex: -1,
        display: ['none', 'inline-block', 'none', null, 'inline-block'],
    },
};
