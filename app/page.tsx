import Image from 'next/image'
import React from 'react'

import image from '../images/business_woman-removebg-preview.png'

import aboutImage from '../images/Code typing-amico 1.jpg'
import skillImage from '../images/Frame.png'

import projectImage1 from '../images/Create Next App - Google Chrome 11_24_2024 9_14_09 PM.png'
import projectImage2 from '../images/Screenshot (16).png'
import projectImage3 from '../images/Screenshot 11_24_2024 9_19_47 PM.png'
import projectImage4 from '../images/resume-builder.jpg'
import projectImage5 from '../images/rock-paper-scissors.jpg'
import projectImage6 from '../images/Create Next App - Google Chrome 11_24_2024 10_10_13 PM.png'

import linkedin from '../images/LinkedIn.png'
import github from '../images/GitHub.png'
import instagram from '../images/Instagram.png'
function homepage() {
  return (



    <div>
    <div id='Home' className='bg-sky-100 h-[700px]'>
      <div className=' min-h-screen flex items-center pt-40 md:px-10 lg:px-20 gap-5'>
        <div className='w-full px-8 md:px-0 md:w-1/2 flex flex-col gap-10'>
        <div className='text-center md:text-start'>
          <h1 className='text-[#457B9D] font-normal text-2xl'>Hi Everyone, I am </h1>
          <h1 className='font-bold text-[48px] ' >Syeda Barha.</h1>
          <p className='font-normal text-[20px]'>I am a frontend developer focused on designing visually appealing interfaces for websites and web applications.</p>
          </div>
          <div className='flex gap-4'>
            <button className='w-[274px] h-[64px] bg-[#457B9D] text-white text-[20px] rounded-sm hover:scale-105 transition-transform duration-300'><a href="https://static-resume-psi-five.vercel.app" target="_blank" rel="noopener noreferrer">Download CV</a></button>
            <button className='w-[274px] h-[64px] bg-[#457B9D1A] border-[#457B9D] border-[1px] text-[#457B9D] text-[20px] rounded-sm hover:scale-105 transition-transform duration-300'><a href="#About">Explore More</a></button>
          </div>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
        <div className='w-[479px] h-[390px] bg-[#457B9D] rounded-[40px] hidden md:block'>
          <div><Image
          src={image}
          alt='image'
          height={500}
          className='mt-[-109px] ml-14'
          /></div>
        </div>
        </div>
      </div>
    </div>



<div id='About' className='bg-[#FFFFFF] '>
  <div className='h-max lg:h-[616px] flex flex-col lg:flex-row items-center justify-around'>
  <div className='lg:pl-12'>
    <Image
    src={aboutImage}
    alt='image'
    width={500}
    height={500}
    />
  </div>
    <div className=' lg:w-[40%] pr-0 lg:pr-20 m-10 lg:m-0 text-center lg:text-start'>
      <h1 className='text-[#457B9D] font-semibold text-2xl'>About</h1>
      <h1 className='font-bold text-[48px] '>About Me?</h1>
      <p className='md:text-justify text-[20px] font-normal text-[#455A64] tracking-tighter'>
I&apos;m a frontend web developer with knowledge in HTML, CSS, TypeScript, and JavaScript, and currently learning Next.js and Tailwind. I have a keen interest in web development, especially in creating visually appealing and functional websites. I&apos;m actively working on improving my skills and deploying my projects online. I&apos;m constantly seeking opportunities to learn, grow, and contribute to meaningful projects, with the ultimate goal of making an impact in the world of web development.</p>
    </div>
  </div>
</div>









<div id='Skills' className='h-screen '>
  <div className='h-[500px] bg-sky-100 flex items-center justify-center'>
    <div className='flex flex-col gap-7 items-center'>
      <h1 className='font-semibold text-3xl text-[#457B9D]'>Skills</h1>
      <h1 className='text-3xl md:text-5xl font-bold text-center'>What I am capable of?</h1>
      <div className='m-5'>
        <Image
        src={skillImage}
        alt='image'
        />

      </div>
    </div>
  </div>
</div>








<div id='Projects' className='h-max bg-[#FFFFFF]'>
      
    <div className='flex flex-col gap-7 items-center'>
      <h1 className='font-semibold text-3xl text-[#457B9D]'>Projects</h1>
      <h1 className='text-3xl md:text-5xl font-bold '>What I have made?</h1>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='w-[300px] h-[350px] sm:w-[400px] sm:h-[300px] md:w-[230px] md:h-[330px] lg:w-[350px] lg:h-[310px] border-2 rounded-xl shadow-lg flex flex-col gap-5 hover:scale-105 transition-transform duration-300'>
            <Image
            src={projectImage1}
            alt='image'
            width={360}
            height={198}
            className='h-52 border-b-2 border-black'
            />
            <div className='px-2 py-2'>
              <h1 className='font-bold text-[20px]'>Portfolio Website Design</h1>
              <p className='font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-7  text-[#457B9D]'>
                <a href="https://portfolio-website-with-tailwind-sandy.vercel.app
" className='font-normal' target='_blank'>Live View</a>
                <a href="https://github.com/syeda-codetech12/portfolio-website-with-Tailwind" className='font-normal' target='_blank'>Github</a>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[350px] sm:w-[400px] sm:h-[300px] md:w-[230px] md:h-[330px] lg:w-[350px] lg:h-[310px] border-2 rounded-xl shadow-lg flex flex-col gap-5 hover:scale-105 transition-transform duration-300'>
            <Image
            src={projectImage2}
            alt='image'
            width={360}
            height={198}
            className='h-52 border-b-2 border-black'

            />
             <div className='px-2 py-2'>
              <h1 className='font-bold text-[20px]'>Figma Design</h1>
              <p className='font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-7  text-[#457B9D]'>
                <a href="https://www.figma.com/design/EtX7RPLviPnR8sEdpSYAm6/Portfolio-Website-Sample-(Community)?node-id=1-3&node-type=canvas&t=fS03ktddZDiKTvl6-0" className='font-normal'  target='_blank'>Live View</a>
                <a href="https://www.figma.com/design/EtX7RPLviPnR8sEdpSYAm6/Portfolio-Website-Sample-(Community)?node-id=1-3&node-type=canvas&t=fS03ktddZDiKTvl6-0" className='font-normal' target='_blank'>Github</a>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[350px] sm:w-[400px] sm:h-[300px] md:w-[230px] md:h-[330px] lg:w-[350px] lg:h-[310px] border-2 rounded-xl shadow-lg flex flex-col gap-5 hover:scale-105 transition-transform duration-300'>
            <Image
            src={projectImage3}
            alt='image'
            width={360}
            height={198}
            className='h-52 border-b-2 border-black'

            />
             <div className='px-2 py-2'>
              <h1 className='font-bold text-[20px]'>Static Resume</h1>
              <p className='font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-7  text-[#457B9D]'>
                <a href="https://static-resume-psi-five.vercel.app" className='font-normal' target='_blank'>Live View</a>
                <a href="https://github.com/syeda-codetech12/Static-Resume" className='font-normal' target='_blank'>Github</a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='w-[300px] h-[350px] sm:w-[400px] sm:h-[300px] md:w-[230px] md:h-[330px] lg:w-[350px] lg:h-[310px] border-2 rounded-xl shadow-lg flex flex-col gap-5 hover:scale-105 transition-transform duration-300'>
            <Image
            src={projectImage4}
            alt='image'
            width={360}
            height={170}
            className='h-48 border-b-2 border-black'
            />
             <div className='px-2 py-2'>
              <h1 className='font-bold text-[20px]'>Resume Builder</h1>
              <p className='font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-7 text-[#457B9D]'>
                <a href="https://resume-builder-olive-six.vercel.app" className='font-normal' target='_blank'>Live View</a>
                <a href="https://github.com/syeda-codetech12/Resume-builder-" className='font-normal' target='_blank'>Github</a>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[350px] sm:w-[400px] sm:h-[300px] md:w-[230px] md:h-[330px] lg:w-[350px] lg:h-[310px] border-2 rounded-xl shadow-lg flex flex-col gap-5 hover:scale-105 transition-transform duration-300'>
            <Image
            src={projectImage5}
            alt='image'
            width={360}
            className='h-48 border-b-2 border-black'
            />
             <div className='px-2 py-2'>
              <h1 className='font-bold text-[20px]'>Rock Paper Scissors</h1>
              <p className='font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-7  text-[#457B9D]'>
                <a href="https://rock-paper-scissors-eight.vercel.app" className='font-normal' target='_blank'>Live View</a>
                <a href="https://github.com/syeda-codetech12/rock-paper-scissors" className='font-normal' target='_blank'>Github</a>
              </div>
            </div>
          </div>
          <div className='w-[300px] h-[350px] sm:w-[400px] sm:h-[300px] md:w-[230px] md:h-[330px] lg:w-[350px] lg:h-[310px] border-2 rounded-xl shadow-lg flex flex-col gap-5 hover:scale-105 transition-transform duration-300'>
            <Image
            src={projectImage6}
            alt='image'
            width={360}
            className='h-48 border-b-2 border-black'
            />
             <div className='px-2 py-2'>
              <h1 className='font-bold text-[20px]'>Personal Website</h1>
              <p className='font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-7 text-[#457B9D]'>
                <a href="" className='font-normal'>Live View</a>
                <a href="" className='font-normal'>Github</a>
              </div>
            </div>
          </div>

        </div>
        <div className='flex gap-20'>
        <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
</div>







<div id='Contact' className=' h-96 bg-sky-100'>
  <div className='h-full flex items-center px-10 md:px-20'>
    <div className='flex flex-col gap-4'>
      <h1 className='font-semibold text-3xl text-[#457B9D]'>Contacts</h1>
      <h1 className='text-3xl sm:text-5xl font-bold '>Get in touch</h1>
      <h1 className='sm:text-[20px] font-normal'>sbs86.freelancer@gmail.com</h1>
      <div className='flex gap-6'>
        <Image
        src={linkedin}
        alt='linkedin'
        height={40}
        width={40}/>
        <Image
        src={github}
        alt='github'
        height={40}
        width={40}/>
        <Image
        src={instagram}
        alt='instagram'
        height={40}
        width={40}/>
      </div>
      <p className='sm:text-[20px] font-normal mt-8'>Copyright © 2024. Developed & Designed by Syeda Barha.</p>
    </div>
  </div>
</div>









    </div>
  )
}

export default homepage