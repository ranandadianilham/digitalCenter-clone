import React from 'react'
import { PlusIcon } from '../../../components/icons';

const ServiceSection = () => {
    const services = [
        "E-commerce Development",
        "Apps Design And Development",
        "Web And Design Development",
        "Paid Advertisement",
        "Social Media Management",
        "Content Marketing Service",
        "Email Marketing",
        "Search Engine Optimization",
      ];
  return (
    <div className="service_section w-full flex justify-end text-white px-[15%] items-center">
        <div className="w-[30%] h-fit bg-none">
          <div className="rounded-full border-2 w-fit px-2 border-white">
            Our Service
          </div>
          <div>
            <p
              style={{
                fontSize: " 40px",
              }}
              className="roboto-bold"
            >
              Build your business with the latest technology
            </p>
          </div>
          <ul className="roboto-bold">
            {services.map((item, i) => {
              return (
                <li key={item + "-" + i} className="flex gap-1 my-2">
                  <PlusIcon />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  )
}

export default ServiceSection