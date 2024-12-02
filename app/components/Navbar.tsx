import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";



function Navbar() {
  return (
    <div >
        <div className='w-full h-20 flex justify-between px-16 items-center border-b-[1px] border-[#000000F7] bg-sky-100 fixed z-10'>
            <div className=' text-[30px] font-bold'>
                S. Barha
            </div>
            <ul className=' md:flex gap-7 text-2xl font-normal text-[#000000] hidden '>
               <a href="#Home"> <li className="hover:scale-105 transition-transform duration-300 hover:text-[#457B9D]">Home</li> </a>
               <a href="#About"> <li className="hover:scale-105 hover:text-[#457B9D] transition-transform duration-300">About</li> </a>
               <a href="#Skills"> <li className="hover:scale-105 hover:text-[#457B9D] transition-transform duration-300">Skills</li> </a>
               <a href="#Projects"> <li className="hover:scale-105 hover:text-[#457B9D] transition-transform duration-300">Projects</li> </a>
               <a href="#Contact"> <li className="hover:scale-105 transition-transform duration-300 hover:text-[#457B9D]">Contact</li> </a>
            </ul>
            <Sheet >
  <SheetTrigger className='md:hidden'>
    <Menu/>
  </SheetTrigger>
  <SheetContent>
    <VisuallyHidden>
  <SheetTitle>Navigation Menu</SheetTitle>
  </VisuallyHidden>
    <div className='flex flex-col gap-5 text-[20px] mt-10'>
  <a href="#Home"> <div className="hover:scale-105 transition-transform duration-300 hover:text-[#457B9D]">Home</div> </a>
               <a href="#About"> <div className="hover:scale-105 hover:text-[#457B9D] transition-transform duration-300">About</div> </a>
               <a href="#Skills"> <div className="hover:scale-105 hover:text-[#457B9D] transition-transform duration-300">Skills</div> </a>
               <a href="#Projects"> <div className="hover:scale-105 hover:text-[#457B9D] transition-transform duration-300">Projects</div> </a>
               <a href="#Contact"> <div className="hover:scale-105 transition-transform duration-300 hover:text-[#457B9D]">Contact</div> </a>
               </div>
  </SheetContent>
</Sheet>

        </div>
    </div>
  )
}

export default Navbar