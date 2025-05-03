"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

// Function to generate a consistent color based on the tag name
function stringToColor(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue = hash % 360
  return `hsl(${hue}, 70%, 60%)`
}

export function AvatarTest() {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null)

  // Sample tags with different image scenarios
  const tags = [
    { name: "React", avatar: "/placeholder.svg?height=24&width=24" },
    { name: "Vue", avatar: null },
    { name: "Angular", avatar: "https://angular.io/assets/images/logos/angular/angular.png" },
    {
      name: "Svelte",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png",
    },
    { name: "Custom", avatar: avatarSrc },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setAvatarSrc(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Avatar Test</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        {tags.map((tag) => (
          <div key={tag.name} className="flex flex-col items-center gap-2">
            <Avatar className="h-12 w-12 rounded-md overflow-hidden">
              <AvatarImage
                src={tag.avatar || undefined}
                alt={tag.name}
                className="rounded-md object-cover w-full h-full"
              />
              <AvatarFallback
                className="rounded-md text-sm flex items-center justify-center"
                style={{ backgroundColor: stringToColor(tag.name) }}
              >
                {tag.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{tag.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Upload custom avatar:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} className="text-sm" />
        <p className="text-xs text-muted-foreground mt-2">
          Upload an image to test how the avatar handles different image types and sizes.
        </p>
      </div>
    </Card>
  )
}
