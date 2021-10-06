import Unitselector from '../Components/Unitselector/';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


test('check upon click of unit button, handle function gets called', () => {
    
    const handleUnitChange = jest.fn()

    render(<Unitselector unit={'F'} handleUnitChange={handleUnitChange}/>); 
    const button =screen.getByRole('button',{name:'°F'});
    fireEvent.click(button,{name:'°F'});

    expect(handleUnitChange).toHaveBeenCalled()

})

