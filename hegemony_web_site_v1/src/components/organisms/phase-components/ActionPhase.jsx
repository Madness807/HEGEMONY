import React from 'react';
import { Play, AlertCircle } from 'lucide-react';
import ClassReference from '../../atoms/ClassReference';

const ActionPhase = ({ numPlayers }) => (
    <div className="space-y-6">
        <h4 className="text-2xl font-bold text-green-400 flex items-center gap-2">
            <Play className="w-6 h-6" />
            Phase d'Action
        </h4>
        <p className="text-slate-400 font-medium">5 tours par joueur dans l'ordre suivant :</p>
        <div className="space-y-6 pl-4">
            <div className="flex items-center gap-4 p-5 glass-inner hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">1</div>
                <span className="font-bold text-lg text-slate-300"><ClassReference type="working" /></span>
            </div>
            {numPlayers >= 3 && (
                <div className="flex items-center gap-4 p-5 glass-inner hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">2</div>
                    <span className="font-bold text-lg text-slate-300"><ClassReference type="middle" /></span>
                </div>
            )}
            <div className="flex items-center gap-4 p-5 glass-inner hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">{numPlayers >= 3 ? 3 : 2}</div>
                <span className="font-bold text-lg text-slate-300"><ClassReference type="capitalist" /></span>
            </div>
            {numPlayers === 4 && (
                <div className="flex items-center gap-4 p-5 glass-inner hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">4</div>
                    <span className="font-bold text-lg text-slate-300"><ClassReference type="state" /></span>
                </div>
            )}
        </div>
        <div className="glass-inner p-4 flex items-center gap-3 border-l-4 border-l-yellow-500">
            <AlertCircle className="w-5 h-5 text-yellow-500" />
            <p className="text-sm text-yellow-200 font-medium"><strong>Rappel :</strong> Action Principale + Action Bonus optionnelle</p>
        </div>
    </div>
);

export default ActionPhase;
