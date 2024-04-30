import React from 'react'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function PostCardImage({ variant, data }) {
  return (
    <div
      className={cn(
        {
          'h-auto w-full max-w-[37.5rem] rounded-[1.25rem] xl:h-[25rem] xl:w-[37.5rem]':
            variant,
        },
        {
          'h-auto w-full max-w-[24.5rem] rounded-xl xl:h-[16.375rem] xl:w-[24.5rem]':
            !variant,
        },
      )}
    >
      <Image
        fill="true"
        src={data?.node.frontmatter?.thumbnail}
        className="rounded-[1.25rem] object-cover "
      />
    </div>
  )
}
