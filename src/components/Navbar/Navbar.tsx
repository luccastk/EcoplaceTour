// import type { MenuItem } from "../../types/menu-item";

// const linksItems: MenuItem[] = [
//   {
//     id: 0,
//     path: "/",
//     label: "Home",
//   },
//   {
//     id: 1,
//     path: "/about",
//     label: "Sobre",
//   },
//   {
//     id: 2,
//     path: "/enterprises",
//     label: "Empresas",
//   },
//   {
//     id: 3,
//     path: "/contact",
//     label: "Contato",
//   },
//   {
//     id: 4,
//     path: "/partnership",
//     label: "Parceria",
//   },
// ];

export function Navbar() {
  return (
    <header className="text-6xl text-greenPrimary">oi</header>
    // <header className={header}>
    //   <div className={content}>
    //     <Logo />
    //     <Nav>
    //       {linksItems.map((item) => (
    //         <Link key={item.id} path={item.path} variant="link" showActive>
    //           {item.label}
    //         </Link>
    //       ))}
    //     </Nav>
    //     <Link path="/badge" variant="gradient" classNames={actionBtn}>
    //       Solicitar Orçamento
    //     </Link>
    //     <GiHamburgerMenu
    //       size={"26px"}
    //       className={toggleBtn}
    //       onClick={() => setOpen((prev) => !prev)}
    //     />
    //   </div>
    //   <Menu isOpen={isOpen}>
    //     {linksItems.map((item) => (
    //       <Link key={item.id} path={item.path} variant="link" showActive>
    //         {item.label}
    //       </Link>
    //     ))}
    //     <Link path="/badge" variant="gradient">
    //       Solicitar Orçamento
    //     </Link>
    //   </Menu>
    // </header>
  );
}
