import React, { FunctionComponent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AppBar, Toolbar, Typography, Tooltip } from '@material-ui/core'
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import { IconButton, Link } from "gatsby-theme-material-ui";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import theme from "../../theme"
import { Routes } from "../../common/enums"
import { ElevateAppBar } from './elevateAppBar'
import { InitialTransition } from '../initial-transition'

const duration = 0.2
const variants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: duration },
  },
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflowY: 'hidden',
      flexGrow: 1,
    },
    spacer: {
      flexGrow: 1,
    },
    link: {
      paddingInline: '8px'
    }
  }),
);

type LayoutProps = {}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <ThemeTopLayout theme={theme}>
      <div className={classes.root}>
        <InitialTransition />
        <ElevateAppBar>
          <AppBar position="sticky" color="default">
            <Toolbar>
              <Link color="inherit" to={Routes.home}>
                <Typography variant="h6">
                  AlliV
                </Typography>
              </Link>
              <div className={classes.spacer}></div>
              <Link color="inherit" to={Routes.works} className={classes.link}>Works</Link>
              <Link color="inherit" to={Routes.me} className={classes.link}>Me</Link>
              <div className={classes.spacer}></div>
              <Tooltip title="Download Resume/CV">
                <IconButton
                  aria-label="download-resume-cv"
                  color="inherit"
                  component="a"
                  href="/documents/allistair-vilakazi-cv.pdf"
                  download
                >
                  <CloudDownloadIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </ElevateAppBar>
        <AnimatePresence exitBeforeEnter>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </ThemeTopLayout>
  )
}
