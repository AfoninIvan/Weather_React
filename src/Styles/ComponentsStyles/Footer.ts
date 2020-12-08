import { makeStyles,} from "@material-ui/core";

export const useStyles = makeStyles({
    footer:{
    height: "20%",
    background: "#000",
    lineHeight: "25px",

    "@media only screen and (max-width:768px)":{
        flexDirection: "column"
    },
    },
    footer__info:{
        margin: "10px",
        width: "20%",

        "@media screen and (max-width: 390px)":{
            width: "100%",
            "&":{
                fontSize: "10px"
            }
        },

    },
    footer__li :{
        color: "white",
        textDecoration:'none',
        "@media screen and (max-width: 578px)":{
            fontSize: "14px",
            lineHeight: 2,
        },
        "@media screen and (max-width: 390px)":{
            fontSize: "8px",
            textDecoration: "none",
            color: "white",
        },
        "&:hover":{
            transitionDuration: ".15s",
            cursor: "pointer",
            color: "rgb(220, 118, 84)",
            borderBottom: "rgb(220, 118, 84) solid 1px",
        },
    },
    footer__h1:{
        color:'white',
        fontSize: "24px"
    },
})