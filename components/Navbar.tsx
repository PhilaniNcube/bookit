import Link from "next/link";

const Navbar = () => {


  const links = [
     {
      title: "Places to stay",
      href:"/rooms"
     },
     {
      title: "Experiences",
      href:"/experiences"
     },
     {
      title: "Events",
      href:"/events"
     },

  ]


  return (
    <header className="py-4">
      {/***Desktop Nav*** */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              className="w-36 cursor-pointer object-cover"
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center space-x-3">
            {links.map((link, i) => (
              <Link key={i} href={link.href}>
                <a className="text-slate-600 font-medium text-lg">
                  {link.title}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex space-x-3 items-center">
            <Link href="/sign-up">
              <a className="text-slate-600 font-medium text-lg">Sign Up</a>
            </Link>
            <img
              src="/images/earth.png"
              alt="Earth Icon"
              className="h-8 w-8 object-cover"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
