import buddha1 from '../image/buddha1.png';
import church1 from '../image/church1.png';
import masjid3 from '../image/masjid3.png';
import sikh1 from '../image/sikh1.png';
import temple1 from '../image/temple1.png';


export const religion = [
    { imageSrc: temple1, title: 'Hinduism', colour: 'hover:text-orange-600', goTo: '/temple', apiUrl: 'http://localhost:5000/temples' },
    { imageSrc: masjid3, title: 'Islam', colour: 'hover:text-green-700', goTo: '/masjidfsfs', },
    { imageSrc: buddha1, title: 'Buddhism', colour: 'hover:text-orange-400', goTo: '/buddha' },
    { imageSrc: church1, title: 'Christianity', colour: 'hover:text-blue-800', goTo: '/christianity' },
    { imageSrc: sikh1, title: 'Sikhism', colour: 'hover:text-red-700', goTo: '/sikhism' },
];
