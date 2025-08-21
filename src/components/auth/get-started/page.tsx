"use client"

import { useAuthContext } from "@/components/auth/auth-provider"
import { LoginForm } from "@/components/auth/login-form"


export default function GetStartedPage() {
  const { user, loading } = useAuthContext()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  return (
    <>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
        </div>
      
    </>
  )
        }
