"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function SignInClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  // create client using supabase-js directly
  const supabase = createClient(url, key);

  const router = useRouter();

  useEffect(() => {
    // subscribe to auth changes and redirect on sign in
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push("/dashboard");
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [supabase, router]);

  return (
    <div className="w-full">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "github"]}
        socialLayout="vertical"
      />
    </div>
  );
}
