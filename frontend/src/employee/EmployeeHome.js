import React, { useEffect } from "react";
import image21 from "../components/images/21.png";
import Typed from "typed.js";
import { ToastContainer } from "react-toastify";

export default function EmployeeHome() {
  useEffect(() => {
    const employee = JSON.parse(sessionStorage.getItem("employee"));
    const typed = new Typed("#typed-text", {
      strings: [`Welcome,${employee.EmployeeName}`],
      typeSpeed: 50,
      loop: false,
    });
    const typed1 = new Typed("#typed-text2", {
      strings: ["This is Employee-Portal"],
      typeSpeed: 50,
      loop: false,
    });

    return () => {
      typed.destroy();
      typed1.destroy();
    };
  }, []);
  return (
    <div>
      {/* <EmpNavBar/> */}
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mt-8 text-center">
          <span id="typed-text"></span> {/* Placeholder for typed text */}
        </h1>
        <p className="mt-4 text-center"></p>
        <div className="flex justify-center">
          <img
            src={image21}
            alt="Employee Leave Management System"
            className="mt-8 max-w-full h-auto lg:max-w-none lg:h-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mt-8 text-center">
          <span id="typed-text2"></span> {/* Placeholder for typed text */}
        </h1>
        <p className="mt-4 text-center"></p>
      </div>
      <ToastContainer/>
    </div>
  );
}
