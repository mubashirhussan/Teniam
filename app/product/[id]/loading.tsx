import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ProductLoading() {
  return (
    <div className="container max-w-6xl py-8 mobile-safe-area">
      {/* Breadcrumb skeleton */}
      <div className="mb-6">
        <div className="flex items-center gap-2 overflow-x-auto">
          <Skeleton className="h-4 w-24 flex-shrink-0" />
          <Skeleton className="h-4 w-4 rounded-full flex-shrink-0" />
          <Skeleton className="h-4 w-32 flex-shrink-0" />
          <Skeleton className="h-4 w-4 rounded-full flex-shrink-0" />
          <Skeleton className="h-4 w-40 flex-shrink-0" />
        </div>
      </div>

      {/* Action buttons skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <Skeleton className="h-9 w-36 rounded-md" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-24 rounded-md" />
          <Skeleton className="h-9 w-28 rounded-md" />
        </div>
      </div>

      {/* Product card skeleton */}
      <Card className="relative overflow-hidden p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <Skeleton className="h-24 w-24 rounded-lg" />
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>

            <Skeleton className="h-6 w-full max-w-2xl mb-2" />
            <Skeleton className="h-6 w-full max-w-xl mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-32 rounded-full" />
                </div>
              </div>

              <div>
                <Skeleton className="h-4 w-16 mb-2" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-10 w-36 rounded-md" />
              <Skeleton className="h-10 w-44 rounded-md" />
            </div>
          </div>
        </div>
      </Card>

      {/* Additional sections skeleton */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <Skeleton className="h-6 w-24 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-4/6 mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </Card>

        <Card className="p-6">
          <Skeleton className="h-6 w-28 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-4/5 mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </Card>

        <Card className="p-6">
          <Skeleton className="h-6 w-20 mb-4" />
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-4/5" />
        </Card>
      </div>
    </div>
  )
}
