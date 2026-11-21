import { PracticeQuestion } from '../types';

export const CS_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    "id": 1,
    "qNum": 1,
    "question": "[พื้นฐาน] กำหนดให้ประพจน์ p มีค่าความจริงเป็น จริง (T) และ q มีค่าความจริงเป็น เท็จ (F) ค่าความจริง ของประพจน์ p → q คือข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "จริง (True)"
      },
      {
        "label": "ข",
        "text": "เท็จ (False)"
      },
      {
        "label": "ค",
        "text": "ไม่สามารถหาค่าได้"
      },
      {
        "label": "ง",
        "text": "เป็นได้ทั้งจริงและเท็จ"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ประพจน์แบบเงื่อนไข p → q (ถ้า p แล้ว q) จะเป็นเท็จเพียงกรณีเดียวคือเมื่อเหตุเป็น จริง ( p = T ) แต่ผลกลับเป็นเท็จ ( q = F )",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 2,
    "qNum": 2,
    "question": "[ระดับกลาง] ตามกฎของเดอมอร์แกน (De Morgan's Law) ประพจน์ ¬(p ∧ q) สมมูลทางตรรกศาสตร์กับ ข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "¬p ∧ ¬q"
      },
      {
        "label": "ข",
        "text": "¬p ∨ ¬q"
      },
      {
        "label": "ค",
        "text": "p ∨ ¬q"
      },
      {
        "label": "ง",
        "text": "¬p → ¬q"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "กฎเดอมอร์แกนระบุว่าเมื่อกระจายนิเสธ ( ¬ ) เข้าไปในวงเล็บ เครื่องหมาย ∧ (AND) จะ เปลี่ยนเป็น ∨ (OR) และ ∨ จะเปลี่ยนเป็น ∧ ดังนั้น ¬(p ∧ q) ≡ ¬p ∨ ¬q",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 3,
    "qNum": 3,
    "question": "[พื้นฐาน] ห้องเรียนหนึ่งมีนักเรียน 40 คน พบว่ามีคนชอบภาษา Python จำนวน 25 คน ชอบภาษา Java จำนวน 20 คน และชอบทั้งสองภาษาจำนวน 10 คน อยากทราบว่ามีนักเรียนที่ชอบอย่างน้อยหนึ่งในสองภาษานี้กี่ คน?",
    "options": [
      {
        "label": "ก",
        "text": "30 คน"
      },
      {
        "label": "ข",
        "text": "35 คน"
      },
      {
        "label": "ค",
        "text": "40 คน"
      },
      {
        "label": "ง",
        "text": "45 คน"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "ใช้สูตร Inclusion-Exclusion: |Python ∪ Java| = |Python| + |Java| − |Python ∩ Java| = 25 + 20 − 10 = 35 คน (อีก 5 คนจาก 40 คนคือผู้ที่ไม่ชอบทั้งสองภาษา)",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 4,
    "qNum": 4,
    "question": "[พื้นฐาน] โครงสร้างข้อมูลใดทำงานตามหลัก LIFO (Last In, First Out) และนิยมใช้สร้างฟีเจอร์ย้อนกลับ (Undo) ในโปรแกรมแก้ไขเอกสาร?",
    "options": [
      {
        "label": "ก",
        "text": "Queue"
      },
      {
        "label": "ข",
        "text": "Stack"
      },
      {
        "label": "ค",
        "text": "Graph"
      },
      {
        "label": "ง",
        "text": "Hash Table"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Stack ทำงานแบบ LIFO (เข้าทีหลังออกก่อน) จึงเหมาะกับคำสั่ง Undo เพราะการกระทำ ล่าสุดที่เพิ่งทำไปจะต้องถูกนำออกมายกเลิกก่อนเป็นอันดับแรก",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 5,
    "qNum": 5,
    "question": "[พื้นฐาน–กลาง] เริ่มต้นจาก Queue ว่างเปล่า จากนั้นทำคำสั่งตามลำดับ: enqueue(10) , enqueue(20) , dequeue() , enqueue(30) , dequeue() ค่าที่เหลืออยู่ใน Queue คือข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "[10]"
      },
      {
        "label": "ข",
        "text": "[20]"
      },
      {
        "label": "ค",
        "text": "[30]"
      },
      {
        "label": "ง",
        "text": "[10, 30]"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Queue ทำงานแบบ FIFO (เข้าก่อนออกก่อน) ไล่ทีละขั้นตอน: (1) enqueue(10) → [10] , (2) enqueue(20) → [10, 20] , (3) dequeue() นำตัวหน้าสุดคือ 10 ออก → [20] , (4) enqueue(30) → [20, 30] , (5) dequeue() นำตัวหน้าสุดคือ 20 ออก → เหลือ [30]",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 6,
    "qNum": 6,
    "question": "[ระดับกลาง] หากต้องการเข้าถึงข้อมูลตำแหน่งที่ i (Random Access) เวลาทำงานแบบ Big-O ของ Array เทียบกับ Singly Linked List คือข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "Array เป็น O(1) และ Linked List เป็น O(n)"
      },
      {
        "label": "ข",
        "text": "Array เป็น O(n) และ Linked List เป็น O(1)"
      },
      {
        "label": "ค",
        "text": "ทั้งสองโครงสร้างเป็น O(1) เท่ากัน"
      },
      {
        "label": "ง",
        "text": "ทั้งสองโครงสร้างเป็น O(log n) เท่ากัน"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Array เก็บข้อมูลติดกันในหน่วยความจำจึงคำนวณตำแหน่ง หน่วยความจำของช่องที่ i ได้ทันทีใน O(1) ส่วน Singly Linked List ต้องเดินตาม Pointer ทีละโหนดตั้งแต่โหนด แรกไปจนถึงโหนดที่ i จึงใช้เวลา O(n)",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 7,
    "qNum": 7,
    "question": "[พื้นฐาน] เงื่อนไขสำคัญที่ขาดไม่ได้ก่อนจะนำอัลกอริทึม Binary Search ไปใช้ค้นหาข้อมูลในอาร์เรย์คือข้อใด?",
    "options": [
      {
        "label": "ก",
        "text": "ข้อมูลต้องเป็นจำนวนเต็มบวกเท่านั้น"
      },
      {
        "label": "ข",
        "text": "ข้อมูลต้องผ่านการเรียงลำดับ (Sorted) มาก่อนแล้ว"
      },
      {
        "label": "ค",
        "text": "จำนวนสมาชิกในอาร์เรย์ต้องเป็นเลขคู่เท่านั้น"
      },
      {
        "label": "ง",
        "text": "ห้ามมีตัวเลขเกิน 1,000 ตัว"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Binary Search อาศัยการเปรียบเทียบกับค่าตรงกลางเพื่อ ตัดสินใจตัดข้อมูลครึ่งซ้ายหรือครึ่งขวาทิ้ง หากข้อมูลไม่ได้เรียงลำดับไว้ การตัดทิ้งครึ่งหนึ่งอาจทำให้พลาดคำตอบที่ ซ่อนอยู่อีกฝั่งได้",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 8,
    "qNum": 8,
    "question": "[ระดับกลาง] พิจารณาฟังก์ชัน Recursion ต่อไปนี้ การเรียก f(4) จะคืนค่าผลลัพธ์เท่าใด? function f(n): if n <= 1: return 1 return n + f(n - 1)",
    "options": [
      {
        "label": "ก",
        "text": "6"
      },
      {
        "label": "ข",
        "text": "9"
      },
      {
        "label": "ค",
        "text": "10"
      },
      {
        "label": "ง",
        "text": "24"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "ไล่การเรียกซ้ำทีละชั้น: f(4) = 4 + f(3) → 4 + 3 + f(2) → 4 + 3 + 2 + f(1) เมื่อถึง Base Case f(1) = 1 จึงรวมกลับได้ 4 + 3 + 2 + 1 = 10 (ระวังอย่าสับสนกับการคูณ Factorial ที่ ได้ 24 ในตัวลวงข้อ ง.)",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 9,
    "qNum": 9,
    "question": "[ระดับกลาง] โค้ดที่มีลูป for ซ้อนกัน 2 ชั้น โดยลูปนอกทำงาน n รอบ และในแต่ละรอบลูปในทำงาน n รอบ มีความซับซ้อนทางเวลา (Time Complexity) ระดับใด?",
    "options": [
      {
        "label": "ก",
        "text": "O(n)"
      },
      {
        "label": "ข",
        "text": "O(2n)"
      },
      {
        "label": "ค",
        "text": "O(n log n)"
      },
      {
        "label": "ง",
        "text": "O(n2)"
      }
    ],
    "correctAnswer": "ง",
    "explanation": "ลูปนอกทำงาน n รอบ แต่ละรอบสั่งให้ลูปในทำงานอีก n รอบ รวมจำนวนครั้งการทำงาน ทั้งหมดเท่ากับ n × n = n2 ครั้ง จึงเป็น O(n2)",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 10,
    "qNum": 10,
    "question": "[ระดับกลาง] อัลกอริทึมการเรียงลำดับใดใช้แนวคิด Divide and Conquer และรับประกันเวลาทำงานกรณีแย่ ที่สุดอยู่ที่ O(n log n) ?",
    "options": [
      {
        "label": "ก",
        "text": "Bubble Sort"
      },
      {
        "label": "ข",
        "text": "Selection Sort"
      },
      {
        "label": "ค",
        "text": "Merge Sort"
      },
      {
        "label": "ง",
        "text": "Linear Search"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "Merge Sort แบ่งอาร์เรย์ออกเป็นสองส่วนซ้ำๆ (ใช้ระดับความลึก log n ) แล้ว ผสานกลับทุกระดับ (ระดับละ n ขั้น) รวมเป็น O(n log n) เสมอแม้ในกรณีแย่ที่สุด ต่างจาก Bubble Sort และ Selection Sort ที่เป็น O(n2)",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 11,
    "qNum": 11,
    "question": "[พื้นฐาน] การสร้างโมเดล Machine Learning เพื่อทำนาย \"ราคาขายบ้านเป็นจำนวนเงินบาท\" จากขนาด พื้นที่และจำนวนห้องนอน โดยฝึกจากข้อมูลการขายในอดีต จัดเป็นงานประเภทใด?",
    "options": [
      {
        "label": "ก",
        "text": "Supervised Learning — Regression"
      },
      {
        "label": "ข",
        "text": "Supervised Learning — Classification"
      },
      {
        "label": "ค",
        "text": "Unsupervised Learning — Clustering"
      },
      {
        "label": "ง",
        "text": "Reinforcement Learning"
      }
    ],
    "correctAnswer": "ก",
    "explanation": "Regression — ข้อมูลฝึกสอนมีเฉลย (ราคาขายจริงในอดีต) จึงเป็น Supervised Learning และผลลัพธ์ที่ทำนายคือค่าตัวเลขต่อเนื่อง (จำนวนเงินบาท) จึงเป็นงาน Regression",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 12,
    "qNum": 12,
    "question": "[พื้นฐาน–กลาง] ห้างสรรพสินค้าต้องการแบ่งกลุ่มลูกค้าตามพฤติกรรมการซื้อสินค้าโดยไม่มีป้ายกำกับกลุ่ม (Labels) มาก่อน ควรใช้แนวทาง Machine Learning แบบใด?",
    "options": [
      {
        "label": "ก",
        "text": "Supervised Learning (Regression)"
      },
      {
        "label": "ข",
        "text": "Unsupervised Learning (Clustering)"
      },
      {
        "label": "ค",
        "text": "Supervised Learning (Classification)"
      },
      {
        "label": "ง",
        "text": "Binary Search"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "เมื่อไม่มีป้ายกำกับกลุ่มมาก่อนและต้องการให้ระบบ ค้นหากลุ่มลูกค้าที่มีลักษณะใกล้เคียงกันเอง เป็นงาน Clustering ภายใต้ Unsupervised Learning",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 13,
    "qNum": 13,
    "question": "[ระดับกลาง] โมเดลคัดแยกภาพแมวกับสุนัขทำคะแนนความแม่นยำบนชุดข้อมูลฝึกสอน (Training Set) ได้ สูงถึง 99% แต่เมื่อนำไปทดสอบกับภาพใหม่ (Test Set) กลับได้ความแม่นยำเพียง 62% ปัญหานี้เรียกว่าอะไร?",
    "options": [
      {
        "label": "ก",
        "text": "Underfitting"
      },
      {
        "label": "ข",
        "text": "Overfitting"
      },
      {
        "label": "ค",
        "text": "Encapsulation"
      },
      {
        "label": "ง",
        "text": "Polymorphism"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "อาการทำคะแนนได้สูงมากในชุดฝึกสอนแต่ตกฮวบเมื่อเจอข้อมูลใหม่ แสดงว่าโมเดล \"ท่องจำ\" รายละเอียดเฉพาะของชุดฝึกมากเกินไปจนไม่สามารถปรับใช้ทั่วไป (Generalize) กับข้อมูลใหม่ได้ดี",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 14,
    "qNum": 14,
    "question": "[พื้นฐาน] ในแนวคิด OOP การซ่อนตัวแปรสำคัญของคลาส (เช่น ยอดเงินในบัญชี balance ) ไว้เป็น private และอนุญาตให้แก้ไขผ่านเมธอด deposit() หรือ withdraw() เท่านั้น ตรงกับเสาหลักใด?",
    "options": [
      {
        "label": "ก",
        "text": "Inheritance"
      },
      {
        "label": "ข",
        "text": "Polymorphism"
      },
      {
        "label": "ค",
        "text": "Encapsulation"
      },
      {
        "label": "ง",
        "text": "Recursion"
      }
    ],
    "correctAnswer": "ค",
    "explanation": "การห่อหุ้มข้อมูลและจำกัดการเข้าถึงด้วย private เพื่อควบคุมเงื่อนไขการ แก้ไขผ่านเมธอด (เช่น ห้ามถอนเงินเกินยอดคงเหลือ) คือหลักการ Encapsulation",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  },
  {
    "id": 15,
    "qNum": 15,
    "question": "[ระดับกลาง] แนวทางการพัฒนาซอฟต์แวร์แบบใดที่แบ่งงานออกเป็นรอบสั้นๆ (Sprint) ส่งมอบซอฟต์แวร์ที ละส่วน และเปิดรับการปรับเปลี่ยนความต้องการของลูกค้าได้ตลอดโครงการ?",
    "options": [
      {
        "label": "ก",
        "text": "Waterfall Model"
      },
      {
        "label": "ข",
        "text": "Agile (Scrum)"
      },
      {
        "label": "ค",
        "text": "Binary Tree Model"
      },
      {
        "label": "ง",
        "text": "Static Compilation"
      }
    ],
    "correctAnswer": "ข",
    "explanation": "Agile โดยเฉพาะกรอบงาน Scrum เน้นการทำงานเป็นรอบสั้น (Sprint) ส่งมอบ ซอฟต์แวร์ที่ใช้ได้จริงอย่างต่อเนื่องและปรับตัวตามความต้องการที่เปลี่ยนไป ต่างจาก Waterfall ที่ทำงานเป็นเส้นตรง ทีละขั้น รอบ ที่ low high mid = (low+high)÷2 arr[mid] การเปรียบเทียบและการปรับขอบเขต 1 0 6 3 23 23 < 42 ตัดครึ่งซ้ายทิ้ง เลื่อน low = mid + 1 = 4 2 4 6 5 42 42 == 42 พบคำตอบที่ดัชนี 5 (ใช้เพียง 2 รอบ) ÷ 100 = 85% สำหรับผลกระทบของ FP = 5 หมายถึงอีเมลสำคัญที่เป็นของจริง (เช่น อีเมลแจ้งผลสัมภาษณ์หรือ ใบแจ้งหนี้) ถูกคัดกรองผิดพลาดไปอยู่ในถังขยะสแปม ทำให้ผู้ใช้อาจพลาดข้อมูลสำคัญ ซึ่งมักส่งผลเสียหายมากกว่า กรณี FN ที่อีเมลโฆษณาหลุดเข้ามาแล้วผู้ใช้เพียงกดลบทิ้งเอง Class Vehicle: Attributes: brand (ยี่ห้อ), max_speed (ความเร็วสูงสุด) Method:     refuel() → \"เติมเชื้อเพลิงเพื่อขับเคลื่อน\" Class ElectricCar inherits Vehicle: Attributes: battery_capacity (ความจุแบตเตอรี่ kWh)    // Attribute เฉพาะคลาสลูก Method:     refuel() → \"ชาร์จพลังงานไฟฟ้าเข้าแบตเตอรี่\"  // Override (Polymorphism) จะเห็นว่า ElectricCar สืบทอด brand และ max_speed จาก Vehicle โดยไม่ต้องเขียนซ้ำ (Inheritance) เพิ่มคุณสมบัติเฉพาะ battery_capacity และปรับเปลี่ยนพฤติกรรมของเมธอด refuel() ให้ตรงกับรถไฟฟ้า (Polymorphism)",
    "source": "cs_official",
    "category": "programming-algo",
    "difficulty": "medium",
    "keyConcept": "ข้อสอบทางการ สาขา CS SIT มจธ. (โควตา 2570)"
  }
];

export const getCsQuestions = () => CS_PRACTICE_QUESTIONS;
