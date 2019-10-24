import { filterTypes } from '@infect/frontend-logic';
import { transaction } from 'mobx';

// «Dummy» filter item for the guideline filter
import guidelineFilter from './guidelineFilter.js';

/**
 * Helper/Controller for components which uses guidelines
 *
 * Mainly
 * - Do we have to «highlight» a bacterium or antibiotic
 * - get the priority order of an antibiotic
 */
export default class GuidelineController {

    constructor({
        selectedFilters,
        filterValues,
        guidelines,
    } = {}) {
        this.selectedFilters = selectedFilters;
        this.filterValues = filterValues;
        this.guidelines = guidelines;
    }

    /**
     * Removes the selected Guideline:
     * - Remove all bacteria & antibiotic filters induced by selected guideline
     * - Deselect the current diagnosis
     */
    removeSelectedGuideline() {
        const diagnosis = this.getSelectedDiagnosis();

        if (diagnosis) {
            const bacteriumNames = diagnosis.inducingBacteria
                .map(bacterium => bacterium.name);

            const antibioticNames = diagnosis.therapies
                .map(therapy => therapy.recommendedAntibiotics)
                .reduce((accumulator, value) => accumulator.concat(value), [])
                .map(recommendedAntibiotic => recommendedAntibiotic.antibiotic.name);

            // We need to do it in a transaction, so all the filters get rendered properly
            transaction(() => {
                this.filterValues
                    .getValuesForProperty(filterTypes.bacterium, 'name')
                    .filter(item => bacteriumNames.includes(item.value))
                    .forEach(bacteriumFilter => this.selectedFilters
                        .removeFilter(bacteriumFilter));
            });

            // We need to do it in a transaction, so all the filters get rendered properly
            transaction(() => {
                this.filterValues
                    .getValuesForProperty(filterTypes.antibiotic, 'name')
                    .filter(item => antibioticNames.includes(item.value))
                    .forEach(antibioticFilter => this.selectedFilters
                        .removeFilter(antibioticFilter));
            });

            // remove «only show relevant data»-guideline-filter
            this.selectedFilters.removeFilter(guidelineFilter);

            this.guidelines.selectedGuideline.selectDiagnosis();
        }
    }

    /**
     * Return the priority oder of an antibotic in selected guideline
     *
     * @param {Antibiotic} antibiotic
     * @returns {Number}
     */
    getPriorityOrderOfAntibiotic(antibiotic) {
        const diagnosis = this.getSelectedDiagnosis();
        if (!diagnosis) return 0;

        const therapyWichHasAskedAntibiotic = diagnosis.therapies
            .find(therapy => therapy.containsAntibiotic(antibiotic));
        if (!therapyWichHasAskedAntibiotic) return 0;

        return therapyWichHasAskedAntibiotic.priority.order;
    }

    /**
     * Return the current selected diagnosis from the current selected guideline
     *
     * @returns {Diagnosis}
     */
    getSelectedDiagnosis() {
        return this.guidelines &&
            this.guidelines.selectedGuideline &&
            this.guidelines.selectedGuideline.selectedDiagnosis;
    }

    /**
     * Do we have to higlight a bacterium?
     * - Bacterium is visible
     * - Bacterium is in selected guideline
     * - Bacterium is not filtered
     *
     * @param {Bacterium}
     * @returns {Boolean}
     */
    highlightBacterium(bacterium) {
        // return bacterium.visible && this.isBacteriumInSelectedGuideline(bacterium.bacterium) &&
        //     !this.isBacteriumEntityFiltered(bacterium.bacterium);
        return bacterium.visible && this.isBacteriumInSelectedGuideline(bacterium.bacterium);
    }

    /**
     * Do we have to higlight a antibiotic?
     * - Antibiotic is visible
     * - Antibiotic is in selected guideline
     * - Antibiotic is not filtered
     *
     * @param {Antibiotic}
     * @returns {Boolean}
     */
    highlightAntibiotic(antibiotic) {
        // return antibiotic.visible && this.isAntibioticInSelectedGuideline(antibiotic.antibiotic) &&
        //     !this.isAntibioticEntityFiltered(antibiotic.antibiotic);
        return antibiotic.visible && this.isAntibioticInSelectedGuideline(antibiotic.antibiotic);
    }

    /**
     * Check if a bacterium is in current selected guideline/diagnosis
     *
     * @param {Bacterium}
     * @returns {Boolean}
     */
    isBacteriumInSelectedGuideline(bacterium) {
        const diagnosis = this.getSelectedDiagnosis();
        if (!diagnosis) return false;

        return diagnosis.inducingBacteria.includes(bacterium);
    }

    /**
     * Check if an antibiotic is in current selected guideline/diagnosis/therapy
     *
     * @param {Antibiotic}
     * @returns {Boolean}
     */
    isAntibioticInSelectedGuideline(antibiotic) {
        const diagnosis = this.getSelectedDiagnosis();
        if (!diagnosis) return false;

        return diagnosis.therapies
            .filter(therapy => therapy.containsAntibiotic(antibiotic)).length > 0;
    }

    /**
     * Check if a bacterium is currently filtered / in the selectedFilters list
     *
     * @param {Bacterium}
     * @returns {Boolean}
     */
    isBacteriumEntityFiltered(bacterium) {
        return this.isGuidelineEntityFiltered({
            filterType: filterTypes.bacterium,
            filterPropertyName: 'name',
            filterPropertyValue: bacterium.name,
        });
    }

    /**
     * Check if an antibiotic is currently filtered / in the selectedFilters list
     *
     * @param {Antibiotic}
     * @returns {Boolean}
     */
    isAntibioticEntityFiltered(antibiotic) {
        return this.isGuidelineEntityFiltered({
            filterType: filterTypes.antibiotic,
            filterPropertyName: 'name',
            filterPropertyValue: antibiotic.name,
        });
    }

    /**
     * Check if an entity of type «filterType» with filterPropertyName.value = filterPropertyValue
     * is filtered/in the selectedFilters list
     *
     * @param {*} [{
     *         filterType,
     *         filterPropertyName,
     *         filterPropertyValue,
     *     }={}]
     * @param {FilterType} options.filterType
     * @param {String} options.filterPropertyName
     * @param {*} options.filterPropertyValue
     *
     * @returns {Boolean}
     */
    isGuidelineEntityFiltered({
        filterType,
        filterPropertyName,
        filterPropertyValue,
    } = {}) {
        const filter = this.filterValues
            .getValuesForProperty(filterType, filterPropertyName)
            .find(item => filterPropertyValue === item.value);

        return filter && this.selectedFilters.isSelected(filter);
    }

}
