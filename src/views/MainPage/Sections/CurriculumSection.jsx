import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";



// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class CurriculumSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}> Curriculum Vitae </h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Experiencia",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <h5 className={classes.titleCurriculum}>
                        Curso Activate - Google
                        </h5>
                        <p className={classes.subtitleCurriculum} >
                          daslkjlk
                        </p>
                        <p>
                          Conocimientos de historia de la Web, funcionamiento,
                          escritura y publicación de una paginaWeb(Conocimientos Básicos)
                        </p>
                        <br />
                        <h5 className={classes.titleCurriculum}>  Programación </h5>
                        <p>
                          Clases impartidas como ayudante de programación
                          explicando conceptos como funciones,tipos dedatos,
                          manejo de archivos y lógica de programación.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically
                          procrastinate B2C users after installed base
                          benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(CurriculumSection);
