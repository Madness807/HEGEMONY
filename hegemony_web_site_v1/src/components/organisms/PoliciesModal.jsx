import React from 'react';
import { X } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import PoliciesPage from '../pages/PoliciesPage';

const PoliciesModal = () => {
    const { isPoliciesModalOpen, setIsPoliciesModalOpen } = useGame();

    if (!isPoliciesModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-background-dark rounded-2xl border border-slate-700 shadow-2xl animate-in zoom-in-95 duration-200">
                <button
                    onClick={() => setIsPoliciesModalOpen(false)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-blue-500">Politiques</h2>
                    <PoliciesPage />
                </div>
            </div>
        </div>
    );
};

export default PoliciesModal;
