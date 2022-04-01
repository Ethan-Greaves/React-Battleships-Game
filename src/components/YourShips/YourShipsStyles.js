import { makeStyles } from '@material-ui/core/styles';
const size = "15px";
const useStyles = makeStyles((theme) => ({
	cell: {
        width: size,
        height: size,
        color: "red",
        backgroundColor: "gold",
        border: "1px solid yellow",
    },
    
    background: {
        backgroundColor: "lightGrey",
    }
}));

export default useStyles;