import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: string;
    setSelecetedPage: (value: string) => void;
}

function Link({page, selectedPage, setSelecetedPage}: Props) {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

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