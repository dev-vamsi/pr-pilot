import React from "react";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <div className="flex items-center justify-between h-[50px]">
            <h1 className="text-3xl font-bold">PRPilot</h1>
            <Button>Sign In with GitHub</Button>
        </div>
    );
};

export default Header;
