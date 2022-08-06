import { Flex, Icon, Link, Spacer } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const IconList = [
  { name: 'Github', icon: FaGithub, href: 'https://github.com/yiyun-sj' },
  {
    name: 'Linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/yiyun-sj/',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/yiyun_sj/',
  },
]

export function ContactIcons() {
  return (
    <Flex direction='column' gap={4} padding={4}>
      <Spacer />
      {IconList.map((icon) => (
        <Link key={icon.name} href={icon.href} isExternal>
          <Icon as={icon.icon} w={8} h={8} color='white' />
        </Link>
      ))}
      <Spacer />
    </Flex>
  )
}
