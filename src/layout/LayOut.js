import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {ConfigProvider, Switch, theme} from "antd";

function LayOut(props) {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [currentTheme, setCurrentTheme] = useState('light');
    const themeChange = (checked) => {
        if(currentTheme === 'light'){
            document.body.setAttribute("data-theme", "dark-theme")
            setCurrentTheme('dark')
        }
        else{
            setCurrentTheme('light')
            document.body.setAttribute("data-theme", "light-theme")
        }
    }

    return (
        <ConfigProvider
            theme={{
                algorithm: currentTheme === 'light' ? defaultAlgorithm : darkAlgorithm,
            }}
        >
            <div className={"container-background"}>
                <div className={"border-b mb-4"}>
                    <div className={"containerr h-[60px] flex items-center justify-between"}>
                        <Link to="/"><h1 className={"text-[30px] my-0 font-semibold"}><span className={"text-[#1a73e8]"}>KATTA</span> <span className={"text-[#43a77d]"}>BOZOR </span></h1></Link>
                        <div className="switch">
                            <Switch checkedChildren="dark" unCheckedChildren="light" checked={currentTheme === "dark"} onChange={(e)=>themeChange(e)} />
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </ConfigProvider>
    );
}

export default LayOut;
