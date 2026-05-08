import { useEffect, useState } from "react";
import { useHeaderScrolled } from "../hooks/useHeaderScrolled.js";

export function Header() {
  const scrolled = useHeaderScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);
  const toggleMobile = () => setMobileOpen((o) => !o);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMobile();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-cafe/10 backdrop-blur-lg backdrop-saturate-150 shadow-header transition-all duration-500 ease-out ${
        scrolled ? "shadow-lg bg-off-white/92" : "bg-off-white/75"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-5 sm:px-6 py-3.5 sm:py-4 flex justify-between items-center gap-4">
        <a
          href="#hero"
          className="text-xl sm:text-2xl font-bold font-serif text-cafe tracking-tight shrink-0 transition-opacity hover:opacity-90"
        >
          Advogada<span className="accent-color-text">Tchayla Sousa</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Navegação principal">
          <a href="#hero" className="nav-link text-chocolate/90 text-[0.95rem] font-medium hover:text-cafe transition-colors">
            Início
          </a>
          <a href="#sobre" className="nav-link text-chocolate/90 text-[0.95rem] font-medium hover:text-cafe transition-colors">
            Sobre
          </a>
          <a
            href="#atuacao"
            className="nav-link text-chocolate/90 text-[0.95rem] font-medium hover:text-cafe transition-colors"
          >
            Benefícios | INSS
          </a>
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex accent-color text-off-white font-semibold text-sm tracking-wide py-2.5 px-5 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          ENTRE EM CONTATO
        </a>

        <button
          type="button"
          className="md:hidden text-cafe p-2 rounded-lg hover:bg-cafe/5 transition-colors"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          onClick={toggleMobile}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`md:hidden border-t border-cafe/10 bg-off-white/95 backdrop-blur-md ${mobileOpen ? "block" : "hidden"}`}
        aria-label="Navegação mobile"
      >
        <div className="container mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
          <a
            href="#hero"
            className="py-3 px-2 rounded-lg text-chocolate font-medium hover:bg-dourado/10 hover:text-cafe transition-colors"
            onClick={closeMobile}
          >
            Início
          </a>
          <a
            href="#sobre"
            className="py-3 px-2 rounded-lg text-chocolate font-medium hover:bg-dourado/10 hover:text-cafe transition-colors"
            onClick={closeMobile}
          >
            Sobre
          </a>
          <a
            href="#atuacao"
            className="py-3 px-2 rounded-lg text-chocolate font-medium hover:bg-dourado/10 hover:text-cafe transition-colors"
            onClick={closeMobile}
          >
            Benefícios | INSS
          </a>
          <a
            href="#contato"
            className="mt-2 accent-color text-off-white text-center font-semibold py-3 px-4 rounded-xl shadow-card"
            onClick={closeMobile}
          >
            ENTRE EM CONTATO
          </a>
        </div>
      </nav>
    </header>
  );
}
