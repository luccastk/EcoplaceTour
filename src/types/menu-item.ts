interface MenuItem {
  id: number;
  path: string;
  label: string;
}

export const links: MenuItem[] = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/about",
    label: "Sobre",
  },
  {
    id: 3,
    path: "/enterprises",
    label: "Empresas",
  },
  {
    id: 4,
    path: "/contact",
    label: "Contato",
  },
  {
    id: 5,
    path: "/partnership",
    label: "Parceria",
  },
];
