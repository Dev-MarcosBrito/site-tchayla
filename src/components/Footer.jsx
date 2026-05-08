export function Footer() {
  return (
    <footer className="bg-cafe text-off-white py-10 border-t border-bege-dourado/15">
      <div className="container mx-auto max-w-6xl px-5 sm:px-6 text-center">
        <p className="font-serif text-lg leading-relaxed text-off-white/95">
          Advogada<span className="text-bege-dourado/90">Tchayla Sousa</span> — Advocacia com propósito e resultados.
        </p>
        <div className="mt-5 flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/tchayla.previdenciario?igsh=MTd4Nm84NDVuaGx3cw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-lg text-off-white/80 hover:text-off-white hover:bg-off-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Z" />
              <path d="M12 7.25A4.75 4.75 0 1 1 7.25 12 4.755 4.755 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.254 3.254 0 0 0 12 8.75Z" />
              <path d="M17.2 6.6a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/dev-marcos-brito/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-off-white/80 hover:text-off-white hover:bg-off-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M20.5 3h-17A.5.5 0 0 0 3 3.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5ZM8.34 18.34H5.67V9.67h2.67v8.67ZM7 8.5a1.55 1.55 0 1 1 1.55-1.55A1.55 1.55 0 0 1 7 8.5Zm11.34 9.84h-2.66v-4.22c0-1.01-.02-2.3-1.4-2.3s-1.62 1.09-1.62 2.22v4.3H10V9.67h2.56v1.19h.04a2.8 2.8 0 0 1 2.52-1.38c2.7 0 3.2 1.78 3.2 4.09v4.77Z" />
            </svg>
          </a>
        </div>
        <p className="text-sm mt-3 text-off-white/55">© 2026 - Desenvolvedor Marcos Brito. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
