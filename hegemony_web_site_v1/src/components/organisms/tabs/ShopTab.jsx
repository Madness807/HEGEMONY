import React from 'react';
import { ExternalLink, ShoppingBag, Gift, Heart } from 'lucide-react';

const ShopTab = () => {
    const shopUrl = "https://hegemonicproject.com/shop/";

    return (
        <div className="h-full flex flex-col items-center justify-center p-8 animate-fade-in">
            <div className="max-w-2xl w-full space-y-8 text-center">

                <div className="space-y-4">
                    <div className="inline-flex p-4 bg-pink-500/20 rounded-full mb-4 ring-1 ring-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                        <ShoppingBag className="w-16 h-16 text-pink-400" />
                    </div>
                    <h2 className="text-4xl font-bold text-white tracking-tight">Boutique Officielle</h2>
                    <p className="text-xl text-slate-300">
                        Soutenez le projet Hegemony et découvrez tous les produits officiels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <Gift className="w-8 h-8 text-purple-400 mb-3" />
                        <h3 className="font-bold text-white mb-1">Jeux & Extensions</h3>
                        <p className="text-sm text-slate-400">Commandez le jeu de base et ses extensions.</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <ShoppingBag className="w-8 h-8 text-blue-400 mb-3" />
                        <h3 className="font-bold text-white mb-1">Accessoires</h3>
                        <p className="text-sm text-slate-400">Sleeves, pièces en métal et autres goodies.</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <Heart className="w-8 h-8 text-red-400 mb-3" />
                        <h3 className="font-bold text-white mb-1">Soutien</h3>
                        <p className="text-sm text-slate-400">Aidez les créateurs à développer l'univers.</p>
                    </div>
                </div>

                {/* Expansions Showcase */}
                <div className="py-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white">Extensions Disponibles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
                            <img
                                src="/assets/expenssion/Crisis-Control-Box-left.png"
                                alt="Crisis & Control"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white font-bold">Crisis & Control</span>
                            </div>
                        </div>
                        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
                            <img
                                src="/assets/expenssion/Historical-Box-left.png"
                                alt="Historical Events"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white font-bold">Historical Events</span>
                            </div>
                        </div>
                        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
                            <img
                                src="/assets/expenssion/Shadows_of_autority.png"
                                alt="Shadows of Authority"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white font-bold">Shadows of Authority</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-full transition-all font-bold text-lg shadow-xl shadow-pink-900/20 hover:scale-105 hover:shadow-pink-900/40"
                    >
                        <span>Visiter la Boutique Officielle</span>
                        <ExternalLink className="w-5 h-5" />
                    </a>

                    <a
                        href="https://www.kickstarter.com/projects/hegemony/hegemony-lead-your-class-to-victory/creator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#05ce78] hover:bg-[#04b86b] text-white rounded-full transition-all font-bold text-lg shadow-xl shadow-green-900/20 hover:scale-105 hover:shadow-green-900/40"
                    >
                        <span>Voir le Kickstarter</span>
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                    Les liens s'ouvriront dans un nouvel onglet
                </p>
            </div>
        </div>
    );
};

export default ShopTab;
