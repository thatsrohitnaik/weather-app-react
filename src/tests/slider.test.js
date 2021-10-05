import Slider from '../Components/Slider/';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

test('on load the slide to left button is disabled', () => {
    render(<Slider><div>1</div><div>2</div><div>2</div><div>2</div><div>2</div></Slider>); 
    expect(screen.getByRole('button', { name: 'Previous' })).toHaveClass('slick-disabled');
})

test('on load the slide to right button to be enabled', () => {
    render(<Slider><div>1</div><div>2</div><div>2</div><div>2</div><div>2</div></Slider>); 
    expect(screen.getByRole('button', { name: 'Next' })).not.toHaveClass('slick-disabled');
})