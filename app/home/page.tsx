"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
    const handleRedirect = () => {
        window.location.href = "/";
    };
    return <Button onClick={handleRedirect}>Go to Landing page</Button>;
};

export default Home;
