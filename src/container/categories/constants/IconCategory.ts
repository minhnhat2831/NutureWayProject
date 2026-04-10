import { babyIcon, babyMobileIcon, childcareIcon, medicationNoteIcon, milkBottleIcon, paperBoatIcon, park, pregnancyIcon } from '@/components/common/Icons'

export const getIconCategory = (name: string) => {
    switch (name) {
        case "prenatal":
            return park;
        case 'labour':
            return paperBoatIcon;
        case 'postnatal':
            return milkBottleIcon
        case 'end-of-life-care':
            return childcareIcon
        case 'lactation-consultant':
            return medicationNoteIcon
        case 'health-care':
            return pregnancyIcon
        case "prenatal2":
            return park;
        case 'nutritionist':
            return babyIcon
        case 'sibling-integration-126':
            return babyMobileIcon
        case 'baby-sleep-consultant':
            return babyIcon
        default:
            return medicationNoteIcon
    }
}

