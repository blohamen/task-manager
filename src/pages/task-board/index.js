import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LogOutIcon from '@material-ui/icons/NotInterested';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import AddColumnIcon from '@material-ui/icons/Apps';
import Typography from '@material-ui/core/Typography';
import BoardColumn from './components/board-column';
import AddDialogForm from './components/add-task-dialog';
import TaskDetailsModal from './components/task-details-modal';
import AddColumnDialog from './components/add-column-dialog';
import {sideMenuButtonsName, sideMenuButtons} from './constants';
import { addColumn } from "./actions";
import styles from "./styles";

class TaskBoard extends PureComponent {
    state = {
        isDrawerOpen: false,
        isAddDialogFormOpen: false,
        isAddColumnDialogOpen: false,
        task: null,
    };

    handleDrawerOpen = () => {
        this.setState({ isDrawerOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ isDrawerOpen: false });
    };

    onPanelButtonPress = (text) => {
        switch (text) {
            case sideMenuButtonsName.addTask: {
               return this.setState({
                    isDrawerOpen: false,
                    isAddDialogFormOpen: true,
                })
            }
          case sideMenuButtonsName.addColumn: {
            return this.setState({
                  isDrawerOpen: false,
                  isAddColumnDialogOpen: true,
            })
          }
        }
    };

    onTaskClick = (id) => {
        this.setState({
            isDrawerOpen: false,
            task: this.props.tasks.find(task => task.id === id),
        });
    };

    getIconByText = (text) => {
        switch (text) {
            case sideMenuButtonsName.addTask: return AddIcon;
            case sideMenuButtonsName.addColumn: return AddColumnIcon;
            case sideMenuButtonsName.logout: return LogOutIcon;
        }
    }

    renderTaskDetailsModal = () => (
        <TaskDetailsModal
            task={this.state.task}
            handleClose={() => this.setState({task: null})}
        />
    );

    renderSideButtons = (text) => {
        const ButtonIcon = this.getIconByText(text);
        return (
            <ListItem
                button
                key={text}
                onClick={() => this.onPanelButtonPress(text)}
            >
                <ListItemIcon>
                    <ButtonIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        );
    }

    renderAddDialogForm = () => (
        <AddDialogForm
            isOpen={this.state.isAddDialogFormOpen}
            handleClose={() => this.setState({isAddDialogFormOpen: false})}
        />
    );

    renderAddColumnDialog = () => (
        <AddColumnDialog
          handleClose={() => this.setState({isAddColumnDialogOpen: false})}
          onSubmitAddColumn={(columnName) => {
            this.setState({isAddColumnDialogOpen: false});
            this.props.addColumn(columnName);
          }}
          isOpen={this.state.isAddColumnDialogOpen}
        />
    );

    renderPanel = (panelTitle) => {
        const columnTasks = this.props.tasks.filter(task => task.priority === panelTitle);
        return (
            <BoardColumn
                tasks={columnTasks}
                title={panelTitle}
                onTaskClick={this.onTaskClick}
                key={`${Date.now()}${panelTitle}`}
            />
        );
    }

    renderContent = (classes) => (
        <main
            className={classNames(classes.contentContainer, {
                [classes.contentShift]: this.state.isDrawerOpen,
            })}
        >
            <div className={classes.drawerHeader} />
            <div className={classes.content}>
                {this.props.priorities
                    .map(columnTitle => this.renderPanel(columnTitle))
                }
            </div>
        </main>
    );

    renderDrawer = (classes, theme) => (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.state.isDrawerOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {sideMenuButtons.map(this.renderSideButtons)}
            </List>
        </Drawer>
    );

    renderAppBar = (classes, isDrawerOpen) => (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: isDrawerOpen,
            })}
        >
            <Toolbar disableGutters={!isDrawerOpen}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, isDrawerOpen && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    Tasks board
                </Typography>
            </Toolbar>
        </AppBar>
    );

    render() {
        const {classes, theme} = this.props;
        const {isDrawerOpen, task} = this.state;
        return (
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline />
                    {this.renderAppBar(classes, isDrawerOpen)}
                    {this.renderDrawer(classes, theme)}
                    {this.renderContent(classes)}
                </div>
                {this.renderAddDialogForm()}
                {this.renderAddColumnDialog()}
                {task
                    ? this.renderTaskDetailsModal()
                    : null
                }
            </Fragment>
        )
    }
}

TaskBoard.propTypes = {
    classes: PropTypes.object.isRequired,
}

const connectToState = connect(
    state => ({
       priorities: state.board.priorities,
       tasks: state.board.tasks,
    }),
  {
      addColumn
  }
);

const stylesComponent = withStyles(styles, { withTheme: true })(TaskBoard);

export default connectToState(stylesComponent);