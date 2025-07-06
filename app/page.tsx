import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import PRPilotLogo from "@/public/pr_pilot_transparent_bg.png";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SignInWithGitHub } from "@/components/custom/githubAuth";

const Home = () => {
    return (
        <div className="flex flex-col gap-2">
            <Header />
            <div className="flex flex-col gap-3 items-center p-4">
                <Image src={PRPilotLogo} alt="pr_pilot_logo" height={200} />
                <h1 className="text-5xl font-bold">Ship Clean Code. Faster.</h1>
                <p className="text-xl text-gray-600">
                    Let AI handle the grunt work of pull request reviews — so
                    you can focus on what matters.
                </p>
                <SignInWithGitHub />
                <p className="text-sm">
                    21-day free trial | No Credit Card needed
                </p>
            </div>
            <div className="cards grid grid-cols-1 xl:grid-cols-3 gap-3 lg:mx-10 my-5">
                <div className="card-item" id="card-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Summary of Changes</CardTitle>
                            <CardDescription>
                                What exactly are the changes for?
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5">
                                <li>
                                    AI-generated summary in plain English — no
                                    guesswork.
                                </li>
                                <li>This code lacks test coverage for X.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div className="card-item" id="card-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Code Understanding</CardTitle>
                            <CardDescription>
                                Understand diffs in a PR
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5">
                                <li>
                                    Logic-heavy changes? PRPilot flags them for
                                    your review flow.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div className="card-item" id="card-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Improvement Suggestions</CardTitle>
                            <CardDescription>
                                Propose cleaner, optimized, or simpler
                                alternatives.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5">
                                <li>Get AI-generated review suggestions</li>
                                <li>Get confidence on the changes might be.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;
