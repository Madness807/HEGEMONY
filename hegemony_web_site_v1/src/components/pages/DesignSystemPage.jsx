import React from 'react';
import tokens from '../ions/design-tokens.json';

const DesignSystemPage = () => {
    return (
        <div className="space-y-12 pb-20">
            <div className="space-y-4">
                <h1 className="text-4xl font-serif font-bold text-primary">Design System</h1>
                <p className="text-muted-foreground">
                    Overview of the design tokens and components used in the application.
                </p>
            </div>

            {/* Colors Section */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold border-b border-white/10 pb-2">Colors</h2>

                {/* Base Colors */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white/80">Base Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(tokens.colors).map(([category, values]) => {
                            if (['classes', 'policies', 'special', 'brand', 'success', 'warning', 'info', 'destructive'].includes(category)) return null;
                            if (typeof values === 'string') {
                                return (
                                    <div key={category} className="space-y-2">
                                        <div
                                            className="h-24 rounded-lg shadow-lg border border-white/10"
                                            style={{ backgroundColor: values }}
                                        />
                                        <div>
                                            <p className="font-medium capitalize">{category}</p>
                                            <p className="text-xs text-muted-foreground font-mono">{values}</p>
                                        </div>
                                    </div>
                                );
                            }
                            return Object.entries(values).map(([name, value]) => (
                                <div key={`${category}-${name}`} className="space-y-2">
                                    <div
                                        className="h-24 rounded-lg shadow-lg border border-white/10"
                                        style={{ backgroundColor: value }}
                                    />
                                    <div>
                                        <p className="font-medium capitalize">{category} {name}</p>
                                        <p className="text-xs text-muted-foreground font-mono">{value}</p>
                                    </div>
                                </div>
                            ));
                        })}
                    </div>
                </div>

                {/* Functional Colors */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white/80">Functional Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['success', 'warning', 'info', 'destructive'].map((category) => (
                            Object.entries(tokens.colors[category]).map(([name, value]) => (
                                <div key={`${category}-${name}`} className="space-y-2">
                                    <div
                                        className="h-24 rounded-lg shadow-lg border border-white/10"
                                        style={{ backgroundColor: value }}
                                    />
                                    <div>
                                        <p className="font-medium capitalize">{category} {name}</p>
                                        <p className="text-xs text-muted-foreground font-mono">{value}</p>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                </div>

                {/* Class Colors */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white/80">Class Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(tokens.colors.classes).map(([name, value]) => (
                            <div key={name} className="space-y-2">
                                <div
                                    className="h-24 rounded-lg shadow-lg border border-white/10"
                                    style={{ backgroundColor: value }}
                                />
                                <div>
                                    <p className="font-medium capitalize">{name}</p>
                                    <p className="text-xs text-muted-foreground font-mono">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Policy Colors */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white/80">Policy Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(tokens.colors.policies).map(([name, value]) => (
                            <div key={name} className="space-y-2">
                                <div
                                    className="h-24 rounded-lg shadow-lg border border-white/10"
                                    style={{ backgroundColor: value }}
                                />
                                <div>
                                    <p className="font-medium capitalize">{name}</p>
                                    <p className="text-xs text-muted-foreground font-mono">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold border-b border-white/10 pb-2">Typography</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white/80 mb-4">Font Families</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Sans Serif (Inter)</p>
                                    <p className="font-sans text-2xl">The quick brown fox jumps over the lazy dog.</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Serif (Playfair Display)</p>
                                    <p className="font-serif text-2xl">The quick brown fox jumps over the lazy dog.</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Display (Prata)</p>
                                    <p className="font-prata text-2xl" style={{ fontFamily: 'Prata, serif' }}>The quick brown fox jumps over the lazy dog.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white/80 mb-4">Font Weights</h3>
                            <div className="space-y-2">
                                {Object.entries(tokens.typography.fontWeight).map(([name, value]) => (
                                    <div key={name} className="flex items-baseline justify-between border-b border-white/5 pb-2">
                                        <span className="text-sm text-muted-foreground font-mono w-24">{name} ({value})</span>
                                        <span style={{ fontWeight: value }} className="text-xl">The quick brown fox</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white/80 mb-4">Font Sizes</h3>
                            <div className="space-y-4">
                                {Object.entries(tokens.typography.fontSize).map(([name, value]) => (
                                    <div key={name} className="flex items-baseline gap-4">
                                        <span className="w-24 text-xs text-muted-foreground font-mono shrink-0">{name} ({value})</span>
                                        <span style={{ fontSize: value }} className="truncate">Sample Text</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white/80 mb-4">Line Height</h3>
                                <div className="space-y-2">
                                    {Object.entries(tokens.typography.lineHeight).map(([name, value]) => (
                                        <div key={name} className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">{name}</span>
                                            <span className="font-mono">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white/80 mb-4">Letter Spacing</h3>
                                <div className="space-y-2">
                                    {Object.entries(tokens.typography.letterSpacing).map(([name, value]) => (
                                        <div key={name} className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">{name}</span>
                                            <span className="font-mono">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacing & Sizing */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold border-b border-white/10 pb-2">Spacing & Sizing</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-lg font-semibold text-white/80 mb-4">Spacing Scale</h3>
                        <div className="space-y-2 h-96 overflow-y-auto pr-4 custom-scrollbar">
                            {Object.entries(tokens.spacing).map(([name, value]) => {
                                if (typeof value !== 'string') return null;
                                return (
                                    <div key={name} className="flex items-center gap-4">
                                        <span className="w-12 text-xs text-muted-foreground font-mono shrink-0">{name}</span>
                                        <div className="flex-1 flex items-center gap-2">
                                            <div className="bg-primary/50 h-4 rounded" style={{ width: value }} />
                                            <span className="text-xs text-muted-foreground font-mono">{value}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white/80 mb-4">Sizing Tokens</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Widths</h4>
                                <div className="space-y-2">
                                    {Object.entries(tokens.sizing.width).map(([name, value]) => {
                                        if (typeof value !== 'string') return null;
                                        return (
                                            <div key={name} className="flex justify-between text-sm border-b border-white/5 pb-1">
                                                <span>{name}</span>
                                                <span className="font-mono text-muted-foreground">{value}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Heights</h4>
                                <div className="space-y-2">
                                    {Object.entries(tokens.sizing.height).map(([name, value]) => (
                                        <div key={name} className="flex justify-between text-sm border-b border-white/5 pb-1">
                                            <span>{name}</span>
                                            <span className="font-mono text-muted-foreground">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Effects (Shadows, Radius, Opacity) */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold border-b border-white/10 pb-2">Effects</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Border Radius */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white/80">Border Radius</h3>
                        <div className="space-y-4">
                            {Object.entries(tokens.borderRadius).map(([name, value]) => (
                                <div key={name} className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-xs"
                                        style={{ borderRadius: value }}
                                    />
                                    <div>
                                        <p className="text-sm font-medium">{name}</p>
                                        <p className="text-xs text-muted-foreground font-mono">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shadows */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white/80">Shadows</h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h4 className="text-sm text-muted-foreground">Elevation</h4>
                                <div className="flex gap-4">
                                    {Object.entries(tokens.shadows.elevation).map(([name, value]) => (
                                        <div
                                            key={name}
                                            className="w-12 h-12 glass-inner rounded flex items-center justify-center text-xs font-bold"
                                            style={{ boxShadow: value }}
                                        >
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm text-muted-foreground">Special</h4>
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center text-xs p-2 text-center border border-white/5" style={{ boxShadow: tokens.shadows.glow }}>Glow</div>
                                    <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center text-xs p-2 text-center border border-white/5" style={{ boxShadow: tokens.shadows.glass }}>Glass</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Opacity */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white/80">Opacity</h3>
                        <div className="space-y-2">
                            {['100', '90', '75', '50', '25', '10'].map((level) => (
                                <div key={level} className="flex items-center gap-4">
                                    <div
                                        className="w-full h-8 bg-primary rounded"
                                        style={{ opacity: tokens.opacity[level] }}
                                    />
                                    <span className="text-xs font-mono w-8">{level}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Transitions & Z-Index */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold border-b border-white/10 pb-2">Transitions & Z-Index</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-lg font-semibold text-white/80 mb-4">Transitions</h3>
                        <div className="space-y-4">
                            {['fast', 'normal', 'slow'].map((speed) => (
                                <div key={speed} className="space-y-2 group">
                                    <div className="flex justify-between text-sm">
                                        <span className="capitalize">{speed}</span>
                                        <span className="font-mono text-muted-foreground">{tokens.transitions.duration[speed]}</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
                                        <div
                                            className="h-full bg-primary w-0 group-hover:w-full"
                                            style={{ transition: `width ${tokens.transitions.duration[speed]} ease-in-out` }}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Hover to test</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white/80 mb-4">Z-Index Layers</h3>
                        <div className="relative h-48 border border-white/10 rounded-lg bg-black/20 p-4 overflow-hidden">
                            {['toast', 'modal', 'overlay', 'popover', 'dropdown'].map((layer, index) => (
                                <div
                                    key={layer}
                                    className="absolute p-2 rounded shadow-lg border border-white/10 text-xs font-mono bg-card"
                                    style={{
                                        zIndex: tokens.zIndex[layer],
                                        top: `${index * 20 + 20}px`,
                                        left: `${index * 20 + 20}px`,
                                    }}
                                >
                                    {layer} ({tokens.zIndex[layer]})
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Components Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-serif font-bold border-b border-white/10 pb-2">Components</h2>

                {/* Buttons */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white/80">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors">
                            Primary Button
                        </button>
                        <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary-hover transition-colors">
                            Secondary Button
                        </button>
                        <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-medium hover:bg-destructive-hover transition-colors">
                            Destructive Button
                        </button>
                        <button className="bg-transparent border border-white/20 text-foreground px-4 py-2 rounded-lg font-medium hover:bg-white/5 transition-colors">
                            Outline Button
                        </button>
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium opacity-50 cursor-not-allowed">
                            Disabled
                        </button>
                    </div>
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white/80">Inputs</h3>
                    <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Default Input</label>
                            <input
                                type="text"
                                placeholder="Type something..."
                                className="w-full bg-input text-foreground border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Disabled Input</label>
                            <input
                                type="text"
                                disabled
                                placeholder="Cannot type here..."
                                className="w-full bg-input text-foreground border border-border rounded-md px-3 py-2 opacity-50 cursor-not-allowed"
                            />
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white/80">Cards</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="glass-effect p-6 rounded-xl space-y-4">
                            <h4 className="font-serif text-xl font-bold">Surface Primary</h4>
                            <p className="text-muted-foreground">This uses the .glass-effect utility class (now solid).</p>
                        </div>
                        <div className="glass-inner p-6 rounded-xl space-y-4">
                            <h4 className="font-serif text-xl font-bold">Surface Secondary</h4>
                            <p className="text-muted-foreground">This uses the .glass-inner utility class (now solid).</p>
                        </div>
                        <div className="bg-card p-6 rounded-xl space-y-4 border border-border shadow-lg">
                            <h4 className="font-serif text-xl font-bold">Card</h4>
                            <p className="text-muted-foreground">This uses the bg-card utility class.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DesignSystemPage;
