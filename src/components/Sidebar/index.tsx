import React from 'react'
import Styled from './index.style'
import Link from 'next/link'
import routes from 'router'
import { useRouter } from 'next/router'

const Sidebar = () => {
  const { pathname } = useRouter()

  const listItem = routes.map(({ path, title }, i) => (
    <Styled.SidebarItem key={i}>
      <Link href={path} passHref>
        <Styled.SidebarItemLink active={path === pathname ? 'active' : ''}>
          {title}
        </Styled.SidebarItemLink>
      </Link>
    </Styled.SidebarItem>
  ))

  return (
    <Styled.Sidebar>
      <Styled.SidebarList>{listItem}</Styled.SidebarList>
    </Styled.Sidebar>
  )
}

export default Sidebar
