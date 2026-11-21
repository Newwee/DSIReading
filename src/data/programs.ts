import { ProgramId, StudyTopic, PracticeQuestion, CategoryInfo } from '../types';
import { STUDY_TOPICS, CATEGORIES } from './studyContent';
import { PRACTICE_QUESTIONS } from './practiceQuestions';
import { IT_STUDY_TOPICS, getItTopicById } from './itStudyContent';
import { IT_PRACTICE_QUESTIONS } from './itPracticeQuestions';
import { CS_STUDY_TOPICS, getCsTopicById } from './csStudyContent';
import { CS_PRACTICE_QUESTIONS } from './csPracticeQuestions';

export interface ProgramMeta {
  id: ProgramId;
  code: string;
  nameTh: string;
  nameEn: string;
  degreeTh: string;
  degreeEn: string;
  badgeColor: string;
  accentColor: string;
  gradient: string;
  description: string;
  path: string;
  gpax: number;
  gpaMath: number;
  gpaEng: number;
}

export const PROGRAMS_META: Record<ProgramId, ProgramMeta> = {
  DSI: {
    id: 'DSI',
    code: 'DSI',
    nameTh: 'สาขาวิชานวัตกรรมบริการดิจิทัล',
    nameEn: 'Digital Service Innovation',
    degreeTh: 'ศิลปศาสตรบัณฑิต (ศศ.บ.)',
    degreeEn: 'Bachelor of Arts in Digital Service Innovation',
    badgeColor: '#FF6B00',
    accentColor: '#FF8A33',
    gradient: 'from-[#FF6B00] to-[#FFA149]',
    description: 'เน้น Digital Product Management, UX/UI, Service Design, Data Analytics และการขับเคลื่อนนวัตกรรมดิจิทัล',
    path: '/',
    gpax: 2.50,
    gpaMath: 2.75,
    gpaEng: 2.50,
  },
  IT: {
    id: 'IT',
    code: 'IT',
    nameTh: 'สาขาวิชาเทคโนโลยีสารสนเทศ',
    nameEn: 'Information Technology',
    degreeTh: 'วิทยาศาสตรบัณฑิต (วท.บ.)',
    degreeEn: 'Bachelor of Science in Information Technology',
    badgeColor: '#35D5F2',
    accentColor: '#00D2D3',
    gradient: 'from-[#00D2D3] to-[#35D5F2]',
    description: 'ครอบคลุม Network, Cloud, Systems Architecture, Cybersecurity, Database และ Software Development สำหรับองค์กร',
    path: '/IT',
    gpax: 3.00,
    gpaMath: 2.75,
    gpaEng: 3.00,
  },
  CS: {
    id: 'CS',
    code: 'CS',
    nameTh: 'สาขาวิชาวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ)',
    nameEn: 'Computer Science (English Program)',
    degreeTh: 'วิทยาศาสตรบัณฑิต (วท.บ.)',
    degreeEn: 'Bachelor of Science in Computer Science (English Program)',
    badgeColor: '#8B7CFF',
    accentColor: '#A78BFA',
    gradient: 'from-[#8B7CFF] to-[#A78BFA]',
    description: 'เน้นทฤษฎีคอมพิวเตอร์ขั้นสูง Data Structures, Algorithms, AI / Machine Learning Systems และการแก้ปัญหาคณิตศาสตร์ดิสครีต',
    path: '/CS',
    gpax: 3.00,
    gpaMath: 3.00,
    gpaEng: 3.00,
  },
};

export function getProgramTopics(programId: ProgramId): StudyTopic[] {
  switch (programId) {
    case 'IT':
      return IT_STUDY_TOPICS;
    case 'CS':
      return CS_STUDY_TOPICS;
    case 'DSI':
    default:
      return STUDY_TOPICS;
  }
}

export function getProgramQuestions(programId: ProgramId): PracticeQuestion[] {
  switch (programId) {
    case 'IT':
      return IT_PRACTICE_QUESTIONS;
    case 'CS':
      return CS_PRACTICE_QUESTIONS;
    case 'DSI':
    default:
      return PRACTICE_QUESTIONS;
  }
}

export function getProgramTopicById(programId: ProgramId, topicId: string): StudyTopic | undefined {
  switch (programId) {
    case 'IT':
      return getItTopicById(topicId);
    case 'CS':
      return getCsTopicById(topicId);
    case 'DSI':
    default:
      return STUDY_TOPICS.find(t => t.id === topicId);
  }
}
