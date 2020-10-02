import React, {useState} from "react";
import { Grid } from "semantic-ui-react";


import PinOrPasswordComponent from "./pin or password.component";

const ListWalletInfo = () => {
    const [ispin, setPin] = useState(null);

    if(ispin){
        return <PinOrPasswordComponent />
    }

    return (
        <div>
            <Grid>
                <Grid.Column>
                    
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default ListWalletInfo;