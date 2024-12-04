import {renderWithProviders} from "../../utils/test.utils";
import {fireEvent, screen, waitFor} from "@testing-library/react";
import SplitInterval from "../splitInterval/SplitInterval";
import {wait} from "@testing-library/user-event/utils/misc/wait";


// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint


const setup = () => {
    const utils = renderWithProviders(<SplitInterval />)
    const inputStart = screen.getByLabelText(/Start:/);
    const inputEnd = screen.getByLabelText('End:');
    const splitButton = document.querySelector('.interval-split__form button')!;
    return {
        inputStart,
        inputEnd,
        splitButton,
        ...utils,
    }
}
test('It should count break points after entering values', () => {
    let {inputStart, inputEnd, splitButton} = setup();
    fireEvent.change(inputStart as Element, {target: {value: 1}});
    fireEvent.change(inputEnd as Element, {target: {value: 2}});
    fireEvent.click(splitButton);
    let el = document.querySelector('div.breakpoints_counter')!;
    // await waitFor(() => );
    expect(el).toBeInTheDocument();
    expect(el.textContent).toEqual("Used break points: 1");
})