import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { injectIntl } from "react-intl";

import styles from "./workbook-report.css";

const WorkbookReport = function (props) {
    const {
        className,
        ...componentProps
    } = props;

    return (
        <div className={classNames(styles.workbookReport, className)}>
            <div className={classNames(styles.reportItem)}>
                できた！
            </div>
            <div className={classNames(styles.reportItem)}>
                にがて？
            </div>
        </div>
    );
};

WorkbookReport.propTypes = {
    className: PropTypes.string,
}

export default injectIntl(WorkbookReport);
