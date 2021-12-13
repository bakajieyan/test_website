/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo2.png';
import { FaFacebook, FaDiscord, FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer sx={styles.footer}>
                <Box sx={styles.footer.footerBottomArea}>
                    <Link path="/">
                        <Image src={FooterLogo} alt="Logo"/>
                    </Link>
                </Box>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#3A7CA5',
        footerBottomArea: {
            borderTopColor: 'border_color',
            display: 'flex',
            pb: ['1px', null, '1px'],
            textAlign: 'center',
            flexDirection: 'column',
        },
        menus: {
            nav: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
        },

        link: {
            fontSize: [1, '15px'],
            color: 'text',
            fontWeight: '400',
            mb: 2,
            cursor: 'pointer',
            transition: 'all 0.35s',
            display: 'block',
            textDecoration: 'none',
            lineHeight: [1.5, null, 1.8],
            px: [2, null, 4],
            ':hover': {
                color: 'primary',
            },
        },
        copyright: {
            fontSize: [1, '15px'],
            width: '100%',
        },
    },
};
