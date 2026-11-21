export interface CheatSheetEntry {
  topic: string;
  question: string;
  correctAnswer: string;
  trapToAvoid: string;
  ruleToRemember: string;
  category: string;
}

export interface QuickFormula {
  name: string;
  formula: string;
  detail: string;
  example: string;
}

export const CHEAT_SHEET_TRAPS: CheatSheetEntry[] = [
  {
    topic: 'RAID 6 vs RAID 5',
    question: 'RAID 6 ทนดิสก์เสียพร้อมกันได้กี่ลูก?',
    correctAnswer: '2 ลูก',
    trapToAvoid: 'RAID 5 ซึ่งทนได้เพียง 1 ลูก',
    ruleToRemember: 'RAID 6 ใช้ Double Parity (P+Q) จึงทนเสียได้ 2 ลูกเสมอ',
    category: 'Storage',
  },
  {
    topic: 'การคำนวณความจุ RAID 6',
    question: 'มีดิสก์ 6 ลูก ลูกละ 4 TB ใช้ RAID 6 ได้พื้นที่กี่ TB?',
    correctAnswer: '16 TB',
    trapToAvoid: '20 TB ซึ่งเป็นคำตอบของ RAID 5',
    ruleToRemember: 'สูตร RAID 6: (N - 2) × S = (6 - 2) × 4 = 16 TB (หักเทียบเท่า 2 ลูกเป็น Parity)',
    category: 'Storage',
  },
  {
    topic: 'Binary Search Worst Case',
    question: 'Worst-case Time Complexity ของ Binary Search คือเท่าใด?',
    correctAnswer: 'O(log n)',
    trapToAvoid: 'Linear Search ซึ่งเป็น O(n)',
    ruleToRemember: 'Binary Search แบ่งครึ่งทีละรอบ จึงเป็น Logarithmic O(log n)',
    category: 'Algorithms',
  },
  {
    topic: 'เงื่อนไข Binary Search',
    question: 'Binary Search ต้องมีเงื่อนไขสำคัญใดจึงจะทำงานได้?',
    correctAnswer: 'ข้อมูลต้องได้รับการเรียงลำดับแล้ว (Sorted Array)',
    trapToAvoid: 'ข้อมูลสุ่มที่ยังไม่เรียงลำดับ หรือคิดว่าต้องเป็นตัวเลขเท่านั้น',
    ruleToRemember: 'ถ้าข้อมูลไม่เรียงลำดับ จะตัดสินใจตัดช่วงครึ่งซ้าย/ขวาไม่ได้ ต้องใช้ Linear Search แทน',
    category: 'Algorithms',
  },
  {
    topic: 'DHCP DORA Flow',
    question: 'ลำดับขั้นตอน Discover / Offer / Request / ACK คือโปรโตคอลใด?',
    correctAnswer: 'DHCP (Dynamic Host Configuration Protocol)',
    trapToAvoid: 'สับสนกับ TCP Handshake (SYN / SYN-ACK / ACK)',
    ruleToRemember: 'DORA เป็นของ DHCP ใช้พอร์ต UDP 67/68 เพื่อแจกจ่าย IP อัตโนมัติ',
    category: 'Networking',
  },
  {
    topic: 'NAT vs PAT',
    question: 'กลไกที่แปลง Private IP ออกสู่อินเทอร์เน็ตโดยใช้พอร์ตจำแนกเครื่องคืออะไร?',
    correctAnswer: 'PAT (Port Address Translation) หรือ NAT Overload',
    trapToAvoid: 'Static NAT หรือคิดว่าเป็นหน้าที่ของ DHCP',
    ruleToRemember: 'หลายเครื่องแชร์ Public IP เดียวกันโดยดูที่ Transport Port Number',
    category: 'Networking',
  },
  {
    topic: 'ARP vs DNS',
    question: 'โปรโตคอลใดค้นหา MAC Address จาก IPv4 ในเครือข่ายท้องถิ่น?',
    correctAnswer: 'ARP (Address Resolution Protocol)',
    trapToAvoid: 'DNS ซึ่งแปลงชื่อโดเมนเป็น IP Address',
    ruleToRemember: 'ARP: IP -> MAC (ใน LAN) | DNS: Domain Name -> IP (ทั่วโลก)',
    category: 'Networking',
  },
  {
    topic: 'TCP Handshake vs Termination',
    question: 'การเปิดและการปิดการเชื่อมต่อ TCP ใช้กี่ขั้นตอนตามลำดับ?',
    correctAnswer: 'เปิดใช้ 3 ขั้นตอน (Three-Way Handshake) | ปิดใช้ 4 ขั้นตอน (Four-Way Termination)',
    trapToAvoid: 'จำสลับกัน หรือคิดว่าปิดใช้ 3 ขั้นตอนเท่ากัน',
    ruleToRemember: 'เปิด: SYN -> SYN-ACK -> ACK | ปิด: FIN -> ACK -> FIN -> ACK (เพราะเป็น Full-Duplex)',
    category: 'Networking',
  },
  {
    topic: 'ความปลอดภัยของข้อมูลเว็บ',
    question: 'กลไกใดใช้สำหรับการเข้ารหัสข้อมูลเนื้อหาเว็บระหว่างเครื่องกับเซิร์ฟเวอร์?',
    correctAnswer: 'TLS ผ่าน HTTPS (พอร์ต 443)',
    trapToAvoid: 'เข้าใจผิดว่า NAT หรือ TCP Handshake เป็นการเข้ารหัสข้อมูล',
    ruleToRemember: 'NAT และ TCP จัดการเรื่องที่อยู่และการส่งข้อมูล แต่การเข้ารหัสความลับต้องใช้ TLS/SSL',
    category: 'Cybersecurity',
  },
  {
    topic: 'คำเตือนเรื่องคำว่า ACK',
    question: 'คำว่า ACK ปรากฏในกระบวนการใดบ้างในข้อสอบ?',
    correctAnswer: 'ปรากฏทั้งในขั้นตอนที่ 4 ของ DHCP (DORA) และในขั้นตอนที่ 2, 3 ของ TCP Handshake',
    trapToAvoid: 'เห็นคำว่า ACK แล้วด่วนสรุปว่าเป็น TCP เสมอ',
    ruleToRemember: 'ต้องอ่านบริบทโจทย์: ถ้าถามการแจก IP คือ DHCP ACK แต่ถ้าถามเปิด/ปิดท่อส่งคือ TCP ACK',
    category: 'General',
  },
];

