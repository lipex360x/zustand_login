import { ReactNode } from 'react'

export type SvgContainerProps = {
  width?: number | string
  height?: number | string
  viewBox?: string
  children: ReactNode
} & JSX.IntrinsicElements['svg']

const SvgContainer = ({
  width = '32',
  height = '32',
  viewBox = '0 0 256 256',
  children,
  ...svgProps
}: SvgContainerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={width}
      height={height}
      viewBox={viewBox}
      {...svgProps}
    >
      {children}
    </svg>
  )
}
export default SvgContainer
