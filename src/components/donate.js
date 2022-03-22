import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./donate.scss";

const donateLink = "https://patreon.com/ajayyy";

const Donate = ({ downloadLink, clear }) => {
    return (
        <div className="donate-modal-container"
            onClick={(e) => {
                if (e.target.classList.contains("donate-modal-container")) {
                    if (clear) clear();
                }
            }}>
            <div className="donate-modal">
                <div>
                    <a href={donateLink} target="_blank" rel="noreferrer noopener">
                        $1
                    </a>

                    <a href={donateLink} target="_blank" rel="noreferrer noopener">
                        $3
                    </a>

                    <a href={donateLink} target="_blank" rel="noreferrer noopener">
                        $5
                    </a>

                    <a href={downloadLink}>
                        $0
                    </a>
                </div>

                <div>
                    <a href={downloadLink}>
                        Continue to extension store
                    </a>
                </div>
            </div>
        </div>
    );
};

Donate.propTypes = {
    downloadLink: PropTypes.string.isRequired,
    clear: PropTypes.func.isRequired
}

export default Donate;
