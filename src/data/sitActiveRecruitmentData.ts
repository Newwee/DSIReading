export interface ProgramCriteria {
  code: 'IT' | 'DSI' | 'CS';
  degreeNameTh: string;
  degreeNameEn: string;
  gpax: number;
  gpaMath: number;
  gpaEng: number;
  highlight: string;
  description: string;
}

export interface RecruitmentStep {
  step: number;
  title: string;
  timeline: string;
  description: string;
  status?: 'past' | 'current' | 'upcoming';
}

export interface SlideItem {
  id: string;
  title: string;
  filename: string;
  caption: string;
  keyPoints: string[];
}

export const SIT_PROGRAMS: ProgramCriteria[] = [
  {
    code: 'IT',
    degreeNameTh: 'วิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ',
    degreeNameEn: 'Bachelor of Science in Information Technology',
    gpax: 3.00,
    gpaMath: 2.75,
    gpaEng: 3.00,
    highlight: 'เน้นพัฒนาระบบ ระบบเครือข่าย คลาวด์ และโครงสร้างพื้นฐานดิจิทัลสำหรับองค์กร',
    description: 'ครอบคลุม Network, Cloud, Systems Architecture, Cybersecurity และ Software Development',
  },
  {
    code: 'DSI',
    degreeNameTh: 'ศิลปศาสตรบัณฑิต สาขาวิชานวัตกรรมบริการดิจิทัล',
    degreeNameEn: 'Bachelor of Arts in Digital Service Innovation',
    gpax: 2.50,
    gpaMath: 2.75,
    gpaEng: 2.50,
    highlight: 'ผสานเทคโนโลยีดิจิทัล นวัตกรรมบริการ การวิเคราะห์ข้อมูล และธุรกิจดิจิทัลยุคใหม่',
    description: 'เน้น Digital Product Management, UX/UI, Service Design, Data Analytics และ Digital Transformation',
  },
  {
    code: 'CS',
    degreeNameTh: 'วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ)',
    degreeNameEn: 'Bachelor of Science in Computer Science (English Program)',
    gpax: 3.00,
    gpaMath: 3.00,
    gpaEng: 3.00,
    highlight: 'เรียนเป็นภาษาอังกฤษ เน้นอัลกอริทึมเข้มข้น AI, Machine Learning และ Software Engineering',
    description: 'เน้นทฤษฎีคอมพิวเตอร์ขั้นสูง Data Structures, Algorithms, AI Systems และการสร้างนวัตกรรมระดับสากล',
  },
];

export const RECRUITMENT_TIMELINE: RecruitmentStep[] = [
  {
    step: 1,
    title: 'โรงเรียนแจ้งความจำนงเข้าร่วมโครงการ',
    timeline: 'วันนี้ – 30 พฤศจิกายน 2569',
    description: 'โรงเรียนในเครือข่ายส่งแบบตอบรับความจำนงเข้าร่วมโครงการโควตา Active Recruitment',
  },
  {
    step: 2,
    title: 'คณะฯ พิจารณาโรงเรียนที่มีคุณสมบัติตามเกณฑ์',
    timeline: '1 – 5 ธันวาคม 2569',
    description: 'คณะเทคโนโลยีสารสนเทศ (SIT) ตรวจสอบความพร้อมและเกณฑ์ของโรงเรียนเครือข่าย',
  },
  {
    step: 3,
    title: 'คณะฯ แจ้งผลกลับไปยังโรงเรียน',
    timeline: '7 ธันวาคม 2569',
    description: 'แจ้งผลการพิจารณาโรงเรียนเครือข่ายและขั้นตอนการเสนอชื่อนักเรียน',
  },
  {
    step: 4,
    title: 'โรงเรียนตอบรับและเสนอรายชื่อนักเรียน',
    timeline: 'ภายใน 20 ธันวาคม 2569',
    description: 'โรงเรียนเสนอชื่อนักเรียนไม่เกิน 3 คนต่อโรงเรียน รวมทุกหลักสูตร (IT, DSI, CS)',
  },
  {
    step: 5,
    title: 'คณะฯ ตรวจสอบคุณสมบัติและแจ้งรายละเอียดการทดสอบ',
    timeline: '21 – 25 ธันวาคม 2569',
    description: 'ตรวจสอบเกรด GPAX/GPA รายวิชา และแจ้งกำหนดการห้องสอบ/รูปแบบการทดสอบ',
  },
  {
    step: 6,
    title: 'นักเรียนทดสอบประเมินสมรรถนะดิจิทัล และสอบสัมภาษณ์',
    timeline: '5 – 9 มกราคม 2570',
    description: 'ทดสอบสมรรถนะด้าน Digital Technology (เกณฑ์ผ่าน >= 50%) พร้อมสัมภาษณ์กับอาจารย์ประจำหลักสูตร',
    status: 'current',
  },
  {
    step: 7,
    title: 'ประกาศผลผู้ผ่านการคัดเลือก และแจ้งขั้นตอนการสมัคร',
    timeline: 'ภายใน 12 มกราคม 2570',
    description: 'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษาต่อผ่านระบบของคณะ SIT',
  },
  {
    step: 8,
    title: 'ดำเนินการสมัครผ่านระบบรับสมัครของมหาวิทยาลัย',
    timeline: 'ภายใน 18 มกราคม 2570',
    description: 'ผู้ผ่านการคัดเลือกยืนยันสิทธิ์และกรอกข้อมูลในระบบรับสมัคร มจธ. ตามขั้นตอนสมบูรณ์',
  },
];

