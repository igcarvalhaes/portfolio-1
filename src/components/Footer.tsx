const Footer = () => {
  return (
    <footer className="w-full py-4 mt-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-xs font-medium">
            © 2025{" "}
            <span className="rainbow-text transition-all duration-300 inline-block font-semibold">
              Igor Carvalhaes
            </span>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
