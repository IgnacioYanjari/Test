import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components
import Small from "components/Typography/Small.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

class CurriculumSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.title}>
          <h2> Curriculum Vitae</h2>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 10, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Experiencia",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <div className={classes.typo}>

                          <h3> Curso Activate - Google. <br />
                            <Small>
                              Desarrollo Web (Enero 2017 - Febrero 2017)
                            </Small>
                          </h3>
                          <p>
                            Conocimientos de historia de la Web, funcionamiento,
                            escritura y publicación de una paginaWeb(Conocimientos Básicos)
                          </p>

                          <h3> Ayudantía Programación. <br />
                            <Small>
                              Lenguaje C++ ( Segundo Semestre 2016 Universidad
                                Diego Portales )
                            </Small>
                          </h3>
                          <p>
                            Clases impartidas como ayudante de programación
                            explicando conceptos como funciones,tipos de datos,
                            manejo de archivos y lógica de programación.
                          </p>

                          <h3>Práctica profesional I. <br />
                            <Small>
                              Uso de NodeJs, ReactJs y SGBD SQLite3
                            </Small>
                          </h3>
                          <p>
                            Desarrollo de aplicación web (prototipo) para
                            manejar los rangos óptimos de una BDD.
                          </p>

                        </div>
                      </span>
                    )
                  },
                  {
                    tabButton: "Información adicional",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <div className={classes.typo}>

                          <h3> ACM-ICPC ( Año 2016 y 2017).</h3>
                          <p>
                            Participante de la Competición Internacional
                            Universitaria ACM de Programación.
                          </p>

                          <h3> Participación en Hackaton (2017).</h3>
                          <p>
                            Desarrollo de aplicación WEB utilizando
                            conocimientos Basicos de HTML/CSS y Bootstrap.
                          </p>

                          <h3>Base De Datos (2017).<br /> </h3>
                          <p>
                            Ramo impartido por la Universidad Diego portales en
                            el cual se realizó un proyecto de manejo de
                            mercaderia, estadisticas y compras de un negocio
                            pyme utilizando el microframework Flask junto
                            con python y base de datos
                            PostreSQL(Uso de sentencias SQL).
                          </p>

                          <h3>Github.<br /> </h3>
                          <p>
                            Conocimiento medio sobre uso de git desde Bash.
                          </p>
                        </div>
                      </span>
                    )
                  },
                  {
                    tabButton: "Herramientas",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <div className={classes.typo}>

                          <h3>Lenguajes de programación.</h3>
                          <p>
                            Python ,
                            C++ ,
                            SQL ,
                            JavaScript
                          </p>

                          <h3> Tecnologías.</h3>
                          <p>
                            Flask, NodeJs, ReactJs
                          </p>

                        </div>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(CurriculumSection);
