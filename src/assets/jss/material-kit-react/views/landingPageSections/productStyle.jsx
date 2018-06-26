import { title } from "assets/jss/material-kit-react.jsx";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  titleCurriculum :{
    ...title,
    marginTop: "5px",
    minHeight: "32px",
    textDecoration: "none"
  },
  subtitleCurriculum :{
    ...title,
    color : '#999',
    textDecoration: "none"
  },
  description: {
    color: "#38383A"
  }
};

export default productStyle;
