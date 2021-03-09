import React, { FunctionComponent, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container, Card, CardContent, CardActions, Typography, Divider, Tooltip } from "@material-ui/core"
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import { Button, IconButton, Link } from "gatsby-theme-material-ui"
import PreviewIcon from "@material-ui/icons/Visibility"
import { PreviewDialog } from "./previewDialog"

export interface PortfolioItem {
  id: string
  title: string
  description: string
  srcWebm?: string
  srcMp4?: string
  repoLink: string
  type: 'Backend' | 'Frontend' | 'Fullstack' | 'Other'
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))',
      gridGap: theme.spacing(4),
    },
    card: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    space: {
      flexGrow: 1
    }
  }),
);

export const Portfolio: FunctionComponent = () => {
  const classes = useStyles()
  const items: PortfolioItem[] = []
  const [open, setOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem>(null);

  const handlePreviewOpen = (portfolio: PortfolioItem) => {
    setSelectedPortfolio(portfolio);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { allPortfolioJson } = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        edges {
          node {
            id
            title
            description
            srcWebm
            srcMp4
            repoLink
            type
          }
        }
      }
    }
  `)

  const mapEdgesToPortfolioItems = () => {
    const edges = allPortfolioJson.edges

    if (edges && edges.length > 0) {
      const data = edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.title,
        description: edge.node.description,
        srcWebm: edge.node.srcWebm,
        srcMp4: edge.node.srcMp4,
        repoLink: edge.node.repoLink,
        type: edge.node.type,
      }))

      items.push(...data)
    }
  }

  mapEdgesToPortfolioItems()

  return (
    <Container>
      <Box pt={6} pb={8}>
        <div className={classes.container}>
          {items.map(item => {
            return (
              <Card className={classes.card} variant="outlined">
                <CardContent className={classes.content}>
                  <Typography className={classes.space} variant="h5" gutterBottom>{item.title}</Typography>
                  <Divider />
                  <Typography variant="body2">{item.type}</Typography>
                </CardContent>
                <CardActions>
                  {
                  item.repoLink?.length > 0
                    ? <Button
                        component={Link}
                        href={item.repoLink}
                        size="small"
                        target="_blank"
                        rel="noopener"
                        color="primary"
                      >
                        GitHub
                      </Button>
                    : null
                  }
                  <div className={classes.space}></div>
                  {
                    item.srcMp4 || item.srcWebm
                      ? <Tooltip title="Preview">
                          <IconButton
                            aria-label="preview"
                            size="small"
                            color="primary"
                            onClick={() => handlePreviewOpen(item)}
                          >
                            <PreviewIcon />
                          </IconButton>
                        </Tooltip>
                      : null
                  }
                </CardActions>
              </Card>
            )
          })}
        </div>
        <PreviewDialog open={open} selectedPortfolio={selectedPortfolio} onClose={handleClose} />
      </Box>
    </Container>
  )
}