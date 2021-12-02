import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Typography } from '@mui/material';
import { Input } from '@material-ui/core';

export default function SimpleListMenu(props) {
    const { data: { header, options, name, type }, handleSelect } = props
    const [input, setInput] = React.useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        handleSelect({ name, value: index });
        setAnchorEl(null);
    };

    const handleInput = (event) => {
        setInput(event.target.value)
        handleSelect({ name, value: event.target.value });
        setAnchorEl(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div name={name} id="name">
            <Typography>{header}</Typography>
            {type == 'select' ?
                <>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ bgcolor: 'background.paper' }}
                    >
                        <ListItem
                            button
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="selected"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                primary={options[selectedIndex]}
                            />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={index}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
                : <Input value={input} onChange={handleInput} />}

        </div>
    );
}