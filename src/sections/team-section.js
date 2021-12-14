/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/prof.png';
import Member2 from 'assets/team/kaido.png';
import Member3 from 'assets/team/josh.png';
import Member4 from 'assets/team/nobody.png';
import Member5 from 'assets/team/yuki.png';
import Member6 from 'assets/team/loi.png';

const data = [
    {
        id: 1,
        imgSrc: Member1,
        altText: 'Prof',
        title: 'Prof',
        designation: 'CEO and Founder',
        socialProfile: [
            {
                id: 1,
                name: 'facebook',
                path: '#',
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: 'twitter',
                path: '#',
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: 'instagram',
                path: '#',
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 2,
        imgSrc: Member2,
        altText: 'Kaido',
        title: 'Kaido',
        designation: 'Community Builder',
        socialProfile: [
            {
                id: 1,
                name: 'facebook',
                path: '#',
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: 'twitter',
                path: '#',
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: 'instagram',
                path: '#',
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 3,
        imgSrc: Member3,
        altText: 'Josh',
        title: 'Josh',
        designation: 'Community Builder',
        socialProfile: [
            {
                id: 1,
                name: 'facebook',
                path: '#',
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: 'twitter',
                path: '#',
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: 'instagram',
                path: '#',
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 4,
        imgSrc: Member4,
        altText: 'Nobody',
        title: 'Nobody',
        designation: 'Community Builder',
        socialProfile: [
            {
                id: 1,
                name: 'facebook',
                path: '#',
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: 'twitter',
                path: '#',
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: 'instagram',
                path: '#',
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 5,
        imgSrc: Member5,
        altText: 'Yuki',
        title: 'Yuki',
        designation: 'Community Builder',
        socialProfile: [
            {
                id: 1,
                name: 'facebook',
                path: '#',
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: 'twitter',
                path: '#',
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: 'instagram',
                path: '#',
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 6,
        imgSrc: Member6,
        altText: 'Loisa',
        title: 'Loisa',
        designation: 'Community Builder',
        socialProfile: [
            {
                id: 1,
                name: 'facebook',
                path: '#',
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: 'twitter',
                path: '#',
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: 'instagram',
                path: '#',
                icon: <FaInstagram />,
            },
        ],
    },
];

export default function TeamSection() {
    return (
        <section sx={styles.workflow} id="team">
            <Container>
                <SectionHeader
                    slogan="The Team"
                    title="The Team Behind This Well Built Guild"
                />
                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <TeamCard
                            key={item.id}
                            src={item.imgSrc}
                            altText={item.altText}
                            title={item.title}
                            designation={item.designation}
                            social={item.socialProfile}
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    workflow: {
        backgroundColor: 'white',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        py: [8, null, 9, null, null, 10],
    },
    grid: {
        mt: [0, null, -6, null, -4],
        gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
        gridTemplateColumns: [
            'repeat(2,1fr)',
            null,
            'repeat(2,1fr)',
            null,
            'repeat(3,1fr)',
        ],
    },
};
