"use client";

import { supabase } from "@/lib/supabaseClient";
import { Button } from "../ui/button";

export function SignInWithGitHub() {
    const handleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        });

        if (error) {
            console.error("GitHub sign-in error:", error.message);
        }
    };

    return (
        <Button className="sign-in-button" onClick={handleSignIn}>
            Sign In with GitHub
        </Button>
    );
}
