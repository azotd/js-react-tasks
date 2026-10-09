import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext;

    handleThemeChange = (theme) => {
        const { changeTheme } = this.context;
        changeTheme(theme);
    };

    render() {
        const { themes, currentTheme } = this.context;

        return (
            <ButtonGroup className="mb-3">
                {themes.map((theme) => (
                    <ToggleButton
                        key={theme.id}
                        id={`theme-${theme.id}`}
                        type="radio"
                        variant="outline-secondary"
                        name="theme"
                        value={theme.id}
                        checked={currentTheme.id === theme.id}
                        onChange={() => this.handleThemeChange(theme)}
                    >
                        {theme.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
  // END
}

export default ThemeSwitcher;