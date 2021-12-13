/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/logo2.png";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import {
    FiHome,
    FiPackage,
    FiDollarSign,
    FiInfo,
    FiZap,
} from "react-icons/fi";
import { FaFacebook, FaDiscord, FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Header({ className }) {
    return (
        <header sx={styles.header}>
            <Container sx={styles.container}>
                <Logo src={LogoDark} />
                <Flex as="nav" sx={styles.nav}>
                    {menuItems.map((menuItem, i) => (
                        <Link
                            activeClass="active"
                            to={menuItem.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={i}
                        >
                            {menuItem.icon}
                        </Link>
                    ))}
                </Flex>
                <div sx={styles.now}>
                <a
                    style={{ textDecoration: 'none', color: 'white', margin: '10px' }}
                    href="https://www.facebook.com/ApeArmyGuild"
                >
                    <FaFacebook />
                </a>
                <a
                    style={{ textDecoration: 'none', color: 'white', margin: '10px' }}
                    href="https://twitter.com/ApeArmyGuild"
                >
                    <FaTwitter />
                </a>
                <a
                    style={{ textDecoration: 'none', color: 'white', margin: '10px' }}
                    href="https://www.instagram.com/dailygrindp2e/"
                >
                    <FaInstagram />
                </a>
                <a
                    style={{ textDecoration: 'none', color: 'white', margin: '10px' }}
                    href="https://t.me/+tMwdasxX3eU1NmQ1"
                >
                    <FaTelegram />
                </a>
                <a
                    style={{ textDecoration: 'none', color: 'white', margin: '10px' }}
                    href="https://discord.gg/pSePvYwDtB"
                >
                    <FaDiscord />
                </a>
                </div>
                <MobileDrawer />
            </Container>
        </header>
    );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
    header: {
        color: "text",
        fontWeight: "body",
        py: 4,
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#3A7CA5",
        transition: "all 0.4s ease",
        animation: `${positionAnim} 0.4s ease`,
        ".donate__btn": {
            flexShrink: 0,
            mr: [15, 20, null, null, 0],
            ml: ["auto", null, null, null, 0],
        },
        "&.sticky": {
            position: "fixed",
            backgroundColor: "background",
            color: "white",
            py: 3,
            "nev > a": {
                color: "text",
            },
        },
    },
    container: {
        display: "flex",
        alignItems: "center",
        height: "20px",
        justifyContent: "space-between",
    },
    now: {
        display: "none",
        alignItems: "center",
        height: "20px",
        justifyContent: "space-between",
        "@media screen and (min-width: 1024px)": {
            display: "block",
        },
    },
    nav: {
        mx: "auto",
        position: "right",
        alignItems: "center",
        display: "none",
        "@media screen and (min-width: 1024px)": {
            display: "block",
        },
        a: {
            fontSize: 2,
            color:'white',
            fontWeight: "body",
            px: 5,
            cursor: "pointer",
            lineHeight: "1.2",
            transition: "all 0.15s",
            "&:hover": {
                color: "white",
            },
            "&.active": {
                color: "white",
            },
        },
    },
};
