import { ASSETS } from '@/constants/materialData';
import { useTranslation } from 'react-i18next';

const pawns = {
    working: ASSETS.local.pawnWorker,
    middle: ASSETS.local.pawnMiddle,
    capitalist: ASSETS.local.pawnCapitalist,
    state: ASSETS.local.pawnState
};

const ClassReference = ({ type, label, size = 'h-6 w-6', showLabel = true }) => {
    const { t } = useTranslation();

    // type can be 'working', 'middle', 'capitalist', 'state'

    // Try to deduce type from label if type is not provided
    let derivedType = type;
    if (!derivedType && label) {
        if (label.toLowerCase().includes('ouvri') || label.toLowerCase().includes('working')) derivedType = 'working';
        else if (label.toLowerCase().includes('moyenne') || label.toLowerCase().includes('middle')) derivedType = 'middle';
        else if (label.toLowerCase().includes('capitalist')) derivedType = 'capitalist';
        else if (label.toLowerCase().includes('état') || label.toLowerCase().includes('etat') || label.toLowerCase().includes('state')) derivedType = 'state';
    }

    const pawnImage = pawns[derivedType];
    const displayText = label || (derivedType ? t(`classes.${derivedType}.name`, { ns: 'game' }) : label);

    if (!pawnImage) {
        if (derivedType === 'state') {
            return (
                <span className="inline-flex items-center gap-2 font-medium">
                    <div className={`${size} flex items-center justify-center rounded-full border border-class-state/30 bg-class-state/10`}>
                        {/* Dynamic import or hardcoded icon for State */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-class-state"><line x1="3" x2="21" y1="22" y2="22" /><line x1="6" x2="6" y1="18" y2="11" /><line x1="10" x2="10" y1="18" y2="11" /><line x1="14" x2="14" y1="18" y2="11" /><line x1="18" x2="18" y1="18" y2="11" /><polygon points="12 2 20 7 4 7" /></svg>
                    </div>
                    {showLabel && <span>{displayText}</span>}
                </span>
            );
        }
        return <span>{displayText}</span>;
    }

    return (
        <span className="inline-flex items-center gap-2 font-medium">
            <img
                src={pawnImage}
                alt={`${displayText} pawn`}
                className={`${size} object-contain`}
            />
            {showLabel && <span>{displayText}</span>}
        </span>
    );
};

export default ClassReference;
