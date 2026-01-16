import { dinjs } from 'dinjs';

const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
const nepaliMonths = [
  'बैशाख',
  'जेठ',
  'असार',
  'श्रावण',
  'भदौ',
  'आश्विन',
  'कार्तिक',
  'मंसिर',
  'पौष',
  'माघ',
  'फाल्गुन',
  'चैत्र',
];
const nepaliWeekDays = [
  'आइतबार',
  'सोमबार',
  'मंगलबार',
  'बुधबार',
  'बिहीबार',
  'शुक्रबार',
  'शनिबार',
];

export default function getMiti() {
  const date = new dinjs();
  const dateString = date.dateInBS;

  const [year, month, day] = dateString.split('-');

  const saal = toNepaliNumber(year);
  const mahina = nepaliMonths[parseInt(month) - 1];
  const gatey = toNepaliNumber(day);

  const dayIndex = new Date().getDay();
  const baar = nepaliWeekDays[dayIndex];

  return {
    saal: saal,
    mahina: mahina,
    gatey: gatey,
    baar: baar,
    getString() {
      return `${this.mahina} ${this.gatey}, ${this.saal}`;
    },
  };
}

function toNepaliNumber(engNumStr) {
  return engNumStr
    .split('')
    .map((char) => {
      if (char >= '0' && char <= '9') {
        return nepaliDigits[char];
      }
      return char;
    })
    .join('');
}
