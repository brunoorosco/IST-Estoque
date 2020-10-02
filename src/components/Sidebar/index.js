import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { useHistory } from 'react-router-dom';


const itensMenu = [{
    'title': 'Dashboard',
    'icon': AssessmentIcon,
    'path': '/app'
},
{
    'title': 'Estoque',
    'icon': AssessmentIcon,
    'path': '/produtos'
}]

const subMenu = ['All mail', 'Trash', 'Spam']


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        zIndex: 0,
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    const history = useHistory()

    return (
        <div className={classes.root}>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>

                    <List>
                        {itensMenu.map((order) => (
                            <ListItem button key={order}  onClick={() => history.push(order.path)}>
                                <ListItemIcon><order.icon /></ListItemIcon>
                                <ListItemText primary={order.title} />
                                
                            </ListItem>
                        )
                        )}
                    </List>

                    <Divider />

                    <List>
                        {subMenu.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>

        </div>
    );
}
