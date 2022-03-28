import React, { FC } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem: FC<{ href: string; name: string; className?: string }> = (
  props
) => {
  const router = useRouter()
  const isActive = router.asPath === props.href

  return (
    <Link href={props.href}>
      <a
        className={clsx(
          'hover:text-blue-400',
          isActive ? 'text-neutral-800' : 'text-neutral-300',
          'px-5 text-2xl',
          props.className
        )}
      >
        {props.name}
      </a>
    </Link>
  )
}

const Nav: FC = (props) => {
  return (
    <div className={clsx('flex w-full flex-row justify-center py-5')}>
      <NavItem href="/" name="home" />
      <NavItem href="/create" name="create" />
    </div>
  )
}

export default Nav
