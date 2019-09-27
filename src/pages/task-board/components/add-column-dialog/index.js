import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddColumnDialog({ isOpen, handleClose, onSubmitAddColumn }) {
    const [text, setText] = useState('');

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Add column</DialogTitle>
            <form onSubmit={(event) => {
                event.preventDefault();
                onSubmitAddColumn(text);
            }}
            >
                <DialogContent style={{
                    width: 400,
                }}
                >
                    <DialogContentText>
                        Please fill column name
                    </DialogContentText>
                    <TextField
                        autoFocus
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        margin="dense"
                        id="column-name"
                        label="Column name"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary">
                        Add
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

AddColumnDialog.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    onSubmitAddColumn: PropTypes.func,
};

export default AddColumnDialog;
