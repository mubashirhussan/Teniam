"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  fill?: boolean
  style?: React.CSSProperties
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  quality = 80,
  fill = false,
  style,
  ...props
}: OptimizedImageProps & Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "width" | "height">) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Handle placeholder image for errors
  const imageSrc = error && !src.startsWith("/placeholder") ? "/placeholder.svg" : src

  return (
    <div className={cn("relative", className)} style={{ height: fill ? "100%" : height, width: fill ? "100%" : width }}>
      {isLoading && (
        <Skeleton
          className="absolute inset-0 z-10"
          style={{ height: fill ? "100%" : height, width: fill ? "100%" : width }}
        />
      )}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300", className)}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setError(true)
        }}
        priority={priority}
        sizes={sizes}
        quality={quality}
        fill={fill}
        style={style}
        {...props}
      />
    </div>
  )
}
