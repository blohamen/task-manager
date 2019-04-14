import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function TaskDetailsModal({ classes, task, handleClose }) {
    return (
        <Dialog
            open
            onClose={handleClose}
            scroll="body"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
        >
            <DialogTitle id="dialog-title">Task details</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography color="textPrimary" gutterBottom>
                    Name: {task.name}
                </Typography>

                <Typography color="textPrimary" gutterBottom>
                    Reporter: {task.reporter}
                </Typography>

                <Typography color="textPrimary" gutterBottom>
                    Assigned to: {task.assignedTo}
                </Typography>
                <Typography color="textPrimary" gutterBottom>
                    Priority: {task.priority}
                </Typography>
                <Typography color="textPrimary" gutterBottom>
                    Description:
                </Typography>
                <DialogContentText aria-describedby="dialog-description">
                    <Typography color="textSecondary">
                        {task.description}
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

TaskDetailsModal.propTypes = {
    classes: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(TaskDetailsModal);