export default function (theme) {
    return {
        taskCard: {
            width: '100%',
            height: 104,
            padding: theme.spacing.unit * 2,
            cursor: 'pointer',
            marginBottom: 10,
        },
        cardContent: {
            display: 'flex',
            height: '100%',
            boxShadow: '0 0 0 0',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        assignedText: {
            alignSelf: 'flex-end',
        },
    };
}
