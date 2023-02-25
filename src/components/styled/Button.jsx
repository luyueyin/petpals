import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, Typography, styled } from '@mui/material/styles';
import theme, { Colors } from "./Theme"


export default function StyledButton(props) {


    // const CustomButton = styled()(({ theme }) => ({
    //     borderRadius: 25,
    //     padding: '10px 50px 10px 50px',
    //     fontSize: '15px',
    //     textTransform: 'none',
    //     color: Colors.white,
    //     backgroundColor: Colors.secondary,
    //     textSpacing: '30'

    // }))


    const StyleButton = styled(Button)(({ theme }) => ({
        borderRadius: 25,
        padding: '10px 50px 10px 50px',
        fontSize: '15px',
        textTransform: 'none',
        color: Colors.white,
        backgroundColor: Colors.secondary,
        textSpacing: '30'
    }));

    return (
        <stack spacing={5}>
            <Stack spacing={9} direction="row">
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        onClick={props.onClick}
                        style={StyledButton}
                        theme={theme}
                    >
                        {props.text}
                    </Button>
                </ThemeProvider>
            </Stack>
        </stack>
    );
}