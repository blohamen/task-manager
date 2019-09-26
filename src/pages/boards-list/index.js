import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import { selectBoard, fetchBoards } from './actions';
import styles from './styles';

class BoardsList extends PureComponent {
    static propTypes = {
        boards: PropTypes.arrayOf(PropTypes.object).isRequired,
        classes: PropTypes.object.isRequired,
        selectBoard: PropTypes.func.isRequired,
        fetchBoards: PropTypes.func.isRequired,
        isBoardsFetching: PropTypes.bool.isRequired,
    };

    componentDidMount() {
        const { fetchBoards } = this.props;
        fetchBoards();
    }

    onBoardItemClick = (id) => {
        const { selectBoard } = this.props;
        selectBoard(id);
    };

    renderItem = (item, index) => (
        <ListItem
            button
            onClick={() => this.onBoardItemClick(item.id)}
            key={index}
        >
            <ListItemText primary={item.title} />
        </ListItem>
    );

    renderList = (classes, boards = []) => (
        <Paper className={classes.titleContainer}>
            <Typography variant="h5" component="h3">
                Select board
            </Typography>
            <List>
                {boards.map(this.renderItem)}
            </List>
        </Paper>
    );

    render() {
        const { classes, isBoardsFetching, boards } = this.props;
        return (
            <div className={classNames(classes.root, isBoardsFetching && classes.spinner)}>
                {(!isBoardsFetching && boards)
                    ? this.renderList(classes, boards)
                    : (
                        <CircularProgress
                            size={30}
                            thickness={5}
                        />
                    )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    boards: state.boards.boardsList,
    isBoardsFetching: state.boards.isFetching,
});

const connectToStore = connect(
    mapStateToProps,
    {
        selectBoard,
        fetchBoards,
    },
);

export default compose(
    withStyles(styles),
    connectToStore,
)(BoardsList);
