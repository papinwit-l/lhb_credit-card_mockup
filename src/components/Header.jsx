export function Header() {
  return (
    <header className="sticky flex flex-col top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      {/* Top Bar */}
      <div className="h-[3px] flex w-full">
        <div className="w-full bg-[#ced629]" />
        <div className="w-full bg-[#47b9c0]" />
        <div className="w-full bg-[#8b3f92]" />
        <div className="w-full bg-[#ed8068]" />
        <div className="w-full bg-[#0080be]" />
        <div className="w-full bg-[#f5bf0e]" />
        <div className="w-full bg-[#ed8068]" />
        <div className="w-full bg-[#f08d1d]" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="grid grid-cols-3 gap-x-2">
              <span className="font-bold text-2xl text-[#6d7071]">LH</span>
              <span className="text-2xl col-span-2 text-[#888a8c]">BANK</span>
              <div className="h-1.5 flex w-full">
                <div className="w-full bg-[#ced629]" />
                <div className="w-full bg-[#47b9c0]" />
                <div className="w-full bg-[#8b3f92]" />
                <div className="w-full bg-[#ed8068]" />
                <div className="w-full bg-[#0080be]" />
                <div className="w-full bg-[#f5bf0e]" />
                <div className="w-full bg-[#ed8068]" />
                <div className="w-full bg-[#f08d1d]" />
              </div>
              <div></div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8"></nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4"></div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
