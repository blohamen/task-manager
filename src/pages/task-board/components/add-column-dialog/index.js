import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AddColumnDialog extends React.PureComponent {
  state = {
      text: '',
  };

  render() {
      return (
          <Dialog
              open={this.props.isOpen}
              onClose={this.props.handleClose}
              aria-labelledby="form-dialog-title"
          >
              <DialogTitle id="form-dialog-title">Add column</DialogTitle>
              <form onSubmit={(event) => {
                  event.preventDefault();
                  this.props.onSubmitAddColumn(this.state.text);
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
                          value={this.state.text}
                          onChange={(event) => this.setState({ text: event.target.value })}
                          margin="dense"
                          id="column-name"
                          label="Column name"
                          type="text"
                          fullWidth
                      />
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={this.props.handleClose} color="secondary">
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
}
