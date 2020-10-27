import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Layout from "../components/layout";
import SEO from "../components/seo";
import StatisticsTable from "../components/statistics-table";
import { minutesToHoursAndMinutes } from "../utils";

const API_BASE = 'https://sponsor.ajay.app';
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
      data: []
    });
    const [totalCategoryStats, setTotalCategoryStats] = useState([]);

    const categoryStatsTitles = [
      'Sponsor',
      'Intro',
      'Outro',
      'Interaction',
      'Self Promotion',
      'Non-Music Section',
    ];
    const categoryStatsColors = ['#00d400','#00ffff','#0202ed','#cc00ff','#ffff00','#ff9900'];
    
    function generateCssConicGradientFromCategoryStats(data) {
        let lastPercentage = 0;
        const piechartCode = data.map((d, index) => {
            const percent = parseFloat(d[1]);
            const str = `${categoryStatsColors[index]} 0 ${lastPercentage + percent}%`;
            lastPercentage += percent;
            return str;
        });
        return  `conic-gradient(${piechartCode.join(',')})`;
    }

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
                    let categoryStats = false;
                    
                    if ('categoryStats' in resultData) {
                        const total = resultData.categoryStats[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                        categoryStats = resultData.categoryStats[i].map(value => ([value, ((value / total) * 100).toFixed(2)]));
                    }
                    
                    transformedData.push({
                        userName: resultData.userNames[i],
                        viewCount: resultData.viewCounts[i],
                        totalSubmissions: resultData.totalSubmissions[i],
                        minutesSaved:
                            (hours > 0 ? hours + "h " : "") +
                            (resultData.minutesSaved[i] % 60).toFixed(1) +
                            "m",
                        categoryStats: categoryStats,
                    });
                }

                setTopUsers(transformedData);
            });
    }

    function sortTotalCategoryStats(sortBy) {
        const statsCopy = [...totalCategoryStats];
        statsCopy.sort((a, b) => {
            if (typeof a[sortBy] === 'string') {
                return a[sortBy].localeCompare(b[sortBy]);
            }
            else {
                return b[sortBy] - a[sortBy];
            }
        });
        setTotalCategoryStats(statsCopy);
    }


    function setTotalCategoryData(url) {
        fetch(url)
            .then(response => response.json())
            .then(setTotalCategoryStats);
    }

    useEffect(() => {
        fetch(API_BASE + "/api/getTotalStats")
            .then(response => response.json())
            .then(resultData => setTotalStats(resultData));

        setTopUserData(API_BASE + "/api/getTopUsers?sortType=0&categoryStats=true");
        setTotalCategoryData(API_BASE + "/api/getCategoryStats?sortBy=minutesSaved&order=desc");
    }, []);
    
    const displayCategoryStats = (stats) => {
      if (stats === false) return;
      if (!checkboxShowStats) return;
      setCategoryStats({visible:true, data:stats});
    };
    
    const hideCategoryStats = () => {
      setCategoryStats({visible:false, data:[]});
    };

    const topContributorsColumns = [
        {
            header: {
                title: 'Rank',
                className: 'rank',
                onClick: null,
            },
            cell: {
                className: 'rank celltype-number',
                render: (_, index) => (<>{index + 1}</>)
            }
        },
        {
            header: {
                title: 'User name',
                className: null,
                onClick: null,
            },
            cell: {
                className: null,
                render: (rowData) => (<>{rowData.userName}</>)
            }
        },
        {
            header: {
                title: 'Submissions',
                className: 'pointer',
                onClick: () => {
                    setTopUserData(API_BASE + "/api/getTopUsers?sortType=2&categoryStats=true");
                }
            },
            cell: {
                className: null,
                render: (rowData) => (<>{rowData.totalSubmissions.toLocaleString()}</>)
            }
        },
        {
            header: {
                title: 'Time Saved',
                className: 'pointer',
                onClick: () => {
                    setTopUserData(API_BASE + "/api/getTopUsers?sortType=0&categoryStats=true");
                }
            },
            cell: {
                className: null,
                render: (rowData) => (<>{rowData.minutesSaved}</>)
            }
        },
        {
            header: {
                title: 'Total Skips',
                className: 'pointer',
                onClick: () => {
                    setTopUserData(API_BASE + "/api/getTopUsers?sortType=1&categoryStats=true");
                }
            },
            cell: {
                className: null,
                render: (rowData) => (<>{rowData.viewCount.toLocaleString()}</>)
            }
        },
    ];


    const totalCategoryStatsColumns = [
        {
            header: {
                title: 'Rank',
                className: 'rank',
                onClick: null,
            },
            cell: {
                className: 'rank celltype-number',
                render: (_, index) => (<>{index + 1}</>)
            }
        },
        {
            header: {
                title: 'Category',
                className: 'pointer',
                onClick: () => sortTotalCategoryStats('category'),
            },
            cell: {
                className: null,
                render: (rowData) => (<>{rowData.category}</>)
            }
        },
        {
            header: {
                title: 'Submissions',
                className: 'pointer',
                onClick: () => sortTotalCategoryStats('totalSubmissions'),
            },
            cell: {
                className: null,
                render: (rowData) => (<>{rowData.totalSubmissions.toLocaleString()}</>)
            }
        },
        {
            header: {
                title: 'Time Saved',
                className: 'pointer',
                onClick: () => sortTotalCategoryStats('minutesSaved'),
            },
            cell: {
                className: null,
                render: (rowData) => (<>{minutesToHoursAndMinutes(rowData.minutesSaved)}</>)
            }
        },
        {
            header: {
                title: 'Total Skips',
                className: 'pointer',
                onClick: () => sortTotalCategoryStats('viewCount'),
            },
            cell: {
                className: null,
                render: (rowData) => (<>{rowData.viewCount.toLocaleString()}</>)
            }
        },
    ];

    return (
        <Layout>
            <SEO title="Stats" />

            <div className="container">
                <h2 className="text-center">Overall Stats</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Active Users:</td>
                            <td>{totalStats.apiUsers.toLocaleString()} users</td>
                        </tr>
                        <tr>
                            <td>Contributing Users:</td>
                            <td>{totalStats.userCount.toLocaleString()} users</td>
                        </tr>
                        <tr>
                            <td>Submissions:</td>
                            <td>{totalStats.totalSubmissions.toLocaleString()} segments</td>
                        </tr>
                        <tr>
                            <td>Time Saved:</td>
                            <td>
                                {Math.floor(totalStats.minutesSaved / 60 / 24 / 365)}{" "}
                                years{" "}
                                {(Math.floor(totalStats.minutesSaved / 60 / 24) % 365)}{" "}
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

            </div>

            <div className="container-fluid stats-table">

                <h2 className="text-center no-bottom-margin">Overall Category Stats</h2>
                <StatisticsTable
                    className="highlight-row-on-hover"
                    columns={totalCategoryStatsColumns}
                    data={totalCategoryStats}
                />
                <h2 className="text-center no-bottom-margin">Top Contributors</h2>

                <div className="text-center text-small">Click a column title to change the sort</div>
                <div className="text-center text-small"><label><input type="checkbox" value={checkboxShowStats} onChange={event=>{checkboxShowStats=event.target.checked}} /> Show category stats on hover</label></div>
                <StatisticsTable
                    className="highlight-row-on-hover"
                    columns={topContributorsColumns}
                    data={topUsers}
                    onRowMouseEnter={(_, rowData) => (displayCategoryStats(rowData.categoryStats))}
                    onRowMouseLeave={() => (hideCategoryStats())}
                />

                <div className={classNames('categorystats', {'categorystats--hidden':!categoryStats.visible})}>
                  <table>
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th colSpan="2">Submissions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {categoryStats.data.map((data, index) => (
                      <tr className={classNames({'dim':data[0] === 0})} style={{
                        color: categoryStatsColors[index]
                      }} key={index}>
                        <td>{categoryStatsTitles[index]}</td>
                        <td className="celltype-number">{data[0]}</td>
                        <td className="celltype-number">{data[1]}%</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                  <div className="categorystats-piechart" style={{
                      background: generateCssConicGradientFromCategoryStats(categoryStats.data)
                  }}></div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
