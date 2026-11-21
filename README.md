# KMUTT_DSI เตรียมตัวสอบ 🚀
### ระบบคู่มือทบทวนและแบบทดสอบประเมินสมรรถนะเทคโนโลยีดิจิทัล (Digital Technology Competency)
**โครงการ Active Recruitment คณะเทคโนโลยีสารสนเทศ (SIT) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.) ประจำปีการศึกษา 2570**

---

## 📖 ภาพรวมของระบบ (Overview)
เว็บแอปพลิเคชันสำหรับอ่านเตรียมสอบและฝึกทำข้อสอบเสมือนจริง ออกแบบมาเพื่อเน้น **พื้นฐาน (Basic) ให้แน่นที่สุด** จากศูนย์สู่ระดับพร้อมสอบ รองรับการใช้งานบนอุปกรณ์ทุกประเภท โดยเฉพาะ **Mobile Responsive** โหลดไว ลื่นไหล ไม่กระตุก พร้อมระบบตัวช่วยอ่านระดับพรีเมียม:

1. **Mark ตำแหน่งที่อ่าน (Reading Progress & Section Completion)**: 
   - บันทึกเปอร์เซ็นต์การเลื่อนหน้าและการเปิดอ่านล่าสุดอัตโนมัติ (LocalStorage)
   - ปุ่ม **"อ่านต่อจากจุดเดิม"** บนแดชบอร์ดกดแล้ววาร์ปไปตำแหน่งที่อ่านค้างไว้ได้ทันที
   - สามารถกดติ๊กถูกทำเครื่องหมายว่าอ่านหัวข้อย่อยนี้จบแล้วได้เป็นรายหัวข้อ
2. **ติดธงจุดที่ไม่เข้าใจ (Flagged Review System 🚩)**:
   - สามารถกดไอคอนรูปธง 🚩 ที่หัวข้อบทเรียนหรือข้อสอบเพื่อบันทึกจุดที่ยังไม่เข้าใจ
   - ใส่บันทึกช่วยจำ (Study Note) หรือคำถามที่ยังสงสัยได้
   - มีหน้า **"จุดที่ติดธงไว้ (Flagged Review)"** รวบรวมทุกจุดที่ติดธงไว้ให้ทบทวนอย่างรวดเร็วก่อนเข้าห้องสอบ
3. **ระบบแบบทดสอบประเมินสมรรถนะ (55 ข้อพร้อมเฉลยละเอียด)**:
   - รวมข้อสอบจริง 25 ข้อจากคู่มือทบทวนสอบ Docx พร้อมเฉลยเหตุผลทุกข้อ
   - เพิ่มโจทย์จำลองอีก 30 ข้อครอบคลุมทุกเสาหลัก
   - ตรวจคำตอบทันทีพร้อมแท็กแนวคิดสำคัญ (Key Concepts)
4. **สรุปจุดจำ & กับดักข้อสอบ (Cheat Sheet & Calculators)**:
   - 10 ตารางกับดักที่คนมักตอบผิด (RAID 6 vs 5, DORA vs Handshake, ACK ใน DHCP vs TCP)
   - Interactive RAID Calculator: คำนวณความจุใช้งานจริง RAID 0, 1, 5, 6, 10 แบบเรียลไทม์
   - Interactive Binary Search Calculator: คำนวณจำนวนรอบเปรียบเทียบสูงสุดใน Worst Case
5. **คู่มือโควตา SIT มจธ. & สไลด์ทางการ 7 สไลด์**:
   - เกณฑ์ GPAX 3 หลักสูตร: IT (3.00), DSI (2.50), CS ภาษาอังกฤษ (3.00)
   - กำหนดการ 8 ขั้นตอน (30 พ.ย. 2569 – 18 ม.ค. 2570)
   - สไลด์วิวเวอร์เปิดดูภาพสไลด์จริงจากการประชุมชี้แจง

---

