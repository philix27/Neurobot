import { cn } from 'lib/utils'
import { IconType } from 'react-icons'

export function Row(val: {
  title: string
  subtitle?: string
  imgUrl?: string
  className?: string
  Icon?: IconType
  onClick?: VoidFunction
}): JSX.Element {
  const { imgUrl, Icon } = val
  return (
    <div
      className={cn('flex border-t border-input bg-background px-1 py-2', val.className)}
      onClick={val.onClick}
    >
      {val.imgUrl && (
        <div className="flex items-center justify-center pr-2">
          {imgUrl && (
            <img src={imgUrl} alt={val.imgUrl} className="size-[45px] rounded-full object-cover" />
          )}
          {Icon && (
            <Icon size={24} className="size-[45px] rounded-full object-cover text-foreground" />
          )}
        </div>
      )}
      <div className="w-full text-ellipsis text-wrap px-1 py-1">
        <p className="text-md mb-0 w-full text-ellipsis text-wrap font-medium">{val.title}</p>
        {val.subtitle && <p className="text-sm text-muted">{val.subtitle}</p>}
      </div>
    </div>
  )
}
