import React, { useState } from 'react';
import { Image, ZoomIn, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CARD_SHEETS } from '../../../constants/galleryData';

const GalleryTab = () => {
    const [selectedSheet, setSelectedSheet] = useState(null);

    return (
        <div className="space-y-8 animate-fade-in">


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CARD_SHEETS.map((sheet) => (
                    <Card key={sheet.id} className="glass-effect overflow-hidden hover:border-pink-500/50 transition-colors group">
                        <div className="relative aspect-video glass-inner-dark">
                            <img
                                src={sheet.faceUrl}
                                alt={sheet.name}
                                className="w-full h-full object-contain p-2"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <a
                                    href={sheet.faceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    title="Voir la face en grand"
                                >
                                    <ZoomIn className="w-6 h-6 text-white" />
                                </a>
                                <a
                                    href={sheet.backUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    title="Voir le dos en grand"
                                >
                                    <ExternalLink className="w-6 h-6 text-white" />
                                </a>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            <h3 className="font-bold text-lg text-white mb-1">{sheet.name}</h3>
                            <div className="flex justify-between text-sm text-slate-400">
                                <span>Grille : {sheet.grid}</span>
                                <span>{sheet.count} cartes</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default GalleryTab;
