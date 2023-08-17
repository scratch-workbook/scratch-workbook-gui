import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { injectIntl } from "react-intl";

import styles from "./workbook-score.css";

const WorkbookScore = function(props) {
    const {
        className,
        ...componentProps
    } = props;

    return (
        <div className={classNames(styles.workbookScore, className)}>
            <div>
                スコア
            </div>
        </div>
    );
};

WorkbookScore.propTypes = {
    className: PropTypes.string,
}

export default injectIntl(WorkbookScore);
