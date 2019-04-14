import React, { PureComponent } from 'react';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {signIn} from "./actions";
import styles from './styles';

class SignIn extends PureComponent {
    state = {
        email: '',
        password: '',
    };

    handleFormInputChange = ({target: {value}}, type) => {
        this.setState({[type]: value});
    };

    renderForm = (classes) => (
        <form
            className={classes.form}
            onSubmit={(event) => {
                event.preventDefault();
                this.props.signIn({
                    email: this.state.email,
                    password: this.state.password,
                })
            }}>
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                    onChange={(event) => this.handleFormInputChange(event, 'email')}
                    value={this.state.email}
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                    onChange={(event) => this.handleFormInputChange(event, 'password')}
                    value={this.state.password}
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </FormControl>
            <Button
                type='submit'
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign in
            </Button>
        </form>
    );

    render() {
        const {classes, isInProgress} = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {!isInProgress
                        ? this.renderForm(classes)
                        : <CircularProgress
                            className={classes.spinner}
                            size={30}
                            thickness={5}
                        />  }
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    isInProgress: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isInProgress: state.app.isInProgress,
});

const mapDispatchToProps = {
    signIn,
};

const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withRouter,
    connectToStore,
    withStyles(styles)
)(SignIn)