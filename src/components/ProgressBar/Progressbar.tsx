import React from 'react';
import { usePrefix } from '../../hooks/usePrefix';
import { useConvertValue } from '../../hooks/useConvertValue';
import './Progressbar.scss';

interface ProgressBarProps {
    isValue: number;
    maxValue: number;
    showPercent?: boolean;
    showValue?: boolean;
    showLabel?: boolean;
    remaining?: boolean;
    barLabels?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    isValue = 20,
    maxValue = 100,
    showPercent = true,
    showValue = true,
    showLabel = true,
    remaining = false,
    barLabels = false,
}) => {
    const prefix = usePrefix();
    const convertValue = useConvertValue();

    // Prozentwerte
    const isValuePercentage = (isValue / maxValue) * 100;
    const remainingValue = maxValue - isValue;
    const remainingPercentage = (remainingValue / maxValue) * 100;

    // Dynamische Klassenermittlung
    const getProgressClass = (value: number) => {
        if (value <= 33) return `${prefix}--progress-bar--good`;
        if (value <= 66) return `${prefix}--progress-bar--warning`;
        return `${prefix}--progress-bar--alert`;
    };

    let isValueClass = getProgressClass(isValuePercentage);
    let remainingValueClass =
        isValueClass === `${prefix}--progress-bar--warning`
            ? `${prefix}--progress-bar--alert`
            : getProgressClass(remainingPercentage);

    if (remaining) {
        isValueClass = `${prefix}--progress-bar--warning`;
        remainingValueClass = `${prefix}--progress-bar--good`;
    }

    return (
        <div className={`${prefix}--progress-bar-container`}>
            {/* Label oben (nur bei barLabels & remaining) */}
            {barLabels && remaining && (
                <div className={`${prefix}--progress-bar-labels top`}>
                    <span
                        className={`label-top ${isValueClass}`}
                        style={{ ['--isValuePercentage' as any]: isValuePercentage }}
                    >
                        {convertValue(isValue)}
                    </span>
                </div>
            )}

            <div className={`${prefix}--progress-bar-wrapper`}>
                <div
                    className={`${prefix}--progress-bar`}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={maxValue}
                    aria-valuenow={isValue}
                    aria-valuetext={`${isValuePercentage.toFixed(0)}% `}
                >
                    <div
                        className={`${prefix}--progress-bar_fill ${isValueClass}`}
                        style={{
                            width: `${isValuePercentage}%`,
                            ['--isValuePercentage' as any]: isValuePercentage,
                        }}
                    />
                    {remaining && (
                        <div
                            className={`${prefix}--progress-bar_fill ${remainingValueClass}`}
                            style={{
                                width: `${remainingPercentage}%`,
                                left: `${isValuePercentage}%`,
                            }}
                        />
                    )}
                </div>

                {/* Anzeige des Werts rechts */}
                {showValue && (
                    showPercent ? (
                        <span
                            className="max-value"
                            aria-label={`von gesamt `}
                        >
                            {`${isValuePercentage.toFixed(0)} %`}
                        </span>
                    ) : (
                        <span
                            className="max-value"
                            aria-label={`von gesamt`}
                        >
                            {convertValue(maxValue)}
                        </span>
                    )
                )}
            </div>

            {/* Prozentanzeige nur wenn showLabel = true & barLabels = false */}
            {showLabel && !barLabels && (
                <span className="progress-value">
                    {`${isValuePercentage.toFixed(0)}%`}
                </span>
            )}

            {/* Label unten (nur bei barLabels & remaining) */}
            {barLabels && remaining && (
                <div className={`${prefix}--progress-bar-labels bottom`}>
                    <span
                        className={`label-bottom ${remainingValueClass}`}
                        style={{ ['--isValuePercentage' as any]: remainingPercentage }}
                    >
                        {convertValue(remainingValue)}
                    </span>
                </div>
            )}
        </div>
    );
};
