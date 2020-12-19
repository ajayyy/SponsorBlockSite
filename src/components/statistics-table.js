import React from "react";
import PropTypes from "prop-types";
import "normalize.css/normalize.css";
import "./layout.scss";
import "fork-awesome/css/fork-awesome.min.css"

const StatisticsTable = ({ columns, data, onRowMouseEnter, onRowMouseLeave, className }) => {
    return (
        <table className={className}>
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th
                            key={index}
                            className={col.header.className}
                            onClick={col.header.onClick}
                        >{col.header.title}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((item, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className={`row--${rowIndex % 2 ? 'odd' : 'even'}`}
                        onMouseEnter={(e) => onRowMouseEnter(e, item, rowIndex)}
                        onMouseLeave={(e) => onRowMouseLeave(e, item, rowIndex)}
                    >
                        {columns.map((col, colIndex) => (
                            <td
                                key={colIndex}
                                className={col.cell.className}
                            >
                                {col.cell.render(item, rowIndex)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


StatisticsTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    onRowMouseEnter: PropTypes.func,
    onRowMouseLeave: PropTypes.func,
    className: PropTypes.string,
}

StatisticsTable.defaultProps = {
    columns: [],
    data: [],
    onRowMouseEnter: () => {},
    onRowMouseLeave: () => {},
}

export default StatisticsTable;
