import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function TaskCard({name, assigned, classes, onCardClick}) {
    return (
        <Card className={classes.taskCard} onClick={onCardClick}>
            <CardContent className={classes.cardContent}>
                <Typography color="textPrimary">
                    Task name: {name}
                </Typography>
                <Typography className={classes.assignedText} color="textSecondary">
                    Assigned to: {assigned}
                </Typography>
            </CardContent>
        </Card>
    )
}

TaskCard.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    assigned: PropTypes.string.isRequired,
    onCardClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskCard);