import {renderWithProviders} from "../../utils/test.utils";
import {fireEvent, screen} from "@testing-library/react";
import SplitInterval from "../splitInterval/SplitInterval";

const setup = () => {
    const utils = renderWithProviders(<SplitInterval />)
    const inputStart = screen.getByLabelText(/Start:/) as HTMLInputElement;
    const inputEnd  = screen.getByLabelText('End:') as HTMLInputElement;
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
    fireEvent.change(inputStart, {target: {value: 1}});
    fireEvent.change(inputEnd, {target: {value: 2}});
    fireEvent.click(splitButton);
    let el = document.querySelector('div.breakpoints_counter')!;
    // await waitFor(() => );
    expect(el).toBeInTheDocument();
    expect(el.textContent).toEqual("Used break points: 1");
    expect(inputStart.value).toEqual("");
    expect(inputEnd.value).toEqual("");
    expect(splitButton).toBeDisabled();
})