import { useTranslation } from 'react-i18next';

export const useGameData = () => {
    const { t } = useTranslation();

    const PHASES = [
        { name: t('phases.preparation', { ns: 'game' }), color: 'bg-blue-500', icon: 'BookOpen' },
        { name: t('phases.action', { ns: 'game' }), color: 'bg-green-500', icon: 'Play' },
        { name: t('phases.production', { ns: 'game' }), color: 'bg-yellow-500', icon: 'Factory' },
        { name: t('phases.elections', { ns: 'game' }), color: 'bg-purple-500', icon: 'Users' },
        { name: t('phases.scoring', { ns: 'game' }), color: 'bg-red-500', icon: 'Calculator' }
    ];

    const POLICY_NAMES = {
        fiscal: t('policies.fiscal', { ns: 'game' }),
        labor: t('policies.labor', { ns: 'game' }),
        taxation: t('policies.taxation', { ns: 'game' }),
        healthWelfare: t('policies.healthWelfare', { ns: 'game' }),
        education: t('policies.education', { ns: 'game' }),
        trade: t('policies.trade', { ns: 'game' }),
        immigration: t('policies.immigration', { ns: 'game' })
    };

    const TABS = [
        { id: 'home', name: t('tabs.home', { ns: 'common', defaultValue: 'Accueil' }), icon: 'Home' },
        { id: 'setup-guide', name: t('tabs.setupGuide', { ns: 'common' }), icon: 'Package' },
        { id: 'policies', name: t('tabs.policies', { ns: 'common', defaultValue: 'Politique' }), icon: 'Users' },
        { id: 'phases', name: t('tabs.phases', { ns: 'common' }), icon: 'Play' },
        { id: 'board', name: t('tabs.board', { ns: 'common' }), icon: 'Map' },
        { id: 'state-dashboard', name: t('tabs.stateDashboard', { ns: 'common' }), icon: 'Landmark' },
        { id: 'taxes', name: t('tabs.taxes', { ns: 'common' }), icon: 'Calculator' },
        { id: 'other-rules', name: t('tabs.otherRules', { ns: 'common', defaultValue: 'Autres Règles' }), icon: 'BookOpen' },
        { id: 'rules', name: t('tabs.rules', { ns: 'common' }), icon: 'BookOpen' },
        { id: 'material', name: t('tabs.material', { ns: 'common' }), icon: 'Box' },
        { id: 'faq', name: t('tabs.faq', { ns: 'common', defaultValue: 'FAQ' }), icon: 'HelpCircle' },
        { id: 'shop', name: t('tabs.shop', { ns: 'common', defaultValue: 'Boutique' }), icon: 'ShoppingBag' },
        { id: 'credits', name: t('tabs.credits', { ns: 'common' }), icon: 'Info' }
    ];

    const CLASS_ACTIONS = {
        working: {
            name: t('classes.working.name', { ns: 'game' }),
            color: 'red',
            base: [
                {
                    name: t('classes.working.baseActions.proposeLaw.name', { ns: 'game' }),
                    desc: t('classes.working.baseActions.proposeLaw.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.baseActions.assignWorkers.name', { ns: 'game' }),
                    desc: t('classes.working.baseActions.assignWorkers.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.baseActions.buyGoods.name', { ns: 'game' }),
                    desc: t('classes.working.baseActions.buyGoods.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.baseActions.strike.name', { ns: 'game' }),
                    desc: t('classes.working.baseActions.strike.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.baseActions.protest.name', { ns: 'game' }),
                    desc: t('classes.working.baseActions.protest.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.baseActions.politicalPressure.name', { ns: 'game' }),
                    desc: t('classes.working.baseActions.politicalPressure.desc', { ns: 'game' })
                }
            ],
            bonus: [
                {
                    name: t('classes.working.bonusActions.healthServices.name', { ns: 'game' }),
                    desc: t('classes.working.bonusActions.healthServices.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.bonusActions.training.name', { ns: 'game' }),
                    desc: t('classes.working.bonusActions.training.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.bonusActions.useLuxury.name', { ns: 'game' }),
                    desc: t('classes.working.bonusActions.useLuxury.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.bonusActions.transferWorkers.name', { ns: 'game' }),
                    desc: t('classes.working.bonusActions.transferWorkers.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.bonusActions.collectBenefits.name', { ns: 'game' }),
                    desc: t('classes.working.bonusActions.collectBenefits.desc', { ns: 'game' })
                },
                {
                    name: t('classes.working.bonusActions.repayLoan.name', { ns: 'game' }),
                    desc: t('classes.working.bonusActions.repayLoan.desc', { ns: 'game' })
                }
            ]
        },
        middle: {
            name: t('classes.middle.name', { ns: 'game' }),
            color: 'yellow',
            base: [
                {
                    name: t('classes.middle.baseActions.proposeLaw.name', { ns: 'game' }),
                    desc: t('classes.middle.baseActions.proposeLaw.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.baseActions.assignWorkers.name', { ns: 'game' }),
                    desc: t('classes.middle.baseActions.assignWorkers.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.baseActions.buildCompany.name', { ns: 'game' }),
                    desc: t('classes.middle.baseActions.buildCompany.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.baseActions.sellCompany.name', { ns: 'game' }),
                    desc: t('classes.middle.baseActions.sellCompany.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.baseActions.export.name', { ns: 'game' }),
                    desc: t('classes.middle.baseActions.export.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.baseActions.buyGoods.name', { ns: 'game' }),
                    desc: t('classes.middle.baseActions.buyGoods.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.baseActions.overtime.name', { ns: 'game' }),
                    desc: t('classes.middle.baseActions.overtime.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.baseActions.politicalPressure.name', { ns: 'game' }),
                    desc: t('classes.middle.baseActions.politicalPressure.desc', { ns: 'game' })
                }
            ],
            bonus: [
                {
                    name: t('classes.middle.bonusActions.healthServices.name', { ns: 'game' }),
                    desc: t('classes.middle.bonusActions.healthServices.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.bonusActions.training.name', { ns: 'game' }),
                    desc: t('classes.middle.bonusActions.training.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.bonusActions.useLuxury.name', { ns: 'game' }),
                    desc: t('classes.middle.bonusActions.useLuxury.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.bonusActions.adjustPrices.name', { ns: 'game' }),
                    desc: t('classes.middle.bonusActions.adjustPrices.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.bonusActions.adjustWages.name', { ns: 'game' }),
                    desc: t('classes.middle.bonusActions.adjustWages.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.bonusActions.transferWorkers.name', { ns: 'game' }),
                    desc: t('classes.middle.bonusActions.transferWorkers.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.bonusActions.collectBenefits.name', { ns: 'game' }),
                    desc: t('classes.middle.bonusActions.collectBenefits.desc', { ns: 'game' })
                },
                {
                    name: t('classes.middle.bonusActions.repayLoan.name', { ns: 'game' }),
                    desc: t('classes.middle.bonusActions.repayLoan.desc', { ns: 'game' })
                }
            ]
        },
        capitalist: {
            name: t('classes.capitalist.name', { ns: 'game' }),
            color: 'blue',
            base: [
                {
                    name: t('classes.capitalist.baseActions.proposeLaw.name', { ns: 'game' }),
                    desc: t('classes.capitalist.baseActions.proposeLaw.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.baseActions.buyGoods.name', { ns: 'game' }),
                    desc: t('classes.capitalist.baseActions.buyGoods.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.baseActions.invest.name', { ns: 'game' }),
                    desc: t('classes.capitalist.baseActions.invest.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.baseActions.sellCompany.name', { ns: 'game' }),
                    desc: t('classes.capitalist.baseActions.sellCompany.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.baseActions.exports.name', { ns: 'game' }),
                    desc: t('classes.capitalist.baseActions.exports.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.baseActions.privatizations.name', { ns: 'game' }),
                    desc: t('classes.capitalist.baseActions.privatizations.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.baseActions.lobbying.name', { ns: 'game' }),
                    desc: t('classes.capitalist.baseActions.lobbying.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.baseActions.politicalPressure.name', { ns: 'game' }),
                    desc: t('classes.capitalist.baseActions.politicalPressure.desc', { ns: 'game' })
                }
            ],
            bonus: [
                {
                    name: t('classes.capitalist.bonusActions.healthServices.name', { ns: 'game' }),
                    desc: t('classes.capitalist.bonusActions.healthServices.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.bonusActions.training.name', { ns: 'game' }),
                    desc: t('classes.capitalist.bonusActions.training.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.bonusActions.useLuxury.name', { ns: 'game' }),
                    desc: t('classes.capitalist.bonusActions.useLuxury.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.bonusActions.adjustPrices.name', { ns: 'game' }),
                    desc: t('classes.capitalist.bonusActions.adjustPrices.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.bonusActions.adjustWages.name', { ns: 'game' }),
                    desc: t('classes.capitalist.bonusActions.adjustWages.desc', { ns: 'game' })
                },
                {
                    name: t('classes.capitalist.bonusActions.repayLoan.name', { ns: 'game' }),
                    desc: t('classes.capitalist.bonusActions.repayLoan.desc', { ns: 'game' })
                }
            ]
        },
        state: {
            name: t('classes.state.name', { ns: 'game' }),
            color: 'gray',
            base: [
                {
                    name: t('classes.state.baseActions.proposeLaw.name', { ns: 'game' }),
                    desc: t('classes.state.baseActions.proposeLaw.desc', { ns: 'game' })
                },
                {
                    name: t('classes.state.baseActions.buyPublicServices.name', { ns: 'game' }),
                    desc: t('classes.state.baseActions.buyPublicServices.desc', { ns: 'game' })
                },
                {
                    name: t('classes.state.baseActions.sellPublicServices.name', { ns: 'game' }),
                    desc: t('classes.state.baseActions.sellPublicServices.desc', { ns: 'game' })
                },
                {
                    name: t('classes.state.baseActions.adjustServicesPrices.name', { ns: 'game' }),
                    desc: t('classes.state.baseActions.adjustServicesPrices.desc', { ns: 'game' })
                },
                {
                    name: t('classes.state.baseActions.vote.name', { ns: 'game' }),
                    desc: t('classes.state.baseActions.vote.desc', { ns: 'game' })
                },
                {
                    name: t('classes.state.baseActions.borrow.name', { ns: 'game' }),
                    desc: t('classes.state.baseActions.borrow.desc', { ns: 'game' })
                }
            ],
            bonus: [
                {
                    name: t('classes.state.bonusActions.buyInfluence.name', { ns: 'game' }),
                    desc: t('classes.state.bonusActions.buyInfluence.desc', { ns: 'game' })
                },
                {
                    name: t('classes.state.bonusActions.repayLoan.name', { ns: 'game' }),
                    desc: t('classes.state.bonusActions.repayLoan.desc', { ns: 'game' })
                }
            ]
        }
    };

    return {
        PHASES,
        POLICY_NAMES,
        TABS,
        CLASS_ACTIONS
    };
};


// For backward compatibility, keep old exports but they won't be translated
export const TABS = [
    { id: 'setup-guide', name: 'Setup Guide', icon: 'Package' },
    { id: 'policies', name: 'Policies', icon: 'Users' },
    { id: 'phases', name: 'Phases', icon: 'Play' },
    { id: 'board', name: 'Board', icon: 'Map' },
    { id: 'taxes', name: 'Taxes', icon: 'Calculator' },
    { id: 'legitimacy', name: 'Legitimacy', icon: 'TrendingUp' },
    { id: 'resources', name: 'Resources', icon: 'Wallet' },
    { id: 'other-rules', name: 'Other Rules', icon: 'BookOpen' },
    { id: 'rules', name: 'Rules', icon: 'BookOpen' },
    { id: 'material', name: 'Material', icon: 'Box' },
    { id: 'faq', name: 'FAQ', icon: 'HelpCircle' },
    { id: 'shop', name: 'Shop', icon: 'ShoppingBag' },
    { id: 'credits', name: 'Credits', icon: 'Info' }
];
