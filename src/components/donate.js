import React from "react";

import "./donate.scss";

export function DonateComponent() {
    const [activeButton, setActiveButton] = React.useState(null);
    const [showOtherDonationMethods, setShowOtherDonationMethods] = React.useState(false);

    return (
        <>
            <div className="donate-modal">
                <div>
                    <a className={activeButton === 1 ? "active" : ""} onClick={() => setActiveButton(1)}>
                        $1
                    </a>

                    <a className={activeButton === 5 ? "active" : ""} onClick={() => setActiveButton(5)}>
                        $5
                    </a>

                    <a className={activeButton === 15 ? "active" : ""} onClick={() => setActiveButton(15)}>
                        $15
                    </a>

                    <a className={activeButton === "other" ? "active" : ""} onClick={() => setActiveButton("other")}>
                        Custom
                    </a>
                </div>

                <div style={{ visibility: activeButton === null ? "hidden" : "visible" }}>
                    <a href="https://github.com/sponsors/ajayyy-org?frequency=one-time" target="_blank" rel="noopener noreferrer">
                        One-time
                    </a>

                    <a href="https://github.com/sponsors/ajayyy-org?frequency=recurring" target="_blank" rel="noopener noreferrer">
                        Monthly
                    </a>

                    <a className={showOtherDonationMethods ? "active" : ""}
                        onClick={() => setShowOtherDonationMethods(!showOtherDonationMethods)}>
                        Other ways to donate
                    </a>
                </div>
            </div>

            <span style={{ display: !showOtherDonationMethods ? "none" : null, textAlign: "center" }}>
                <p>
                    Recurring:{" "}
                    <a href="https://github.com/sponsors/ajayyy-org">
                        GitHub (lowest fees)
                    </a>
                    ,{" "}
                    <a href="https://www.patreon.com/ajayyy">Patreon</a>
                    ,{" "}
                    <a href="https://liberapay.com/ajayyy">Liberapay</a>
                </p>

                <p>
                    One-time donation:{" "}
                    <a href="https://github.com/sponsors/ajayyy-org?frequency=one-time">
                        GitHub (lowest fees)
                    </a>
                    , <a href="https://paypal.me/ajayyy">Paypal</a>,{" "}
                    <a style={{ textDecoration: "underline" }} onClick={() => {
                        alert("dev@ajay.app");
                    }}>Interac e-Transfer</a>,{" "}
                    <a style={{ textDecoration: "underline" }} onClick={() => {
                        alert("BIC: TRWIBEB1XXX\nIBAN: BE74 9678 0459 0007");
                    }}>SEPA</a>,{" "}
                    <a href="bitcoin:bc1qvnjvuqycefz593pu6f2vpngml8ld9wjqd5qcus">
                        BTC
                    </a>,{" "}
                    <a href="monero:85vyiPD4yby5bfkN51kSuc9sjZCMmBaoE5t1MCvxX4SuQMamgK7D8LGYbhkm1XGkgPgYn1FBBa3MiDGANXigEUJcEWib6H8">
                        XMR
                    </a>
                </p>
            </span>
        </>
    )
}