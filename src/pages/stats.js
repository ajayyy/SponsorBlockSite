import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        userCount: 0,
        totalSubmissions: 0,
        minutesSaved: 0,
        viewCount: 0,
    });

    const [topUsers, setTopUsers] = useState([]);

    function setTopUserData(url) {
        return fetch(url)
            .then(response => response.json())
            .then(resultData => {
                let size = 100;
                if (resultData.userNames.length < size) {
                    size = resultData.useNames.length;
                }

                const transformedData = [];
                for (let i = 0; i < size; i++) {
                    const hours = Math.floor(
                        resultData.minutesSaved[i].minutesSaved / 60
                    );
                    transformedData.push({
                        userName: resultData.userNames[i],
                        viewCount: resultData.viewCounts[i],
                        totalSubmissions: resultData.totalSubmissions[i],
                        minutesSaved:
                            (hours > 0 ? hours + "h " : "") +
                            (resultData.minutesSaved[i] % 60).toFixed(1) +
                            "m",
                    });
                }

                setTopUsers(transformedData);
            });
    }

    useEffect(() => {
        fetch("https://sponsor.ajay.app/api/getTotalStats")
            .then(response => response.json())
            .then(resultData => setTotalStats(resultData));

        setTopUserData("https://sponsor.ajay.app/api/getTopUsers?sortType=0");
    }, []);

    return (
        <Layout>
            <SEO title="Stats" />

            <div className="container text-large">
                <h2 className="text-center">Overall Stats</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Total Contributing Users</td>
                            <td>{totalStats.userCount} users</td>
                        </tr>
                        <tr>
                            <td>Total Submissions</td>
                            <td>{totalStats.totalSubmissions} sponsors</td>
                        </tr>
                        <tr>
                            <td>Total Time Saved</td>
                            <td>
                                {Math.floor(totalStats.minutesSaved / 60 / 24)}{" "}
                                days{" "}
                                {((totalStats.minutesSaved / 60) % 24).toFixed(
                                    1
                                )}{" "}
                                hours
                            </td>
                        </tr>
                        <tr>
                            <td>Total View Count</td>
                            <td>
                                {totalStats.viewCount.toLocaleString()} views
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-center">Top Contributors</h2>
            </div>

            <div className="container-fluid" style={{ overflowX: "auto" }}>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>User Name</th>
                            <th
                                className="pointer"
                                onClick={() =>
                                    setTopUserData(
                                        "https://sponsor.ajay.app/api/getTopUsers?sortType=2"
                                    )
                                }
                            >
                                Submissions
                            </th>
                            <th
                                className="pointer"
                                onClick={() =>
                                    setTopUserData(
                                        "https://sponsor.ajay.app/api/getTopUsers?sortType=0"
                                    )
                                }
                            >
                                Minutes Saved
                            </th>
                            <th
                                className="pointer"
                                onClick={() =>
                                    setTopUserData(
                                        "https://sponsor.ajay.app/api/getTopUsers?sortType=1"
                                    )
                                }
                            >
                                View Counts
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {topUsers.map((value, index) => (
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{value.userName}</td>
                                <td>{value.totalSubmissions}</td>
                                <td>{value.minutesSaved}</td>
                                <td>{value.viewCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default IndexPage;
