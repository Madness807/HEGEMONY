import React from 'react';

const MainTemplate = ({ header, modal, children, isLoading }) => {
    return (
        <div className="min-h-screen p-2 md:p-8 font-sans text-foreground overflow-x-hidden">
            {modal}
            <div className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto space-y-6 md:space-y-8">
                {header}
                <main className="w-full">
                    {isLoading ? (
                        <div className="flex items-center justify-center min-h-[400px]">
                            <div className="text-center">
                                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
                                <p className="mt-4 text-muted-foreground">Chargement...</p>
                            </div>
                        </div>
                    ) : (
                        children
                    )}
                </main>
            </div>
        </div>
    );
};

export default MainTemplate;