export const SIT_SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    title: 'สไลด์ที่ 1: เวทีชี้แจงสำหรับคุณครู โครงการ Active Recruitment SIT 2570',
    filename: '/slides/S__29098026_0.jpg',
    caption: 'การชี้แจงโครงการรับสมัครนักศึกษาแบบโควตาเครือข่ายโรงเรียน คณะเทคโนโลยีสารสนเทศ (SIT) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี วันที่ 16 พ.ย. 2569',
    keyPoints: [
      'โครงการรับสมัครโควตาเครือข่ายโรงเรียน ประจำปีการศึกษา 2570',
      'คณะเทคโนโลยีสารสนเทศ (SIT) มจธ.',
      '3 หลักสูตรหลัก: IT, CS (English), DSI',
    ],
  },
  {
    id: 'slide-2',
    title: 'สไลด์ที่ 2: เกณฑ์ผลการเรียน GPAX และ GPA รายวิชา',
    filename: '/slides/S__29098027_0.jpg',
    caption: 'ข้อกำหนดเบื้องต้น: เสนอชื่อนักเรียนได้ไม่เกิน 3 คนต่อโรงเรียน รวมทุกหลักสูตร',
    keyPoints: [
      'IT: GPAX 3.00, GPA คณิต 2.75, GPA อังกฤษ 3.00',
      'DSI: GPAX 2.50, GPA คณิต 2.75, GPA อังกฤษ 2.50',
      'CS: GPAX 3.00, GPA คณิต 3.00, GPA อังกฤษ 3.00',
    ],
  },
  {
    id: 'slide-3',
    title: 'สไลด์ที่ 3: เกณฑ์ด้านผลงาน ประสบการณ์ และศักยภาพ',
    filename: '/slides/S__29098028_0.jpg',
    caption: 'การพิจารณา 4 มิติสำคัญประกอบการคัดเลือก',
    keyPoints: [
      '01 ผลงานหรือโครงงานด้าน IT และเทคโนโลยีดิจิทัล',
      '02 กิจกรรมและการแข่งขัน ค่ายอบรมด้านนวัตกรรม',
      '03 ทักษะด้านเทคนิค การเขียนโปรแกรม พัฒนาซอฟต์แวร์ หรือวิเคราะห์ข้อมูล',
      '04 ศักยภาพการเรียนรู้ ความคิดสร้างสรรค์ และการแก้ปัญหาอย่างเป็นระบบ',
    ],
  },
  {
    id: 'slide-4',
    title: 'สไลด์ที่ 4: เสาหลักการทดสอบสมรรถนะด้านเทคโนโลยีดิจิทัล',
    filename: '/slides/S__29098029_0.jpg',
    caption: 'เกณฑ์ผ่านการประเมิน: ไม่น้อยกว่าร้อยละ 50 (>= 50%) ของคะแนนเต็ม',
    keyPoints: [
      'เสาที่ 1: Network Infrastructure, Cloud Computing, Cybersecurity & InfoSec',
      'เสาที่ 2: Programming & Algorithms, AI',
      'เสาที่ 3: Digital Literacy',
      'เสาที่ 4: Problem Solving / Logical Thinking',
    ],
  },
  {
    id: 'slide-5',
    title: 'สไลด์ที่ 5: ขั้นตอนการดำเนินโครงการ 6 ขั้นตอน',
    filename: '/slides/S__29098030_0.jpg',
    caption: 'ตั้งแต่เสนอชื่อ ตรวจสอบ ทดสอบสมรรถนะ พิจารณาผล สัมภาษณ์ จนถึงยืนยันสิทธิ์',
    keyPoints: [
      '01 แจ้งความจำนงและเสนอชื่อ (ไม่เกิน 3 คน)',
      '02 ตรวจสอบคุณสมบัติเบื้องต้น',
      '03 ทดสอบสมรรถนะดิจิทัล (Digital Technology Assessment)',
      '04 พิจารณาผลตามหลักเกณฑ์',
      '05 สอบสัมภาษณ์กับคณาจารย์ประจำหลักสูตร',
      '06 ยืนยันสิทธิ์และสมัครผ่านระบบมหาวิทยาลัย มจธ.',
    ],
  },
  {
    id: 'slide-6',
    title: 'สไลด์ที่ 6: กำหนดการดำเนินโครงการ',
    filename: '/slides/S__29098031_0.jpg',
    caption: 'วันและเวลาสำคัญที่ผู้สมัครและคุณครูต้องทราบ',
    keyPoints: [
      'แจ้งความจำนง: วันนี้ - 30 พ.ย. 2569',
      'เสนอชื่อนักเรียน: ภายใน 20 ธ.ค. 2569',
      'สอบสมรรถนะดิจิทัล & สัมภาษณ์: 5 - 9 ม.ค. 2570',
      'ประกาศผล: ภายใน 12 ม.ค. 2570',
      'สมัครระบบ มจธ.: ภายใน 18 ม.ค. 2570',
    ],
  },
  {
    id: 'slide-7',
    title: 'สไลด์ที่ 7: ข้อมูลติดต่อ SIT มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี',
    filename: '/slides/S__29098032_0.jpg',
    caption: 'ช่องทางติดต่อฝ่ายงานพัฒนานักศึกษา คณะเทคโนโลยีสารสนเทศ มจธ.',
    keyPoints: [
      'ผู้ประสานงาน: คุณรุ่งนภา คำภัยวงศ์พิทักษ์ (ฝ่ายงานพัฒนานักศึกษา)',
      'โทรศัพท์: 02-470-9882',
      'อีเมล: info@sit.kmutt.ac.th',
      'ที่อยู่: 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กทม. 10140',
      'เว็บไซต์: www.sit.kmutt.ac.th | LINE: @SIT.KMUTT | FB/IG: SIT.Family',
    ],
  },
];
