import React from "react";
import "./wallet.styles.css";

import ListWalletInfo from "./list-wallet-info.component";


const Wallet = () => {
    return (
        <div>
            no wallet ? create :
            <ListWalletInfo />
        </div>
    )
}


export default Wallet;