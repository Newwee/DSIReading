import { PracticeQuestion, CategoryId } from '../types';

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
  },
  {
    "id": 56,
    "question": "[เสาหลักที่ 1 ข้อ 1] LAN หมายถึงเครือข่ายแบบใด",
    "options": [
      {
        "label": "ก",
        "text": "เครือข่ายที่ครอบคลุมทั่วโลก"
      },
      {
        "label": "ข",
        "text": "เครือข่ายในพื้นที่จำกัด เช่น บ้านหรือโรงเรียน"
      },
      {
        "label": "ค",
        "text": "เครือข่ายระดับประเทศ"
      },
      {
        "label": "ง",
        "text": "เครือข่ายระหว่างอุปกรณ์ที่อยู่ใกล้ตัวไม่กี่เมตร"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "LAN = Local Area Network เครือข่ายในพื้นที่จำกัด (ข้อ ง คือ PAN)",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 57,
    "question": "[เสาหลักที่ 1 ข้อ 2] อุปกรณ์ใดทำหน้าที่เชื่อมต่อ \"คนละเครือข่าย\" และเลือกเส้นทางส่งข้อมูลโดยใช้ IP Address",
    "options": [
      {
        "label": "ก",
        "text": "Hub"
      },
      {
        "label": "ข",
        "text": "Switch"
      },
      {
        "label": "ค",
        "text": "Router"
      },
      {
        "label": "ง",
        "text": "Network Card"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Router ทำงานที่ชั้น Network (IP) เชื่อมหลายเครือข่ายเข้าด้วยกัน",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 58,
    "question": "[เสาหลักที่ 1 ข้อ 3] ข้อใดเป็น Private IP Address",
    "options": [
      {
        "label": "ก",
        "text": "8.8.8.8"
      },
      {
        "label": "ข",
        "text": "142.250.4.100"
      },
      {
        "label": "ค",
        "text": "203.0.113.5"
      },
      {
        "label": "ง",
        "text": "192.168.1.10"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "ช่วง 192.168.x.x เป็นช่วง Private IP ส่วนข้ออื่นเป็นที่อยู่แบบสาธารณะ",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 59,
    "question": "[เสาหลักที่ 1 ข้อ 4] หน้าที่หลักของ DNS คือข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "แจก IP ให้เครื่องอัตโนมัติ"
      },
      {
        "label": "ข",
        "text": "แปลงชื่อโดเมนเป็น IP Address"
      },
      {
        "label": "ค",
        "text": "เข้ารหัสข้อมูลบนเว็บ"
      },
      {
        "label": "ง",
        "text": "กรองทราฟฟิกที่เป็นอันตราย"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "DNS แปลงชื่อ (เช่น google.com) เป็น IP ข้อ ก คือ DHCP, ข้อ ค คือ TLS/HTTPS, ข้อ ง คือ Firewall",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 60,
    "question": "[เสาหลักที่ 1 ข้อ 5] โปรโตคอลใดใช้รับ-ส่งข้อมูลเว็บแบบ \"เข้ารหัส\"",
    "options": [
      {
        "label": "ก",
        "text": "HTTPS"
      },
      {
        "label": "ข",
        "text": "HTTP"
      },
      {
        "label": "ค",
        "text": "FTP"
      },
      {
        "label": "ง",
        "text": "SMTP"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "HTTPS คือ HTTP ที่ทำงานร่วมกับ TLS จึงเข้ารหัสข้อมูล",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 61,
    "question": "[เสาหลักที่ 1 ข้อ 6] ในเครือข่ายแบบ Star หากอุปกรณ์กลาง (Switch) เสีย จะเกิดอะไรขึ้น",
    "options": [
      {
        "label": "ก",
        "text": "ไม่มีผลใดๆ"
      },
      {
        "label": "ข",
        "text": "เฉพาะเครื่องที่อยู่ติดกันใช้งานไม่ได้"
      },
      {
        "label": "ค",
        "text": "ทั้งเครือข่ายใช้งานไม่ได้"
      },
      {
        "label": "ง",
        "text": "เครือข่ายจะเร็วขึ้น"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ทุกเครื่องต่อผ่านอุปกรณ์กลาง ถ้ากลางเสียก็ล่มทั้งหมด",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 62,
    "question": "[เสาหลักที่ 1 ข้อ 7] บริการใดเหมาะกับการสตรีมวิดีโอสด ที่ยอมให้ข้อมูลหายบ้างเล็กน้อยเพื่อแลกกับความเร็ว",
    "options": [
      {
        "label": "ก",
        "text": "TCP"
      },
      {
        "label": "ข",
        "text": "UDP"
      },
      {
        "label": "ค",
        "text": "SMTP"
      },
      {
        "label": "ง",
        "text": "DNS"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "UDP เร็ว ไม่มีการส่งซ้ำ เหมาะกับงานเรียลไทม์",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 63,
    "question": "[เสาหลักที่ 1 ข้อ 8] ข้อใดเป็นตัวอย่างของ SaaS",
    "options": [
      {
        "label": "ก",
        "text": "เช่าเครื่องเสมือน (VM) เพื่อติดตั้งระบบเอง"
      },
      {
        "label": "ข",
        "text": "เช่าแพลตฟอร์มสำหรับ deploy โค้ดโดยไม่ต้องดูแล OS"
      },
      {
        "label": "ค",
        "text": "ซื้อเซิร์ฟเวอร์จริงมาตั้งในบริษัท"
      },
      {
        "label": "ง",
        "text": "ใช้ Google Docs ผ่านเว็บเบราว์เซอร์"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "SaaS คือซอฟต์แวร์พร้อมใช้งานผ่านเว็บ ข้อ ก = IaaS, ข้อ ข = PaaS, ข้อ ค = On-premises",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 64,
    "question": "[เสาหลักที่ 1 ข้อ 9] องค์กรเก็บข้อมูลลูกค้าไว้ใน Private Cloud ของตน และใช้ Public Cloud สำหรับเว็บไซต์ทั่วไป เรียกว่า",
    "options": [
      {
        "label": "ก",
        "text": "Community Cloud"
      },
      {
        "label": "ข",
        "text": "Local Cloud"
      },
      {
        "label": "ค",
        "text": "Hybrid Cloud"
      },
      {
        "label": "ง",
        "text": "Dedicated Cloud"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "การผสม Private + Public คือ Hybrid Cloud",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 65,
    "question": "[เสาหลักที่ 1 ข้อ 10] ข้อมูลในบัญชีถูกแก้ไขโดยไม่ได้รับอนุญาต ถือว่าเสียหายต่อหลักการใดของ CIA",
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
        "text": "Authentication"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Integrity = ความถูกต้องครบถ้วนของข้อมูล",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 66,
    "question": "[เสาหลักที่ 1 ข้อ 11] มัลแวร์ที่เข้ารหัสไฟล์ของเหยื่อ แล้วเรียกเงินเพื่อแลกกับการปลดล็อก คือข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "Spyware"
      },
      {
        "label": "ข",
        "text": "Worm"
      },
      {
        "label": "ค",
        "text": "Ransomware"
      },
      {
        "label": "ง",
        "text": "Adware"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Ransomware = มัลแวร์เรียกค่าไถ่",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 67,
    "question": "[เสาหลักที่ 1 ข้อ 12] การส่งอีเมลปลอมว่ามาจากธนาคาร เพื่อหลอกให้กรอกรหัสผ่านในเว็บปลอม คือการโจมตีแบบใด",
    "options": [
      {
        "label": "ก",
        "text": "Phishing"
      },
      {
        "label": "ข",
        "text": "DDoS"
      },
      {
        "label": "ค",
        "text": "Brute Force"
      },
      {
        "label": "ง",
        "text": "SQL Injection"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Phishing คือการหลอกลวงผ่านข้อความ/เว็บปลอม",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 68,
    "question": "[เสาหลักที่ 1 ข้อ 13] การยืนยันตัวตนโดยใช้ \"รหัสผ่าน + รหัส OTP ที่ส่งเข้ามือถือ\" เรียกว่าอะไร",
    "options": [
      {
        "label": "ก",
        "text": "Single Sign-On"
      },
      {
        "label": "ข",
        "text": "Hashing"
      },
      {
        "label": "ค",
        "text": "Encryption"
      },
      {
        "label": "ง",
        "text": "Multi-Factor Authentication (MFA)"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "ใช้หลายปัจจัย (สิ่งที่รู้ + สิ่งที่มี) = MFA",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 69,
    "question": "[เสาหลักที่ 1 ข้อ 14] หลักการสำรองข้อมูลแบบ 3-2-1 หมายถึงข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "3 ครั้ง/วัน, 2 คน, 1 เครื่อง"
      },
      {
        "label": "ข",
        "text": "3 ชุดข้อมูล, 2 ชนิดสื่อ, 1 ชุดอยู่นอกสถานที่"
      },
      {
        "label": "ค",
        "text": "3 รหัสผ่าน, 2 อุปกรณ์, 1 บัญชี"
      },
      {
        "label": "ง",
        "text": "3 วัน, 2 สัปดาห์, 1 เดือน"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ข้อมูล 3 ชุด / 2 สื่อ / 1 ชุดเก็บนอกสถานที่",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 70,
    "question": "[เสาหลักที่ 1 ข้อ 15] Firewall ทำหน้าที่หลักอย่างไร",
    "options": [
      {
        "label": "ก",
        "text": "สำรองข้อมูลอัตโนมัติ"
      },
      {
        "label": "ข",
        "text": "เร่งความเร็วอินเทอร์เน็ต"
      },
      {
        "label": "ค",
        "text": "ควบคุมและกรองทราฟฟิกเข้า-ออกตามกฎที่กำหนด"
      },
      {
        "label": "ง",
        "text": "แปลงชื่อโดเมนเป็น IP"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Firewall คือด่านตรวจทราฟฟิกตามกฎความปลอดภัย",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 1 มจธ. (Active Recruitment)"
  },
  {
    "id": 71,
    "question": "[ถูก/ผิด เสาหลักที่ 1] Switch ส่งข้อมูลไปยังเครื่องปลายทางที่ถูกต้องโดยอาศัย MAC Address",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Switch เรียนรู้ MAC ของแต่ละพอร์ต จึงไม่ส่งไปทุกพอร์ตเหมือน Hub",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 1 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 72,
    "question": "[ถูก/ผิด เสาหลักที่ 1] HTTP เข้ารหัสข้อมูลที่ส่งโดยค่าเริ่มต้น",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "HTTP ไม่เข้ารหัส ต้องใช้ HTTPS",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 1 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 73,
    "question": "[ถูก/ผิด เสาหลักที่ 1] เมื่อใช้ Cloud แล้ว ผู้ใช้ไม่ต้องรับผิดชอบเรื่องความปลอดภัยใดๆ เลย",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ตามหลัก Shared Responsibility ผู้ใช้ยังต้องดูแลรหัสผ่าน สิทธิ์ และการตั้งค่า",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 1 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 74,
    "question": "[ถูก/ผิด เสาหลักที่ 1] การติดตั้ง Antivirus เพียงอย่างเดียวเพียงพอที่จะป้องกันภัยคุกคามทุกชนิด",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ต้องใช้หลายชั้น เช่น อัปเดต MFA Backup และระวัง Phishing",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 1 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 75,
    "question": "[ถูก/ผิด เสาหลักที่ 1] รหัสผ่านที่ยาว และไม่ซ้ำกันในแต่ละบริการ ปลอดภัยกว่ารหัสสั้นที่ใช้ซ้ำทุกที่",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ความยาวช่วยต้าน Brute force และไม่ซ้ำช่วยจำกัดความเสียหายหากรั่ว",
    "category": "network-storage",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 1 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 76,
    "question": "[เสาหลักที่ 2 ข้อ 1] ตัวแปร (variable) ในการเขียนโปรแกรมคืออะไร",
    "options": [
      {
        "label": "ก",
        "text": "คำสั่งที่ใช้วนซ้ำ"
      },
      {
        "label": "ข",
        "text": "ชื่อที่ใช้เก็บค่าข้อมูลในหน่วยความจำ"
      },
      {
        "label": "ค",
        "text": "ข้อผิดพลาดของโปรแกรม"
      },
      {
        "label": "ง",
        "text": "ภาษาที่คอมพิวเตอร์เข้าใจ"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ตัวแปรคือที่เก็บค่าที่มีชื่อเรียก",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 77,
    "question": "[เสาหลักที่ 2 ข้อ 2] ข้อมูล \"Hello\" ใน Python จัดเป็นชนิดข้อมูลใด",
    "options": [
      {
        "label": "ก",
        "text": "int"
      },
      {
        "label": "ข",
        "text": "float"
      },
      {
        "label": "ค",
        "text": "str"
      },
      {
        "label": "ง",
        "text": "bool"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ข้อความที่อยู่ในเครื่องหมายคำพูดคือ string (str)",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 78,
    "question": "[เสาหลักที่ 2 ข้อ 3] โค้ดต่อไปนี้แสดงผลลัพธ์อะไร x = 5 y = 3 print(x + y * 2)",
    "options": [
      {
        "label": "ก",
        "text": "11"
      },
      {
        "label": "ข",
        "text": "16"
      },
      {
        "label": "ค",
        "text": "13"
      },
      {
        "label": "ง",
        "text": "10"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "คูณก่อนบวก: 3*2 = 6, 5 + 6 = 11",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 79,
    "question": "[เสาหลักที่ 2 ข้อ 4] ผลลัพธ์ของ print(10 % 3) คือข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "3"
      },
      {
        "label": "ข",
        "text": "0"
      },
      {
        "label": "ค",
        "text": "3.33"
      },
      {
        "label": "ง",
        "text": "1"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "% คือหารเอาเศษ: 10 ÷ 3 ได้ 3 เศษ 1",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 80,
    "question": "[เสาหลักที่ 2 ข้อ 5] โค้ดต่อไปนี้แสดงผลอย่างไร for i in range(1, 4): print(i, end=\" \")",
    "options": [
      {
        "label": "ก",
        "text": "1 2 3 4"
      },
      {
        "label": "ข",
        "text": "1 2 3"
      },
      {
        "label": "ค",
        "text": "0 1 2 3"
      },
      {
        "label": "ง",
        "text": "1 2"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "range(1, 4) ได้ 1, 2, 3 (ไม่รวม 4)",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 81,
    "question": "[เสาหลักที่ 2 ข้อ 6] โครงสร้างควบคุมใดใช้ทำงานเดิมซ้ำหลายรอบ",
    "options": [
      {
        "label": "ก",
        "text": "Sequence"
      },
      {
        "label": "ข",
        "text": "Selection"
      },
      {
        "label": "ค",
        "text": "Iteration (Loop)"
      },
      {
        "label": "ง",
        "text": "Declaration"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Iteration/Loop คือการวนซ้ำ",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 82,
    "question": "[เสาหลักที่ 2 ข้อ 7] ข้อใด \"ไม่ใช่\" คุณสมบัติของอัลกอริทึมที่ดี",
    "options": [
      {
        "label": "ก",
        "text": "มีลำดับขั้นตอนชัดเจน"
      },
      {
        "label": "ข",
        "text": "ต้องจบได้ในเวลาจำกัด"
      },
      {
        "label": "ค",
        "text": "ตีความได้หลายแบบ"
      },
      {
        "label": "ง",
        "text": "ให้ผลลัพธ์ออกมา"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "อัลกอริทึมต้องไม่กำกวม (Definiteness)",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 83,
    "question": "[เสาหลักที่ 2 ข้อ 8] สัญลักษณ์สี่เหลี่ยมข้าวหลามตัดในผังงาน (Flowchart) หมายถึงอะไร",
    "options": [
      {
        "label": "ก",
        "text": "เริ่มต้น/สิ้นสุด"
      },
      {
        "label": "ข",
        "text": "การตัดสินใจ (เงื่อนไข)"
      },
      {
        "label": "ค",
        "text": "การรับข้อมูล"
      },
      {
        "label": "ง",
        "text": "การประมวลผล"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ข้าวหลามตัด = Decision",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 84,
    "question": "[เสาหลักที่ 2 ข้อ 9] Binary Search มีข้อกำหนดสำคัญข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "ข้อมูลต้องเป็นตัวเลขทั้งหมด"
      },
      {
        "label": "ข",
        "text": "ข้อมูลต้องมีจำนวนเป็นเลขคู่"
      },
      {
        "label": "ค",
        "text": "ข้อมูลต้องไม่ซ้ำกัน"
      },
      {
        "label": "ง",
        "text": "ข้อมูลต้องเรียงลำดับแล้ว"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "ต้องเรียงลำดับก่อน จึงตัดครึ่งได้",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 85,
    "question": "[เสาหลักที่ 2 ข้อ 10] ใช้ Linear Search หาค่าในลิสต์ 100 ตัว กรณีแย่ที่สุด (ไม่เจอ/เจอตัวสุดท้าย) ต้องเปรียบเทียบประมาณกี่ครั้ง",
    "options": [
      {
        "label": "ก",
        "text": "100 ครั้ง"
      },
      {
        "label": "ข",
        "text": "50 ครั้ง"
      },
      {
        "label": "ค",
        "text": "10 ครั้ง"
      },
      {
        "label": "ง",
        "text": "1 ครั้ง"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ต้องไล่ดูครบทุกตัว = n = 100",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 86,
    "question": "[เสาหลักที่ 2 ข้อ 11] Binary Search กับข้อมูลที่เรียงแล้ว 1,000 ตัว ใช้การเปรียบเทียบกรณีแย่สุดประมาณกี่ครั้ง",
    "options": [
      {
        "label": "ก",
        "text": "1,000"
      },
      {
        "label": "ข",
        "text": "500"
      },
      {
        "label": "ค",
        "text": "ประมาณ 10"
      },
      {
        "label": "ง",
        "text": "ประมาณ 3"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ตัดครึ่งทุกรอบ: 2¹⁰ = 1,024 จึงราว 10 รอบ",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 87,
    "question": "[เสาหลักที่ 2 ข้อ 12] ข้อใดอธิบายความสัมพันธ์ของ AI และ Machine Learning ได้ถูกต้อง",
    "options": [
      {
        "label": "ก",
        "text": "AI เป็นส่วนหนึ่งของ ML"
      },
      {
        "label": "ข",
        "text": "ML เป็นส่วนหนึ่งของ AI"
      },
      {
        "label": "ค",
        "text": "ทั้งสองเป็นสิ่งเดียวกันทุกประการ"
      },
      {
        "label": "ง",
        "text": "ไม่เกี่ยวข้องกัน"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ML เป็นสาขาย่อยของ AI",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 88,
    "question": "[เสาหลักที่ 2 ข้อ 13] Supervised Learning คือการเรียนรู้แบบใด",
    "options": [
      {
        "label": "ก",
        "text": "เรียนจากรางวัลและบทลงโทษ"
      },
      {
        "label": "ข",
        "text": "เรียนจากข้อมูลที่ไม่มีเฉลย"
      },
      {
        "label": "ค",
        "text": "ไม่ต้องใช้ข้อมูลเลย"
      },
      {
        "label": "ง",
        "text": "เรียนจากข้อมูลที่มีคำตอบ (label) กำกับ"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "Supervised = มีเฉลยให้เรียน ข้อ ก คือ Reinforcement, ข้อ ข คือ Unsupervised",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 89,
    "question": "[เสาหลักที่ 2 ข้อ 14] Hallucination ใน Generative AI หมายถึงข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "AI ตอบสร้างข้อมูลที่ฟังดูน่าเชื่อถือแต่ไม่เป็นความจริง"
      },
      {
        "label": "ข",
        "text": "AI ทำงานช้าลง"
      },
      {
        "label": "ค",
        "text": "AI ไม่ยอมตอบคำถาม"
      },
      {
        "label": "ง",
        "text": "AI ลบข้อมูลของผู้ใช้"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Hallucination = มโนข้อมูลที่ไม่จริง จึงต้องตรวจสอบ",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 90,
    "question": "[เสาหลักที่ 2 ข้อ 15] ระบบคัดเลือกผู้สมัครงานด้วย AI ปฏิเสธผู้หญิงมากผิดปกติ เพราะข้อมูลในอดีตส่วนใหญ่รับแต่ผู้ชาย ปัญหานี้คืออะไร",
    "options": [
      {
        "label": "ก",
        "text": "ความผิดพลาดของฮาร์ดแวร์"
      },
      {
        "label": "ข",
        "text": "การโจมตี DDoS"
      },
      {
        "label": "ค",
        "text": "อคติของข้อมูล/โมเดล (Bias)"
      },
      {
        "label": "ง",
        "text": "ปัญหาความเร็วอินเทอร์เน็ต"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ข้อมูลฝึกลำเอียงทำให้โมเดลลำเอียง",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 2 มจธ. (Active Recruitment)"
  },
  {
    "id": 91,
    "question": "[ถูก/ผิด เสาหลักที่ 2] Python เป็นภาษาที่ใช้ Interpreter แปลและรันทีละบรรทัดเป็นหลัก",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "โดยทั่วไป Python ทำงานแบบ interpreted",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 2 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 92,
    "question": "[ถูก/ผิด เสาหลักที่ 2] ใน Python ลิสต์ตัวแรกมีตำแหน่ง (index) เป็น 1",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "index เริ่มที่ 0",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 2 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 93,
    "question": "[ถูก/ผิด เสาหลักที่ 2] ผลลัพธ์จาก AI ถูกต้องเสมอ จึงไม่จำเป็นต้องตรวจสอบ",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "AI ผิดพลาดและมโนข้อมูลได้ ต้องตรวจสอบ",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 2 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 94,
    "question": "[ถูก/ผิด เสาหลักที่ 2] อัลกอริทึมกับโปรแกรมคือสิ่งเดียวกัน",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "อัลกอริทึมคือ \"ขั้นตอนวิธี\" ส่วนโปรแกรมคือการเขียนอัลกอริทึมเป็นคำสั่งในภาษาหนึ่ง",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 2 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 95,
    "question": "[ถูก/ผิด เสาหลักที่ 2] Bubble Sort ทำงานโดยเปรียบเทียบและสลับข้อมูลที่อยู่ติดกัน",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "นี่คือหลักการของ Bubble Sort",
    "category": "programming-algo",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 2 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 96,
    "question": "[เสาหลักที่ 3 ข้อ 1] Digital Literacy หมายถึงข้อใดได้ดีที่สุด",
    "options": [
      {
        "label": "ก",
        "text": "ความสามารถในการซ่อมคอมพิวเตอร์"
      },
      {
        "label": "ข",
        "text": "การมีอุปกรณ์ดิจิทัลหลายชิ้น"
      },
      {
        "label": "ค",
        "text": "ความสามารถในการใช้ เข้าใจ ประเมิน และสร้างข้อมูล/เครื่องมือดิจิทัลอย่างปลอดภัยและรับผิดชอบ"
      },
      {
        "label": "ง",
        "text": "การเล่นโซเชียลมีเดียได้เก่ง"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Digital Literacy ครอบคลุมทั้งการใช้ ประเมิน สร้าง และความรับผิดชอบ",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 97,
    "question": "[เสาหลักที่ 3 ข้อ 2] ข้อใดเป็น Hardware",
    "options": [
      {
        "label": "ก",
        "text": "RAM"
      },
      {
        "label": "ข",
        "text": "Windows"
      },
      {
        "label": "ค",
        "text": "Google Chrome"
      },
      {
        "label": "ง",
        "text": "Microsoft Word"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "RAM เป็นอุปกรณ์ที่จับต้องได้ ที่เหลือเป็นซอฟต์แวร์",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 98,
    "question": "[เสาหลักที่ 3 ข้อ 3] ข้อใดเป็นระบบปฏิบัติการ (Operating System)",
    "options": [
      {
        "label": "ก",
        "text": "Google Chrome"
      },
      {
        "label": "ข",
        "text": "Microsoft Excel"
      },
      {
        "label": "ค",
        "text": "Adobe Photoshop"
      },
      {
        "label": "ง",
        "text": "Android"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "Android เป็น OS ของมือถือ",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 99,
    "question": "[เสาหลักที่ 3 ข้อ 4] 1 ไบต์ (byte) เท่ากับกี่บิต (bit)",
    "options": [
      {
        "label": "ก",
        "text": "4"
      },
      {
        "label": "ข",
        "text": "8"
      },
      {
        "label": "ค",
        "text": "16"
      },
      {
        "label": "ง",
        "text": "1,024"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "1 byte = 8 bits",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 100,
    "question": "[เสาหลักที่ 3 ข้อ 5] เลขฐานสอง 1010 มีค่าเท่ากับเลขฐานสิบข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "5"
      },
      {
        "label": "ข",
        "text": "8"
      },
      {
        "label": "ค",
        "text": "10"
      },
      {
        "label": "ง",
        "text": "12"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "1×8 + 0×4 + 1×2 + 0×1 = 10",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 101,
    "question": "[เสาหลักที่ 3 ข้อ 6] ข้อใดเรียงหน่วยความจุข้อมูลจาก \"เล็กไปใหญ่\" ถูกต้อง",
    "options": [
      {
        "label": "ก",
        "text": "GB, MB, KB, TB"
      },
      {
        "label": "ข",
        "text": "KB, MB, GB, TB"
      },
      {
        "label": "ค",
        "text": "MB, KB, TB, GB"
      },
      {
        "label": "ง",
        "text": "TB, GB, MB, KB"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "KB < MB < GB < TB",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 102,
    "question": "[เสาหลักที่ 3 ข้อ 7] ใน URL https://www.school.ac.th/news ส่วน \"www.school.ac.th\" คืออะไร",
    "options": [
      {
        "label": "ก",
        "text": "โดเมนเนม"
      },
      {
        "label": "ข",
        "text": "โปรโตคอล"
      },
      {
        "label": "ค",
        "text": "พาธ"
      },
      {
        "label": "ง",
        "text": "พอร์ต"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ส่วนนี้คือชื่อโดเมนของเว็บไซต์",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 103,
    "question": "[เสาหลักที่ 3 ข้อ 8] ต้องการค้นหาวลี \"digital footprint\" ให้ตรงตัวทุกคำตามลำดับใน Google ควรทำอย่างไร",
    "options": [
      {
        "label": "ก",
        "text": "ใส่เครื่องหมายลบหน้าคำ"
      },
      {
        "label": "ข",
        "text": "พิมพ์ตัวพิมพ์ใหญ่ทั้งหมด"
      },
      {
        "label": "ค",
        "text": "ใส่ไว้ในเครื่องหมายคำพูด \"digital footprint\""
      },
      {
        "label": "ง",
        "text": "เติมคำว่า site: ไว้ข้างหน้า"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "เครื่องหมายคำพูดใช้ค้นหาแบบวลีตรงตัว",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 104,
    "question": "[เสาหลักที่ 3 ข้อ 9] เมื่อพบข่าวที่น่าสงสัยในโซเชียล ควรทำสิ่งใดเป็นอันดับแรก",
    "options": [
      {
        "label": "ก",
        "text": "รีบแชร์เพื่อเตือนคนอื่น"
      },
      {
        "label": "ข",
        "text": "ตรวจสอบแหล่งที่มาและเปรียบเทียบกับแหล่งข่าวที่น่าเชื่อถือ"
      },
      {
        "label": "ค",
        "text": "เชื่อไว้ก่อนเพราะมีคนแชร์เยอะ"
      },
      {
        "label": "ง",
        "text": "ลบข้อความทิ้งทันที"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ต้องตรวจสอบก่อนแชร์ จำนวนคนแชร์ไม่ได้ยืนยันความจริง",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 105,
    "question": "[เสาหลักที่ 3 ข้อ 10] Digital Footprint หมายถึงข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "รอยนิ้วมือบนหน้าจอ"
      },
      {
        "label": "ข",
        "text": "ขนาดของไฟล์ในเครื่อง"
      },
      {
        "label": "ค",
        "text": "ความเร็วอินเทอร์เน็ต"
      },
      {
        "label": "ง",
        "text": "ร่องรอยข้อมูลที่เราทิ้งไว้จากการใช้งานออนไลน์"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "ทั้งที่โพสต์เองและที่ถูกเก็บโดยระบบ",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 106,
    "question": "[เสาหลักที่ 3 ข้อ 11] Netiquette หมายถึงอะไร",
    "options": [
      {
        "label": "ก",
        "text": "มารยาทและข้อปฏิบัติในการสื่อสารออนไลน์"
      },
      {
        "label": "ข",
        "text": "ชื่อโปรแกรมแชท"
      },
      {
        "label": "ค",
        "text": "ประเภทของไวรัส"
      },
      {
        "label": "ง",
        "text": "หน่วยวัดความเร็วเน็ต"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Netiquette = Network + Etiquette",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 107,
    "question": "[เสาหลักที่ 3 ข้อ 12] นักเรียนนำรูปภาพจากอินเทอร์เน็ตมาใช้ในงานที่เผยแพร่ โดยไม่ตรวจสอบสิทธิ์และไม่อ้างอิง ข้อใดถูกต้องที่สุด",
    "options": [
      {
        "label": "ก",
        "text": "ทำได้เสมอ เพราะอยู่บนอินเทอร์เน็ต"
      },
      {
        "label": "ข",
        "text": "ทำได้ถ้ารูปสวย"
      },
      {
        "label": "ค",
        "text": "อาจละเมิดลิขสิทธิ์ ควรตรวจสิทธิ์การใช้งานและให้เครดิตเจ้าของ"
      },
      {
        "label": "ง",
        "text": "ทำได้ถ้าลบลายน้ำ"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "รูปส่วนใหญ่มีลิขสิทธิ์ ต้องดูเงื่อนไข เช่น CC และอ้างอิงแหล่งที่มา",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 108,
    "question": "[เสาหลักที่ 3 ข้อ 13] PDPA คืออะไร",
    "options": [
      {
        "label": "ก",
        "text": "มาตรฐานความเร็วอินเทอร์เน็ต"
      },
      {
        "label": "ข",
        "text": "พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล"
      },
      {
        "label": "ค",
        "text": "ชื่อโปรแกรมป้องกันไวรัส"
      },
      {
        "label": "ง",
        "text": "ระบบปฏิบัติการชนิดหนึ่ง"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Personal Data Protection Act",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 109,
    "question": "[เสาหลักที่ 3 ข้อ 14] ได้รับ SMS \"บัญชีธนาคารของคุณถูกระงับ กดลิงก์ด่วน\" ควรทำอย่างไร",
    "options": [
      {
        "label": "ก",
        "text": "กดลิงก์และกรอกข้อมูลทันที"
      },
      {
        "label": "ข",
        "text": "ส่งต่อให้เพื่อนทุกคน"
      },
      {
        "label": "ค",
        "text": "ตอบกลับ SMS ขอข้อมูลเพิ่ม"
      },
      {
        "label": "ง",
        "text": "ไม่กดลิงก์ และตรวจสอบกับธนาคารผ่านช่องทางทางการ"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "น่าจะเป็น Phishing ให้ตรวจสอบกับธนาคารโดยตรง",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 110,
    "question": "[เสาหลักที่ 3 ข้อ 15] บริการใดเป็นตัวอย่างของ Cloud Storage",
    "options": [
      {
        "label": "ก",
        "text": "Google Drive"
      },
      {
        "label": "ข",
        "text": "Notepad"
      },
      {
        "label": "ค",
        "text": "Windows Defender"
      },
      {
        "label": "ง",
        "text": "BIOS"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Google Drive เก็บไฟล์บนคลาวด์",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 3 มจธ. (Active Recruitment)"
  },
  {
    "id": 111,
    "question": "[ถูก/ผิด เสาหลักที่ 3] เว็บไซต์ที่ขึ้นอันดับต้นๆ ของผลการค้นหา Google ถูกต้องและน่าเชื่อถือเสมอ",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "อันดับค้นหาไม่ได้การันตีความถูกต้อง ต้องประเมินด้วย CRAAP",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 3 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 112,
    "question": "[ถูก/ผิด เสาหลักที่ 3] การเปิดโหมดไม่ระบุตัวตน (Incognito) ทำให้ไม่มีใครเห็นกิจกรรมออนไลน์ของเราเลย",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "เพียงไม่บันทึกประวัติในเครื่องนั้น แต่เว็บไซต์ เครือข่าย และ ISP ยังเห็นได้",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 3 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 113,
    "question": "[ถูก/ผิด เสาหลักที่ 3] ควรตั้งค่าความเป็นส่วนตัวของบัญชีโซเชียลมีเดียให้เหมาะสม",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ช่วยลดความเสี่ยงของ Digital Footprint",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 3 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 114,
    "question": "[ถูก/ผิด เสาหลักที่ 3] ไฟล์นามสกุล .xlsx เป็นไฟล์ของโปรแกรม Excel",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": ".xlsx = สมุดงาน Excel",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 3 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 115,
    "question": "[ถูก/ผิด เสาหลักที่ 3] การแชร์ข่าวที่ยังไม่ตรวจสอบ ไม่ก่อให้เกิดผลเสียใดๆ",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "อาจทำให้ข้อมูลเท็จแพร่กระจาย และอาจมีความรับผิดทางกฎหมาย",
    "category": "digital-literacy",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 3 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 116,
    "question": "[เสาหลักที่ 4 ข้อ 1] ขั้นตอนแรกของกระบวนการแก้ปัญหาตามแนวคิดของ Pólya คือข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "ลงมือทำตามแผน"
      },
      {
        "label": "ข",
        "text": "ตรวจสอบคำตอบ"
      },
      {
        "label": "ค",
        "text": "ทำความเข้าใจปัญหา"
      },
      {
        "label": "ง",
        "text": "เขียนโปรแกรม"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ต้องเข้าใจโจทย์ก่อน จึงวางแผนได้",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 117,
    "question": "[เสาหลักที่ 4 ข้อ 2] การแบ่งปัญหาใหญ่ออกเป็นปัญหาย่อยๆ เรียกว่าอะไรในการคิดเชิงคอมพิวเตอร์",
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
        "text": "Debugging"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Decomposition = การแยกย่อยปัญหา",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 118,
    "question": "[เสาหลักที่ 4 ข้อ 3] การเก็บสาระสำคัญและตัดรายละเอียดที่ไม่จำเป็นออก เรียกว่าอะไร",
    "options": [
      {
        "label": "ก",
        "text": "Decomposition"
      },
      {
        "label": "ข",
        "text": "Algorithm Design"
      },
      {
        "label": "ค",
        "text": "Pattern Recognition"
      },
      {
        "label": "ง",
        "text": "Abstraction"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "Abstraction = การคิดเชิงนามธรรม",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 119,
    "question": "[เสาหลักที่ 4 ข้อ 4] ข้อใดเป็นประพจน์",
    "options": [
      {
        "label": "ก",
        "text": "ช่วยปิดไฟหน่อย"
      },
      {
        "label": "ข",
        "text": "5 + 2 = 8"
      },
      {
        "label": "ค",
        "text": "x + 3 = 10"
      },
      {
        "label": "ง",
        "text": "วันนี้เธอไปไหน"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "\"5+2=8\" บอกได้ว่าเท็จ จึงเป็นประพจน์ ส่วนอื่นเป็นคำสั่ง/คำถาม/ประโยคเปิดที่ยังไม่รู้ค่า",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 120,
    "question": "[เสาหลักที่ 4 ข้อ 5] กำหนด p เป็นจริง q เป็นเท็จ ค่าความจริงของ p ∧ q คือข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "จริง"
      },
      {
        "label": "ข",
        "text": "เท็จ"
      },
      {
        "label": "ค",
        "text": "ไม่สามารถบอกได้"
      },
      {
        "label": "ง",
        "text": "ทั้งจริงและเท็จ"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "AND จริงเมื่อทั้งคู่จริงเท่านั้น",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 121,
    "question": "[เสาหลักที่ 4 ข้อ 6] กำหนด p เป็นจริง q เป็นเท็จ ค่าความจริงของ p ∨ q คือข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "จริง"
      },
      {
        "label": "ข",
        "text": "เท็จ"
      },
      {
        "label": "ค",
        "text": "ไม่สามารถบอกได้"
      },
      {
        "label": "ง",
        "text": "เท็จเฉพาะเมื่อ q จริง"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "OR จริงเมื่ออย่างน้อยหนึ่งเป็นจริง",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 122,
    "question": "[เสาหลักที่ 4 ข้อ 7] ประโยค \"ถ้าฝนตก แล้วถนนเปียก\" และทราบว่า \"ถนนเปียก\" ข้อใดสรุปได้ถูกต้อง",
    "options": [
      {
        "label": "ก",
        "text": "ฝนตกแน่นอน"
      },
      {
        "label": "ข",
        "text": "ฝนไม่ตก"
      },
      {
        "label": "ค",
        "text": "สรุปไม่ได้ว่าฝนตกหรือไม่"
      },
      {
        "label": "ง",
        "text": "ถนนแห้ง"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ถนนเปียกอาจเกิดจากสาเหตุอื่น จึงสรุปย้อนกลับไม่ได้",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 123,
    "question": "[เสาหลักที่ 4 ข้อ 8] ตัวเลขถัดไปของลำดับ 2, 4, 8, 16, ? คือข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "18"
      },
      {
        "label": "ข",
        "text": "24"
      },
      {
        "label": "ค",
        "text": "30"
      },
      {
        "label": "ง",
        "text": "32"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "คูณ 2 ทีละครั้ง 16 × 2 = 32",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 124,
    "question": "[เสาหลักที่ 4 ข้อ 9] ตัวเลขถัดไปของลำดับ 1, 1, 2, 3, 5, 8, ? คือข้อใด",
    "options": [
      {
        "label": "ก",
        "text": "11"
      },
      {
        "label": "ข",
        "text": "12"
      },
      {
        "label": "ค",
        "text": "13"
      },
      {
        "label": "ง",
        "text": "14"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ฟีโบนักชี 5 + 8 = 13",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 125,
    "question": "[เสาหลักที่ 4 ข้อ 10] สัตว์เลี้ยงลูกด้วยนมทุกชนิดหายใจด้วยปอด / วาฬเป็นสัตว์เลี้ยงลูกด้วยนม ข้อสรุปใดสมเหตุสมผล",
    "options": [
      {
        "label": "ก",
        "text": "วาฬหายใจด้วยเหงือก"
      },
      {
        "label": "ข",
        "text": "วาฬหายใจด้วยปอด"
      },
      {
        "label": "ค",
        "text": "สัตว์ที่หายใจด้วยปอดทุกชนิดเป็นสัตว์เลี้ยงลูกด้วยนม"
      },
      {
        "label": "ง",
        "text": "วาฬไม่ใช่สัตว์เลี้ยงลูกด้วยนม"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ใช้ข้ออ้าง 2 ข้อได้ว่า วาฬหายใจด้วยปอด (ข้อ ค สรุปกลับด้านไม่ได้)",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 126,
    "question": "[เสาหลักที่ 4 ข้อ 11] นักเรียน 30 คน ชอบ A 18 คน ชอบ B 15 คน ชอบทั้งสอง 5 คน มีกี่คนที่ไม่ชอบทั้ง A และ B",
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
        "text": "7"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ชอบอย่างน้อยหนึ่ง = 18+15−5 = 28, ไม่ชอบเลย = 30−28 = 2",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 127,
    "question": "[เสาหลักที่ 4 ข้อ 12] คน 5 คนจับมือทักทายกันทุกคู่ (คนละครั้งต่อคู่) จะมีการจับมือทั้งหมดกี่ครั้ง",
    "options": [
      {
        "label": "ก",
        "text": "5"
      },
      {
        "label": "ข",
        "text": "8"
      },
      {
        "label": "ค",
        "text": "10"
      },
      {
        "label": "ง",
        "text": "20"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "5×4/2 = 10 ครั้ง",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 128,
    "question": "[เสาหลักที่ 4 ข้อ 13] การสรุปกฎทั่วไปจากการสังเกตตัวอย่างหลายกรณี เรียกว่าการให้เหตุผลแบบใด",
    "options": [
      {
        "label": "ก",
        "text": "นิรนัย (Deductive)"
      },
      {
        "label": "ข",
        "text": "ตรรกะแบบ Boolean"
      },
      {
        "label": "ค",
        "text": "การดีบัก"
      },
      {
        "label": "ง",
        "text": "อุปนัย (Inductive)"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "Inductive = จากกรณีเฉพาะสู่ข้อสรุปทั่วไป",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 129,
    "question": "[เสาหลักที่ 4 ข้อ 14] A สูงกว่า B, B สูงกว่า C, C สูงกว่า D ใครเตี้ยที่สุด",
    "options": [
      {
        "label": "ก",
        "text": "A"
      },
      {
        "label": "ข",
        "text": "D"
      },
      {
        "label": "ค",
        "text": "C"
      },
      {
        "label": "ง",
        "text": "B"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ลำดับ A > B > C > D",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 130,
    "question": "[เสาหลักที่ 4 ข้อ 15] ในผังงาน (Flowchart) สัญลักษณ์วงรีใช้แทนอะไร",
    "options": [
      {
        "label": "ก",
        "text": "การตัดสินใจ"
      },
      {
        "label": "ข",
        "text": "การรับข้อมูล"
      },
      {
        "label": "ค",
        "text": "จุดเริ่มต้น/สิ้นสุด"
      },
      {
        "label": "ง",
        "text": "การประมวลผล"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "วงรี = Start/End",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "medium",
    "keyConcept": "เสาหลักที่ 4 มจธ. (Active Recruitment)"
  },
  {
    "id": 131,
    "question": "[ถูก/ผิด เสาหลักที่ 4] Computational Thinking ใช้ได้กับงานคอมพิวเตอร์เท่านั้น",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ใช้แก้ปัญหาได้ทุกด้าน เช่น วางแผนงาน การเดินทาง",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 4 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 132,
    "question": "[ถูก/ผิด เสาหลักที่ 4] นิเสธของนิเสธของ p (¬¬p) มีค่าความจริงเดียวกับ p",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "กลับสองครั้งก็กลับมาเท่าเดิม",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 4 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 133,
    "question": "[ถูก/ผิด เสาหลักที่ 4] การให้เหตุผลที่ valid (สมเหตุสมผลตามรูปแบบ) สามารถมีข้อสรุปที่ไม่จริงได้ หากข้ออ้างตั้งต้นไม่จริง",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "valid ดูที่รูปแบบ ไม่ได้รับประกันว่าข้ออ้างจริง",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 4 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 134,
    "question": "[ถูก/ผิด เสาหลักที่ 4] Pattern Recognition ช่วยให้เรามองเห็นความคล้ายหรือรูปแบบที่ซ้ำกัน เพื่อใช้แก้ปัญหาต่อไป",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "คือองค์ประกอบหนึ่งของ Computational Thinking",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 4 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 135,
    "question": "[ถูก/ผิด เสาหลักที่ 4] ปัญหาทุกข้อมีวิธีแก้ที่ถูกต้องเพียงวิธีเดียว",
    "options": [
      {
        "label": "ก",
        "text": "ถูก"
      },
      {
        "label": "ข",
        "text": "ผิด"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "หลายปัญหามีหลายวิธี ต่างกันที่ความเร็ว ความเรียบง่าย ต้นทุน",
    "category": "problem-solving",
    "source": "docx_4pillars",
    "difficulty": "easy",
    "keyConcept": "เสาหลักที่ 4 (ประเมินความถูกต้องตามหลักการ)"
  },
  {
    "id": 136,
    "question": "การแปลงเลขฐานสอง 10101100 (ฐาน 2) เป็นเลขฐานสิบ จะได้ค่าเท่ากับข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "168"
      },
      {
        "label": "ข",
        "text": "172"
      },
      {
        "label": "ค",
        "text": "174"
      },
      {
        "label": "ง",
        "text": "180"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "กระจายค่าน้ำหนักบิต: 1×128 + 0×64 + 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 0×1 = 128 + 32 + 8 + 4 = 172",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "easy",
    "keyConcept": "การกระจายน้ำหนักเลขฐานสอง 8-bit (128, 64, 32, 16, 8, 4, 2, 1)"
  },
  {
    "id": 137,
    "question": "เลขฐานสิบ 240 เมื่อแปลงเป็นเลขฐานสองขนาด 8 บิต (1 Octet) จะได้ค่าตรงกับข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "11110000"
      },
      {
        "label": "ข",
        "text": "11101000"
      },
      {
        "label": "ค",
        "text": "11111000"
      },
      {
        "label": "ง",
        "text": "11001100"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ใช้วิธีหักลบน้ำหนัก 8-bit: 240 - 128 = 112 (บิต 7=1) -> 112 - 64 = 48 (บิต 6=1) -> 48 - 32 = 16 (บิต 5=1) -> 16 - 16 = 0 (บิต 4=1) ส่วนบิตที่เหลือเป็น 0 ทั้งหมด จึงได้ 11110000",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "easy",
    "keyConcept": "การแปลงเลขฐานสิบเป็นฐานสองด้วยตารางน้ำหนัก"
  },
  {
    "id": 138,
    "question": "ข้อมูลขนาด 1 ไบต์ (Byte) หรือ 8 บิตแบบไม่มีเครื่องหมาย (Unsigned) สามารถแทนค่าตัวเลขจำนวนเต็มได้ทั้งหมดกี่สถานะ และมีช่วงค่าตั้งแต่เท่าใด?",
    "options": [
      {
        "label": "ก",
        "text": "128 สถานะ (ช่วง 0 ถึง 127)"
      },
      {
        "label": "ข",
        "text": "256 สถานะ (ช่วง 0 ถึง 255)"
      },
      {
        "label": "ค",
        "text": "256 สถานะ (ช่วง 1 ถึง 256)"
      },
      {
        "label": "ง",
        "text": "512 สถานะ (ช่วง 0 ถึง 511)"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "บิต 8 บิต มีจำนวนสถานะเท่ากับ 2^8 = 256 รูปแบบ โดยเริ่มจาก 00000000 (ค่า 0) ไปจนถึง 11111111 (ค่า 255)",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "easy",
    "keyConcept": "ความจุและช่วงค่าของข้อมูล 8-bit Unsigned"
  },
  {
    "id": 139,
    "question": "เลขฐานสิบหก 0x3F เมื่อแปลงเป็นเลขฐานสองขนาด 8 บิต จะมีค่าตรงกับข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "00111111"
      },
      {
        "label": "ข",
        "text": "00111110"
      },
      {
        "label": "ค",
        "text": "01111111"
      },
      {
        "label": "ง",
        "text": "00101111"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "หลักการ: 1 หลักของเลขฐานสิบหกเท่ากับ 4 บิตเสมอ โดย '3' = 0011 และ 'F' (15) = 1111 นำมาต่อกันได้ 00111111",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "easy",
    "keyConcept": "1 หลัก Hexadecimal = 4 บิต (Nibble) เสมอ"
  },
  {
    "id": 140,
    "question": "เลขฐานสอง 11010111 (ฐาน 2) เมื่อแปลงเป็นเลขฐานสิบหก (Hexadecimal) จะได้ค่าตรงกับข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "0xD7"
      },
      {
        "label": "ข",
        "text": "0xE7"
      },
      {
        "label": "ค",
        "text": "0xC7"
      },
      {
        "label": "ง",
        "text": "0xD6"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "แบ่ง 8 บิตออกเป็น 2 กลุ่มกลุ่มละ 4 บิต: 1101 (8+4+1 = 13 ซึ่งตรงกับอักษร D) และ 0111 (4+2+1 = 7) รวมกันได้ 0xD7",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "medium",
    "keyConcept": "การจับกลุ่ม 4 บิตเพื่อแปลงฐานสองเป็นฐานสิบหก"
  },
  {
    "id": 141,
    "question": "ในระบบเครือข่าย IPv4 ค่า Subnet Mask แบบ CIDR /26 หมายถึงบิต 1 ต่อเนื่อง 26 บิต Octet ตัวที่ 4 จะมีค่าในเลขฐานสิบเท่ากับเท่าใด?",
    "options": [
      {
        "label": "ก",
        "text": "128"
      },
      {
        "label": "ข",
        "text": "192"
      },
      {
        "label": "ค",
        "text": "224"
      },
      {
        "label": "ง",
        "text": "240"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "/26 คือมีบิต 1 จำนวน 26 บิต (24 บิตแรกเต็ม 3 Octet = 255.255.255) ส่วน Octet ที่สี่มีบิต 1 อีก 2 ตัว คือ 11000000 = 128 + 64 = 192 (จึงได้ 255.255.255.192)",
    "category": "network-storage",
    "source": "binary_basics",
    "difficulty": "medium",
    "keyConcept": "การคำนวณ Subnet Mask จากบิต Prefix CIDR"
  },
  {
    "id": 142,
    "question": "Subnet Mask /28 มี Octet สุดท้ายเป็น 11110000 (240) จะมี Host Bits เหลืออยู่กี่บิต และสามารถกำหนด IP ใช้งานจริงให้เครื่องลูกข่าย (Usable Hosts) ได้สูงสุดกี่เครื่อง?",
    "options": [
      {
        "label": "ก",
        "text": "เหลือ 4 บิต กำหนดได้ 16 เครื่อง"
      },
      {
        "label": "ข",
        "text": "เหลือ 4 บิต กำหนดได้ 14 เครื่อง"
      },
      {
        "label": "ค",
        "text": "เหลือ 5 บิต กำหนดได้ 30 เครื่อง"
      },
      {
        "label": "ง",
        "text": "เหลือ 3 บิต กำหนดได้ 6 เครื่อง"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "IPv4 มี 32 บิต ลบ Network Bits 28 เหลือ Host Bits = 32 - 28 = 4 บิต จำนวน IP ทั้งหมดคือ 2^4 = 16 IP หัก Network ID และ Broadcast IP เหลือ 16 - 2 = 14 เครื่อง",
    "category": "network-storage",
    "source": "binary_basics",
    "difficulty": "medium",
    "keyConcept": "สูตรคำนวณ Host ที่ใช้งานได้: 2^h - 2"
  },
  {
    "id": 143,
    "question": "การหาค่าติดลบของตัวเลขในระบบคอมพิวเตอร์ด้วยวิธี Two's Complement (ขนาด 8 บิต) มีขั้นตอนอย่างไร?",
    "options": [
      {
        "label": "ก",
        "text": "กลับบิตทุกตัว (0 เป็น 1, 1 เป็น 0) แล้วบวก 1"
      },
      {
        "label": "ข",
        "text": "กลับบิตเฉพาะบิตซ้ายสุด (MSB) ให้เป็น 1"
      },
      {
        "label": "ค",
        "text": "นำเลขฐานสิบไปลบออกจาก 256 โดยตรงแล้วแปลงเป็นฐานสอง"
      },
      {
        "label": "ง",
        "text": "เลื่อนบิตไปทางซ้าย 1 บิตแล้วเติม 1 ด้านท้าย"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Two's Complement ทำได้โดย Invert บิตทุกตำแหน่ง (One's Complement) แล้วจึงทำการบวกด้วย 1 (Add 1)",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "medium",
    "keyConcept": "Two's Complement = Invert bits + 1"
  },
  {
    "id": 144,
    "question": "ในระบบ 8-bit Two's Complement ค่า +5 เขียนแทนด้วย 00000101 หากต้องการแปลงเป็น -5 จะได้รูปแบบบิตตรงกับข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "11111010"
      },
      {
        "label": "ข",
        "text": "11111011"
      },
      {
        "label": "ค",
        "text": "10000101"
      },
      {
        "label": "ง",
        "text": "11111101"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "1) ค่า +5 คือ 00000101 -> 2) Invert ทุกบิตได้ 11111010 -> 3) บวก 1: 11111010 + 1 = 11111011",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "medium",
    "keyConcept": "ตัวอย่างการคำนวณ Two's Complement ของจำนวนติดลบ"
  },
  {
    "id": 145,
    "question": "เลขฐานสิบ 192 เกิดจากการบวกกันของเลขยกกำลังของ 2 ในตำแหน่งใดบ้าง?",
    "options": [
      {
        "label": "ก",
        "text": "2^7 + 2^6 (128 + 64)"
      },
      {
        "label": "ข",
        "text": "2^7 + 2^5 (128 + 32)"
      },
      {
        "label": "ค",
        "text": "2^6 + 2^5 (64 + 32)"
      },
      {
        "label": "ง",
        "text": "2^7 + 2^4 (128 + 16)"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "128 + 64 = 192 ตรงกับบิตตำแหน่งที่ 7 (2^7) และบิตตำแหน่งที่ 6 (2^6)",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "easy",
    "keyConcept": "องค์ประกอบของค่า 192 ใน 8-bit"
  },
  {
    "id": 146,
    "question": "ข้อมูลขนาด 4 บิต (Half Byte) มีชื่อเรียกเฉพาะในทางสถาปัตยกรรมคอมพิวเตอร์ว่าอะไร?",
    "options": [
      {
        "label": "ก",
        "text": "Bit"
      },
      {
        "label": "ข",
        "text": "Nibble"
      },
      {
        "label": "ค",
        "text": "Word"
      },
      {
        "label": "ง",
        "text": "Block"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "4 บิต = 1 Nibble มีขนาดพอดีกับการแทนค่าตัวเลขฐานสิบหก (0-F) จำนวน 1 หลัก",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "easy",
    "keyConcept": "คำศัพท์โครงสร้างข้อมูล 4 bits = 1 Nibble"
  },
  {
    "id": 147,
    "question": "ข้อใดเรียงลำดับหน่วยวัดปริมาณข้อมูลจาก 'น้อยไปมาก' ได้อย่างถูกต้อง?",
    "options": [
      {
        "label": "ก",
        "text": "Bit < Byte < KB < MB < GB < TB"
      },
      {
        "label": "ข",
        "text": "Bit < KB < Byte < MB < GB < TB"
      },
      {
        "label": "ค",
        "text": "Byte < Bit < KB < MB < TB < GB"
      },
      {
        "label": "ง",
        "text": "Bit < Byte < MB < KB < GB < TB"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "1 Byte = 8 Bits, 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "easy",
    "keyConcept": "ลำดับหน่วยความจุข้อมูลทางคอมพิวเตอร์"
  },
  {
    "id": 148,
    "question": "อินเทอร์เน็ตความเร็ว 100 Mbps (Megabits per second) ในทางทฤษฎีจะดาวน์โหลดไฟล์ได้ความเร็วสูงสุดกี่ MB/s (Megabytes per second)?",
    "options": [
      {
        "label": "ก",
        "text": "100 MB/s"
      },
      {
        "label": "ข",
        "text": "50 MB/s"
      },
      {
        "label": "ค",
        "text": "12.5 MB/s"
      },
      {
        "label": "ง",
        "text": "8 MB/s"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "เนื่องจาก 1 Byte = 8 Bits การแปลงจาก Mbps (บิต) เป็น MB/s (ไบต์) ต้องนำไปหารด้วย 8: 100 ÷ 8 = 12.5 MB/s",
    "category": "digital-literacy",
    "source": "binary_basics",
    "difficulty": "medium",
    "keyConcept": "ความแตกต่างระหว่าง b (bit) และ B (Byte)"
  },
  {
    "id": 149,
    "question": "การตรวจสอบว่าเลขฐานสองจำนวนหนึ่งเป็น 'เลขคู่' หรือ 'เลขคี่' สามารถดูได้เร็วที่สุดจากจุดใด?",
    "options": [
      {
        "label": "ก",
        "text": "บิตซ้ายสุด (Most Significant Bit - MSB)"
      },
      {
        "label": "ข",
        "text": "บิตขวาสุด (Least Significant Bit - LSB / ตำแหน่ง 2^0)"
      },
      {
        "label": "ค",
        "text": "การนำบิตทุกตัวมาบวกกัน"
      },
      {
        "label": "ง",
        "text": "จำนวนบิตทั้งหมดว่าเป็นจำนวนคู่หรือคี่"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "เพราะ 2^0 = 1 เป็นค่าคี่เพียงค่าเดียวในระบบเลขฐานสอง นอกนั้น (2^1=2, 2^2=4, 2^3=8...) ล้วนเป็นเลขคู่ ดังนั้นถ้า LSB = 0 จะเป็นเลขคู่เสมอ ถ้า LSB = 1 จะเป็นเลขคี่เสมอ",
    "category": "problem-solving",
    "source": "binary_basics",
    "difficulty": "easy",
    "keyConcept": "คุณสมบัติพาริตี้เลขคู่/คี่ของบิต LSB"
  },
  {
    "id": 150,
    "question": "Subnet Mask 255.255.255.252 (/30) จะมีจำนวนโฮสต์ที่กำหนดใช้งานได้จริง (Usable Hosts) กี่เครื่อง และนิยมใช้ในบริบทใดมากที่สุด?",
    "options": [
      {
        "label": "ก",
        "text": "2 เครื่อง นิยมใช้กับ Point-to-Point Link ระหว่างเราเตอร์ 2 ตัว"
      },
      {
        "label": "ข",
        "text": "4 เครื่อง นิยมใช้กับระบบ LAN ขนาดเล็กในบ้าน"
      },
      {
        "label": "ค",
        "text": "6 เครื่อง นิยมใช้กับแผนกคอมพิวเตอร์"
      },
      {
        "label": "ง",
        "text": "14 เครื่อง นิยมใช้กับห้องเซิร์ฟเวอร์"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "/30 เหลือ Host Bits = 2 บิต รวมได้ 2^2 = 4 IP หัก Network และ Broadcast เหลือ 2 IP พอดี เหมาะที่สุดสำหรับเชื่อมต่อ Router-to-Router (Point-to-Point) ไม่สิ้นเปลือง IP",
    "category": "network-storage",
    "source": "binary_basics",
    "difficulty": "medium",
    "keyConcept": "การประยุกต์ใช้ /30 ในระบบเครือข่ายจริง"
  }
];

export const getOfficialDocxQuestions = () => {
  return PRACTICE_QUESTIONS.filter(q => q.source === 'docx_official');
};

export const getFourPillarsQuestions = () => {
  return PRACTICE_QUESTIONS.filter(q => q.source === 'docx_4pillars');
};

export const getBinaryQuestions = () => {
  return PRACTICE_QUESTIONS.filter(q => q.source === 'binary_basics');
};

export const getQuestionsByCategory = (category: CategoryId) => {
  return PRACTICE_QUESTIONS.filter(q => q.category === category);
};

export const getQuestionById = (id: number) => {
  return PRACTICE_QUESTIONS.find(q => q.id === id);
};
