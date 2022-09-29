import SvgContainer, {
  SvgContainerProps,
} from '@/components/bosons/SvgContainer'

export const React = (
  svgContainerProps: Omit<SvgContainerProps, 'children'>,
) => {
  return (
    <SvgContainer {...svgContainerProps}>
      <ellipse
        cx="128"
        cy="128"
        rx="44"
        ry="116"
        transform="rotate(-45 128.01 127.977)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="116"
        ry="44"
        transform="rotate(-45 128.01 127.977)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <circle cx="128" cy="128" r="12" />
    </SvgContainer>
  )
}
