import { Grid, Item, Button, Box } from "@material-ui/core";
import YourShipStyles from './YourShipStyles.js';

/**
 * Basically the individual ship on the your ships section of this game https://hello-battleship.netlify.app/ 
 * To be used in the board setup scene, so player can keep track of what ship they're placing
 * @returns 
 */
const YourShip = ({ name, size, isBeingPlaced }) => {
    const styles = YourShipStyles({
        isBeingPlaced
    });
    
    const arr = [];
    for (let i = 0; i < size; i++){
        arr.push(true)
    }

    return (
        <>
            <div >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={8}
                    style={{height: "100%", margin: "auto" }}
                >
                    <Button variant="contained" className={styles.btn}>
                        <Grid item xs={7}>
                            <p className={styles.name}>{name}</p>
                        </Grid>
                        
                        <Grid item xs>
                            <Grid container>
                                {arr.map(() => {
                                    return (
                                        <Grid item>
                                            <div className={styles.square}></div>    
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Button>
                </Grid>
            </div>
            
        </>
    );
};
export default YourShip;