## 📚 14 บทเรียนครอบคลุม 4 เสาหลักการทดสอบ (Core Pillars)
### 🌐 เสาที่ 1: Network Infrastructure, Cloud Computing & Cybersecurity
- **บทที่ 1**: พื้นฐานระบบเครือข่าย & อุปกรณ์เชื่อมต่อ (LAN/WAN, Topologies, OSI 7 Layers vs TCP/IP, Hub vs Switch vs Router)
- **บทที่ 2**: IP Address, Subnetting & การจัดสรร Private/Public IP (IPv4 vs IPv6, RFC 1918, APIPA, Loopback)
- **บทที่ 3**: โปรโตคอลระบบเครือข่าย: DHCP (DORA 4 สเต็ป, สัญญาเช่า T1/T2), DNS (A, AAAA, CNAME, MX), ARP, และ NAT/PAT
- **บทที่ 4**: สถาปัตยกรรม TCP/IP, Three-Way Handshake & Four-Way Termination (TCP vs UDP, พอร์ตมาตรฐาน)
- **บทที่ 5**: สถาปัตยกรรม RAID & การคำนวณพื้นที่จัดเก็บข้อมูลขั้นสูง (RAID 0, 1, 5, 6, 10, 50, 60 และความเสี่ยง Rebuild)
- **บทที่ 6**: คลาวด์คอมพิวติ้ง (Cloud Computing): IaaS, PaaS, SaaS, NIST 5 คุณลักษณะ, และโมเดลการติดตั้ง
- **บทที่ 7**: ความปลอดภัยทางไซเบอร์ & การเข้ารหัสข้อมูล (CIA Triad, Phishing, Ransomware, Worm, DDoS, Firewall, 2FA, AES/RSA)

### 💻 เสาที่ 2: Programming & Algorithms, AI
- **บทที่ 8**: พื้นฐานการเขียนโปรแกรม (ตัวแปร, ชนิดข้อมูล int/float/str/bool, If-Else, Loop For/While, Functions, Error Types)
- **บทที่ 9**: อัลกอริทึม, Flowchart, รหัสเทียม (Pseudocode) & การคิดเชิงคำนวณ 4 เสาหลัก (Decomposition, Pattern, Abstraction, Algorithm)
- **บทที่ 10**: Big-O Notation & การวิเคราะห์อัลกอริทึมค้นหา/เรียงลำดับ (Linear Search vs Binary Search, Sorting Algorithms)
- **บทที่ 11**: ปัญญาประดิษฐ์ (AI), การเรียนรู้ของเครื่อง (Machine Learning: Supervised, Unsupervised, Reinforcement) & Generative AI

### 🛡️ เสาที่ 3: Digital Literacy (ความรู้เท่าทันดิจิทัล)
- **บทที่ 12**: ความรู้เท่าทันดิจิทัล, การตรวจสอบข่าวปลอม (CRAAP Test), พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA), พ.ร.บ. คอมพิวเตอร์, Digital Footprint และลิขสิทธิ์ Creative Commons

### 🧠 เสาที่ 4: Problem Solving / Logical Thinking
- **บทที่ 13**: การแก้ปัญหาเชิงตรรกะ, ตารางค่าความจริง (AND, OR, NOT, XOR, ถ้า...แล้ว), อนุกรมตัวเลข, และการคิดตามเงื่อนไข

### 🎓 ข้อมูลทางการ SIT มจธ.
- **บทที่ 14**: คู่มือเตรียมสอบ & การคัดเลือก Active Recruitment SIT มจธ. ปีการศึกษา 2570

---

## 🛠️ เทคโนโลยีที่ใช้ในการพัฒนา (Tech Stack)
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Storage**: React Hooks + LocalStorage API (zero latency, offline-ready)
- **Deployment**: [Vercel](https://vercel.com/) พร้อมตั้งค่า `vercel.json` สำหรับ SPA routing

---

## 🚀 วิธีการรันโปรเจกต์ในเครื่อง (Local Development)

```bash
# ติดตั้ง dependencies
npm install

# รันโหมด Development server
npm run dev

# ทดสอบ Build สำหรับ Production
npm run build

# ทดสอบรันไฟล์ Preview
npm run preview
```

---

## ☁️ การ Deploy ขึ้น Vercel
โปรเจกต์นี้ตั้งค่าพร้อมสำหรับการ Deploy บน Vercel ทันที:
1. เชื่อมต่อ Git Repository (`https://github.com/Newwee/DSIReading`) กับบัญชี Vercel
2. Vercel จะตรวจจับการตั้งค่า Vite อัตโนมัติ:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. กด **Deploy** ใช้งานได้ทันที

---

## 🏫 ข้อมูลติดต่อทางการ คณะเทคโนโลยีสารสนเทศ (SIT) มจธ.
- **ผู้ประสานงาน**: คุณรุ่งนภา คำภัยวงศ์พิทักษ์ (ฝ่ายงานพัฒนานักศึกษา)
- **โทรศัพท์**: 02-470-9882
- **อีเมล**: info@sit.kmutt.ac.th
- **เว็บไซต์**: [www.sit.kmutt.ac.th](https://www.sit.kmutt.ac.th)
- **ที่อยู่**: 126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
