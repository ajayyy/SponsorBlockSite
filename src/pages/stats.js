import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        activeUsers: 0,
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
                let size = resultData.userNames.length;

                const transformedData = [];
                for (let i = 0; i < size; i++) {
                    const hours = Math.floor(
                        resultData.minutesSaved[i] / 60
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

            <div className="container">
                <h2 className="text-center">Overall Stats</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Active Users:</td>
                            <td>{totalStats.activeUsers.toLocaleString()} users</td>
                        </tr>
                        <tr>
                            <td>Contributing Users:</td>
                            <td>{totalStats.userCount.toLocaleString()} users</td>
                        </tr>
                        <tr>
                            <td>Submissions:</td>
                            <td>{totalStats.totalSubmissions.toLocaleString()} sponsors</td>
                        </tr>
                        <tr>
                            <td>Time Saved:</td>
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
                            <td>Skip Count:</td>
                            <td>
                                {totalStats.viewCount.toLocaleString()} skips
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-center no-bottom-margin">Top Contributors</h2>

                <div className="text-center text-small">Click a column title to change the sort</div>
            </div>

            <div className="container-fluid stats-table">
                <table>
                    <thead>
                        <tr>
                            <th className="rank">Rank</th>
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
                                Time Saved
                            </th>
                            <th
                                className="pointer"
                                onClick={() =>
                                    setTopUserData(
                                        "https://sponsor.ajay.app/api/getTopUsers?sortType=1"
                                    )
                                }
                            >
                                Total Skips
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {topUsers.map((value, index) => (
                            <tr key={index}>
                                <td className="rank">{index + 1}.</td>
                                <td>{value.userName}</td>
                                <td>{value.totalSubmissions.toLocaleString()}</td>
                                <td>{value.minutesSaved}</td>
                                <td>{value.viewCount.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default IndexPage;
