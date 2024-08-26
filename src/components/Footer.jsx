import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-14 text-sm sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            earum esse, eveniet molestias accusantium animi pariatur, ex a
            distinctio enim magnam minima ducimus nobis officia maiores
            voluptatibus, exercitationem mollitia? Id!
          </p>
        </div>
        <div>
            <h3 className="text-xl font-medium mb-5 uppercase font-prata">Company</h3>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-medium mb-5 uppercase font-prata">Get In Touch</h3>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+20-1010101010</li>
                <li>contact@forever.com</li>
            </ul>
        </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right Reservied </p>
        </div>
    
    </footer>
  );
};

export default Footer;
