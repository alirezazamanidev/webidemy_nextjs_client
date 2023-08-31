
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { FiCircle } from 'react-icons/fi'


interface props {
    title:string
    list:{label:string,href:string}[]
    Icon:any
}
export default function DisclosureList({title,list,Icon}:props){

    return(
        <>
           <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-900 px-4 py-2 text-left font-medium text-gray-50 hover:bg-text-gray-200 text-lg focus:outline-none  focus:bg-blue-450 ">
              <div className=' flex items-center '>
              <Icon className=" scale-125"/>
                <span className='mr-3'>{title}</span>
              </div>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-100`}
                />
              </Disclosure.Button>
            {
                list.map(item=>(
                    <Disclosure.Panel key={item.label} className="p-3 text-gray-300 flex rounded-md cursor-pointer hover:bg-gray-600 text-lg items-center  ">
                        <FiCircle className=' ml-3'/>
                     <Link href={item.href}> {item.label}</Link>
                  </Disclosure.Panel>
                ))
            }
            </>
          )}
        </Disclosure>
        
        
        </>
    )


}