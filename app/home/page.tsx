"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkSessionAndUser = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.push("/");
                return;
            }

            const { data } = await supabase.auth.getUser();
            setUser(data.user);
            setLoading(false);
        };

        checkSessionAndUser();
    }, [router]);

    if (loading) {
        return null;
    }

    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Private Dashboard</h1>
            <Button onClick={() => supabase.auth.signOut()}>Logout</Button>
        </div>
    );
}
