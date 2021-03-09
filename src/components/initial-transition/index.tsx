import React from "react"
import { motion } from "framer-motion"
import { Box } from "@material-ui/core"
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: grey[900]
    },
  }),
);

export const InitialTransition = () => {
  const classes = useStyles()

  return (
    <Box position="absolute" display="flex" justifyContent="center">
      <Box
        component={motion.div}
        className={classes.root}
        position="relative"
        width="100%"
        initial="initial"
        animate="animate"
	      variants={blackBox}
      />      
    </Box>
  );
};