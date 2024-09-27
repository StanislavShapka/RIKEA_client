import {merge, useAvailableRandomItems} from "../../_lib";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

type SubElement = {
  name: string,
  link: string
}

type MainBoardSectionType = {
  h3: string,
  image: string,
  availableItems: number,
  swap: boolean,
  text: string | React.ReactNode,
  subElements4: SubElement[]
}

export default function MainBoardSection(props: MainBoardSectionType) {

  const number = useAvailableRandomItems(props.availableItems)
  const {ref, inView} = useInView({
    triggerOnce: true, // Ensures animation is only triggered once when entering the viewport
    threshold: 0.1, // Percentage of the element that must be visible (0.1 = 10%)
  });


  return (
    <>
      <motion.div
        initial={props.swap ? {x: '-250px', opacity: 0} : {
          x: '+250px',
          opacity: 0
        }}
        animate={inView ? {x: 0, opacity: 1} : {}}
        transition={{duration: 0.7}}
        ref={ref}
        className={merge(`flex h-80 w-full gap-5 my-5`, props.swap ? "flex-row-reverse" : " ")}>
        <div style={{backgroundImage: `url("${props.image}")`}} className={`bg-cover bg-center w-1/2`}>
          <div className={`flex w-full h-full justify-center items-center bg-custom-dark/70 text-custom-bright`}>
            <h3 className={`text-2xl tracking-widest font-bold uppercase`}>{props.h3}</h3>
          </div>
        </div>
        <div className={`w-1/2 flex flex-col justify-between py-5`}>
          <div>
            <h3 className={`text-2xl tracking-wider font-bold capitalize mb-5`}>{props.h3}</h3>
            <p className={`tracking-wider`}>{props.text}</p>
          </div>
          <div className={`flex justify-between items-center`}>
            <p className={`text-3xl font-bold`}>Over: {number === 0 ? 0 : number}+ Offers</p>
            <button className={`uppercase tracking-widest px-10 py-3 bg-red text-custom-bright`}>discover</button>
          </div>
        </div>
      </motion.div>

      <div
        className={`mb-40 flex w-full justify-between gap-1`}>
        <motion.div
          initial={{opacity: 0, y: "-20px"}}
          animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
          transition={props.swap ? {duration: 0.7} : {duration: 1}}
          ref={ref}
          className={`h-20 bg-custom-dark text-custom-bright w-full flex justify-center items-center`}>
          element 1
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: "-20px"}}
          animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
          transition={props.swap ? {duration: 0.8} : {duration: 0.9}}
          ref={ref}
          className={`h-20 bg-custom-dark text-custom-bright w-full flex justify-center items-center`}>
          element 1
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: "-20px"}}
          animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
          transition={props.swap ? {duration: 0.9} : {duration: 0.8}}
          ref={ref}
          className={`h-20 bg-custom-dark text-custom-bright w-full flex justify-center items-center`}>
          element 1
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: "-20px"}}
          animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
          transition={props.swap ? {duration: 1} : {duration: 0.7}}
          ref={ref}
          className={`h-20 bg-custom-dark text-custom-bright w-full flex justify-center items-center`}>
          element 1
        </motion.div>
      </div>
    </>
  )
}