import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { addTask } from '../../actions';

const mock = {
    assignedTo: [
        'Ilya Staver',
        'Not Ilya staver',
        'Kek',
    ],
};

class AddDialogForm extends PureComponent {
    state = {
        name: '',
        description: '',
        priority: 'Major',
        assignedTo: '',
    };

    handleFormInputChange = ({ target: { value } }, type) => {
        this.setState({ [type]: value });
    };

    handleAddTask = (event) => {
        event.preventDefault();
        const {
            name, description, priority, assignedTo,
        } = this.state;
        const task = {
            name,
            description,
            priority,
            assignedTo,
        };
        this.setState({
            name: '',
            description: '',
            priority: 'Major',
            assignedTo: '',
        });
        this.props.handleClose();
        this.props.addTask(task);
    }

    renderDialogActionButtons = (onCloseButtonClick) => (
        <DialogActions>
            <Button
                onClick={onCloseButtonClick}
                color="secondary"
            >
                Cancel
            </Button>
            <Button
                color="primary"
                type="submit"
            >
                Add
            </Button>
        </DialogActions>
    );

    renderMenuItem = (item) => (
        <MenuItem value={item}>
            {item}
        </MenuItem>
    );

    render() {
        const { isOpen, handleClose, classes } = this.props;
        const {
            name, description, assignedTo, priority,
        } = this.state;
        return (
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <form onSubmit={this.handleAddTask}>
                    <DialogTitle id="form-dialog-title">Add task</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add task, please, fill next fields:
                        </DialogContentText>
                        <TextField
                            value={name}
                            autoFocus
                            margin="dense"
                            id="task-name"
                            name="taskName"
                            label="Task name"
                            type="text"
                            required
                            fullWidth
                            onChange={(event) => this.handleFormInputChange(event, 'name')}
                        />
                        <TextField
                            id="description-multiline"
                            label="Description"
                            multiline
                            rows="2"
                            name="description"
                            margin="normal"
                            fullWidth
                            required
                            value={description}
                            onChange={(event) => this.handleFormInputChange(event, 'description')}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="priority">Priority</InputLabel>
                            <Select
                                value={priority}
                                onChange={(event) => this.handleFormInputChange(event, 'priority')}
                                inputProps={{
                                    name: 'priority',
                                    id: 'priority',
                                }}
                            >
                                {this.props.priorities.map(this.renderMenuItem)}
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="assignedTo">Assigned to</InputLabel>
                            <Select
                                value={assignedTo}
                                onChange={(event) => this.handleFormInputChange(
                                    event,
                                    'assignedTo',
                                )}
                                inputProps={{
                                    name: 'assignedTo',
                                    id: 'assignedTo',
                                }}
                            >
                                {mock.assignedTo.map(this.renderMenuItem)}
                            </Select>
                        </FormControl>
                    </DialogContent>
                    {this.renderDialogActionButtons(handleClose)}
                </form>
            </Dialog>
        );
    }
}

AddDialogForm.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    priorities: PropTypes.array,
    addTask: PropTypes.func.isRequired,
};

const stylesComponent = withStyles(styles)(AddDialogForm);
export default connect(
    (state) => ({
        priorities: state.boards.boardsList
            .find((board) => board.id === state.boards.selectedBoardId)
            .priorities,
    }),
    {
        addTask,
    },
)(stylesComponent);
