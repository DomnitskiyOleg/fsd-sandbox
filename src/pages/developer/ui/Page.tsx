import {
    Box,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import {
    AiOutlineWhatsApp,
    AiOutlineMail,
    AiOutlineLinkedin,
} from 'react-icons/ai'
import { PiTelegramLogoLight } from 'react-icons/pi'
import CircleIcon from '@mui/icons-material/Circle'
import { VscGithubAlt } from 'react-icons/vsc'
import { PiCertificate } from 'react-icons/pi'
import { PiUsers } from 'react-icons/pi'
import { GrLanguage } from 'react-icons/gr'
import { IoBarChartOutline } from 'react-icons/io5'

const SOCIALS = [
    {
        name: 'linkedin.com/in/domnitskiy-oleg',
        link: 'https://www.linkedin.com/in/domnitskiy-oleg/',
        icon: <AiOutlineLinkedin size={25} />,
    },
    {
        name: '+7 999 080-70-67',
        link: 'https://api.whatsapp.com/send/?phone=79990807067&text&type=phone_number&app_absent=0',
        icon: <AiOutlineWhatsApp size={25} />,
    },
    {
        name: 't.me/domnitskiy_oleg',
        link: 'https://t.me/domnitskiy_oleg/',
        icon: <PiTelegramLogoLight size={25} />,
    },
    {
        name: 'domnitskiy.oleg@mail.ru',
        link: 'https://www.linkedin.com/in/domnitskiy-oleg/',
        icon: <AiOutlineMail size={25} />,
    },
    {
        name: 'github.com/DomnitskiyOleg',
        link: 'https://github.com/DomnitskiyOleg/',
        icon: <VscGithubAlt size={25} />,
    },
]

const SKILLS = [
    {
        row: ['TypeScript', 'JavaScript', 'NodeJS'],
    },
    {
        row: ['Next JS', 'React', 'Expo', 'React Native'],
    },
    {
        row: ['Redux', 'Redux Toolkit', 'RTK Query'],
    },
    {
        row: ['HTML', 'CSS', 'PostCSS', 'SASS'],
    },
    {
        row: ['Git/GitLab', 'Webpack', 'CI/CD', 'nginx'],
    },
    {
        row: ['REST API', 'Docker', 'Linux'],
    },
    {
        row: ['FSD architecture', 'Atomic Design'],
    },
    {
        row: ['Jest'],
    },
]

const LANGUAGES = [
    {
        name: 'Русский - native',
    },
    {
        name: 'Английский - intermadiate',
    },
]

const CERTIFICATES = [
    {
        name: 'Диплом',
        link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
        icon: <PiCertificate size={25} />,
    },
    {
        name: 'Управление персоналом',
        link: 'https://drive.google.com/file/d/1z_ydEXLwWE9_YcuEEVPlUBrJshPxApCX/view?usp=drive_link',
        icon: <PiUsers size={25} />,
    },
    {
        name: 'Английский',
        link: 'https://drive.google.com/file/d/1gEyDukuXKCpQvPInEvL1v4yfm-DkxtXV/view?usp=drive_link',
        icon: <GrLanguage size={25} />,
    },
    {
        name: 'Финансы',
        link: 'https://drive.google.com/file/d/1la4_q1qxfOIRD4wg8vz6TJCIGSO3vAOM/view?usp=drive_link',
        icon: <IoBarChartOutline size={25} />,
    },
]

const PROJECTS = [
    {
        slug: 'appocore',
        link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
        whatDone: ['1', '2', '3', '4', '5', '6', '7', '8'],
        stack: ['NextJS (app router)', 'Redux', 'RTK Query', 'Mantine'],
    },
    {
        slug: 'orp',
        link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
        whatDone: ['1', '2', '3', '4', '5', '6', '7', '8'],
        stack: ['NextJS (app router)', 'Redux', 'RTK Query', 'Mantine'],
    },
    {
        slug: 'appomart',
        link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
        whatDone: ['1', '2', '3', '4', '5', '6', '7', '8'],
        stack: ['NextJS (page router)', 'Redux', 'RTK Query', 'Mantine'],
    },
]
export function DeveloperPage() {
    return (
        <Container sx={{ marginTop: 4 }} maxWidth='lg'>
            <Paper
                elevation={4}
                sx={{ borderRadius: 3, overflow: 'hidden', p: 2 }}
            >
                <Grid sx={{ mt: 1 }} container spacing={0}>
                    <Grid
                        order={{ xs: 2, lg: 1 }}
                        size={{ xs: 12, lg: 5, xl: 4 }}
                    >
                        <Box pt={2} borderBottom={1} borderRight={1}>
                            <Typography mb={1} variant='h4'>
                                КОНТАКТЫ
                            </Typography>
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                }}
                            >
                                {SOCIALS.map((v) => (
                                    <ListItemButton
                                        onClick={() => window.open(v.link)}
                                        key={v.name}
                                    >
                                        <Box
                                            display='flex'
                                            flexDirection='row'
                                            alignItems='center'
                                            justifyContent='center'
                                            borderRadius={99}
                                            mr={1}
                                            p={1}
                                            bgcolor='black'
                                        >
                                            <ListItemIcon sx={{ minWidth: 0 }}>
                                                {v.icon}
                                            </ListItemIcon>
                                        </Box>
                                        <ListItemText primary={v.name} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Box>
                        <Box pt={2} borderBottom={1} borderRight={1}>
                            <Typography mb={1} variant='h4'>
                                НАВЫКИ
                            </Typography>
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                }}
                            >
                                {SKILLS.map((v) => (
                                    <ListItem key={v.row.toString()}>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: 1,
                                            }}
                                        >
                                            <CircleIcon
                                                fontSize='small'
                                                sx={{ fontSize: 14 }}
                                            />
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={v.row.join(', ')}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box pt={2} pb={2} borderBottom={1} borderRight={1}>
                            <Stack spacing={2}>
                                <Typography variant='h4'>
                                    ОБРАЗОВАНИЕ
                                </Typography>
                                <Typography variant='h5'>
                                    ВЫСШЕЕ, ИНЖЕНЕР
                                </Typography>
                                <Typography variant='body1'>
                                    Информационные системы и технологии. ДВГУПС
                                    г. Хабаровск 2003-2008г
                                </Typography>
                            </Stack>
                        </Box>

                        <Box pt={2} borderBottom={1} borderRight={1}>
                            <Stack spacing={2}>
                                <Typography variant='h4'>ЯЗЫКИ</Typography>
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }}
                                >
                                    {LANGUAGES.map((v) => (
                                        <ListItem key={v.name}>
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: 1,
                                                }}
                                            >
                                                <CircleIcon
                                                    fontSize='small'
                                                    sx={{ fontSize: 14 }}
                                                />
                                            </ListItemIcon>

                                            <ListItemText primary={v.name} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Stack>
                        </Box>
                        <Box pt={2} borderRight={1}>
                            <Stack spacing={2}>
                                <Typography variant='h4'>
                                    СЕРТИФИКАТЫ
                                </Typography>
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }}
                                >
                                    {CERTIFICATES.map((v) => (
                                        <ListItemButton
                                            onClick={() => window.open(v.link)}
                                            key={v.name}
                                        >
                                            <ListItemIcon
                                                sx={{ minWidth: 0, mr: 1 }}
                                            >
                                                {v.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={v.name}
                                                sx={{
                                                    textDecoration: 'underline',
                                                }}
                                            />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid
                        order={{ md: 1, lg: 2 }}
                        size={{ xs: 12, md: 12, lg: 7, xl: 8 }}
                    >
                        <Stack
                            borderBottom={1}
                            p={2}
                            justifyContent='space-between'
                            spacing={8}
                        >
                            <Typography mb={1} variant='h4'>
                                ОБО МНЕ
                            </Typography>
                            <Typography variant='body1' lineHeight={1.7}>
                                Я инженер-программист с профильным образованием
                                в области IT. Опыт в коммерческой разработке
                                более 1 года, более 10 лет опыта в качестве
                                системного администратора. Организован, быстро
                                учусь, нацелен на решение конкретных задач. На
                                данный момент поддерживаю и дорабатываю более 10
                                проектов компании. Амбициозен, готов как к
                                командной, так и к индивидуальной работе.
                            </Typography>
                        </Stack>
                        <Box pt={2} pl={2}>
                            <Typography mb={1} variant='h4'>
                                ОПЫТ
                            </Typography>
                            <Typography mb={1} variant='h6'>
                                FRONTEND DEVELOPER
                            </Typography>
                            <Stack
                                direction='row'
                                justifyContent='space-between'
                            >
                                <Typography mb={1} variant='h6'>
                                    LLC &quot;APPOMART&quot;
                                </Typography>
                                <Typography mb={1} variant='h6'>
                                    НОЯБРЬ 2023 - Н.В.
                                </Typography>
                            </Stack>
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                }}
                            >
                                {PROJECTS.map((v) => (
                                    <ListItem key={v.slug}>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: 1,
                                            }}
                                        >
                                            <CircleIcon
                                                fontSize='small'
                                                sx={{ fontSize: 14 }}
                                            />
                                        </ListItemIcon>

                                        <ListItemText primary={v.slug} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}
