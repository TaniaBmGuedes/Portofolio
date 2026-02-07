import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarBrand,
  Button,
} from "@heroui/react";
import { useTheme } from "../../../ThemeProvider";

export default function NavBar() {
  const { theme, toggle } = useTheme();
  return (
    <Navbar className="w-full flex-nowrap">
      <NavbarBrand>
        <p className="font-bold text-inherit">Portofolio</p>
      </NavbarBrand>
      <NavbarContent
        justify="center"
        className="flex gap-4 items-center flex-nowrap"
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="#">
            Stack
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Experience
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        justify="end"
        className="flex items-center gap-4 flex-nowrap"
      >
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Contacts</Link>
        </NavbarItem>
        <NavbarItem>
          <Button size="sm" variant="flat" onPress={toggle}>
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
          
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
