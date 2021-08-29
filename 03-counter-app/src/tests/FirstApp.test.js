import React from 'react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import FirstApp from '../FirstApp';

describe('Tests in FirstApp component', () => {

    // NOTAS

    // test('Should return greeting message', () => {
    //     const greeting = 'Hi';
    //     // En la línea inferior estamos aplicando un destructuring para pasarle el método getByText a lo que habíamos llamado wrapper.
    //     // const wrapper = render(<FirstApp greeting={greeting}/>);

    //     const { getByText } = render(<FirstApp greeting={ greeting }/>);
    //     expect(getByText(greeting)).toBeInTheDocument();
    // });

    test('should show <FirstApp /> correctly', () => {
        const greeting = 'Hi';
        const wrapper = shallow(<FirstApp greeting={greeting}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should render the subtitle props', () => {
        const greeting = 'Hi';
        const subtitle = ':)';
        const wrapper = shallow(
            <FirstApp
                greeting={greeting}
                subtitle={subtitle}
            />
        );

        const paragraph = wrapper.find('p').text();

        expect(paragraph).toBe(subtitle);
    })
});