import React from 'react';
import { ExternalLink, ShoppingBag, Gift, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ShopPage = () => {
    const { t } = useTranslation('shop');
    const shopUrl = "https://hegemonicproject.com/shop/";

    return (
        <div className="flex flex-col items-center justify-center p-8 animate-fade-in">
            <div className="w-full space-y-8 text-center">

                <div className="space-y-4">
                    <div className="inline-flex p-4 bg-surface-secondary rounded-full mb-4 ring-1 ring-pink-500/50 shadow-lg">
                        <ShoppingBag className="w-16 h-16 text-pink-400" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground tracking-tight">{t('title')}</h2>
                    <p className="text-base text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    <div className="p-4 bg-surface-secondary border border-border rounded-xl hover:bg-surface-tertiary transition-colors">
                        <Gift className="w-8 h-8 text-purple-400 mb-3" />
                        <h3 className="font-bold text-foreground mb-1">{t('categories.games.title')}</h3>
                        <p className="text-sm text-muted-foreground">{t('categories.games.desc')}</p>
                    </div>
                    <div className="p-4 bg-surface-secondary border border-border rounded-xl hover:bg-surface-tertiary transition-colors">
                        <ShoppingBag className="w-8 h-8 text-blue-400 mb-3" />
                        <h3 className="font-bold text-foreground mb-1">{t('categories.accessories.title')}</h3>
                        <p className="text-sm text-muted-foreground">{t('categories.accessories.desc')}</p>
                    </div>
                    <div className="p-4 bg-surface-secondary border border-border rounded-xl hover:bg-surface-tertiary transition-colors">
                        <Heart className="w-8 h-8 text-red-400 mb-3" />
                        <h3 className="font-bold text-foreground mb-1">{t('categories.support.title')}</h3>
                        <p className="text-sm text-muted-foreground">{t('categories.support.desc')}</p>
                    </div>
                </div>

                {/* Expansions Showcase */}
                <div className="py-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white">{t('expansions.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
                            <img
                                src="/assets/expenssion/Crisis-Control-Box-left.png"
                                alt={t('expansions.crisis')}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white font-bold">{t('expansions.crisis')}</span>
                            </div>
                        </div>
                        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
                            <img
                                src="/assets/expenssion/Historical-Box-left.png"
                                alt={t('expansions.historical')}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white font-bold">{t('expansions.historical')}</span>
                            </div>
                        </div>
                        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
                            <img
                                src="/assets/expenssion/Shadows_of_autority.png"
                                alt={t('expansions.shadows')}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white font-bold">{t('expansions.shadows')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-full transition-all font-bold text-base shadow-xl shadow-pink-900/20 hover:scale-105 hover:shadow-pink-900/40"
                    >
                        <span>{t('buttons.visit')}</span>
                        <ExternalLink className="w-5 h-5" />
                    </a>

                    <a
                        href="https://www.kickstarter.com/projects/hegemony/hegemony-lead-your-class-to-victory/creator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand-kickstarter hover:bg-brand-kickstarter-hover text-white rounded-full transition-all font-bold text-base shadow-xl shadow-green-900/20 hover:scale-105 hover:shadow-green-900/40"
                    >
                        <span>{t('buttons.kickstarter')}</span>
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                    {t('disclaimer')}
                </p>
            </div>
        </div>
    );
};

export default ShopPage;
