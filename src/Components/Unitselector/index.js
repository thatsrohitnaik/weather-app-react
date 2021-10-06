import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TemperatureUnits as Units, getUnits } from '../../Util/temperature';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.1),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

function Unitselectore({ unit, handleUnitChange }) {
    return (<StyledToggleButtonGroup
        size="small"
        value={unit}
        exclusive
        onChange={(e) => handleUnitChange(e)}
        aria-label="Temperature"
    >
        <ToggleButtonGroup
            color="primary"
            value={unit}
            exclusive
            onChange={(e) => handleUnitChange(e)}
        >
            {Object.entries(Units).map(([key, value]) => (
                <ToggleButton value={value} key={key}>
                    {getUnits(value)}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    </StyledToggleButtonGroup>)
}

export default Unitselectore;