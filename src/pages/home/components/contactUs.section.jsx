import { Button } from '@chakra-ui/react';
import React from 'react'
import { RightArrowIcon } from '../../../components/icons';

const ContactSection = () => {
  return (
    <div className="contacUs_section mb-20">
        <div className="px-10 w-[70%] mx-auto bg-[#fff3cd] h-[300px] rounded-xl  justify-center items-center gap-10 grid grid-cols-3">
          <div>
            <img src="./1-5-1.png" />
          </div>
          <div className="roboto-bold">
            <p
              style={{
                fontSize: "50px",
              }}
            >
              Let’s make someting great together
            </p>
          </div>
          <div className="roboto-medium">
            <p>
              Utilizing cutting-edge design approaches and the latest
              technologies, you will be streamlined and efficient on a
              year-over-year basis.
            </p>
            <div className="mt-10">
              <Button className="bg-purple-700 px-5 py-2 text-white rounded-xl">
                Get a Quote{" "}
                <span>
                  <RightArrowIcon />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactSection;