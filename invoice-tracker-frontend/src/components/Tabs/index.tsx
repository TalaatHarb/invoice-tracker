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
      <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1 border border-spacing-4 mb-8'>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-black ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-primary-default shadow text-white'
                  : 'text-blue-200 hover:bg-dark hover:text-default'
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
