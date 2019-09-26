export default function (theme) {
    return {
        root: {
            display: 'flex',
            flex: 1,
            height: '100vh',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.default,
        },
        titleContainer: {
            width: '49.9%',
            padding: theme.spacing.unit * 2,
        },
        spinner: {
            justifyContent: 'center',
        },
    };
}
