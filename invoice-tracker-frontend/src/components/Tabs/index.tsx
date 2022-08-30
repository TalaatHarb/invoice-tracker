import React from 'react'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'

interface TabsProps {
  tabs: string[]
  elements: React.ReactNode[]
}
function Tabs({ tabs, elements }: TabsProps) {
  return (
    <Tab.Group>
      <Tab.List className='flex space-x-1 rounded-xl bg-lightGrey p-1 mt-20 mb-2 w-96 ml-4'>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-lg font-bold leading-5 text-black',
                'ring-blueCegedim ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-blueCegedim shadow text-lightGrey'
                  : 'text-blue-200 hover:bg-darkGrey hover:text-default'
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {elements.map((SingleTab, index) => (
          <Tab.Panel key={index}>{SingleTab}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
