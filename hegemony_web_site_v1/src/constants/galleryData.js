import actionsFace from '@/assets/images/common/cards/unsorted_do_not_touch/actions.jpg';
const actionsBack = null; // Missing
import businessFace from '@/assets/images/classes/capitalist/cards/business_deals.jpg';
import businessBack from '@/assets/images/classes/capitalist/cards/business_deals_back.png';
import capitalistFace from '@/assets/images/classes/capitalist/cards/capitalist_class_companies.jpg';
import capitalistBack from '@/assets/images/classes/capitalist/cards/capitalist_class_companies_back.png';
import middleFace from '@/assets/images/classes/middle/cards/middle_class_companies.jpg';
import middleBack from '@/assets/images/classes/middle/cards/middle_class_companies_back.png';
import exportsFace from '@/assets/images/common/cards/export/exports.jpg';
import exportsBack from '@/assets/images/common/cards/export/exports_back.png';
const immigrationFace = null; // Missing
const immigrationBack = null; // Missing
const agendasFace = null; // Missing
const agendasBack = null; // Missing

// Keep generic names for those without specific matches yet
import class1Face from '@/assets/images/common/cards/unsorted_do_not_touch/class_1_face.jpg';
const class1Back = null; // Missing
import class2Face from '@/assets/images/common/cards/unsorted_do_not_touch/class_2_face.jpg';
const class2Back = null; // Missing
import class3Face from '@/assets/images/common/cards/unsorted_do_not_touch/class_3_face.jpg';
const class3Back = null; // Missing
const miscFace = null; // Missing
const miscBack = null; // Missing

export const CARD_SHEETS = [
    {
        id: 1,
        name: "Actions",
        faceUrl: actionsFace,
        backUrl: actionsBack,
        grid: "10x4",
        count: 40
    },
    {
        id: 2,
        name: "Business Deals",
        faceUrl: businessFace,
        backUrl: businessBack,
        grid: "10x2",
        count: 20
    },
    {
        id: 3,
        name: "Capitalist Companies",
        faceUrl: capitalistFace,
        backUrl: capitalistBack,
        grid: "10x3",
        count: 30
    },
    {
        id: 4,
        name: "Middle Class Companies",
        faceUrl: middleFace,
        backUrl: middleBack,
        grid: "10x2",
        count: 20
    },
    {
        id: 5,
        name: "Exports",
        faceUrl: exportsFace,
        backUrl: exportsBack,
        grid: "4x4",
        count: 16
    },
    {
        id: 6,
        name: "Immigration",
        faceUrl: immigrationFace,
        backUrl: immigrationBack,
        grid: "5x5",
        count: 25
    },
    {
        id: 7,
        name: "Political Agendas",
        faceUrl: agendasFace,
        backUrl: agendasBack,
        grid: "5x2",
        count: 10
    },
    {
        id: 9,
        name: "Class Actions 1",
        faceUrl: class1Face,
        backUrl: class1Back,
        grid: "10x4",
        count: 40
    },
    {
        id: 10,
        name: "Class Actions 2",
        faceUrl: class2Face,
        backUrl: class2Back,
        grid: "10x4",
        count: 40
    },
    {
        id: 11,
        name: "Class Actions 3",
        faceUrl: class3Face,
        backUrl: class3Back,
        grid: "10x4",
        count: 40
    },
    {
        id: 12,
        name: "Misc Cards",
        faceUrl: miscFace,
        backUrl: miscBack,
        grid: "5x5",
        count: 25
    }
];
