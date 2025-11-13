
import { useNavigate } from 'react-router-dom'
import aboutMePic from '../assets/about_me_pic.jpg'
import afccImg from '../assets/gallery/afcc.jpg'
import blockdiaryImg from '../assets/gallery/blockdiary.jpg'
import cssecImg from '../assets/gallery/cssec.jpg'
import powerImg from '../assets/gallery/power.jpg'
import pyconImg from '../assets/gallery/pycon.jpg'
import sysdevImg from '../assets/gallery/sysdev.jpg'
import tactivImg from '../assets/gallery/tactiv.jpg'
import uxdavaoImg from '../assets/gallery/uxdavao.jpg'
import uxphImg from '../assets/gallery/uxph.jpg'

export default function About() {
  const navigate = useNavigate()

  const handleImageClick = (link: string) => {
    if (link.startsWith('http://') || link.startsWith('https://')) {
      // External link - open in new tab
      window.open(link, '_blank', 'noopener,noreferrer')
    } else {
      // Internal route - navigate
      navigate(link)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
  <>
    <div className="content-wrap px-3 md:px-6 py-12 relative">
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-light leading-snug tracking-tight text-center mb-12">About Me</h1>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:items-center">
        <div className="order-1 lg:order-1">
          <h2 className="text-2xl font-semibold">My story</h2>
          <p className="mt-3 text-gray-700">I used to live a school–home–school 
              kind of life. In high school, I was the type who chased grades and 
              not much else — straight A’s, no clubs, no risks. I’d like to say 
              it was because there weren’t many opportunities, but honestly, I 
              was just scared to try. So when I entered college, I made a promise 
              to myself: give yourself the chance. Clubs, events, volunteer work 
              — anything that would push me out of my comfort zone. At first, it felt 
              awkward and forced. I had to convince myself that doing all these 
              things was fun. </p>
          <br />
          <p className="mt-3 text-gray-700"> 
              I’m an introvert through and through, and socializing has never been easy 
              for me. But somewhere along the way, I started to enjoy it. Meeting 
              new people, learning new things, and exploring new spaces slowly 
              became the highlights of my college life. Through those experiences, 
              I found like-minded people, discovered new opportunities, and, 
              eventually, found my passion. </p>
          <br />
          <p className="mt-3 text-gray-700"> It only took me almost twenty 
                years of schooling to realize what truly drives me — creative 
                expression. I’ve always loved visual art in all its forms: from 
                childhood arts and crafts to painting, from live digital art to 
                graphic design, and now, UX/UI design. Creativity has always been 
                my compass. But somehow it never seemed like something I could 
                dedicate my life to. It was always just a hobby, a side thing.</p>
          <br />
          <p className="mt-3 text-gray-700"> These days, I spend most of my 
                time designing, collaborating, and mentoring. As the UX/UI Head 
                for SysDev, I get to guide my juniors, help them learn the ropes, 
                and grow alongside them. I may have terrible stage fright and an 
                ongoing battle with public speaking, but I genuinely love sharing 
                what I know. Passionate people are my favorite kind — their energy 
                is contagious, and being able to support their growth means just 
                as much to me as it does to them.</p>
          <br />
          <p className="mt-3 text-gray-700"> I don’t have everything figured out 
                yet — I don’t think anyone really does — but I know what I want 
                for now: to keep learning, to keep meeting people who inspire me, 
                and to keep building experiences that challenge me. Someday, I’d 
                love to create something of my own. But for now, I’m focused on 
                expanding my skills, exploring new opportunities, and doing the 
                work that reminds me why I fell in love with design in the first 
                place.</p>
        </div>
        <div className="flex justify-center order-2 lg:order-2 h-full min-w-0 rounded overflow-hidden">
          <img src={aboutMePic} alt="about" className=" w-full h-full object-cover" />
        </div>
      </section>

      <section className="bg-gray-900 py-20 px-3 md:px-6 mt-12 rounded-lg my-16">
        <h2 className="text-3xl font-bold text-white mb-8">Find Me Here</h2>
        <div className="flex gap-4">
            <a 
              href="mailto:itssarahhaw@gmail.com" 
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors text-white"
              aria-label="Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a 
              href="https://github.com/SanHaw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors text-white"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/sanhaw/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors text-white"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/_sannyyyyyy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors text-white"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/_sannyyy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors text-white"
              aria-label="Twitter/X"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </section>

      <section className="">
        {/* <h2 className="text-2xl font-semibold mb-6">Photos</h2> */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
          {[
            { title: 'SAMAHAN Systems Development', position: 'UX/UI Head', image: sysdevImg, link: 'https://www.facebook.com/SAMAHANSysDev' },
            { title: 'UXPH Mini', position: 'Volunteer', image: uxphImg, link: 'https://uxph.org' },
            { title: 'AFCC', position: 'Creatives Director', image: afccImg, link: 'https://facebook.com/afccadmu' },
            { title: 'Tactiv', position: 'UX/UI Intern', image: tactivImg, link: 'https://tactiv.ph' },
            { title: 'PYCON 2025', position: 'Volunteer', image: pyconImg, link: 'https://pycon.ph' },
            { title: 'CSSEC', position: 'Creatives Head', image: cssecImg, link: 'https://facebook.com/cssecadmu' },
            { title: 'UX Davao', position: 'Volunteer', image: uxdavaoImg, link: 'https://uxdavao.org' },
            { title: 'POWER', position: 'CS Liaison, Undersecretary', image: powerImg, link: 'https://facebook.com/poweradmu' },
            { title: 'Block Diary', position: 'UX/UI Head', image: blockdiaryImg, link: '/work/ux-005' }
          ].map((item, index) => (
            <div 
              key={`${item.title}-${index}`} 
              onClick={() => handleImageClick(item.link)}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-4 w-full">
                  <p className="text-white font-medium text-2xl">{item.title}</p>
                  <p className="text-white text-lg">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* Decorative SVG at bottom - full width */}
    <div className="relative w-full overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen">
        <svg viewBox="0 0 841 146" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-100">
          <path fillRule="evenodd" clipRule="evenodd" d="M804.078 106.364C799.411 97.4832 795.293 89.2398 790.779 81.2187C788.341 76.8883 785.323 72.8685 782.367 68.8568C781.314 67.4272 779.782 66.2608 778.273 65.2739C774.648 62.9041 770.775 63.2556 768.319 66.8172C765.953 70.2477 763.93 74.0834 762.592 78.0253C757.711 92.4055 753.133 106.89 748.532 121.364C745.595 130.604 749.537 139.29 758.917 142.83C770.136 147.063 781.384 146.393 792.106 140.826C798.3 137.608 801.536 131.934 803.505 125.505C804.559 122.06 805.247 118.505 806.197 114.603C808.103 117.452 809.701 120.152 811.607 122.613C813.835 125.489 816.145 128.35 818.752 130.875C823.956 135.914 833.713 134.994 840.593 131.328V128.505C837.725 129.621 829.008 133.209 826.386 131.793C823.876 130.439 821.5 128.749 819.317 126.907C817.497 125.371 816.026 123.417 814.428 121.624C808.829 115.338 806.307 108.572 806.612 99.5765C807.488 73.7423 801.979 48.7485 793.416 24.4495C791.074 17.8054 787.728 11.5993 783.033 6.2561C781.652 4.68338 780.074 3.2105 778.361 2.01581C774.773 -0.486695 770.711 -0.824322 767.358 1.94136C764.082 4.64298 761.001 7.86172 758.702 11.4158C751.897 21.9354 748.319 33.8714 744.586 45.7133C742.246 53.14 739.874 60.5626 737.239 67.8872C736.581 69.7167 735.147 71.6029 733.544 72.6786C730.996 74.3887 728.575 73.7493 726.7 71.2831C725.493 69.696 724.72 67.7856 723.679 66.0634C719.512 59.1711 715.354 52.2725 711.094 45.438C710.403 44.3293 709.273 43.4601 708.245 42.6036C702.593 37.8975 696.262 38.2531 691.9 44.234C683.555 55.6777 681.518 68.3933 685.623 82.0157C688.013 89.9451 692.197 96.9124 696.922 103.645C699.729 107.644 702.152 111.923 704.595 116.164C706.142 118.848 706.446 121.794 705.562 124.816C704.633 127.994 702.667 129.383 699.492 128.448C697.236 127.783 695.031 126.644 693.073 125.318C685.821 120.407 680.153 113.952 675.004 106.891C671 101.4 666.493 96.2533 661.935 91.2021C660.386 89.4863 658.126 88.2397 655.967 87.2879C652.069 85.5692 648.547 86.8003 646.218 90.3768C645.491 91.4942 644.914 92.7385 644.452 93.9926C643.857 95.6133 643.4 97.2905 642.963 98.9636C639.863 110.81 637.336 112.817 625.209 113.28C622.707 113.375 620.794 112.618 619.121 110.724C616.322 107.557 613.448 104.444 610.44 101.476C602.867 94.0053 596.001 92.6231 586.319 97.0838C571.976 103.692 557.259 109.227 542.08 113.556C525.971 118.15 509.774 118.861 493.364 115.132C467.574 109.273 441.307 107.364 414.98 106.573C373.887 105.339 332.783 104.176 291.676 103.719C251.703 103.274 211.719 103.634 171.742 103.873C146.093 104.026 120.447 104.583 94.7997 104.985C63.1998 105.48 31.5993 105.991 0 106.553V108.753C31.5128 108.437 63.1524 108.031 94.6641 107.655C111.957 107.448 129.25 107.183 146.544 107.093C193.059 106.852 239.575 106.701 286.089 106.495C307.615 106.4 329.142 106.056 350.666 106.19C385.354 106.407 420.034 107.265 454.52 111.344C467.282 112.854 480.028 114.892 492.594 117.568C512.578 121.823 531.956 120.122 550.992 113.263C561.741 109.39 572.349 105.129 583.046 101.111C585.468 100.201 587.967 99.4565 590.479 98.8395C596.543 97.351 602.156 98.4742 607.071 102.336C609.633 104.348 611.968 106.653 614.377 108.856C616.785 111.06 619.008 113.498 621.577 115.49C627.269 119.904 632.602 119.479 637.298 113.965C639.498 111.381 641.02 108.177 642.611 105.131C644.345 101.814 645.618 98.2502 647.42 94.9744C650.878 88.6881 656.025 87.8911 660.94 93.0629C664.435 96.7399 667.442 100.884 670.638 104.843C675.759 111.189 680.745 117.649 686.033 123.851C687.606 125.696 689.876 127.058 692.036 128.264C697.602 131.371 702.885 130.596 707.883 126.735C709.543 125.453 709.948 124.236 708.871 122.361L708.485 121.689C705.406 116.333 702.326 110.973 699.437 105.514C695.667 98.3899 691.629 91.3539 688.552 83.929C683.873 72.6383 685.509 61.4838 691.115 50.8297C691.867 49.3983 692.867 48.0594 693.937 46.8398C697.592 42.6729 702.266 41.8371 706.412 45.4576C709.896 48.4991 712.91 52.2569 715.468 56.1353C718.471 60.6919 720.7 65.7541 723.387 70.5288C724.367 72.27 725.531 73.9726 726.903 75.4149C729.429 78.0703 732.231 78.1396 734.625 75.356C736.478 73.2033 738.24 70.7394 739.215 68.1065C742.452 59.3691 745.099 50.4112 748.382 41.6929C751.866 32.4424 755.645 23.2917 759.658 14.2588C761.031 11.1682 763.186 8.26515 765.537 5.80478C769.97 1.16453 775.566 1.03814 779.591 5.97562C783.187 10.3879 786.26 15.405 788.677 20.571C801.157 47.2427 805.852 75.4518 804.507 104.763C804.495 105.014 804.379 105.26 804.078 106.364ZM765.454 142.134C767.889 142.629 770.395 142.77 772.869 143.073C790.46 142.873 800.264 134.013 803.396 115.531C803.947 112.278 803.665 109.506 801.998 106.506C797.289 98.0286 793.095 89.2664 788.414 80.772C786.484 77.2687 784.137 73.8837 781.44 70.9403C776.733 65.8025 771.706 66.4495 767.927 72.3133C766.995 73.7585 766.068 75.2833 765.542 76.9034C760.888 91.242 756.323 105.61 751.737 119.972C751.622 120.336 751.575 120.723 751.499 121.099C749.127 132.923 753.605 139.728 765.454 142.134Z" fill="black"/>
        </svg>
      </div>
    </div>
  </>
  )
}
