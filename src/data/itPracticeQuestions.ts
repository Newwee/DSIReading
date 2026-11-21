import { PracticeQuestion } from '../types';

export const IT_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    "id": 1,
    "qNum": 1,
    "question": "[พื้นฐาน] อุปกรณ์ใดในเครื่องคอมพิวเตอร์ที่ทำหน้าที่เก็บข้อมูลโปรแกรมที่กำลังเปิดทำงานอยู่ และข้อมูลจะ สูญหายทันทีเมื่อไฟฟ้าดับหรือปิดเครื่อง?",
    "options": [
      {
        "label": "ก",
        "text": "SSD (Solid State Drive)"
      },
      {
        "label": "ข",
        "text": "RAM (Random Access Memory)"
      },
      {
        "label": "ค",
        "text": "CPU (Central Processing Unit)"
      },
      {
        "label": "ง",
        "text": "ROM (Read-Only Memory)"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "RAM เป็นหน่วยความจำหลักแบบ Volatile ที่เก็บข้อมูลโปรแกรมซึ่งกำลังประมวลผลอยู่ เพื่อ ให้ CPU เข้าถึงได้เร็ว แต่เมื่อตัดกระแสไฟฟ้าข้อมูลจะหายทั้งหมด ต่างจาก SSD (ก.) และ ROM (ง.) ที่เก็บข้อมูลแบบ ถาวร ส่วน CPU (ค.) คือหน่วยประมวลผล ไม่ใช่หน่วยเก็บข้อมูลโปรแกรม",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 2,
    "qNum": 2,
    "question": "[พื้นฐาน] เลขฐานสอง 110102 มีค่าเท่ากับข้อใดในระบบเลขฐานสิบ?",
    "options": [
      {
        "label": "ก",
        "text": "24"
      },
      {
        "label": "ข",
        "text": "25"
      },
      {
        "label": "ค",
        "text": "26"
      },
      {
        "label": "ง",
        "text": "28"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "คำนวณจากค่าประจำหลักของเลขฐานสองจากขวาไปซ้าย (1, 2, 4, 8, 16): 110102 = (1 × 16) + (1 × 8) + (0 × 4) + (1 × 2) + (0 × 1) = 16 + 8 + 0 + 2 + 0 = 26",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 3,
    "qNum": 3,
    "question": "[พื้นฐาน] ในวงจรการพัฒนาระบบ (SDLC) ขั้นตอนใดที่ทีมงานเข้าไปสัมภาษณ์ลูกค้าและรวบรวมคุณสมบัติที่ ระบบต้องทำได้?",
    "options": [
      {
        "label": "ก",
        "text": "Requirement Analysis (การวิเคราะห์ความต้องการ)"
      },
      {
        "label": "ข",
        "text": "Implementation (การเขียนโปรแกรม)"
      },
      {
        "label": "ค",
        "text": "Testing (การทดสอบระบบ)"
      },
      {
        "label": "ง",
        "text": "Maintenance (การบำรุงรักษา)"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ขั้นตอนการวิเคราะห์ความต้องการคือจุดเริ่มต้นสำคัญในการรวบรวม ความต้องการจากผู้ใช้จริงเพื่อกำหนดสเปกระบบ ส่วน Implementation คือการเขียนโค้ด Testing คือการทดสอบ และ Maintenance คือการดูแลหลังเปิดใช้งาน",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 4,
    "qNum": 4,
    "question": "[พื้นฐาน] ในการพัฒนาหน้าเว็บฝั่ง Frontend เทคโนโลยีใดมีหน้าที่หลักในการกำหนดสี ขนาดตัวอักษร และการ จัดวางเลย์เอาต์ให้สวยงาม?",
    "options": [
      {
        "label": "ก",
        "text": "HTML"
      },
      {
        "label": "ข",
        "text": "CSS"
      },
      {
        "label": "ค",
        "text": "SQL"
      },
      {
        "label": "ง",
        "text": "HTTP"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "CSS (Cascading Style Sheets) ดูแลเรื่องความสวยงาม สี ฟอนต์ และเลย์เอาต์ ส่วน HTML ทำหน้าที่วางโครงสร้างเนื้อหา SQL ใช้กับฐานข้อมูล และ HTTP คือโปรโตคอลรับส่งข้อมูลบนเว็บ",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 5,
    "qNum": 5,
    "question": "[พื้นฐาน–กลาง] พิจารณารหัสเทียมต่อไปนี้ เมื่อทำงานเสร็จสิ้น ค่าของ total ที่แสดงผลคือข้อใด? total = 0 for i = 1 to 5: if (i mod 2 == 0): total = total + i print(total)",
    "options": [
      {
        "label": "ก",
        "text": "5"
      },
      {
        "label": "ข",
        "text": "6"
      },
      {
        "label": "ค",
        "text": "9"
      },
      {
        "label": "ง",
        "text": "15"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ลูปทำงานตั้งแต่ i = 1 ถึง 5 โดยเงื่อนไข i mod 2 == 0 จะเป็นจริงเฉพาะเมื่อ i เป็นเลขคู่ ได้แก่ i = 2 (total = 0 + 2 = 2) และ i = 4 (total = 2 + 4 = 6) เมื่อจบลูปจึงแสดงผล 6 (หากบวกทุกเลขจะได้ 15 ซึ่งเป็นตัวลวงข้อ ง.)",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 6,
    "qNum": 6,
    "question": "[พื้นฐาน] คุณสมบัติที่ถูกต้องของ Primary Key (คีย์หลัก) ในฐานข้อมูลเชิงสัมพันธ์คือข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "สามารถซ้ำกันได้ แต่ห้ามเป็นค่าว่าง"
      },
      {
        "label": "ข",
        "text": "ห้ามซ้ำกัน แต่สามารถเป็นค่าว่างได้"
      },
      {
        "label": "ค",
        "text": "ห้ามซ้ำกัน และห้ามเป็นค่าว่าง (Unique & NOT NULL)"
      },
      {
        "label": "ง",
        "text": "ต้องเป็นชนิดข้อมูลตัวเลขเท่านั้น ไม่สามารถเป็นข้อความได้"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Primary Key ใช้ระบุตัวตนของแถวข้อมูลแต่ละแถวได้อย่างเฉพาะ เจาะจง จึงต้องมีค่าไม่ซ้ำกัน (Unique) และต้องมีค่าเสมอ (NOT NULL) โดยสามารถเป็นข้อความได้ เช่น รหัสสินค้า P001",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 7,
    "qNum": 7,
    "question": "[ระดับกลาง] เหตุใดตาราง Orders (ใบสั่งซื้อ) จึงต้องมีคอลัมน์ customer_id เป็น Foreign Key ที่อ้างอิง ไปยังตาราง Customers ?",
    "options": [
      {
        "label": "ก",
        "text": "เพื่อให้ตาราง Orders ทำงานเร็วขึ้นโดยไม่ต้องมี Primary Key"
      },
      {
        "label": "ข",
        "text": "เพื่อเชื่อมโยงความสัมพันธ์และป้องกันไม่ให้บันทึกใบสั่งซื้อของรหัสลูกค้าที่ไม่มีอยู่จริง"
      },
      {
        "label": "ค",
        "text": "เพื่อเข้ารหัสข้อมูลส่วนตัวของลูกค้าให้ปลอดภัยจากการโจรกรรม"
      },
      {
        "label": "ง",
        "text": "เพื่อเรียงลำดับใบสั่งซื้อตามชื่อลูกค้าอัตโนมัติ"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Foreign Key ทำหน้าที่รักษา Referential Integrity ทำให้มั่นใจได้ว่าทุกใบสั่งซื้อจะต้องผูกกับลูกค้าที่มีตัวตนจริงในตาราง Customers ช่วยลด ความผิดพลาดของข้อมูลในระบบองค์กร",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 8,
    "qNum": 8,
    "question": "[ระดับกลาง] ต้องการนับจำนวนนักศึกษาในแต่ละสาขาวิชา ( dept ) เฉพาะผู้ที่มีเกรดเฉลี่ย ( gpa ) ตั้งแต่ 3.00 ขึ้นไป จากตาราง students คำสั่ง SQL ใดถูกต้อง?",
    "options": [
      {
        "label": "ก",
        "text": "SELECT dept, COUNT(*) FROM students WHERE gpa >= 3.00 GROUP BY dept;"
      },
      {
        "label": "ข",
        "text": "SELECT dept, SUM(*) FROM students WHERE gpa >= 3.00 ORDER BY dept;"
      },
      {
        "label": "ค",
        "text": "SELECT dept, COUNT(*) FROM students GROUP BY gpa WHERE gpa >= 3.00;"
      },
      {
        "label": "ง",
        "text": "SELECT COUNT(dept) FROM students ORDER BY gpa >= 3.00;"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "ลำดับไวยากรณ์ SQL ที่ถูกต้องคือ SELECT → FROM → WHERE (กรองแถวที่ gpa >= 3.00 ก่อน) → GROUP BY dept (จัดกลุ่มตามสาขา) แล้วใช้ COUNT(*) นับจำนวนนักศึกษาในแต่ละกลุ่ม ส่วนข้อ ข. ใช้ SUM(*) ผิดวิธี และข้อ ค. สลับตำแหน่ง WHERE ไปอยู่หลัง GROUP BY ซึ่งผิดไวยากรณ์",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 9,
    "qNum": 9,
    "question": "[พื้นฐาน] เมื่อพิมพ์ชื่อเว็บไซต์ www.kmutt.ac.th ลงในเบราว์เซอร์ บริการใดทำหน้าที่แปลงชื่อเว็บไซต์ดัง กล่าวเป็นหมายเลข IP Address?",
    "options": [
      {
        "label": "ก",
        "text": "Firewall"
      },
      {
        "label": "ข",
        "text": "Switch"
      },
      {
        "label": "ค",
        "text": "DNS (Domain Name System)"
      },
      {
        "label": "ง",
        "text": "HTTPS"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "DNS ทำหน้าที่แปลงชื่อโดเมนที่มนุษย์อ่านเข้าใจได้ให้เป็นหมายเลข IP Address เพื่อให้ เบราว์เซอร์ติดต่อไปยังเครื่องเซิร์ฟเวอร์ที่ถูกต้องได้",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 10,
    "qNum": 10,
    "question": "[พื้นฐาน–กลาง] อุปกรณ์เครือข่ายใดทำหน้าที่เชื่อมต่อเครือข่ายคนละวงเข้าด้วยกันและเลือกเส้นทางการส่ง ข้อมูลโดยอ้างอิงจาก IP Address?",
    "options": [
      {
        "label": "ก",
        "text": "Hub"
      },
      {
        "label": "ข",
        "text": "Switch (Layer 2)"
      },
      {
        "label": "ค",
        "text": "Router"
      },
      {
        "label": "ง",
        "text": "Repeater"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Router ทำงานในระดับ Network Layer (Layer 3) ใช้ IP Address ในการตัดสินใจเลือก เส้นทางส่งข้อมูลระหว่างเครือข่ายคนละวง ต่างจาก Switch (Layer 2) ที่ใช้ MAC Address เชื่อมอุปกรณ์ภายในวง LAN เดียวกัน",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 11,
    "qNum": 11,
    "question": "[ระดับกลาง] หากต้องพัฒนาระบบวิดีโอคอลสด (Live Video Call) ที่ต้องการความหน่วงต่ำและความรวดเร็ว สูง โดยยอมรับการตกหล่นของภาพบางเฟรมได้เล็กน้อย ควรเลือกใช้โปรโตคอลขนส่งข้อมูลใด?",
    "options": [
      {
        "label": "ก",
        "text": "TCP เพราะมีการตรวจสอบและส่งข้อมูลซ้ำทุกแพ็กเก็ต"
      },
      {
        "label": "ข",
        "text": "UDP เพราะไม่ต้องเสียเวลาสร้างการเชื่อมต่อและส่งข้อมูลได้รวดเร็ว"
      },
      {
        "label": "ค",
        "text": "SQL เพราะจัดการข้อมูลแบบเรียลไทม์ได้ดี"
      },
      {
        "label": "ง",
        "text": "HTML เพราะแสดงผลภาพและเสียงได้โดยตรง"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "งานวิดีโอคอลสดให้ความสำคัญกับความเร็วและความต่อเนื่องแบบเรียลไทม์ หากใช้ TCP แล้วเกิดการส่งแพ็กเก็ตเก่าซ้ำจะทำให้ภาพและเสียงดีเลย์หรือค้าง การใช้ UDP จึงเหมาะสมกว่าแม้จะมีโอกาสสูญเสีย บางเฟรมเล็กน้อย",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 12,
    "qNum": 12,
    "question": "[ระดับกลาง] ผู้ใช้คลิกลิงก์เพื่อเปิดหน้าโปรไฟล์สินค้าบนเว็บไซต์ แล้วได้รับรหัสตอบกลับ HTTP 404 ข้อความ นี้หมายถึงอะไร?",
    "options": [
      {
        "label": "ก",
        "text": "การเชื่อมต่อสำเร็จและกำลังดาวน์โหลดข้อมูล"
      },
      {
        "label": "ข",
        "text": "ไม่พบหน้าเว็บหรือทรัพยากรตาม URL ที่ผู้ใช้ร้องขอ"
      },
      {
        "label": "ค",
        "text": "เซิร์ฟเวอร์เกิดข้อผิดพลาดภายในขณะประมวลผลโค้ด"
      },
      {
        "label": "ง",
        "text": "อินเทอร์เน็ตของผู้ใช้งานหลุดการเชื่อมต่อ"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "รหัสกลุ่ม 4xx คือข้อผิดพลาดฝั่งคำขอของผู้ใช้ (Client Error) โดย 404 Not Found หมายถึงเซิร์ฟเวอร์ทำงานปกติแต่หาไฟล์หรือหน้าเว็บตาม URL นั้นไม่พบ (ส่วนข้อ ค. คือ 500 และข้อ ก. คือ 200 )",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 13,
    "qNum": 13,
    "question": "[พื้นฐาน–กลาง] บริษัทแห่งหนึ่งเช่าเครื่องเซิร์ฟเวอร์เสมือนบนคลาวด์ จากนั้นทีม IT ของบริษัทเป็นผู้ติดตั้ง ระบบปฏิบัติการ Linux เว็บเซิร์ฟเวอร์ และฐานข้อมูลเองทั้งหมด บริการคลาวด์ลักษณะนี้จัดอยู่ในรูปแบบใด?",
    "options": [
      {
        "label": "ก",
        "text": "SaaS (Software as a Service)"
      },
      {
        "label": "ข",
        "text": "PaaS (Platform as a Service)"
      },
      {
        "label": "ค",
        "text": "IaaS (Infrastructure as a Service)"
      },
      {
        "label": "ง",
        "text": "On-Premises"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "เมื่อผู้ใช้เช่าโครงสร้างพื้นฐาน (เครื่องเสมือน/เซิร์ฟเวอร์) แล้วจัดการติดตั้งระบบปฏิบัติการ และซอฟต์แวร์ด้วยตนเองทั้งหมด จัดเป็น IaaS (Infrastructure as a Service)",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 14,
    "qNum": 14,
    "question": "[ระดับกลาง] เหตุใดเทคโนโลยี Container (เช่น Docker) จึงใช้ทรัพยากรน้อยกว่าและเริ่มต้นทำงานได้เร็ว กว่า Virtual Machine (VM) แบบดั้งเดิม?",
    "options": [
      {
        "label": "ก",
        "text": "Container ไม่ต้องใช้หน่วยความจำ RAM ในการทำงาน"
      },
      {
        "label": "ข",
        "text": "Container ใช้เคอร์เนลของระบบปฏิบัติการเครื่องหลักร่วมกัน ไม่ต้องจำลอง Guest OS เต็มรูปแบบแยกทุกตัว"
      },
      {
        "label": "ค",
        "text": "Container สามารถทำงานได้โดยไม่ต้องมีเครื่องเซิร์ฟเวอร์จริง"
      },
      {
        "label": "ง",
        "text": "Container มีระบบรักษาความปลอดภัยที่ไม่ต้องใช้ไฟร์วอลล์"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "VM แต่ละตัวต้องจำลองฮาร์ดแวร์และบูต ระบบปฏิบัติการเต็มรูปแบบแยกกันจึงกิน RAM และใช้เวลาบูตนาน ขณะที่ Container แยกเฉพาะพื้นที่ทำงานของ แอปพลิเคชันและแชร์เคอร์เนลของ Host OS ร่วมกัน จึงเบากว่าและเปิดทำงานได้ในระดับวินาที",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 15,
    "qNum": 15,
    "question": "[ระดับกลาง] เว็บไซต์ลงทะเบียนเรียนถูกผู้ไม่หวังดีส่งคำขอปลอมจำนวนมหาศาล (DDoS Attack) จนระบบ ล่มและนักศึกษาไม่สามารถเข้าใช้งานได้ เหตุการณ์นี้ละเมิดหลักการใดใน CIA Triad โดยตรง?",
    "options": [
      {
        "label": "ก",
        "text": "Confidentiality (การรักษาความลับ)"
      },
      {
        "label": "ข",
        "text": "Integrity (ความถูกต้องครบถ้วน)"
      },
      {
        "label": "ค",
        "text": "Availability (ความพร้อมใช้งาน)"
      },
      {
        "label": "ง",
        "text": "Authentication (การยืนยันตัวตน)"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "การโจมตีแบบ DDoS มุ่งทำให้ทรัพยากรเซิร์ฟเวอร์เต็มจนระบบหยุดชะงัก ผู้ใช้งาน จริงไม่สามารถเข้าถึงบริการได้ ซึ่งเป็นการทำลายความพร้อมใช้งาน (Availability) โดยตรง ค่าเสมอ (ส่วน title อาจมีหนังสือชื่อซ้ำกันได้ และ price / category ซ้ำกันแน่นอน) คำสั่ง SQL ที่ถูกต้องคือ: SELECT title, price FROM Books WHERE category = 'IT' AND price <= 400 ORDER BY price ASC; 8.8.8.8 ได้สำเร็จพิสูจน์ว่าสายแลน การ์ดเครือข่าย เราเตอร์ และการเชื่อมต่อออกอินเทอร์เน็ตในระดับ IP Address ทำงานปกติ แต่ไม่สามารถเปิดเว็บด้วยชื่อโดเมน www.example.com ได้ แสดงว่าเครื่องไม่สามารถแปลงชื่อโดเมน เป็นหมายเลข IP ได้ (เช่น ตั้งค่า DNS Server ผิด หรือ DNS Server ปลายทางล่ม) การ และการอัปเดตแพตช์ความปลอดภัยให้ทั้งหมด ทำให้ทีมขนาดเล็ก 2 คนมุ่งพัฒนาโค้ดเว็บแอปพลิเคชันและเปิดตัว ได้เร็วที่สุด ส่วนการจัดเก็บรหัสผ่านในฐานข้อมูล ห้ามเก็บเป็นข้อความธรรมดา (Plaintext) แต่ต้องแปลงผ่านอัลกอ ริทึม Hashing ร่วมกับ Salt (เช่น bcrypt หรือ Argon2) เพื่อที่ว่าแม้ฐานข้อมูลจะรั่วไหล ผู้โจมตีก็ไม่สามารถอ่านรหัส ผ่านจริงของผู้ใช้ได้",
    "source": "it_official",
    "category": "network-storage",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา IT SIT มจธ. (โควตา 2570)"
  }
];

export const getItQuestions = () => IT_PRACTICE_QUESTIONS;
