export default function (theme) {
    return {
        columnContainer: {
            flex: 1,
            height: '100%',
            marginRight: theme.spacing.unit * 3,
            padding: theme.spacing.unit * 2,
            overflow: 'auto',
        },
        cardsContainer: {
            display: 'flex',
            flexDirection: 'column',
            paddingTop: theme.spacing.unit * 2,
        },
    };
}
