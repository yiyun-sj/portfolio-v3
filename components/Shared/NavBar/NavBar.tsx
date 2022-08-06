import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Spacer,
} from '@chakra-ui/react'
import Link from 'next/link'

const NavList = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Music', href: '/music' },
]

export function NavBar() {
  return (
    <Flex width='100%' align='center'>
      <Link href='/'>
        <Image
          src='/logo.svg'
          w={8}
          mx={4}
          my={2}
          alt='logo'
          cursor='pointer'
        />
      </Link>

      <Spacer />
      <Breadcrumb p={4} textColor='white'>
        {NavList.map((nav) => (
          <BreadcrumbItem key={nav.name}>
            <Link href={nav.href}>
              <BreadcrumbLink>{nav.name}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Flex>
  )
}
