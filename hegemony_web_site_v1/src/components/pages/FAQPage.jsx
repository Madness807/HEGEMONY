import React, { useState } from 'react';
import { Search, HelpCircle, BookOpen, Layers } from 'lucide-react';
import { RulesSection } from '../molecules/RulesComponents';
import { useTranslation } from 'react-i18next';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 text-left flex items-start justify-between gap-4"
            >
                <span className="font-bold text-base text-slate-200">{question}</span>
                <span className={`text-slate-400 transform transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-base text-slate-300 border-t border-white/5 bg-black/20">
                    <div className="mt-4 whitespace-pre-line leading-relaxed">
                        {answer}
                    </div>
                </div>
            )}
        </div>
    );
};

const FAQPage = () => {
    const { t } = useTranslation('faq');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    // Get arrays from translation file
    const rulesData = t('items.rules', { returnObjects: true }) || [];
    const cardsData = t('items.cards', { returnObjects: true }) || [];

    const faqData = {
        rules: rulesData,
        cards: cardsData
    };

    const filterFAQ = (items) => {
        return items.filter(item =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const filteredRules = filterFAQ(faqData.rules);
    const filteredCards = filterFAQ(faqData.cards);

    const showRules = (activeCategory === 'all' || activeCategory === 'rules') && filteredRules.length > 0;
    const showCards = (activeCategory === 'all' || activeCategory === 'cards') && filteredCards.length > 0;

    return (
        <div className="space-y-6 animate-fade-in w-full mx-auto">
            {/* Header & Search */}
            <div className="glass-effect p-6 rounded-xl border border-white/10 space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                        <HelpCircle className="w-8 h-8 text-blue-400" />
                        {t('title')}
                    </h2>
                    <p className="text-slate-400">{t('subtitle')}</p>
                </div>

                <div className="relative max-w-xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                </div>

                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'glass-inner text-slate-400 hover:text-white'}`}
                    >
                        {t('categories.all')}
                    </button>
                    <button
                        onClick={() => setActiveCategory('rules')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeCategory === 'rules' ? 'bg-blue-600 text-white' : 'glass-inner text-slate-400 hover:text-white'}`}
                    >
                        {t('categories.rules')}
                    </button>
                    <button
                        onClick={() => setActiveCategory('cards')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeCategory === 'cards' ? 'bg-blue-600 text-white' : 'glass-inner text-slate-400 hover:text-white'}`}
                    >
                        {t('categories.cards')}
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
                {showRules && (
                    <RulesSection title={t('sections.rules')} icon={BookOpen} color="blue">
                        <div className="space-y-3">
                            {filteredRules.map((item, idx) => (
                                <FAQItem key={`rule-${idx}`} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </RulesSection>
                )}

                {showCards && (
                    <RulesSection title={t('sections.cards')} icon={Layers} color="purple">
                        <div className="space-y-3">
                            {filteredCards.map((item, idx) => (
                                <FAQItem key={`card-${idx}`} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </RulesSection>
                )}

                {!showRules && !showCards && (
                    <div className="text-center py-12 text-slate-500">
                        <p>{t('noResults')} "{searchQuery}"</p>
                    </div>
                )}
            </div>
        </div >
    );
};

export default FAQPage;
