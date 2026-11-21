import { PracticeQuestion } from '../types';

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    "id": 1,
    "source": "docx_official",
    "category": "network-storage",
    "question": "มีดิสก์ 6 ลูก ลูกละ 4 TB ใช้ RAID 6 จะเสียได้สูงสุดกี่ลูกโดยยังทนต่อความเสียหายได้?",
    "options": [
      {
        "label": "ก",
        "text": "0 ลูก"
      },
      {
        "label": "ข",
        "text": "1 ลูก"
      },
      {
        "label": "ค",
        "text": "2 ลูก"
      },
      {
        "label": "ง",
        "text": "3 ลูก"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "RAID 6 ใช้ Double Distributed Parity (คำนวณและบันทึก Parity 2 ชุด คือ P และ Q) จึงสามารถทนต่อดิสก์เสียพร้อมกันได้สูงสุด 2 ลูก",
    "keyConcept": "RAID 6 Dual Parity ทนดิสก์เสียได้ 2 ลูกเสมอ",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "source": "docx_official",
    "category": "network-storage",
    "question": "จากโจทย์ RAID 6 จำนวน 6 ลูก ลูกละ 4 TB พื้นที่ใช้งานตามสูตรเท่ากับเท่าใด?",
    "options": [
      {
        "label": "ก",
        "text": "12 TB"
      },
      {
        "label": "ข",
        "text": "16 TB"
      },
      {
        "label": "ค",
        "text": "20 TB"
      },
      {
        "label": "ง",
        "text": "24 TB"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "สูตรความจุใช้งานของ RAID 6 คือ (N - 2) × S = (6 - 2) × 4 TB = 4 × 4 = 16 TB (ส่วน 20 TB เป็นสูตรของ RAID 5)",
    "keyConcept": "สูตร RAID 6: Usable Capacity = (N - 2) × S",
    "difficulty": "medium"
  },
  {
    "id": 3,
    "source": "docx_official",
    "category": "network-storage",
    "question": "เหตุใด RAID 5 จึงทนดิสก์เสียได้หนึ่งลูก?",
    "options": [
      {
        "label": "ก",
        "text": "มีสำเนาข้อมูลครบสองชุด"
      },
      {
        "label": "ข",
        "text": "ใช้ Single Distributed Parity"
      },
      {
        "label": "ค",
        "text": "ไม่มีการกระจายข้อมูล"
      },
      {
        "label": "ง",
        "text": "ใช้ Double Parity"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "RAID 5 กระจายข้อมูล Parity แบบบล็อกเดี่ยว (Single Distributed Parity) สลับกันเก็บบนดิสก์ทุกลูก จึงสามารถคำนวณย้อนกลับเพื่อกู้คืนข้อมูลของดิสก์ที่เสียได้ 1 ลูก",
    "keyConcept": "RAID 5 ใช้ Single Distributed Parity",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "source": "docx_official",
    "category": "network-storage",
    "question": "RAID 0 มีคุณสมบัติใด?",
    "options": [
      {
        "label": "ก",
        "text": "ทนดิสก์เสียได้ 1 ลูก"
      },
      {
        "label": "ข",
        "text": "มี Mirror ทุกลูก"
      },
      {
        "label": "ค",
        "text": "ไม่มี Redundancy"
      },
      {
        "label": "ง",
        "text": "ทนดิสก์เสียได้ 2 ลูก"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "RAID 0 ทำการ Striping ข้อมูลเพียงอย่างเดียวโดยไม่มีการทำสำเนา (No Mirror) และไม่มีการคำนวณ Parity จึงไม่มี Redundancy เสีย 1 ลูกระบบจะล่มทันที",
    "keyConcept": "RAID 0 ไม่มี Redundancy ความทนทาน = 0 ลูก",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "source": "docx_official",
    "category": "network-storage",
    "question": "ข้อใดอธิบาย RAID 10 ได้ถูกต้องที่สุด?",
    "options": [
      {
        "label": "ก",
        "text": "Striping บนชุด Mirrored Pairs"
      },
      {
        "label": "ข",
        "text": "Double Parity บนดิสก์ชุดเดียว"
      },
      {
        "label": "ค",
        "text": "ไม่มีการสำรองข้อมูล"
      },
      {
        "label": "ง",
        "text": "Dedicated Parity เพียงลูกเดียว"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "RAID 10 (หรือ RAID 1+0) คือการทำ Striping (RAID 0) บนคู่ดิสก์ที่ทำ Mirroring (RAID 1) ต้องใช้ดิสก์ขั้นต่ำ 4 ลูก ความจุได้ 50%",
    "keyConcept": "RAID 10 = Stripe of Mirrors",
    "difficulty": "medium"
  },
  {
    "id": 6,
    "source": "docx_official",
    "category": "programming-algo",
    "question": "Worst-case Time Complexity ของ Binary Search บน Array ที่เรียงลำดับแล้วคืออะไร?",
    "options": [
      {
        "label": "ก",
        "text": "O(1)"
      },
      {
        "label": "ข",
        "text": "O(log n)"
      },
      {
        "label": "ค",
        "text": "O(n)"
      },
      {
        "label": "ง",
        "text": "O(n²)"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Binary Search ลดช่วงข้อมูลในการค้นหาลงครึ่งหนึ่งในแต่ละรอบการเปรียบเทียบ จึงมี Time Complexity ในกรณี Worst Case เท่ากับ O(log n)",
    "keyConcept": "Binary Search Worst Case = O(log n)",
    "difficulty": "easy"
  },
  {
    "id": 7,
    "source": "docx_official",
    "category": "programming-algo",
    "question": "ข้อใดเป็นเงื่อนไขสำคัญของ Binary Search?",
    "options": [
      {
        "label": "ก",
        "text": "ข้อมูลต้องเรียงลำดับ"
      },
      {
        "label": "ข",
        "text": "ข้อมูลต้องมีจำนวนเป็นเลขคู่"
      },
      {
        "label": "ค",
        "text": "ข้อมูลต้องเป็นข้อความเท่านั้น"
      },
      {
        "label": "ง",
        "text": "ต้องใช้ฐานข้อมูล SQL"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Binary Search ต้องอาศัยลำดับของข้อมูล (Sorted Data) เพื่อตัดสินใจตัดช่วงข้อมูลครึ่งซ้ายหรือครึ่งขวาทิ้งได้อย่างถูกต้อง หากข้อมูลไม่เรียงลำดับจะใช้ Binary Search ไม่ได้",
    "keyConcept": "Binary Search ต้องใช้กับ Sorted Data เสมอ",
    "difficulty": "easy"
  },
  {
    "id": 8,
    "source": "docx_official",
    "category": "programming-algo",
    "question": "ถ้ามีข้อมูล 1,024 รายการ ต้องแบ่งครึ่งกี่ครั้งจึงเหลือข้อมูล 1 รายการพอดี?",
    "options": [
      {
        "label": "ก",
        "text": "5"
      },
      {
        "label": "ข",
        "text": "10"
      },
      {
        "label": "ค",
        "text": "20"
      },
      {
        "label": "ง",
        "text": "100"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "เนื่องจาก 2^10 = 1,024 ดังนั้น log₂(1,024) = 10 จึงต้องแบ่งครึ่งสูงสุด 10 ครั้ง",
    "keyConcept": "2^10 = 1,024 ดังนั้น log2(1024) = 10",
    "difficulty": "medium"
  },
  {
    "id": 9,
    "source": "docx_official",
    "category": "programming-algo",
    "question": "Linear Search ในกรณี Worst Case มี Time Complexity เท่าใด?",
    "options": [
      {
        "label": "ก",
        "text": "O(1)"
      },
      {
        "label": "ข",
        "text": "O(log n)"
      },
      {
        "label": "ค",
        "text": "O(n)"
      },
      {
        "label": "ง",
        "text": "O(n log n)"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Linear Search ไล่ตรวจข้อมูลทีละตัว ในกรณีที่แย่ที่สุด (หาไม่เจอหรืออยู่ตัวสุดท้าย) จะต้องตรวจครบทั้ง n รายการ จึงมี Time Complexity เป็น O(n)",
    "keyConcept": "Linear Search Worst Case = O(n)",
    "difficulty": "easy"
  },
  {
    "id": 10,
    "source": "docx_official",
    "category": "programming-algo",
    "question": "กรณี Best Case ของ Binary Search เกิดขึ้นเมื่อใด?",
    "options": [
      {
        "label": "ก",
        "text": "ค่าที่ค้นหาอยู่ท้ายสุด"
      },
      {
        "label": "ข",
        "text": "ค่าที่ค้นหาอยู่ค่ากลางตั้งแต่ครั้งแรก"
      },
      {
        "label": "ค",
        "text": "ข้อมูลไม่มีการเรียงลำดับ"
      },
      {
        "label": "ง",
        "text": "ต้องตรวจทุกค่า"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "หากข้อมูลที่ต้องการค้นหาอยู่ตรงตำแหน่งกึ่งกลางที่อัลกอริทึมสุ่มตรวจในรอบแรกพอดี จะเปรียบเทียบเพียง 1 ครั้งและพบคำตอบทันที จึงเป็น Best Case O(1)",
    "keyConcept": "Binary Search Best Case O(1) เมื่อเจอที่ตำแหน่งกึ่งกลางทันที",
    "difficulty": "easy"
  },
  {
    "id": 11,
    "source": "docx_official",
    "category": "network-storage",
    "question": "โปรโตคอลใดใช้แจก IP Address และค่ากำหนดเครือข่ายโดยอัตโนมัติ?",
    "options": [
      {
        "label": "ก",
        "text": "ARP"
      },
      {
        "label": "ข",
        "text": "DHCP"
      },
      {
        "label": "ค",
        "text": "DNS"
      },
      {
        "label": "ง",
        "text": "TCP"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "DHCP (Dynamic Host Configuration Protocol) ทำหน้าที่แจกจ่ายหมายเลข IP, Subnet Mask, Gateway และ DNS Server ให้แก่เครื่องลูกข่ายแบบอัตโนมัติ",
    "keyConcept": "DHCP แจกพารามิเตอร์เครือข่ายอัตโนมัติ",
    "difficulty": "easy"
  },
  {
    "id": 12,
    "source": "docx_official",
    "category": "network-storage",
    "question": "ลำดับ DORA ที่ถูกต้องคือข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "Discover → Request → Offer → ACK"
      },
      {
        "label": "ข",
        "text": "Offer → Discover → ACK → Request"
      },
      {
        "label": "ค",
        "text": "Discover → Offer → Request → ACK"
      },
      {
        "label": "ง",
        "text": "Request → Discover → Offer → ACK"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "DORA ย่อมาจาก Discover (ค้นหา), Offer (ยื่นข้อเสนอ), Request (ขอใช้), Acknowledge (ยืนยัน)",
    "keyConcept": "DORA: Discover -> Offer -> Request -> Acknowledge",
    "difficulty": "easy"
  },
  {
    "id": 13,
    "source": "docx_official",
    "category": "network-storage",
    "question": "พอร์ต UDP มาตรฐานของ DHCPv4 Server และ Client คือคู่ใด?",
    "options": [
      {
        "label": "ก",
        "text": "53 และ 54"
      },
      {
        "label": "ข",
        "text": "67 และ 68"
      },
      {
        "label": "ค",
        "text": "80 และ 443"
      },
      {
        "label": "ง",
        "text": "20 และ 21"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "DHCPv4 ทำงานบน UDP พอร์ต 67 สำหรับฝั่งเซิร์ฟเวอร์ และพอร์ต 68 สำหรับฝั่งไคลเอนต์",
    "keyConcept": "DHCP: Server UDP 67, Client UDP 68",
    "difficulty": "medium"
  },
  {
    "id": 14,
    "source": "docx_official",
    "category": "network-storage",
    "question": "DHCP Lease หมายถึงอะไร?",
    "options": [
      {
        "label": "ก",
        "text": "เวลาที่ Router รีบูต"
      },
      {
        "label": "ข",
        "text": "ระยะเวลาที่ Client ได้รับสิทธิใช้ Address ที่จัดสรร"
      },
      {
        "label": "ค",
        "text": "รหัสผ่าน Wi-Fi"
      },
      {
        "label": "ง",
        "text": "ระยะเวลาที่ DNS ใช้ค้นหาโดเมน"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "DHCP Lease คือสัญญาเช่าชั่วคราวที่ระบุระยะเวลาที่ Client มีสิทธิ์ถือครองและใช้งานหมายเลข IP นั้นๆ",
    "keyConcept": "Lease คือระยะเวลาสัญญาเช่า IP",
    "difficulty": "easy"
  },
  {
    "id": 15,
    "source": "docx_official",
    "category": "network-storage",
    "question": "ข้อใดเป็น Private IPv4 Address ตาม RFC 1918?",
    "options": [
      {
        "label": "ก",
        "text": "172.20.10.5"
      },
      {
        "label": "ข",
        "text": "172.40.10.5"
      },
      {
        "label": "ค",
        "text": "192.0.2.10"
      },
      {
        "label": "ง",
        "text": "8.8.8.8"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ช่วง Private IP ของ Class B คือ 172.16.0.0 ถึง 172.31.255.255 ดังนั้น 172.20.10.5 จึงเป็น Private IP ส่วน 172.40.x.x เป็น Public IP",
    "keyConcept": "RFC 1918 Class B คือ 172.16.0.0 - 172.31.255.255",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "source": "docx_official",
    "category": "network-storage",
    "question": "กลไกใดแปล Private IP เพื่อให้เครือข่ายภายในสื่อสารกับเครือข่ายภายนอกได้?",
    "options": [
      {
        "label": "ก",
        "text": "DNS"
      },
      {
        "label": "ข",
        "text": "ARP"
      },
      {
        "label": "ค",
        "text": "NAT"
      },
      {
        "label": "ง",
        "text": "DHCP"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "NAT (Network Address Translation) ทำหน้าที่แปลงหมายเลข Private IP ให้เป็น Public IP เพื่อให้อุปกรณ์ในวงแลนออกสู่อินเทอร์เน็ตได้",
    "keyConcept": "NAT แปลง Private IP เป็น Public IP",
    "difficulty": "easy"
  },
  {
    "id": 17,
    "source": "docx_official",
    "category": "network-storage",
    "question": "หลายเครื่องแชร์ Public IP เดียวกันและแยกการเชื่อมต่อด้วย Port เรียกว่าอะไร?",
    "options": [
      {
        "label": "ก",
        "text": "Static NAT"
      },
      {
        "label": "ข",
        "text": "PAT / NAT Overload"
      },
      {
        "label": "ค",
        "text": "DHCP Relay"
      },
      {
        "label": "ง",
        "text": "Dynamic Routing"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "PAT (Port Address Translation) หรือ NAT Overload ช่วยให้อุปกรณ์จำนวนมากแชร์ Public IP เดียวกันได้โดยจำแนกแต่ละเซสชันด้วย Port Number",
    "keyConcept": "PAT แยกอุปกรณ์ด้วย Transport Port Number",
    "difficulty": "medium"
  },
  {
    "id": 18,
    "source": "docx_official",
    "category": "network-storage",
    "question": "ARP ใช้ทำหน้าที่อะไรบนเครือข่ายท้องถิ่น?",
    "options": [
      {
        "label": "ก",
        "text": "ค้นหา MAC Address จาก IPv4"
      },
      {
        "label": "ข",
        "text": "ค้นหา IPv4 จาก Domain Name"
      },
      {
        "label": "ค",
        "text": "เข้ารหัสแพ็กเก็ต"
      },
      {
        "label": "ง",
        "text": "แจก Subnet Mask"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ARP (Address Resolution Protocol) ใช้ค้นหาหมายเลข MAC Address ของอุปกรณ์ปลายทางบน LAN จากหมายเลข IPv4",
    "keyConcept": "ARP ค้นหา MAC จาก IPv4",
    "difficulty": "easy"
  },
  {
    "id": 19,
    "source": "docx_official",
    "category": "network-storage",
    "question": "ระบบใดใช้ค้นหา IP Address จาก Domain Name เช่น sit.kmutt.ac.th?",
    "options": [
      {
        "label": "ก",
        "text": "ARP"
      },
      {
        "label": "ข",
        "text": "DNS"
      },
      {
        "label": "ค",
        "text": "DHCP"
      },
      {
        "label": "ง",
        "text": "NAT"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "DNS (Domain Name System) ทำหน้าที่แปลงชื่อ Domain Name ไปเป็น IP Address",
    "keyConcept": "DNS แปลง Domain Name เป็น IP Address",
    "difficulty": "easy"
  },
  {
    "id": 20,
    "source": "docx_official",
    "category": "network-storage",
    "question": "ข้อความแรกใน TCP Three-Way Handshake มี Flag ใดเป็น 1?",
    "options": [
      {
        "label": "ก",
        "text": "ACK"
      },
      {
        "label": "ข",
        "text": "FIN"
      },
      {
        "label": "ค",
        "text": "SYN"
      },
      {
        "label": "ง",
        "text": "RST"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Client เริ่มต้นขอสร้างการเชื่อมต่อ TCP ด้วย Segment ที่เปิด Flag SYN (Synchronize)",
    "keyConcept": "ขั้นตอนที่ 1 ของ TCP Handshake คือ SYN",
    "difficulty": "easy"
  },
  {
    "id": 21,
    "source": "docx_official",
    "category": "network-storage",
    "question": "Server ตอบรับการขอเปิดการเชื่อมต่อ TCP ในขั้นตอนที่ 2 ด้วย Flag ใด?",
    "options": [
      {
        "label": "ก",
        "text": "SYN + ACK"
      },
      {
        "label": "ข",
        "text": "FIN + ACK"
      },
      {
        "label": "ค",
        "text": "RST"
      },
      {
        "label": "ง",
        "text": "ACK เท่านั้น"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Server ส่ง SYN-ACK เพื่อตอบรับ SYN ของ Client พร้อมทั้งส่งค่าเริ่มต้น Sequence Number ของตนเอง",
    "keyConcept": "ขั้นตอนที่ 2 ของ TCP Handshake คือ SYN-ACK",
    "difficulty": "easy"
  },
  {
    "id": 22,
    "source": "docx_official",
    "category": "network-storage",
    "question": "ขั้นตอนสุดท้ายของ Three-Way Handshake คืออะไร?",
    "options": [
      {
        "label": "ก",
        "text": "Server ส่ง FIN"
      },
      {
        "label": "ข",
        "text": "Client ส่ง ACK"
      },
      {
        "label": "ค",
        "text": "Client ส่ง SYN ซ้ำ"
      },
      {
        "label": "ง",
        "text": "Server ส่ง RST"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Client ส่ง ACK ตอบรับ SYN ของ Server เป็นขั้นตอนที่ 3 เพื่อให้การเชื่อมต่อเข้าสู่สถานะ ESTABLISHED",
    "keyConcept": "ขั้นตอนที่ 3 ของ TCP Handshake คือ ACK",
    "difficulty": "easy"
  },
  {
    "id": 23,
    "source": "docx_official",
    "category": "network-storage",
    "question": "Three-Way Handshake มีประโยชน์หลักอย่างไร?",
    "options": [
      {
        "label": "ก",
        "text": "แจก IP Address อัตโนมัติ"
      },
      {
        "label": "ข",
        "text": "เข้ารหัสข้อมูล Payload"
      },
      {
        "label": "ค",
        "text": "ประสานและยืนยัน Initial Sequence Number ทั้งสองฝั่ง"
      },
      {
        "label": "ง",
        "text": "แปลง Domain Name เป็น IP"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Handshake ช่วยให้ Client และ Server ประสานและยืนยันหมายเลขลำดับเริ่มต้น (Initial Sequence Number หรือ ISN) ของกันและกัน เพื่อให้การส่งข้อมูลแบบ Byte Stream มีความน่าเชื่อถือ",
    "keyConcept": "Handshake ประสานและยืนยันค่า Sequence Number",
    "difficulty": "medium"
  },
  {
    "id": 24,
    "source": "docx_official",
    "category": "network-storage",
    "question": "การปิดการเชื่อมต่อ TCP ปกติใช้กี่ขั้นตอน?",
    "options": [
      {
        "label": "ก",
        "text": "2 ขั้นตอน"
      },
      {
        "label": "ข",
        "text": "4 ขั้นตอน (FIN, ACK, FIN, ACK)"
      },
      {
        "label": "ค",
        "text": "3 ขั้นตอน"
      },
      {
        "label": "ง",
        "text": "1 ขั้นตอน"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "เนื่องจาก TCP เป็น Full-Duplex การปิดการเชื่อมต่อทั้งสองทิศทางตามปกติจึงใช้ 4 Segment: FIN -> ACK -> FIN -> ACK",
    "keyConcept": "TCP Four-Way Termination: FIN, ACK, FIN, ACK",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "source": "docx_official",
    "category": "network-storage",
    "question": "ข้อใดกล่าวถูกต้องเกี่ยวกับ NAT?",
    "options": [
      {
        "label": "ก",
        "text": "NAT ช่วยเข้ารหัส Payload ของเว็บเสมอ"
      },
      {
        "label": "ข",
        "text": "NAT แปลง IP Address ใน Header แต่ไม่ได้เข้ารหัสข้อมูล"
      },
      {
        "label": "ค",
        "text": "NAT มีหน้าที่แจก Subnet Mask เหมือน DHCP"
      },
      {
        "label": "ง",
        "text": "NAT ใช้กับ IPv6 เท่านั้น"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "NAT แปลงเฉพาะหมายเลข IP Address (และพอร์ตในกรณี PAT) ในส่วน Header เท่านั้น ไม่ได้มีการเข้ารหัสข้อมูลเนื้อหาใน Payload แต่อย่างใด",
    "keyConcept": "NAT แปลง IP Address แต่ไม่ได้เข้ารหัสข้อมูล",
    "difficulty": "medium"
  },
  {
    "id": 26,
    "source": "mock_exam",
    "category": "network-storage",
    "question": "อุปกรณ์ใดทำหน้าที่เชื่อมต่อเครือข่ายต่าง ๆ เข้าด้วยกัน และกำหนดเส้นทางแพ็กเก็ตข้อมูล?",
    "options": [
      {
        "label": "ก",
        "text": "Keyboard"
      },
      {
        "label": "ข",
        "text": "Router"
      },
      {
        "label": "ค",
        "text": "Monitor"
      },
      {
        "label": "ง",
        "text": "Printer"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Router ทำหน้าที่หาเส้นทางและส่งต่อข้อมูลระหว่างเครือข่ายต่าง Subnet หรือจาก LAN ออกสู่อินเทอร์เน็ต",
    "keyConcept": "Router เชื่อมต่อระหว่างเครือข่าย",
    "difficulty": "easy"
  },
  {
    "id": 27,
    "source": "mock_exam",
    "category": "cybersecurity-cloud",
    "question": "หากได้รับอีเมลแจ้งว่าบัญชีของคุณกำลังจะถูกระงับ และมีลิงก์ให้คลิกเข้าไปกรอกรหัสผ่านทันที ควรทำอย่างไร?",
    "options": [
      {
        "label": "ก",
        "text": "คลิกลิงก์ทันทีเพื่อไม่ให้บัญชีถูกระงับ"
      },
      {
        "label": "ข",
        "text": "ตอบกลับอีเมลและส่งรหัสผ่านให้ผู้ส่ง"
      },
      {
        "label": "ค",
        "text": "ตรวจสอบความน่าเชื่อถือของอีเมล ผู้ส่ง และเข้าเว็บทางการโดยตรง"
      },
      {
        "label": "ง",
        "text": "ส่งต่ออีเมลให้เพื่อนทุกคนช่วยตรวจสอบ"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "นี่คือพฤติกรรมหลอกลวงแบบ Phishing ซึ่งมักสร้างสถานการณ์เร่งด่วน วิธีที่ถูกต้องคือห้ามคลิกลิงก์เด็ดขาด และตรวจสอบผู้ส่งหรือเข้าเว็บทางการด้วยตนเอง",
    "keyConcept": "การรับมือภัยคุกคาม Phishing",
    "difficulty": "easy"
  },
  {
    "id": 28,
    "source": "mock_exam",
    "category": "programming-algo",
    "question": "คำสั่ง If-Else ในการเขียนโปรแกรมใช้ทำหน้าที่อะไร?",
    "options": [
      {
        "label": "ก",
        "text": "วนซ้ำคำสั่งตามจำนวนรอบ"
      },
      {
        "label": "ข",
        "text": "สร้างรูปภาพบนหน้าจอ"
      },
      {
        "label": "ค",
        "text": "ตรวจสอบเงื่อนไขและตัดสินใจเลือกเส้นทางการทำงาน"
      },
      {
        "label": "ง",
        "text": "ลบไฟล์ออกจากฮาร์ดดิสก์"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "If-Else เป็นโครงสร้างควบคุมเงื่อนไข (Conditional Statement) ใช้ให้โปรแกรมตัดสินใจเลือกทำงานตามเงื่อนไขทางตรรกะว่าเป็นจริงหรือเท็จ",
    "keyConcept": "If-Else ใช้ตรวจสอบเงื่อนไข",
    "difficulty": "easy"
  },
  {
    "id": 29,
    "source": "mock_exam",
    "category": "cybersecurity-cloud",
    "question": "ข้อใดต่อไปนี้เป็นตัวอย่างของบริการ Cloud Computing?",
    "options": [
      {
        "label": "ก",
        "text": "Google Drive"
      },
      {
        "label": "ข",
        "text": "Keyboard"
      },
      {
        "label": "ค",
        "text": "RAM"
      },
      {
        "label": "ง",
        "text": "CPU"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Google Drive เป็นบริการคลาวด์สตอเรจในรูปแบบ SaaS (Software as a Service) ที่ให้บริการจัดเก็บไฟล์ผ่านทางอินเทอร์เน็ต",
    "keyConcept": "Google Drive คือบริการ Cloud Computing",
    "difficulty": "easy"
  },
  {
    "id": 30,
    "source": "mock_exam",
    "category": "problem-solving",
    "question": "ลำดับตัวเลข 3, 6, 12, 24, ? คำตอบตัวถัดไปคือข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "30"
      },
      {
        "label": "ข",
        "text": "36"
      },
      {
        "label": "ค",
        "text": "48"
      },
      {
        "label": "ง",
        "text": "50"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "นี่คืออนุกรมเรขาคณิตที่ตัวเลขแต่ละตัวเพิ่มขึ้นเป็น 2 เท่าของตัวก่อนหน้า (คูณ 2): 3×2=6, 6×2=12, 12×2=24 ดังนั้นตัวถัดไปคือ 24×2 = 48",
    "keyConcept": "อนุกรมคูณ 2 เท่าคงที่",
    "difficulty": "easy"
  },
  {
    "id": 31,
    "source": "mock_exam",
    "category": "digital-literacy",
    "question": "ข้อใดเป็นวิธีตรวจสอบข่าวปลอม (Fake News) ที่เหมาะสมที่สุด?",
    "options": [
      {
        "label": "ก",
        "text": "เชื่อทุกข่าวที่มีคนกดแชร์จำนวนมาก"
      },
      {
        "label": "ข",
        "text": "ตรวจสอบจากหลายแหล่งข่าวที่น่าเชื่อถือ (Cross-referencing)"
      },
      {
        "label": "ค",
        "text": "ดูจากจำนวนยอดไลก์ในโพสต์"
      },
      {
        "label": "ง",
        "text": "เชื่อข้อความที่ส่งต่อกันมาในกลุ่มเพื่อน"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "การตรวจสอบข่าวสารควรเปรียบเทียบข้อมูลจากสำนักข่าวที่น่าเชื่อถือหลายแหล่ง (Cross-referencing) ตรวจสอบวันที่ และสืบหาต้นตอข้อมูลจริง",
    "keyConcept": "การตรวจสอบข่าวปลอมด้วยแหล่งข่าวที่หลากหลาย",
    "difficulty": "easy"
  },
  {
    "id": 32,
    "source": "mock_exam",
    "category": "cybersecurity-cloud",
    "question": "บริการใดจัดเป็น Platform as a Service (PaaS)?",
    "options": [
      {
        "label": "ก",
        "text": "Amazon EC2"
      },
      {
        "label": "ข",
        "text": "Vercel / Firebase Hosting"
      },
      {
        "label": "ค",
        "text": "Google Docs"
      },
      {
        "label": "ง",
        "text": "Microsoft Office 365"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Vercel และ Firebase เป็น PaaS ซึ่งเตรียม Runtime สิ่งแวดล้อมให้พร้อม นักพัฒนาเพียงแค่ส่งโค้ดโปรแกรมขึ้นไปรัน ส่วน EC2 เป็น IaaS และ Google Docs/Office 365 เป็น SaaS",
    "keyConcept": "PaaS ให้บริการสภาพแวดล้อมรันโค้ด",
    "difficulty": "medium"
  },
  {
    "id": 33,
    "source": "mock_exam",
    "category": "cybersecurity-cloud",
    "question": "คุณลักษณะใดของ Cloud Computing ที่หมายถึงการเพิ่มหรือลดทรัพยากรตามปริมาณการใช้งานได้อย่างรวดเร็วและอัตโนมัติ?",
    "options": [
      {
        "label": "ก",
        "text": "Multi-tenancy"
      },
      {
        "label": "ข",
        "text": "Rapid Elasticity"
      },
      {
        "label": "ค",
        "text": "Resource Pooling"
      },
      {
        "label": "ง",
        "text": "Broad Network Access"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Rapid Elasticity ตามนิยามของ NIST หมายถึงความยืดหยุ่นในการปรับขนาดทรัพยากร (Scale Up/Down) ได้อย่างรวดเร็วและยืดหยุ่นตามความต้องการ",
    "keyConcept": "Rapid Elasticity = ขยาย/ลดขนาดได้ยืดหยุ่น",
    "difficulty": "medium"
  },
  {
    "id": 34,
    "source": "mock_exam",
    "category": "cybersecurity-cloud",
    "question": "การถูกโจมตีด้วย DDoS (Distributed Denial of Service) ส่งผลกระทบโดยตรงต่อเสาหลักใดของ CIA Triad?",
    "options": [
      {
        "label": "ก",
        "text": "Confidentiality"
      },
      {
        "label": "ข",
        "text": "Integrity"
      },
      {
        "label": "ค",
        "text": "Availability"
      },
      {
        "label": "ง",
        "text": "Authenticity"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "DDoS ยิงทราฟฟิกมหาศาลทำให้เซิร์ฟเวอร์ทำงานหนักจนล่ม ผู้ใช้งานจริงไม่สามารถเข้าใช้บริการได้ จึงกระทบต่อ Availability (ความพร้อมใช้งาน)",
    "keyConcept": "DDoS โจมตี Availability ของระบบ",
    "difficulty": "medium"
  },
  {
    "id": 35,
    "source": "mock_exam",
    "category": "cybersecurity-cloud",
    "question": "มัลแวร์ชนิดใดที่สามารถแพร่กระจายตัวเองข้ามระบบเครือข่ายได้โดยอัตโนมัติโดยไม่ต้องอาศัยการเปิดไฟล์ของผู้ใช้?",
    "options": [
      {
        "label": "ก",
        "text": "Trojan Horse"
      },
      {
        "label": "ข",
        "text": "Computer Worm"
      },
      {
        "label": "ค",
        "text": "Macro Virus"
      },
      {
        "label": "ง",
        "text": "Adware"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Computer Worm (หนอนคอมพิวเตอร์) มีความสามารถในการจำลองตัวเองและแพร่กระจายผ่านช่องโหว่ของเครือข่ายได้เองโดยอัตโนมัติ ต่างจากไวรัสหรือโทรจันที่ต้องอาศัยผู้ใช้เปิดไฟล์",
    "keyConcept": "Worm แพร่กระจายข้ามเครือข่ายได้เองอัตโนมัติ",
    "difficulty": "medium"
  },
  {
    "id": 36,
    "source": "mock_exam",
    "category": "cybersecurity-cloud",
    "question": "ข้อใดเป็นการยืนยันตัวตนแบบ 2-Factor Authentication (2FA) ที่ถูกต้องตามหลักการ?",
    "options": [
      {
        "label": "ก",
        "text": "รหัสผ่าน + ตอบคำถามสัตว์เลี้ยงตัวโปรด"
      },
      {
        "label": "ข",
        "text": "รหัสผ่าน (Password) + รหัส OTP บนแอปมือถือ"
      },
      {
        "label": "ค",
        "text": "รหัสผ่าน 8 หลัก + รหัส PIN 4 หลัก"
      },
      {
        "label": "ง",
        "text": "ใส่รหัสผ่านซ้ำกันสองรอบ"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "2FA ที่แท้จริงต้องมาจาก 2 ปัจจัยที่ต่างหมวดกัน: รหัสผ่าน (Something you know) ร่วมกับ รหัส OTP บนมือถือ (Something you have)",
    "keyConcept": "2FA ต้องมาจาก 2 ปัจจัยที่ต่างหมวดหมู่",
    "difficulty": "medium"
  },
  {
    "id": 37,
    "source": "mock_exam",
    "category": "cybersecurity-cloud",
    "question": "การเข้ารหัสแบบกุญแจอสมมาตร (Asymmetric Encryption) ใช้กุญแจใดในการเข้ารหัสข้อมูลเพื่อส่งให้ผู้รับ?",
    "options": [
      {
        "label": "ก",
        "text": "Private Key ของผู้ส่ง"
      },
      {
        "label": "ข",
        "text": "Public Key ของผู้รับ"
      },
      {
        "label": "ค",
        "text": "Public Key ของผู้ส่ง"
      },
      {
        "label": "ง",
        "text": "Private Key ของผู้รับ"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "เมื่อต้องการส่งข้อความลับไปยังผู้รับ จะต้องนำ 'Public Key ของผู้รับ' มาเข้ารหัสข้อมูล เพื่อให้มีเพียง 'Private Key ของผู้รับ' คนเดียวเท่านั้นที่สามารถถอดรหัสได้",
    "keyConcept": "เข้ารหัสด้วย Public Key ของผู้รับ ถอดรหัสด้วย Private Key ของผู้รับ",
    "difficulty": "hard"
  },
  {
    "id": 38,
    "source": "mock_exam",
    "category": "programming-algo",
    "question": "พิจารณาโค้ด Python:\nx = 10\ny = 3\nprint(x % y)\nผลลัพธ์ที่แสดงทางหน้าจอคือเท่าใด?",
    "options": [
      {
        "label": "ก",
        "text": "3"
      },
      {
        "label": "ข",
        "text": "3.33"
      },
      {
        "label": "ค",
        "text": "1"
      },
      {
        "label": "ง",
        "text": "0"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "เครื่องหมาย % (Modulo) คือการหารเอาเศษ: 10 หารด้วย 3 ได้ 3 เหลือเศษ 1 ดังนั้นผลลัพธ์คือ 1",
    "keyConcept": "ตัวดำเนินการ Modulo (%) หารเอาเศษ",
    "difficulty": "easy"
  },
  {
    "id": 39,
    "source": "mock_exam",
    "category": "programming-algo",
    "question": "พิจารณาโค้ดวนซ้ำ:\ncount = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        count += 1\nprint(count)\nค่าของตัวแปร count หลังจบลูปคือเท่าใด?",
    "options": [
      {
        "label": "ก",
        "text": "2"
      },
      {
        "label": "ข",
        "text": "3"
      },
      {
        "label": "ค",
        "text": "5"
      },
      {
        "label": "ง",
        "text": "6"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "i วนตั้งแต่ 1, 2, 3, 4, 5 เงื่อนไข i % 2 == 0 เป็นจริงเมื่อ i เป็นเลขคู่ คือ 2 และ 4 (รวม 2 จำนวน) ดังนั้น count บวกเพิ่ม 2 ครั้ง ได้ค่า 2",
    "keyConcept": "การไล่ค่าตัวแปรใน Loop และเงื่อนไข",
    "difficulty": "medium"
  },
  {
    "id": 40,
    "source": "mock_exam",
    "category": "programming-algo",
    "question": "ข้อผิดพลาดประเภทใดที่ทำให้โปรแกรมรันได้จนจบโดยไม่แครช แต่ผลลัพธ์ที่คำนวณออกมาผิดไปจากความจริง?",
    "options": [
      {
        "label": "ก",
        "text": "Syntax Error"
      },
      {
        "label": "ข",
        "text": "Logical Error"
      },
      {
        "label": "ค",
        "text": "Runtime Error"
      },
      {
        "label": "ง",
        "text": "Compilation Error"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Logical Error เกิดจากตรรกะหรือสูตรคำนวณของโปรแกรมเมอร์ผิดพลาด โปรแกรมจึงทำงานได้จนจบแต่ได้ผลลัพธ์ผิด",
    "keyConcept": "Logical Error คือตรรกะผิด ผลลัพธ์ผิด",
    "difficulty": "easy"
  },
  {
    "id": 41,
    "source": "mock_exam",
    "category": "programming-algo",
    "question": "สัญลักษณ์รูปสี่เหลี่ยมข้าวหลามตัด (Diamond) ในผังงาน Flowchart ใช้แทนสิ่งใด?",
    "options": [
      {
        "label": "ก",
        "text": "จุดเริ่มต้นและจุดสิ้นสุด"
      },
      {
        "label": "ข",
        "text": "การคำนวณประมวลผลข้อมูล"
      },
      {
        "label": "ค",
        "text": "การตัดสินใจหรือตรวจสอบเงื่อนไข"
      },
      {
        "label": "ง",
        "text": "การรับข้อมูลเข้าทางแป้นพิมพ์"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "สี่เหลี่ยมข้าวหลามตัด (Decision) ใช้สำหรับตรวจสอบเงื่อนไขและตัดสินใจเลือกทางเดินของโปรแกรม (มีทางออกอย่างน้อย 2 ทาง)",
    "keyConcept": "สี่เหลี่ยมข้าวหลามตัด = Decision",
    "difficulty": "easy"
  },
  {
    "id": 42,
    "source": "mock_exam",
    "category": "programming-algo",
    "question": "การแตกปัญหาใหญ่เรื่อง 'การพัฒนาระบบรับสมัครนักศึกษา' ออกเป็นระบบย่อยๆ จัดเป็นเสาหลักใดของการคิดเชิงคำนวณ?",
    "options": [
      {
        "label": "ก",
        "text": "Abstraction"
      },
      {
        "label": "ข",
        "text": "Decomposition"
      },
      {
        "label": "ค",
        "text": "Pattern Recognition"
      },
      {
        "label": "ง",
        "text": "Algorithm Design"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Decomposition (การย่อยปัญหา) คือการแยกปัญหาใหญ่ที่ซับซ้อนออกเป็นปัญหาย่อยๆ ที่มีขนาดเล็กลงเพื่อให้จัดการได้ง่ายขึ้น",
    "keyConcept": "Decomposition คือการย่อยปัญหาใหญ่เป็นส่วนย่อย",
    "difficulty": "easy"
  },
  {
    "id": 43,
    "source": "mock_exam",
    "category": "programming-algo",
    "question": "การให้โมเดล AI เรียนรู้จากชุดข้อมูลรูปภาพที่มีป้ายกำกับบอกชัดเจนว่าเป็น 'สุนัข' หรือ 'แมว' จัดเป็น Machine Learning ประเภทใด?",
    "options": [
      {
        "label": "ก",
        "text": "Unsupervised Learning"
      },
      {
        "label": "ข",
        "text": "Supervised Learning"
      },
      {
        "label": "ค",
        "text": "Reinforcement Learning"
      },
      {
        "label": "ง",
        "text": "Heuristic Learning"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Supervised Learning เป็นการเรียนรู้โดยมีผู้สอน โดยข้อมูลฝึกฝนจะมีเฉลยหรือป้ายกำกับ (Labeled Data) ไว้อย่างชัดเจน",
    "keyConcept": "Supervised Learning ใช้ข้อมูลที่มีป้ายกำกับเฉลย",
    "difficulty": "easy"
  },
  {
    "id": 44,
    "source": "mock_exam",
    "category": "programming-algo",
    "question": "คำว่า 'AI Hallucination' หมายถึงปรากฏการณ์ใด?",
    "options": [
      {
        "label": "ก",
        "text": "โมเดล AI หยุดทำงานเนื่องจากหน่วยความจำ RAM เต็ม"
      },
      {
        "label": "ข",
        "text": "โมเดลภาษาตอบข้อมูลเท็จหรือแต่งเรื่องขึ้นมาเองด้วยน้ำเสียงที่มั่นใจ"
      },
      {
        "label": "ค",
        "text": "การตรวจจับใบหน้าล้มเหลวเนื่องจากแสงสว่างไม่เพียงพอ"
      },
      {
        "label": "ง",
        "text": "การที่หุ่นยนต์สามารถมองเห็นภาพ 3 มิติได้"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "AI Hallucination คืออาการที่โมเดลภาษาขนาดใหญ่ (LLM) สร้างข้อมูลที่ผิดหรือไม่เป็นจริงขึ้นมาเอง เนื่องจากทำงานบนสถิติคาดเดาคำถัดไป",
    "keyConcept": "AI Hallucination = AI สร้างข้อมูลปลอมที่ดูน่าเชื่อถือ",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "source": "mock_exam",
    "category": "digital-literacy",
    "question": "ตามกฎหมาย PDPA โรงเรียนหรือมหาวิทยาลัยที่มีอำนาจตัดสินใจเก็บและใช้ข้อมูลนักเรียน จัดอยู่ในบทบาทใด?",
    "options": [
      {
        "label": "ก",
        "text": "Data Subject"
      },
      {
        "label": "ข",
        "text": "Data Controller (ผู้ควบคุมข้อมูลส่วนบุคคล)"
      },
      {
        "label": "ค",
        "text": "Data Processor (ผู้ประมวลผลข้อมูลส่วนบุคคล)"
      },
      {
        "label": "ง",
        "text": "Data Protection Authority"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Data Controller คือบุคคลหรือนิติบุคคลที่มีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล",
    "keyConcept": "Data Controller เป็นผู้ตัดสินใจสั่งการใช้ข้อมูล",
    "difficulty": "medium"
  },
  {
    "id": 46,
    "source": "mock_exam",
    "category": "digital-literacy",
    "question": "สัญญาอนุญาต Creative Commons สัญลักษณ์ 'CC BY-NC' มีความหมายว่าอย่างไร?",
    "options": [
      {
        "label": "ก",
        "text": "นำไปใช้ได้ฟรี ไม่ต้องอ้างอิง และใช้ขายของได้"
      },
      {
        "label": "ข",
        "text": "ต้องระบุแหล่งที่มา (BY) และห้ามนำไปใช้เพื่อการค้า (NC)"
      },
      {
        "label": "ค",
        "text": "ห้ามดัดแปลงผลงานเด็ดขาด"
      },
      {
        "label": "ง",
        "text": "ใช้ได้เฉพาะคนในประเทศไทยเท่านั้น"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "BY หมายถึง Attribution (ต้องระบุแหล่งที่มา) และ NC หมายถึง Non-Commercial (ห้ามใช้เพื่อประโยชน์เชิงพาณิชย์)",
    "keyConcept": "CC BY = อ้างอิงแหล่งที่มา, NC = ห้ามใช้ทางการค้า",
    "difficulty": "medium"
  },
  {
    "id": 47,
    "source": "sit_challenge",
    "category": "sit-recruitment",
    "question": "เกณฑ์ผลการเรียนขั้นต่ำ GPAX สำหรับการสมัครโควตาหลักสูตร DSI (นวัตกรรมบริการดิจิทัล) คือเท่าใด?",
    "options": [
      {
        "label": "ก",
        "text": "2.00"
      },
      {
        "label": "ข",
        "text": "2.50"
      },
      {
        "label": "ค",
        "text": "2.75"
      },
      {
        "label": "ง",
        "text": "3.00"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "จากสไลด์ชี้แจง หลักสูตร DSI กำหนดเกณฑ์ GPAX ขั้นต่ำที่ 2.50 (GPA คณิต 2.75, GPA อังกฤษ 2.50) ส่วน IT และ CS กำหนด GPAX ที่ 3.00",
    "keyConcept": "เกณฑ์ GPAX ขั้นต่ำของ DSI = 2.50",
    "difficulty": "easy"
  },
  {
    "id": 48,
    "source": "sit_challenge",
    "category": "sit-recruitment",
    "question": "การทดสอบสมรรถนะด้านเทคโนโลยีดิจิทัล โครงการ Active Recruitment SIT มจธ. กำหนดเกณฑ์ผ่านไม่น้อยกว่าเท่าใด?",
    "options": [
      {
        "label": "ก",
        "text": "ร้อยละ 40"
      },
      {
        "label": "ข",
        "text": "ร้อยละ 50"
      },
      {
        "label": "ค",
        "text": "ร้อยละ 60"
      },
      {
        "label": "ง",
        "text": "ร้อยละ 70"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "จากสไลด์ที่ 4 ระบุเกณฑ์ผ่านการประเมินการทดสอบสมรรถนะเทคโนโลยีดิจิทัลต้อง 'ไม่น้อยกว่าร้อยละ 50 ของคะแนนเต็ม'",
    "keyConcept": "เกณฑ์ผ่านการทดสอบสมรรถนะดิจิทัล SIT >= 50%",
    "difficulty": "easy"
  },
  {
    "id": 49,
    "source": "sit_challenge",
    "category": "sit-recruitment",
    "question": "โรงเรียนในเครือข่ายสามารถเสนอชื่อนักเรียนเข้าร่วมโครงการ Active Recruitment SIT มจธ. รวมทุกหลักสูตรได้ไม่เกินกี่คน?",
    "options": [
      {
        "label": "ก",
        "text": "1 คนต่อโรงเรียน"
      },
      {
        "label": "ข",
        "text": "ไม่เกิน 3 คนต่อโรงเรียน"
      },
      {
        "label": "ค",
        "text": "5 คนต่อโรงเรียน"
      },
      {
        "label": "ง",
        "text": "ไม่จำกัดจำนวน"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ตามข้อกำหนดในสไลด์ที่ 2: โรงเรียนสามารถเสนอชื่อนักเรียนเข้าร่วมโครงการได้ไม่เกิน 3 คนต่อโรงเรียน รวมทุกหลักสูตร",
    "keyConcept": "โควตาเสนอชื่อไม่เกิน 3 คนต่อโรงเรียน",
    "difficulty": "easy"
  },
  {
    "id": 50,
    "source": "mock_exam",
    "category": "problem-solving",
    "question": "ลำดับตัวเลข 2, 4, 8, 16, ? คำตอบตัวถัดไปคือข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "24"
      },
      {
        "label": "ข",
        "text": "30"
      },
      {
        "label": "ค",
        "text": "32"
      },
      {
        "label": "ง",
        "text": "64"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ตัวเลขเพิ่มขึ้นเป็น 2 เท่าในแต่ละลำดับ (2^1=2, 2^2=4, 2^3=8, 2^4=16) ดังนั้นตัวถัดไปคือ 2^5 = 32 (หรือ 16 × 2 = 32)",
    "keyConcept": "อนุกรมเลขยกกำลังสอง",
    "difficulty": "easy"
  },
  {
    "id": 51,
    "source": "mock_exam",
    "category": "problem-solving",
    "question": "ประพจน์ P เป็นจริง (True) และ Q เป็นเท็จ (False) ข้อใดต่อไปนี้มีค่าความจริงเป็น 'จริง (True)'?",
    "options": [
      {
        "label": "ก",
        "text": "P AND Q"
      },
      {
        "label": "ข",
        "text": "P -> Q"
      },
      {
        "label": "ค",
        "text": "P XOR Q"
      },
      {
        "label": "ง",
        "text": "NOT P"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "XOR (Exclusive OR) จะเป็นจริงเมื่อค่าความจริงทั้งสองฝั่งต่างกัน (P=True, Q=False จึงต่างกัน ได้ผลลัพธ์เป็น True) ส่วน AND จะเป็นเท็จ, P->Q จะเป็นเท็จ และ NOT P เป็นเท็จ",
    "keyConcept": "P XOR Q เป็นจริงเมื่อค่าความจริงต่างกัน",
    "difficulty": "medium"
  },
  {
    "id": 52,
    "source": "mock_exam",
    "category": "network-storage",
    "question": "เมื่อเครื่องคอมพิวเตอร์ตั้งค่าให้รับ IP อัตโนมัติ แต่เปิดเครื่องแล้วได้ IP 169.254.10.20 เกิดจากสาเหตุใด?",
    "options": [
      {
        "label": "ก",
        "text": "DHCP Server ทำงานได้ปกติแจก IP สาธารณะให้"
      },
      {
        "label": "ข",
        "text": "เครื่องไม่สามารถติดต่อกับ DHCP Server ได้ จึงใช้ APIPA"
      },
      {
        "label": "ค",
        "text": "เครื่องถูกแฮกเกอร์เปลี่ยน IP เป็น Private IP"
      },
      {
        "label": "ง",
        "text": "มีการตั้งค่า Static IP ไว้อย่างถูกต้อง"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ช่วง IP 169.254.x.x คือ APIPA (Automatic Private IP Addressing) เกิดขึ้นเมื่อระบบไม่ได้รับการตอบสนองจาก DHCP Server จึงสุ่มแจกให้ตนเองเพื่อสื่อสารได้เฉพาะในวงแลน",
    "keyConcept": "169.254.x.x = APIPA เมื่อ DHCP ล้มเหลว",
    "difficulty": "medium"
  },
  {
    "id": 53,
    "source": "mock_exam",
    "category": "network-storage",
    "question": "มีดิสก์ 5 ลูก ลูกละ 2 TB ต่อแบบ RAID 5 จะมีพื้นที่จัดเก็บข้อมูลที่ใช้งานได้จริงกี่ TB?",
    "options": [
      {
        "label": "ก",
        "text": "6 TB"
      },
      {
        "label": "ข",
        "text": "8 TB"
      },
      {
        "label": "ค",
        "text": "10 TB"
      },
      {
        "label": "ง",
        "text": "4 TB"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "สูตรพื้นที่ใช้งาน RAID 5: (N - 1) × S = (5 - 1) × 2 TB = 4 × 2 = 8 TB (เสียพื้นที่ 2 TB เทียบเท่าดิสก์ 1 ลูกสำหรับ Parity)",
    "keyConcept": "RAID 5 พื้นที่ = (N - 1) × S",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "source": "mock_exam",
    "category": "network-storage",
    "question": "DNS Record ชนิดใดที่ใช้ระบุที่อยู่ของ Mail Server สำหรับรับส่งอีเมลของโดเมน?",
    "options": [
      {
        "label": "ก",
        "text": "A Record"
      },
      {
        "label": "ข",
        "text": "CNAME Record"
      },
      {
        "label": "ค",
        "text": "MX Record"
      },
      {
        "label": "ง",
        "text": "TXT Record"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "MX Record (Mail Exchange) ใช้ระบุเซิร์ฟเวอร์ที่ทำหน้าที่จัดการและรับส่งอีเมลของชื่อโดเมนนั้นๆ",
    "keyConcept": "MX Record คือ Mail Server",
    "difficulty": "easy"
  },
  {
    "id": 55,
    "source": "mock_exam",
    "category": "network-storage",
    "question": "Switch ทำงานที่ชั้น Data Link Layer และตัดสินใจส่งข้อมูลไปยังพอร์ตที่ถูกต้องโดยอ้างอิงจากตารางใด?",
    "options": [
      {
        "label": "ก",
        "text": "Routing Table"
      },
      {
        "label": "ข",
        "text": "MAC Address Table (CAM Table)"
      },
      {
        "label": "ค",
        "text": "ARP Table"
      },
      {
        "label": "ง",
        "text": "DNS Cache"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Switch บันทึกความสัมพันธ์ระหว่างพอร์ตกับหมายเลข MAC Address ของเครื่องที่ต่ออยู่ในตาราง MAC Address Table (หรือ CAM Table)",
    "keyConcept": "Switch ใช้ MAC Address Table",
    "difficulty": "medium"
  }
];

export function getQuestionById(id: number): PracticeQuestion | undefined {
  return PRACTICE_QUESTIONS.find(q => q.id === id);
}

export function getQuestionsByCategory(category: string): PracticeQuestion[] {
  return PRACTICE_QUESTIONS.filter(q => q.category === category);
}

export function getOfficialDocxQuestions(): PracticeQuestion[] {
  return PRACTICE_QUESTIONS.filter(q => q.source === 'docx_official');
}
