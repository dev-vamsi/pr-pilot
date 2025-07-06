import React from "react";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <div className="flex items-center justify-between h-[50px]">
            <h1 className="text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    PR
                </span>
                Pilot
            </h1>
            <Button>Sign In with GitHub</Button>
        </div>
    );
};

export default Header;
