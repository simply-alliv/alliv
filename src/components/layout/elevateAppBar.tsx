import React, { FunctionComponent } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

interface Props {
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

export const ElevateAppBar = (props: Props) => {
  return (
    <ElevationScroll {...props} />
  )
}
