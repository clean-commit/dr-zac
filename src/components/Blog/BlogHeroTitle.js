import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'

export default function BlogHeroTitle({ data }) {
  const isVariantLarge = data?.variant === 'blog-1'
  const isVariantSmall = data?.variant === 'blog-2'

  return (
    <div className="mb-4 flex w-full flex-col justify-center  xl:flex-row xl:justify-between">
      {data?.title ? (
        <Title
          variant="article"
          children={data?.title}
          className="title-font text-center text-[2.2rem] xl:text-[3rem]"
        />
      ) : null}
      {(isVariantSmall || isVariantLarge) && data?.buttons ? (
        <Buttons buttons={data?.buttons} className={cn('hidden xl:flex')} />
      ) : null}
    </div>
  )
}
