import SvgContainer, {
  SvgContainerProps,
} from '@/components/bosons/SvgContainer'

export const ReturnCircled = (
  svgContainerProps: Omit<SvgContainerProps, 'children'>,
) => {
  return (
    <SvgContainer {...svgContainerProps}>
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M79.8 99.7h-48v-48"
      />
      <path
        d="M65.8 190.2a88 88 0 1 0 0-124.4l-34 33.9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </SvgContainer>
  )
}
