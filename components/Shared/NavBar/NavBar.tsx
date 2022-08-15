import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Progress,
  Spacer,
} from '@chakra-ui/react'
import { useCycle } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NavList = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Works', href: '/works' },
  { name: 'Music', href: '/music' },
  { name: 'Contact', href: '/contact' },
]

export function NavBar() {
  const { pathname, events } = useRouter()
  const [isLoading, toggleIsLoading] = useCycle(false, true)

  useEffect(() => {
    events.on('routeChangeStart', toggleIsLoading)
    events.on('routeChangeComplete', toggleIsLoading)
    events.on('routeChangeError', toggleIsLoading)

    return () => {
      events.off('routeChangeStart', toggleIsLoading)
      events.off('routeChangeComplete', toggleIsLoading)
      events.off('routeChangeError', toggleIsLoading)
    }
  }, [events, toggleIsLoading])

  return (
    <>
      {isLoading && (
        <Progress
          size='xs'
          width='100%'
          isIndeterminate
          position='fixed'
          top={0}
          backgroundColor='transparent'
        />
      )}
      <Flex
        width='100%'
        align='center'
        position='sticky'
        top={0}
        zIndex={1}
        backgroundColor='inherit'
      >
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
          {NavList.map(({ href, name }) => {
            const isCurrent = pathname === href
            return (
              <BreadcrumbItem key={name} isCurrentPage={isCurrent}>
                <Link href={href}>
                  <BreadcrumbLink
                    textColor={isCurrent ? 'blue.200' : 'white'}
                    _hover={{ textDecoration: 'none', textColor: 'blue.200' }}
                  >
                    {name}
                  </BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
            )
          })}
        </Breadcrumb>
      </Flex>
    </>
  )
}
