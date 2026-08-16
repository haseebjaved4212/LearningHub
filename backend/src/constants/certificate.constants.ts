/**
 * Certificate generation constants - premium template design.
 */
export const CERTIFICATE_NUMBER_PREFIX = 'CERT';
export const CERTIFICATE_UPLOAD_FOLDER = 'certificates';
export const CERTIFICATE_PUBLIC_ID_PREFIX = 'certificate-';

export const CERTIFICATE_TEMPLATE = {
  page: {
    size: 'A5' as const,
    margin: 30,
    layout: 'landscape' as const,
  },
  border: {
    outerInset: 18,
    midInset: 24,
    innerInset: 30,
    lineWidth: 1.2,
  },
  colors: {
    background: '#fefdfb',
    ink: '#1a1a2e',
    gold: '#c9a227',
    goldLight: '#e8d5a3',
    accent: '#2d3748',
    muted: '#4a5568',
  },
  copy: {
    title: 'CERTIFICATE OF EXCELLENCE',
    subtitle: 'Awarded for Outstanding Achievement',
    intro: 'This is to certify that',
    completion: 'has successfully completed the course',
    issuer: 'LearnHub',
    tagline: 'Empowering Learning, Enabling Growth',
  },
  fontSizes: {
    title: 22,
    subtitle: 8,
    intro: 10,
    student: 20,
    completion: 9,
    course: 14,
    instructor: 9,
    date: 8,
    footer: 7,
    seal: 6,
  },
  textWidth: 380,
  sealRadius: 28,
  positions: {
    titleY: 55,
    subtitleY: 82,
    introY: 108,
    studentY: 138,
    completionY: 168,
    courseY: 192,
    instructorY: 212,
    dateY: 238,
    sealCenterY: 320,
    certNoY: 355,
    issuerY: 375,
    taglineY: 392,
  },
} as const;
