module.exports = {
  content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'font-family-body': "RedHatDisplay-Bold, sans-serif",
      },
      fontSize: {
        'text-sizes-text-regular': "16px",
      },
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
      borderRadius: {},
      colors: {
        'neutral-white': 'var(--neutral-white, #ffffff)',
        'orange-500': 'var(--orange-500, #fe6d00)',
        'color-scheme-1-text': 'var(--neutral-black, #000000)',
        'yellow-500': 'var(--yellow-500, #faaf00)',
        'neutral-950': 'var(--neutral-950, #0d0d0d)',
        'blue-700': 'var(--blue-700, #1c3e6d)',
        'neutral-50': 'var(--neutral-50, #f2f2f2)',
        'neutral-600': 'var(--neutral-600, #666666)',
        'neutral-400': 'var(--neutral-400, #999999)',
        'neutral-300': 'var(--neutral-300, #b2b2b2)',
        'green-500': 'var(--green-500, #e7f1db)',
        'blue-50': 'var(--blue-50, #e0eaf6)',
        'orange-400': 'var(--orange-400, #ff991a)',
        'blue-950': 'var(--blue-950, #071d36)',
        'grey-10': 'var(--grey-10, #f5f7fa)',
        'neutral-black': 'var(--neutral-black, #000000)',
        'secondary-800': '#00132e',
        'blue-600': 'var(--blue-600, #2a5190)',
        'grey-text': '#696566',
        'neutral-500': 'var(--neutral-500, #808080)',
        'blue-900': 'var(--blue-900, #0a2c55)',
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {
        'paragraph-max-width': '680px',
      },
      height: {},
      minHeight: {},
      maxHeight: {},
    }
  }
}
