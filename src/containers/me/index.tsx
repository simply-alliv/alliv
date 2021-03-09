import React, { FunctionComponent } from "react"
import { Box, Container, Card, CardContent, Typography, Divider } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"

export interface MeItem {
  id: string
  title: string
  sections: Array<{
    title: string
    description: string
  }>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))',
      gridGap: theme.spacing(8),
      paddingBlock: theme.spacing(4),
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
    },
    sectionTitle: {
      fontWeight: 'bold'
    }
  }),
);

export const Me: FunctionComponent = () => {
  const classes = useStyles()
  const items: MeItem[] = []

  const { allMeJson } = useStaticQuery(graphql`
    query {
      allMeJson {
        edges {
          node {
            id
            title
            sections {
              title
              description
            }
          }
        }
      }
    }
  `)

  const mapEdgesToMeItems = () => {
    const edges = allMeJson.edges

    if (edges && edges.length > 0) {
      const data = edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.title,
        sections: edge.node.sections,
      }))

      items.push(...data)
    }
  }

  mapEdgesToMeItems()

  return (
    <Container>
      <Box pt={6} pb={8}>
      {items.map((item, index) => {
        return (
          <React.Fragment>
            <Card className={classes.card} variant="outlined">
              <CardContent className={classes.content}>
                <Typography className={classes.space} variant="h5" gutterBottom>{item.title}</Typography>
                <Divider />
                <div className={classes.container}>
                  {item.sections.map(section => {
                    return (
                      <div>
                        <Typography variant="subtitle1">{section.title}</Typography>
                        <Typography variant="body1" className={classes.sectionTitle}>{section.description}</Typography>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            {index < items.length - 1 ? <Box pb={8} /> : null}
          </React.Fragment>
        )
      })}
      </Box>
    </Container>
  )
}
