import {Link, useLocation} from "react-router-dom";
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa6";
import React, {useEffect, useRef, useState} from "react";
import merge from "../../../_lib/merge"

const local_style = [
  "duration-200 hover:text-custom-medium text-lg",
  "hover:text-custom-medium duration-200"
]

export default function HeaderElement(props: { className: string }) {
  const menuRef: React.MutableRefObject<HTMLElement | null> = useRef(null)
  const subMenuRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  const [open, setOpen] = useState<boolean>(false)

  const location = useLocation();

  const open_event = () => {
    setOpen(true)
  }
  const handleClickOutside = (event: Event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      subMenuRef.current &&
      !subMenuRef.current.contains(event.target as Node))
    {
      setOpen(false); // Close the menu
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <>
      <header
        ref={menuRef}
        className={merge(`bg-custom-dark sm:flex justify-center sm:justify-between items-center sm:items-center px-5`, props.className)}>
        <nav className={`tracking-wider text-lg flex gap-5 items-center`}>
          <Link to={`/`}><img src="/logo-no-background.svg" alt="Logo of the RIKEA" className={`w-40`}/></Link>
          <div onClick={open_event} className={`hover:text-custom-medium duration-200 cursor-pointer`}>Menu</div>
        </nav>


        <div className={`flex gap-5 items-center`}>
          <Link to={`#`} className={local_style[1]}><FaFacebookF/></Link>
          <Link to={`#`} className={local_style[1]}><FaTwitter/></Link>
          <Link to={`#`} className={local_style[1]}><FaLinkedinIn/></Link>
        </div>
      </header>

      <div
        ref={subMenuRef}
        className={merge(`fixed left-0 w-full z-40 bg-custom-bright px-20 pb-10 pt-5 border-b-2 border-b-custom-medium duration-200`, open ? "top-12" : "top-[-100%]")}>
        <div className={`flex gap-20`}>
          <div className={`flex flex-col gap-2`}>
            <h3 className={`text-2xl font-bold`}>Materials</h3>
            <Link className={local_style[0]} to={`materials`}>Stones</Link>
            <Link className={local_style[0]} to={`#`}>Wood</Link>
            <Link className={local_style[0]} to={`#`}>Glas</Link>
            <Link className={local_style[0]} to={`#`}>Sand</Link>
            <Link className={local_style[0]} to={`#`}>Blocks</Link>
            <Link className={local_style[0]} to={`#`}>Metal</Link>
          </div>
          <div className={`flex flex-col gap-2`}>
            <h3 className={`text-2xl font-bold`}>Section</h3>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
          </div>
          <div className={`flex flex-col gap-2`}>
            <h3 className={`text-2xl font-bold`}>Section</h3>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
          </div>
          <div className={`flex flex-col gap-2`}>
            <h3 className={`text-2xl font-bold`}>Section</h3>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
            <Link className={local_style[0]} to={`#`}>Element</Link>
          </div>
        </div>
      </div>
    </>
  )
}