import { SelectedPage } from '../shared/types';
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../components/ActionButton';
import HomePageText from '../assets/HomePageText.png';
import HomePageGraphic from '../assets/HomePageGraphic.png';
import SponsorForbes from '../assets/SponsorForbes.png';
import SponsorFortune from '../assets/SponsorFortune.png';
import SponsorRedBull from '../assets/SponsorRedBull.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {

    setSelecetedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelecetedPage }: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id="home" className='gap bg-gray-20 py-10 md:h-full'>
            {/* image + header */}
            <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
                {/*main header */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* headings */}
                    <div className='md:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p> Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </div>
                    <div>
                        <ActionButton setSelecetedPage={setSelecetedPage}>Join now</ActionButton>
                        <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={()=> setSelecetedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>
                {/* image */}
                <div>
                    <img src={HomePageGraphic} alt="home-page-graphic" />
                </div>
            </div>
            {/* Sponsors */}
            {isAboveMediumScreens && (
                <div>
                    <div>
                        <div>
                            <img src={SponsorRedBull} alt="RedBull-sponsore" />
                            <img src={SponsorForbes} alt="Frobes-sponsore" />
                            <img src={SponsorFortune} alt="Fortune-sponsore" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home;