export const QUICK_FORMULAS: QuickFormula[] = [
  {
    name: 'พื้นที่ใช้งาน RAID 0',
    formula: 'Usable = N × S',
    detail: 'ได้ความจุเต็ม 100% แต่ทนดิสก์เสียไม่ได้แม้แต่ลูกเดียว (Fault Tolerance = 0)',
    example: 'ดิสก์ 4 ลูก ลูกละ 2 TB = 8 TB',
  },
  {
    name: 'พื้นที่ใช้งาน RAID 1',
    formula: 'Usable = 1 × S หรือ (N / 2) × S',
    detail: 'ทำสำเนาเหมือน 100% ทนดิสก์เสียได้ 1 ลูกต่อคู่ ความจุได้ 50%',
    example: 'ดิสก์ 2 ลูก ลูกละ 4 TB = 4 TB ใช้งานจริง',
  },
  {
    name: 'พื้นที่ใช้งาน RAID 5',
    formula: 'Usable = (N - 1) × S',
    detail: 'หักเทียบเท่า 1 ลูกสำหรับ Single Distributed Parity ทนดิสก์เสียได้สูงสุด 1 ลูก',
    example: 'ดิสก์ 6 ลูก ลูกละ 4 TB: (6 - 1) × 4 = 20 TB',
  },
  {
    name: 'พื้นที่ใช้งาน RAID 6',
    formula: 'Usable = (N - 2) × S',
    detail: 'หักเทียบเท่า 2 ลูกสำหรับ Dual Distributed Parity ทนดิสก์เสียพร้อมกันได้สูงสุด 2 ลูก',
    example: 'ดิสก์ 6 ลูก ลูกละ 4 TB: (6 - 2) × 4 = 16 TB',
  },
  {
    name: 'พื้นที่ใช้งาน RAID 10',
    formula: 'Usable = (N / 2) × S',
    detail: 'Stripe of Mirrors ขั้นต่ำ 4 ลูกเลขคู่ ได้ความจุ 50% เร็วและกู้คืนไวกว่า RAID 5/6',
    example: 'ดิสก์ 8 ลูก ลูกละ 2 TB: (8 / 2) × 2 = 8 TB',
  },
  {
    name: 'จำนวน Usable Hosts ใน Subnet',
    formula: 'Hosts = 2^(32 - Prefix) - 2',
    detail: 'หัก 2 แอดเดรสเสมอ คือ Network Address และ Broadcast Address',
    example: '/24: 2^(32-24) - 2 = 256 - 2 = 254 เครื่อง',
  },
  {
    name: 'จำนวนรอบเปรียบเทียบสูงสุด Binary Search',
    formula: 'Max Steps = ⌊log₂(n)⌋ + 1',
    detail: 'ลดขนาดข้อมูลลงครึ่งหนึ่งในแต่ละรอบ',
    example: 'n = 1,024 -> log₂(1024) = 10 รอบ',
  },
];
