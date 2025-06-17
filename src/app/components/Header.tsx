import { SheetComponent } from "@/components/SheetComponent";


export const Header = () => {

    const navItems = [
        { label: "como funciona", href: "#how-it-works" },
        { label: "Sobre", href: "#about" },
    ];

    const ctaItem = [
        { label: "Cadastrar", href: "/register" },
        { label: "Entrar", href: "/login" }
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl md:text-3xl font-bold text-slate-800">
                        <a href="/">
                            Estilo <span className="text-primary">Mestre</span>
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-md font-medium text-slate-600 hover:text-primary transition-colors hover:underline cursor-pointer"
                            >
                                {item.label}
                            </a>
                        ))}
                        {ctaItem.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${index === 0
                                    ? 'bg-secondary text-black hover:bg-primary hover:text-white'
                                    : 'bg-primary text-white hover:bg-primary/90'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>


                    <div className="md:hidden">
                        <SheetComponent navItems={navItems} ctaItem={ctaItem} />
                    </div>
                </div>
            </div>
        </header>
    );
}

