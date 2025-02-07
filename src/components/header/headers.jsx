import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown } from "antd";
import { LuSunMoon, LuMoonStar } from "react-icons/lu";
import darkIcon from "../../assets/Icon.png";
import lightIcon from "../../assets/Icon_white.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";



const Headers = () => {
  const [isOverflow, setIsOverFlow] = useState(false);
  const [theme, setTheme] = useState(false);
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("theme") || "light"
  );

  const items=[{
    label: (<IoIosNotificationsOutline size={23} className="!text-black dark:!text-white"/>)
  },{
    label: (<IoSettingsOutline size={21} className="!text-black dark:!text-white"/>)
  },{
    label: (<FaRegUser size={21} className="!text-black dark:!text-white"/>)
  }]

  const checkOverFlow = () => {
    if (window.innerWidth < 1052) {
      setIsOverFlow(true);
    } else {
      setIsOverFlow(false);
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeColor === "dark");
    setTheme(themeColor === "light" ? false : true);
    localStorage.setItem("theme", themeColor);
  }, [themeColor]);


  useEffect(() => {
    checkOverFlow();
    window.addEventListener("resize", checkOverFlow);
    ///useEffect runs when dependencies change, and when a component unmounts,
    /// it cleans up by running the function returned inside useEffect
    return () => window.removeEventListener("resize", checkOverFlow);
  }, []);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={20}>
              <Row className="m-4">
                {theme?<img src={lightIcon} className="h-10 w-10"></img>:<img src={darkIcon} className="h-10 w-10"></img>}
                <span className="font-bold text-2xl dark:!text-white">
                  Workforce Acquisition
                </span>
              </Row>
            </Col>
            <Col span={4}>
              {!isOverflow ? (
                <>
                <ul
                  className={`inline-flex gap-2 mt-3 overflow-hidden whitespace-nowrap text-ellipsis
               ${isOverflow ? "overflow-hidden" : ""}`}
                >
                  <li
                    className="p-3 !text-black dark:!text-white text-center cursor-pointer "
                    onClick={() => {
                      setTheme(!theme);
                      setThemeColor(themeColor === "light" ? "dark" : "light");
                    }}
                  >
                    {!theme ? <LuMoonStar size={21} /> : <LuSunMoon size={21} />}
                  </li>
                  <li
                    className="p-3 !text-black dark:!text-white text-center cursor-pointer "
                  >
                    <IoIosNotificationsOutline size={23}/>
                  </li>
                  <li
                    className="p-3 !text-black dark:!text-white text-center cursor-pointer "
                  >
                    <IoSettingsOutline size={21}/>
                  </li>
                  <li
                    className="p-3 !text-black dark:!text-white text-center cursor-pointer "
                  >
                    <FaRegUser size={21}/>
                  </li>
                  </ul>
                </>
              ) : (
                <>
                <div className="inline-flex float-right p-3">
                <span
                    className="p-3 !text-black dark:!text-white text-center cursor-pointer "
                    onClick={() => {
                      setTheme(!theme);
                      setThemeColor(themeColor === "light" ? "dark" : "light");
                    }}
                  >
                    {!theme ? <LuMoonStar size={21} /> : <LuSunMoon size={21} />}
                  </span>
                  <div className="p-3"><Dropdown menu={{items}} arrow>
                    <AiOutlineMenuFold size={23} className="text-black dark:!text-white cursor-pointer"/>
                  </Dropdown></div>
                </div>
                </>
              )}

            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Headers;
