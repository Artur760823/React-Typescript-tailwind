import { SelectedPage } from '../shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    children: React.ReactNode;
    setSelecetedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelecetedPage}: Props) => {
  return (
    <AnchorLink
        className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer'
        onClick={() => setSelecetedPage(SelectedPage.ContactUs)}
        href={`${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton