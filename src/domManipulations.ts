import {Interval} from "./arrayTools";

export const regroupEmptyPeriods = (periods: Interval[], divCollector: string) => {
    const equal_ranges_collector = window.document.querySelector(`.${divCollector}`) as HTMLElement;
    if (periods.length > 1) {
        const startSelector = document.querySelector(`.range-${periods[0].start}_${periods[0].end}`) as HTMLElement;
        const endSelector = document.querySelector(`.range-${periods[periods.length - 1].start}_${periods[periods.length - 1].end}`) as HTMLElement;

        const startSelectorPosition = startSelector.getBoundingClientRect().x;
        const startSelectorWidth = startSelector.getBoundingClientRect().width;

        const endSelectorPosition = endSelector.getBoundingClientRect().x;
        const endSelectorWidth = endSelector.getBoundingClientRect().width;

        if (equal_ranges_collector) {
            equal_ranges_collector.style.display = "block";
            equal_ranges_collector.style.width = `${endSelectorPosition! - startSelectorPosition!}px`;
            equal_ranges_collector.style.left = `${(startSelector.offsetLeft!) + ((endSelectorWidth + startSelectorWidth) / 4)}px`;
        }
    } else {
        equal_ranges_collector.style.display = "none";
    }
}
