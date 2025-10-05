import {
    Box,
    Card,
    Container,
    Fab,
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
import CircleIcon from '@mui/icons-material/Circle'

import { useTranslation } from 'react-i18next'
import styles from './styles'
import { useDeviceQuery } from '@/shared/lib'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import { useCallback, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CERTIFICATES, EXPERIENCE, LANGUAGES, SKILLS, SOCIALS } from '../model'

export function DeveloperCv() {
    const { i18n, t } = useTranslation('developer')
    const { isMobile } = useDeviceQuery()
    const locale = i18n.language as keyof typeof EXPERIENCE

    const container = useRef(null)
    const button = useRef(null)

    const onDownload = useCallback(() => {
        const link = document.createElement('a')
        link.href = `/docs/cv-${locale}.pdf`
        link.setAttribute('download', 'CV.pdf')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }, [locale])

    useGSAP(
        () => {
            gsap.to(button.current, {
                scale: 1.1,
                duration: 0.6,
                repeat: -1,
                yoyo: true,
            })
        },
        { scope: container },
    )

    const experience = useMemo(() => EXPERIENCE[locale], [locale])

    return (
        <>
            <Box sx={styles.download} ref={container}>
                <div ref={button}>
                    <Fab onClick={onDownload} color='primary' aria-label='download'>
                        <DownloadOutlinedIcon fontSize='large' />
                    </Fab>
                </div>
            </Box>

            <Container sx={{ marginTop: 4 }} maxWidth='lg'>
                <Paper elevation={4} sx={styles.container}>
                    <Card elevation={5} sx={styles.header}>
                        <Typography fontWeight={500} textTransform='uppercase' variant='h3' mb={3}>
                            {t('DeveloperPage.initials')}
                        </Typography>
                        <Typography textTransform='uppercase' variant='h4'>
                            {t('DeveloperPage.qualification')}
                        </Typography>
                    </Card>
                    <Box p={2}>
                        <Grid sx={{ mt: 1 }} container spacing={0}>
                            <Grid
                                order={{ xs: 2, lg: 1 }}
                                size={{ xs: 12, lg: 5, xl: 4 }}
                                display='flex'
                                flexDirection='column'
                                sx={styles.column}
                            >
                                <Box pt={2} sx={styles.block}>
                                    <Typography
                                        fontWeight={600}
                                        textTransform='uppercase'
                                        mb={1}
                                        variant='h4'
                                    >
                                        {t('DeveloperPage.contacts')}
                                    </Typography>
                                    <List>
                                        {SOCIALS.map((v) => (
                                            <ListItemButton
                                                href={v.isEmail ? `mailto:${v.link}` : v.link}
                                                target='_blank'
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
                                                    <ListItemIcon sx={{ minWidth: 0 }}>{v.icon}</ListItemIcon>
                                                </Box>
                                                <ListItemText primary={v.name} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Box>
                                <Box pt={2} sx={styles.block}>
                                    <Typography
                                        fontWeight={600}
                                        textTransform='uppercase'
                                        mb={1}
                                        variant='h4'
                                    >
                                        {t('DeveloperPage.skills')}
                                    </Typography>
                                    <List>
                                        {SKILLS.map((v) => (
                                            <ListItem key={v.row.toString()}>
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: 1,
                                                    }}
                                                >
                                                    <CircleIcon fontSize='small' sx={{ fontSize: 14 }} />
                                                </ListItemIcon>

                                                <ListItemText primary={v.row.join(', ')} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                                <Box p={2} pl={0} sx={styles.block}>
                                    <Stack>
                                        <Typography
                                            fontWeight={600}
                                            textTransform='uppercase'
                                            mb={4}
                                            variant='h4'
                                        >
                                            {t('DeveloperPage.educationTitle')}
                                        </Typography>
                                        <Typography mb={2} variant='h5'>
                                            {t('DeveloperPage.educationSubtitle')}
                                        </Typography>
                                        <Typography variant='body1'>
                                            {t('DeveloperPage.educationUniversity')}
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box pt={2} sx={styles.block}>
                                    <Stack spacing={2}>
                                        <Typography fontWeight={600} textTransform='uppercase' variant='h4'>
                                            {t('DeveloperPage.languages')}
                                        </Typography>
                                        <List>
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
                                                            sx={{
                                                                fontSize: 14,
                                                            }}
                                                        />
                                                    </ListItemIcon>

                                                    <ListItemText primary={v.name} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Stack>
                                </Box>
                                <Box flex={1} display='flex' flexDirection='column' pt={2}>
                                    <Stack spacing={2} flex={1}>
                                        <Typography fontWeight={600} textTransform='uppercase' variant='h4'>
                                            {t('DeveloperPage.certificates.title')}
                                        </Typography>
                                        <List
                                            sx={{
                                                flex: 1,
                                            }}
                                        >
                                            {CERTIFICATES.map((v) => (
                                                <ListItemButton
                                                    onClick={() => window.open(v.link)}
                                                    key={v.slug}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            minWidth: 0,
                                                            mr: 1,
                                                        }}
                                                    >
                                                        {v.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={t(`DeveloperPage.certificates.${v.slug}`)}
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
                                sx={(theme) => ({
                                    [theme.breakpoints.down('lg')]: styles.column,
                                })}
                            >
                                <Stack
                                    p={2}
                                    pl={{ xs: 0, lg: 2 }}
                                    justifyContent='space-between'
                                    spacing={{ xs: 4, md: 8 }}
                                    sx={styles.block}
                                >
                                    <Typography
                                        fontWeight={600}
                                        textTransform='uppercase'
                                        mb={1}
                                        variant='h4'
                                    >
                                        {t('DeveloperPage.aboutTitle')}
                                    </Typography>
                                    <Typography variant='body1' lineHeight={1.8}>
                                        {t('DeveloperPage.aboutSubtitle')}
                                    </Typography>
                                </Stack>
                                <Stack
                                    gap={3}
                                    p={2}
                                    pl={{ xs: 0, lg: 2 }}
                                    sx={(theme) => ({
                                        [theme.breakpoints.down('lg')]: styles.block,
                                    })}
                                >
                                    <Typography
                                        fontWeight={600}
                                        textTransform='uppercase'
                                        mb={1}
                                        variant='h4'
                                    >
                                        {t('DeveloperPage.experience')}
                                    </Typography>
                                    {experience.map((v) => (
                                        <Box key={v.id}>
                                            <Typography textTransform='uppercase' mb={1} variant='h6'>
                                                {v.position}
                                            </Typography>
                                            <Stack
                                                direction={{
                                                    xs: 'column',
                                                    sm: 'row',
                                                }}
                                                justifyContent='space-between'
                                            >
                                                <Typography textTransform='uppercase' mb={1} variant='h6'>
                                                    {v.companyName}
                                                </Typography>
                                                <Typography textTransform='uppercase' mb={1} variant='h6'>
                                                    {v.period}
                                                </Typography>
                                            </Stack>
                                            <List>
                                                {v.projects.map((p) => (
                                                    <Stack key={p.id}>
                                                        <ListItem
                                                            disableGutters={isMobile}
                                                            disablePadding={isMobile}
                                                        >
                                                            <ListItemIcon
                                                                sx={{
                                                                    minWidth: 0,
                                                                    mr: 1,
                                                                }}
                                                            >
                                                                <CircleIcon
                                                                    fontSize='small'
                                                                    sx={{
                                                                        fontSize: 14,
                                                                    }}
                                                                />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                slotProps={{
                                                                    primary: {
                                                                        fontSize: 20,
                                                                        fontWeight: 500,
                                                                    },
                                                                }}
                                                                sx={{
                                                                    fontWeight: 800,
                                                                }}
                                                                primary={p.name}
                                                            />
                                                        </ListItem>
                                                        <List
                                                            dense
                                                            sx={{
                                                                pl: isMobile ? 0 : 2,
                                                            }}
                                                        >
                                                            {p.features.map((k, i) => (
                                                                <ListItem
                                                                    disableGutters={isMobile}
                                                                    disablePadding={isMobile}
                                                                    key={k + i}
                                                                >
                                                                    <ListItemIcon
                                                                        sx={{
                                                                            minWidth: 0,
                                                                            mr: 1,
                                                                        }}
                                                                    >
                                                                        <HorizontalRuleIcon
                                                                            fontSize='small'
                                                                            sx={{
                                                                                fontSize: 14,
                                                                            }}
                                                                        />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        slotProps={{
                                                                            primary: {
                                                                                fontSize: isMobile
                                                                                    ? 14
                                                                                    : '1rem',
                                                                            },
                                                                        }}
                                                                        primary={k}
                                                                    />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                        <Typography
                                                            color='primary'
                                                            fontStyle='italic'
                                                            fontWeight={500}
                                                            ml={{
                                                                xs: 0,
                                                                md: 4,
                                                            }}
                                                        >
                                                            {t('DeveloperPage.stack', {
                                                                data: p.stack,
                                                            })}
                                                        </Typography>
                                                    </Stack>
                                                ))}
                                            </List>
                                        </Box>
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}
