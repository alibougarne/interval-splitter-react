import {Interval} from "./arrayTools";

export const regroupEmptyPeriods = (periods: Interval[], divCollector: string) => {
    const equal_ranges_collector = window.document.querySelector(`.${divCollector}`) as HTMLElement;
    if (periods.length > 1) {
        const startSelector = document.querySelector(`.range-${periods[0].start}_${periods[0].end}`) as HTMLElement;
        const endSelector = document.querySelector(`.range-${periods[periods.length - 1].start}_${periods[periods.length - 1].end}`) as HTMLElement;

        const startSelectorPosition = parseInt(startSelector.getBoundingClientRect().x.toFixed(0));
        const startSelectorWidth = parseInt(startSelector.getBoundingClientRect().width.toFixed(0));

        const endSelectorPosition = parseInt(endSelector.getBoundingClientRect().x.toFixed(0));
        const endSelectorWidth = parseInt(endSelector.getBoundingClientRect().width.toFixed(0));

        if (equal_ranges_collector) {
            equal_ranges_collector.style.display = "block";
            const width = endSelectorPosition + parseInt((endSelectorWidth/2).toFixed(0)) - startSelectorPosition - parseInt((startSelectorWidth/2).toFixed(0));
            const left = ((startSelector.offsetLeft!) + parseInt(((startSelectorWidth) / 2).toFixed(0)))
            equal_ranges_collector.style.width = `${width-2}px`;
            equal_ranges_collector.style.left = `${left}px`;
        }
    } else {
        equal_ranges_collector.style.display = "none";
    }
}
