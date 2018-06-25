import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/avatarMain.png";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import FeriadosSection from './Sections/FeriadosSection.jsx';

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Ignacio Antonio Yanjari Saez"
          rightLinks={ <HeaderLinks linkToGit={true}
            linkGitHub = "https://github.com/IgnacioYanjari?tab=repositories" /> }
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax style={{height:'600px'}} filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        Ignacio Yanjari Saez
                        <Button justIcon link className={classes.margin5}
                          href="https://github.com/IgnacioYanjari?tab=repositories" >
                          <i className={"fab fa-github"} />
                        </Button>
                      </h3>
                      <h6> Estudiante Ingenieria Civil en informática y telecomunicaciones </h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper} >
                  <div className={classes.description}>
                    <p>
                      En la presente página se describirá mi experiencia laboral
                      obtenida en las tecnologias y/o lenguajes
                      como ReactJs, NodeJS, Python, HTML, CSS3.{"  "}

                      Como también mis intereses personales( Programación
                        competitiva - Algoritmos ).{" "}
                    </p>
                  </div>
                </GridItem>
              </GridContainer>
              <FeriadosSection/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
