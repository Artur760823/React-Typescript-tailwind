import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/shared/types';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelecetedPage: (value: SelectedPage) => void;
}

function Link({page, selectedPage, setSelecetedPage}: Props) {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
                    transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={()=> setSelecetedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link