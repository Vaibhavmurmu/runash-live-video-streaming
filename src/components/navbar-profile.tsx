"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  User,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  Bell,
  Crown,
  Shield,
  Mail,
  Phone,
  Calendar,
  MapPin,
} from "lucide-react"
import { useAuthContext } from "@/components/auth/auth-provider"

export function NavbarProfile() {
  const { user, profile, signOut } = useAuthContext()
  const [profileDialog, setProfileDialog] = useState(false)
  const [notificationCount] = useState(3)

  const handleSignOut = async () => {
    await signOut()
  }

  if (!user || !profile) {
    return null
  }

  const userInitials =
    profile.full_name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U"

  const userRole = profile.role || "user"
  const planType = "Pro" // This would come from subscription data

  const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return <Crown className="h-3 w-3 text-yellow-500" />
      case "manager":
        return <Shield className="h-3 w-3 text-blue-500" />
      default:
        return <User className="h-3 w-3 text-gray-500" />
    }
  }

  const getRoleBadge = (role: string) => {
    const roleConfig = {
      admin: { variant: "default" as const, color: "bg-yellow-500" },
      manager: { variant: "default" as const, color: "bg-blue-500" },
      editor: { variant: "secondary" as const, color: "bg-green-500" },
      user: { variant: "outline" as const, color: "bg-gray-500" },
    }

    const config = roleConfig[role.toLowerCase() as keyof typeof roleConfig] || roleConfig.user

    return (
      <Badge variant={config.variant} className="text-xs">
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {/* Notifications */}
      <div className="relative">
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          {notificationCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {notificationCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={profile.avatar_url || "/placeholder-user.jpg"} alt={profile.full_name || "User"} />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={profile.avatar_url || "/placeholder-user.jpg"} alt={profile.full_name || "User"} />
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">{profile.full_name || "User"}</p>
                    {getRoleIcon(userRole)}
                  </div>
                  <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  <div className="flex items-center gap-2">
                    {getRoleBadge(userRole)}
                    <Badge variant="outline" className="text-xs">
                      {planType} Plan
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <Dialog open={profileDialog} onOpenChange={setProfileDialog}>
            <DialogTrigger asChild>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <User className="mr-2 h-4 w-4" />
                <span>View Profile</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Profile Information</DialogTitle>
                <DialogDescription>Your account details and information.</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      src={profile.avatar_url || "/placeholder-user.jpg"}
                      alt={profile.full_name || "User"}
                    />
                    <AvatarFallback className="text-lg">{userInitials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{profile.full_name || "User"}</h3>
                    <div className="flex items-center gap-2">
                      {getRoleBadge(userRole)}
                      <Badge variant="outline">{planType} Plan</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Member Since</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(user.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {profile.phone && (
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">{profile.phone}</p>
                      </div>
                    </div>
                  )}

                  {profile.location && (
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">{profile.location}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setProfileDialog(false)}>
                    Close
                  </Button>
                  <Button className="flex-1">Edit Profile</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleSignOut} className="text-red-600 dark:text-red-400">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
