import logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 h-[56px] w-full bg-white shadow-md lg:h-20">
      <nav className="flex h-full w-full items-center gap-3 px-8 lg:pl-12 lg:pr-12">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Transporte+" className="h-[29.5px] w-[172.82px] lg:h-[29.5px]" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
