import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
    const handleSignIn = () => {
        // Logic for handling sign-in with GitHub
        window.location.href = "/api/auth/signin";
    };

    return (
        <div className="flex flex-col gap-2">
            <Header />
            <div
                className="flex flex-col gap-3 items-center justify-center p-4"
                style={{ minHeight: "calc(100vh - 100px)" }}
            >
                <h1 className="text-3xl font-bold">Ship Clean Code. Faster.</h1>
                <p className="text-xl text-gray-600">
                    Let AI handle the grunt work of pull request reviews — so
                    you can focus on what matters.
                </p>
                <Button>Sign In with GitHub</Button>
            </div>
        </div>
    );
};

export default Home;
