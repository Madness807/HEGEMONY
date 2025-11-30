import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Landmark } from 'lucide-react';
import capitalistLogo from '@/assets/images/classes/capitalist/capitalist_logo.png';
import middleLogo from '@/assets/images/classes/middle/middle_class_logo.png';
import workerLogo from '@/assets/images/classes/working/worker_logo.png';
import ShopPage from './ShopPage';
import CreditsPage from './CreditsPage';

const HomePage = () => {
    return (
        <div className="space-y-12 animate-fade-in w-full mx-auto pb-12">
            {/* 1. Introduction Section */}
            <Card className="glass-effect">
                <CardContent className="p-4 md:pt-6">
                    <div className="glass-inner p-4 md:p-6 space-y-6">
                        {/* Header Section */}
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">La nation est en péril.</h1>
                            <div className="space-y-4 text-sm md:text-base text-slate-200 leading-relaxed">
                                <p>
                                    L'économie est en chute libre et les tensions politiques se multiplient. La classe ouvrière est confrontée à un système social
                                    en plein démantèlement, les capitalistes se voient privés de leurs bénéfices durement acquis, la classe moyenne tend à
                                    disparaître et l'État croule sous une dette insurmontable.
                                </p>
                                <p className="text-yellow-400 font-semibold">
                                    En ces temps difficiles, la seule personne capable de guider la nation n'est autre que... vous !
                                </p>
                                <p>
                                    Prendrez-vous le parti des travailleurs en défendant des réformes sociales ? Ou bien vous tiendrez-vous aux côtés des
                                    entreprises et de l'économie libérale ?
                                    Aiderez-vous l'État à faire face à la crise ? Ou bien tenterez-vous d'imposer votre agenda politique quoi qu'il en coûte ?
                                </p>
                                <p>
                                    Hegemony est un jeu de plateau et de cartes asymétrique dans lequel les joueurs incarnent un groupe spécifique : La Classe
                                    Ouvrière, la Classe Moyenne, la Classe Capitaliste et l'État. Chaque rôle a sa propre manière de jouer. Les joueurs doivent
                                    essayer de se tenir à leur propre agenda politique :
                                </p>
                            </div>
                        </div>

                        {/* Classes Grid */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Capitalist Class */}
                            <div className="glass-inner-dark border-l-4 border-l-blue-500 p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-16 h-16 flex-shrink-0">
                                        <img src={capitalistLogo} alt="Classe Capitaliste" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    La Classe Capitaliste est à la tête des Entreprises. Les Travailleurs font partie de ces Entreprises. Ils
                                    y produisent des marchandises et des services qui permettent à la Classe Capitaliste de dégager des
                                    bénéfices. Le but de ce joueur est de maximiser ses bénéfices.
                                </p>
                            </div>

                            {/* Middle Class */}
                            <div className="glass-inner-dark border-l-4 border-l-yellow-500 p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-16 h-16 flex-shrink-0">
                                        <img src={middleLogo} alt="Classe Moyenne" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    La Classe Moyenne compte aussi sur les Travailleurs dans leurs différentes Entreprises pour dégager des
                                    revenus, mais elle est aussi capable de gérer des Entreprises de plus petite taille. Ce joueur doit trouver
                                    l'équilibre parfait entre la production, la vente et la consommation afin de répondre aux besoins de ses
                                    Travailleurs tout en assurant sa propre prospérité.
                                </p>
                            </div>

                            {/* Working Class */}
                            <div className="glass-inner-dark border-l-4 border-l-red-500 p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-16 h-16 flex-shrink-0">
                                        <img src={workerLogo} alt="Classe Ouvrière" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    La Classe Ouvrière dispose également de Travailleurs. L'argent qu'ils gagnent leur permet de répondre à
                                    leurs besoins médicaux, éducatifs, alimentaires, et, si possible, en divertissement. Le but de ce joueur est
                                    de répondre à ces besoins afin de faire prospérer ses Travailleurs.
                                </p>
                            </div>

                            {/* State */}
                            <div className="glass-inner-dark border-l-4 border-l-gray-400 p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-500/20 rounded-lg">
                                        <Landmark className="w-10 h-10 text-gray-300" />
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Enfin, l'État s'efforce de répondre aux besoins de toutes les Classes, sans distinction, afin d'accroître sa
                                    légitimité. Dans le même temps, il doit faire face aux problèmes de société qui surviennent.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Divider */}
            <div className="relative py-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background-dark px-4 text-sm text-slate-500 uppercase tracking-widest font-bold">Boutique & Soutien</span>
                </div>
            </div>

            {/* 2. Shop Section */}
            <div className="glass-effect rounded-xl overflow-hidden">
                <ShopPage />
            </div>

            {/* Divider */}
            <div className="relative py-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background-dark px-4 text-sm text-slate-500 uppercase tracking-widest font-bold">Crédits</span>
                </div>
            </div>

            {/* 3. Credits Section */}
            <CreditsPage />
        </div>
    );
};

export default HomePage;
