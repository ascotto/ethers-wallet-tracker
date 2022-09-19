import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

const fontFamily = [
	'"Montserrat"',
	'-apple-system',
	'BlinkMacSystemFont',
	'"Segoe UI"',
	'"Helvetica Neue"',
	'Arial',
	'sans-serif',
].join(',')

const theme = createTheme({
	typography: {},

	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontFamily: fontFamily,
					fontWeight: 400,

					// outlined variant
					'&.MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#becad9',
						},

						'&.Mui-focused fieldset': {
							borderColor: '#becad9',
						},
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					'&.wallet-card': {
						transition: 'all 1s ease-in',
						border: '2px solid transparent',

						'&.updated': {
							border: '2px solid ' + blue[400],
							transition: 'all 0.5s ease-out',
						},
					},
				},
			},
		},

		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: 'Quicksand, sans-serif',
					'&.menu-item': {
						fontWeight: 'bold',
						textTransform: 'None',
						fontSize: '1.125rem',
					},
				},
			},
		},

		MuiButton: {
			styleOverrides: {
				root: {
					'&.menu-item': {
						fontWeight: 'bold',
						textTransform: 'None',
						fontSize: '1.125rem',
						color: '#FFFFFF',
						marginLeft: '60px',
					},
				},
			},
		},
	},
})

const MainTheme: React.FC<{ children: JSX.Element }> = ({ children }) => {
	return (
		<CssBaseline>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</CssBaseline>
	)
}

export default MainTheme
