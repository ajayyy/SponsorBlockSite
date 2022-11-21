import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Layout from "../components/layout";
import Seo from "../components/seo";

const API_BASE = "https://sponsor.ajay.app";
let endpoint = "/api/getTopUsers?categoryStats=true";
let sortType = 0;
let category = "all";
let checkboxShowStats = false;

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        apiUsers: 0,
        activeUsers: 0,
        userCount: 0,
        totalSubmissions: 0,
        minutesSaved: 0,
        viewCount: 0,
    });
    const [categoryStats, setCategoryStats] = useState({
        visible: false,
        data: [],
    });

    const categoryStatsTitles = [
        "Sponsor",
        "Intro",
        "Outro",
        "Interaction",
        "Self Promotion",
        "Non-Music Section",
        "Preview",
        "Highlight",
        "Filler",
        "Exclusive Access",
        "Chapter"
    ];
    const categoryStatsColors = [
        "#00d400",
        "#00ffff",
        "#0202ed",
        "#cc00ff",
        "#ffff00",
        "#ff9900",
        "#008fd6",
        "#ff1684",
        "#6600ff",
        "#008a5c",
        "#ffd679"
    ];

    function generateCssConicGradientFromCategoryStats(data) {
        let lastPercentage = 0;
        const piechartCode = data.map((d, index) => {
            const percent = parseFloat(d[1]);
            const str = `${categoryStatsColors[index]} 0 ${
                lastPercentage + percent
            }%`;
            lastPercentage += percent;
            return str;
        });
        return `conic-gradient(${piechartCode.join(",")})`;
    }

    const [topUsers, setTopUsers] = useState([]);

    const [isTotalStatsLoading, setIsTotalStatsLoading] = useState(true);

    function setTopUserData(clickedElement) {
        const url = new URL(`${API_BASE}${endpoint}`);
        url.searchParams.append("sortType", sortType);
        url.searchParams.append("category", category);
        return fetch(url)
            .then((response) => {
                if (response.ok) return response.json()
                else Promise.reject(response)
            })
            .then((resultData) => {
                let size = resultData.userNames.length;

                if (clickedElement) {
                    [...document.getElementsByClassName("sorted")].forEach(
                        (el) => el.classList.remove("sorted")
                    );
                    clickedElement.classList.add("sorted");
                    clickedElement.classList.remove("sort-loading");
                }

                const transformedData = [];
                for (let i = 0; i < size; i++) {
                    const days = Math.floor(
                        resultData.minutesSaved[i] / 60 / 24
                    );
                    const hours = (
                        (resultData.minutesSaved[i] / 60) %
                        24
                    ).toFixed(1);

                    let categoryStats = false;

                    if ("categoryStats" in resultData) {
                        const total = resultData.categoryStats[i].reduce(
                            (accumulator, currentValue) =>
                                accumulator + currentValue,
                            0
                        );
                        categoryStats = resultData.categoryStats[i].map(
                            (value) => [
                                value,
                                ((value / total) * 100).toFixed(2),
                            ]
                        );
                    }

                    transformedData.push({
                        userName: resultData.userNames[i],
                        viewCount: resultData.viewCounts[i],
                        totalSubmissions: resultData.totalSubmissions[i],
                        minutesSaved:
                            (days > 0 ? days + "d " : "") +
                            (hours > 0 ? hours + "h " : ""),
                        categoryStats: categoryStats,
                    });
                }

                setTopUsers(transformedData);
            })
            .catch((r) => console.error(r));
    }

    useEffect(() => {
        fetch(API_BASE + "/api/getTotalStats?countContributingUsers=true")
            .then((response) => {
                if (response.ok) return response.json()
                else Promise.reject(response)
            })
            .then((resultData) => {
                setIsTotalStatsLoading(false);
                setTotalStats(resultData);
            })
            .catch((r) => console.error(r));
        setTopUserData();
    }, []);

    const displayCategoryStats = (stats) => {
        if (stats === false) return;
        if (!checkboxShowStats) return;
        setCategoryStats({ visible: true, data: stats });
    };

    const hideCategoryStats = () => {
        setCategoryStats({ visible: false, data: [] });
    };

    return (
        <Layout>
            <Seo title="Stats" />

            <div className="container">
                <h2 className="text-center">Overall Stats</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Active Users:</td>
                            <td
                                className={
                                    isTotalStatsLoading ? "loading" : null
                                }
                            >
                                {totalStats.apiUsers.toLocaleString()} users
                            </td>
                        </tr>
                        <tr>
                            <td>Contributing Users:</td>
                            <td
                                className={
                                    isTotalStatsLoading ? "loading" : null
                                }
                            >
                                {totalStats.userCount.toLocaleString()} users
                            </td>
                        </tr>
                        <tr>
                            <td>Submissions:</td>
                            <td
                                className={
                                    isTotalStatsLoading ? "loading" : null
                                }
                            >
                                {totalStats.totalSubmissions.toLocaleString()}{" "}
                                segments
                            </td>
                        </tr>
                        <tr>
                            <td>Time Saved:</td>
                            <td
                                className={
                                    isTotalStatsLoading ? "loading" : null
                                }
                            >
                                {Math.floor(
                                    totalStats.minutesSaved / 60 / 24 / 365
                                )}{" "}
                                years{" "}
                                {Math.floor(totalStats.minutesSaved / 60 / 24) %
                                    365}{" "}
                                days{" "}
                                {((totalStats.minutesSaved / 60) % 24).toFixed(
                                    1
                                )}{" "}
                                hours
                            </td>
                        </tr>
                        <tr>
                            <td>Skip Count:</td>
                            <td
                                className={
                                    isTotalStatsLoading ? "loading" : null
                                }
                            >
                                {totalStats.viewCount.toLocaleString()} skips
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <h2 className="text-center no-bottom-margin">
                        Top Contributors
                    </h2>

                    <div className="text-center text-small">
                        Click a column title to change the sort
                    </div>
                    <div className="text-center text-small">
                        <label>
                            <input
                                type="checkbox"
                                value={checkboxShowStats}
                                onChange={(e) => {
                                    checkboxShowStats = e.target.checked;
                                }}
                            />{" "}
                            Show category stats on hover
                        </label>
                    </div>
                    <div className="text-center text-small">
                        <label id="filterlabel">
                            Filter by Category:
                            <select
                                defaultValue="all"
                                onChange={(e) => {
                                    endpoint = "/api/getTopCategoryUsers";
                                    category = e.target.value;
                                    if (category === "all")
                                        endpoint = "/api/getTopUsers";
                                    const label =
                                        document.querySelector(
                                            "label#filterlabel"
                                        );
                                    label.classList.add("sort-loading");
                                    setTopUserData().then(() =>
                                        label.classList.remove("sort-loading")
                                    );
                                }}
                            >
                                <option value="all">All</option>
                                <option value="sponsor">Sponsor</option>
                                <option value="intro">Intro</option>
                                <option value="outro">Endcards/ Credits</option>
                                <option value="interaction">
                                    Interaction Reminder
                                </option>
                                <option value="selfpromo">
                                    Unpaid/ Self Promotion
                                </option>
                                <option value="music_offtopic">
                                    Non-Music
                                </option>
                                <option value="preview">Preview</option>
                                <option value="poi_highlight">Highlight</option>
                                <option value="filler">Filler</option>
                                <option value="exclusive_access">
                                    Exclusive Access
                                </option>
                                <option value="chapter">Chapter</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>

            <div className="container-fluid stats-table">
                <table className="highlight-row-on-hover">
                    <thead>
                        <tr>
                            <th className="rank">Rank</th>
                            <th>User Name</th>
                            <th
                                className="pointer"
                                onClick={(e) => {
                                    if (e.target.classList.contains("sorted"))
                                        return;
                                    e.target.classList.add("sort-loading");
                                    sortType = 2;
                                    setTopUserData(e.target);
                                }}
                            >
                                Submissions
                            </th>
                            <th
                                className="pointer sorted"
                                onClick={(e) => {
                                    if (e.target.classList.contains("sorted"))
                                        return;
                                    e.target.classList.add("sort-loading");
                                    sortType = 0;
                                    setTopUserData(e.target);
                                }}
                            >
                                Time Saved
                            </th>
                            <th
                                className="pointer"
                                onClick={(e) => {
                                    if (e.target.classList.contains("sorted"))
                                        return;
                                    e.target.classList.add("sort-loading");
                                    sortType = 1;
                                    setTopUserData(e.target);
                                }}
                            >
                                Total Skips
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {topUsers.length === 0 ? (
                            <tr className={"row--even"}>
                                <td className="topUsersLoading" colSpan="5">
                                    Loading...
                                </td>
                            </tr>
                        ) : (
                            topUsers.map((value, index) => (
                                <tr
                                    className={`row--${
                                        index % 2 ? "odd" : "even"
                                    }`}
                                    key={index}
                                    onMouseEnter={(_) => {
                                        displayCategoryStats(
                                            value.categoryStats
                                        );
                                    }}
                                    onMouseLeave={(_) => {
                                        hideCategoryStats();
                                    }}
                                >
                                    <td className="rank celltype-number">
                                        {index + 1}.
                                    </td>
                                    <td>{value.userName}</td>
                                    <td className="celltype-number has--categorystats">
                                        {value.totalSubmissions.toLocaleString()}
                                    </td>
                                    <td className="celltype-number">
                                        {value.minutesSaved}
                                    </td>
                                    <td className="celltype-number">
                                        {value.viewCount.toLocaleString()}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                <div
                    className={classNames("categorystats", {
                        "categorystats--hidden": !categoryStats.visible,
                    })}
                >
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th colSpan="2">Submissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryStats.data.map((data, index) => (
                                <tr
                                    className={classNames({
                                        dim: data[0] === 0,
                                    })}
                                    style={{
                                        color: categoryStatsColors[index],
                                    }}
                                    key={index}
                                >
                                    <td>{categoryStatsTitles[index]}</td>
                                    <td className="celltype-number">
                                        {data[0]}
                                    </td>
                                    <td className="celltype-number">
                                        {data[1]}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div
                        className="categorystats-piechart"
                        style={{
                            background:
                                generateCssConicGradientFromCategoryStats(
                                    categoryStats.data
                                ),
                        }}
                    ></div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
