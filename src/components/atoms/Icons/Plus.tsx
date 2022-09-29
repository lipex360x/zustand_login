import SvgContainer, {
  SvgContainerProps,
} from '@/components/bosons/SvgContainer'

export const Plus = (
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
        d="M40 128h176M128 40v176"
      />
    </SvgContainer>
  )
}
