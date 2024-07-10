import { FaArrowRight } from "react-icons/fa6"
export default function Header() {
  return (
    <div>
      <div className="bg-stone-950 flex justify-center items-center text-sm h-[35px] mt-10 rounded-t-xl text-stone-200">
        This announcement bar can be used to inform visitors of something
        important.
      </div>

      <div>
        <ul>
          <li className="group">TWITTER<FaArrowRight className="inline -rotate-45 group-hover:rotate-0 duration-200" /></li>
          <li className="group">DRIBBLE<FaArrowRight className="inline -rotate-45 group-hover:rotate-0 duration-200" /></li>
          <li className="group">BEHANCE<FaArrowRight className="inline -rotate-45 group-hover:rotate-0 duration-200" /></li>
        </ul>
        <div><p>ACCORD</p><p>PORTFOLIO</p></div>
        <ul>
          <li className="">HOME</li>
          <li>ABOUT</li>
          <li>WORKS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
