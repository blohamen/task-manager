import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import TaskCard from '../task-card';
import styles from './styles';

const renderTasks = (task, onTaskClick) => (
    <TaskCard
        onCardClick={() => onTaskClick(task.id)}
        key={`${task.name}${Date.now()}`}
        name={task.name}
        assigned={task.assignedTo}
    />
);

function BoardColumn({
    title, classes, tasks, onTaskClick,
}) {
    return (
        <Paper className={classes.columnContainer} elevation={3}>
            <Typography
                variant="h6"
                color="textPrimary"
                gutterBottom
            >
                {title}
            </Typography>
            <Divider />
            <div className={classes.cardsContainer}>
                {tasks.map((task) => renderTasks(task, onTaskClick))}
            </div>
        </Paper>
    );
}

BoardColumn.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    onTaskClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(BoardColumn);
