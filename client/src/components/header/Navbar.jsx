import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Guitar,
  Drum,
  Keys,
  Studio,
  Dj,
} from "../../../public/icons/Icons";
export default function Nav() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    studio: <Studio className="text-success" fill="currentColor" size={30} />,
    dj: <Dj className="text-danger" fill="currentColor" size={30} />,

    guitar: <Guitar className="text-warning" fill="currentColor" size={30} />,
    drum: <Drum className="text-secondary" fill="currentColor" size={30} />,
    keys: <Keys className="text-primary" fill="currentColor" size={30} />,
  };
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">MusiCo</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Categories
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Instrument sections"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="guitars"
              description="Explore a wide range of guitars and basses, from electric to acoustic, perfect for every musician."
              startContent={icons.guitar}
            >
              Guitars & Basses
            </DropdownItem>
            <DropdownItem
              key="drums"
              description="Discover top-quality drum kits, cymbals, and percussion instruments for all skill levels."
              startContent={icons.drum}
            >
              Drums
            </DropdownItem>
            <DropdownItem
              key="keys"
              description="Find the perfect piano or keyboard to enhance your sound, from digital to grand pianos."
              startContent={icons.keys}
            >
              Keys
            </DropdownItem>
            <DropdownItem
              key="studio"
              description="Equip your studio with the best recording gear, interfaces, and microphones for professional sound."
              startContent={icons.studio}
            >
              Studio
            </DropdownItem>
            <DropdownItem
              key="dj"
              description=" Get the latest DJ equipment, from controllers to turntables, and elevate your next performance."
              startContent={icons.dj}
            >
              Dj
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem >
          <Link href="#" aria-current="page">
            Music store
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact us!
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
