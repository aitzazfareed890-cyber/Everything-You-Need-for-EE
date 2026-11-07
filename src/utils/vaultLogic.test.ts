import test from 'node:test';
import assert from 'node:assert/strict';
import { COURSES, SEMESTERS, filterCourses, USER_DRIVE_LINKS, CREATOR_INSTAGRAM_URL, WEBSITE_INSTAGRAM_URL, WHATSAPP_CHANNEL_URL, CONTACT_EMAIL, WHATSAPP_CHAT_URL } from '../data/courses.ts';

test('CREATOR_INSTAGRAM_URL, WEBSITE_INSTAGRAM_URL and WHATSAPP_CHANNEL_URL match requested links', () => {
  assert.equal(CREATOR_INSTAGRAM_URL, 'https://www.instagram.com/aitzaz_fareed?exln=MWZ4c2IzcWlva3NiYg==');
  assert.equal(WEBSITE_INSTAGRAM_URL, 'https://www.instagram.com/eynforee?cplk=MXgzY2NrY2dmenl1NQ==');
  assert.equal(WHATSAPP_CHANNEL_URL, 'https://whatsapp.com/channel/0029Vb9VgAi7j6fyDbQpHp0e');
  assert.equal(CONTACT_EMAIL, 'aitzazfareed890@gmail.com');
  assert.equal(WHATSAPP_CHAT_URL, 'https://wa.me/923429397675');
});

test('SEMESTERS has 8 semesters defined', () => {
  assert.equal(SEMESTERS.length, 8);
  for (const sem of SEMESTERS) {
    assert.ok(sem.number >= 1 && sem.number <= 8);
    assert.ok(sem.title.length > 0);
  }
});

test('Semester 1 contains all courses from official Fall 2026 timetable with direct user drives', () => {
  const sem1Courses = COURSES.filter((c) => c.semester === 1);
  assert.ok(sem1Courses.length >= 8, 'Must have at least 8 courses for Semester 1');

  const ap = sem1Courses.find((c) => c.shortName === 'AP');
  assert.ok(ap, 'Applied Physics must exist');
  assert.equal(ap?.driveUrl, USER_DRIVE_LINKS.AP);

  const bme = sem1Courses.find((c) => c.shortName === 'BME');
  assert.ok(bme, 'Basic Mechanical Engineering must exist');
  assert.equal(bme?.driveUrl, USER_DRIVE_LINKS.BME);

  const cp = sem1Courses.find((c) => c.shortName === 'CP');
  assert.ok(cp, 'Computer Programming must exist');
  assert.equal(cp?.driveUrl, USER_DRIVE_LINKS.CP);

  const wpl = sem1Courses.find((c) => c.shortName === 'WP-L');
  assert.ok(wpl, 'Workshop Practice Lab must exist');
  assert.equal(wpl?.driveUrl, USER_DRIVE_LINKS.WPL);

  const uoq = sem1Courses.find((c) => c.shortName === 'UoHQ-I');
  assert.ok(uoq, 'Holy Quran must exist');
  assert.equal(uoq?.driveUrl, USER_DRIVE_LINKS.UOQ);

  const ohs = sem1Courses.find((c) => c.shortName === 'OHS');
  assert.ok(ohs, 'Occupational Health and Safety must exist');
  assert.equal(ohs?.driveUrl, USER_DRIVE_LINKS.OHS);

  const ict = sem1Courses.find((c) => c.shortName === 'ICT');
  assert.ok(ict, 'Application of ICT must exist');
  assert.equal(ict?.driveUrl, USER_DRIVE_LINKS.ICT);

  const calculus = sem1Courses.find((c) => c.shortName === 'C & AG');
  assert.ok(calculus, 'Calculus & Analytical Geometry must exist');
  assert.equal(calculus?.driveUrl, USER_DRIVE_LINKS.CALCULUS);

  const fe = sem1Courses.find((c) => c.shortName === 'FE');
  assert.ok(fe, 'Functional English must exist');
  assert.equal(fe?.driveUrl, USER_DRIVE_LINKS.FE);
});

test('Semester 2 contains courses from official Spring 2026 timetable (25-EE)', () => {
  const sem2Courses = COURSES.filter((c) => c.semester === 2);
  assert.equal(sem2Courses.length, 6, 'Must have exactly 6 courses for Semester 2');

  const lca = sem2Courses.find((c) => c.shortName === 'LCA');
  assert.ok(lca, 'Linear Circuit Analysis (LCA) must exist');
  assert.equal(lca?.name, 'Linear Circuit Analysis');
  assert.equal(lca?.code, 'EE-121');
  assert.equal(lca?.creditHours, '3+1');

  const dld = sem2Courses.find((c) => c.shortName === 'DLD');
  assert.ok(dld, 'Digital Logic Design (DLD) must exist');
  assert.equal(dld?.name, 'Digital Logic Design');
  assert.equal(dld?.code, 'EE-122');
  assert.equal(dld?.creditHours, '3+1');

  const ed = sem2Courses.find((c) => c.shortName === 'ED');
  assert.ok(ed, 'Engineering Drawing Lab (ED) must exist');
  assert.equal(ed?.name, 'Engineering Drawing Lab');
  assert.equal(ed?.code, 'EE-123L');
  assert.equal(ed?.creditHours, '0+1');

  const cp = sem2Courses.find((c) => c.shortName === 'CP');
  assert.ok(cp, 'Computer Programming (CP) must exist');
  assert.equal(cp?.name, 'Computer Programming');
  assert.equal(cp?.code, 'CS-124');
  assert.equal(cp?.creditHours, '3+1');

  const de = sem2Courses.find((c) => c.shortName === 'DE');
  assert.ok(de, 'Differential Equations (DE) must exist');
  assert.equal(de?.name, 'Differential Equations');
  assert.equal(de?.code, 'GS-125');
  assert.equal(de?.creditHours, '3+0');

  const icp = sem2Courses.find((c) => c.shortName === 'ICP');
  assert.ok(icp, 'Ideology and Constitution of Pakistan (ICP) must exist');
  assert.equal(icp?.name, 'Ideology and Constitution of Pakistan');
  assert.equal(icp?.code, 'HS-126');
  assert.equal(icp?.creditHours, '2+0');
});

test('Semester 3 contains official courses with direct Google Drive links provided by user', () => {
  const sem3Courses = COURSES.filter((c) => c.semester === 3);
  assert.equal(sem3Courses.length, 5, 'Must have exactly ENA, EDC, M&I, CVT, IS');

  const ena = sem3Courses.find((c) => c.shortName === 'ENA');
  assert.ok(ena);
  assert.equal(ena?.name, 'Electrical Network Analysis');
  assert.equal(ena?.code, 'EE-211');
  assert.equal(ena?.driveUrl, USER_DRIVE_LINKS.ENA);

  const edc = sem3Courses.find((c) => c.shortName === 'EDC');
  assert.ok(edc);
  assert.equal(edc?.name, 'Electronic Devices and Circuits');
  assert.equal(edc?.code, 'EE-212');
  assert.equal(edc?.driveUrl, USER_DRIVE_LINKS.EDC);

  const mi = sem3Courses.find((c) => c.shortName === 'M&I');
  assert.ok(mi);
  assert.equal(mi?.name, 'Microprocessors and Interfacing');
  assert.equal(mi?.code, 'EE-213');
  assert.equal(mi?.driveUrl, USER_DRIVE_LINKS.MNI);

  const cvt = sem3Courses.find((c) => c.shortName === 'CVT');
  assert.ok(cvt);
  assert.equal(cvt?.name, 'Complex Variables & Transforms');
  assert.equal(cvt?.driveUrl, USER_DRIVE_LINKS.CVT);

  const is = sem3Courses.find((c) => c.shortName === 'IS');
  assert.ok(is);
  assert.equal(is?.name, 'Islamic Studies');
  assert.equal(is?.driveUrl, USER_DRIVE_LINKS.IS);
});

test('Semester 4 contains official courses from Spring 2026 timetable (24-EE)', () => {
  const sem4 = COURSES.filter((c) => c.semester === 4);
  assert.equal(sem4.length, 6);
  assert.ok(sem4.find((c) => c.shortName === 'EM' && c.name === 'Electrical Machines'));
  assert.ok(sem4.find((c) => c.shortName === 'M&I' && c.name === 'Microprocessors and Interfacing'));
  assert.ok(sem4.find((c) => c.shortName === 'S&S' && c.name === 'Signals and Systems'));
  assert.ok(sem4.find((c) => c.shortName === 'PME' && c.name === 'Probability Methods in Engineering'));
  assert.ok(sem4.find((c) => c.shortName === 'LA' && c.name === 'Linear Algebra'));
  assert.ok(sem4.find((c) => c.shortName === 'QT-II'));
});

test('Semester 5 contains official courses from Fall 2026 timetable (24-EE)', () => {
  const sem5 = COURSES.filter((c) => c.semester === 5);
  assert.equal(sem5.length, 5);
  assert.ok(sem5.find((c) => c.shortName === 'CS' && c.name === 'Communication Systems'));
  assert.ok(sem5.find((c) => c.shortName === 'EFT' && c.name === 'Electromagnetic Field Theory'));
  assert.ok(sem5.find((c) => c.shortName === 'LCS' && c.name === 'Linear Control Systems'));
  assert.ok(sem5.find((c) => c.shortName === 'ML' && c.name === 'Machine Learning'));
  assert.ok(sem5.find((c) => c.shortName === 'PS' && c.name === 'Pakistan Studies'));
});

test('Semester 6 contains official courses from Spring 2026 timetable (23-EE)', () => {
  const sem6 = COURSES.filter((c) => c.semester === 6);
  assert.equal(sem6.length, 8);
  assert.ok(sem6.find((c) => c.shortName === 'EEM' && c.name === 'Engineering Economics & Management'));
  assert.ok(sem6.find((c) => c.shortName === 'PE' && c.name === 'Professional Ethics'));
  assert.ok(sem6.find((c) => c.shortName === 'TRW' && c.name === 'Technical Report Writing'));
  assert.ok(sem6.find((c) => c.shortName === 'PSA' && c.name === 'Power System Analysis'));
  assert.ok(sem6.find((c) => c.shortName === 'PDU' && c.name === 'Power Distribution & Utilization'));
  assert.ok(sem6.find((c) => c.shortName === 'ECD' && c.name === 'Electronic Circuit Design'));
  assert.ok(sem6.find((c) => c.shortName === 'CCN' && c.name === 'Computer Communication Networks'));
  assert.ok(sem6.find((c) => c.shortName === 'QT-III'));
});

test('Semester 7 contains official courses from Fall 2026 timetable (23-EE)', () => {
  const sem7 = COURSES.filter((c) => c.semester === 7);
  assert.equal(sem7.length, 8);
  assert.ok(sem7.find((c) => c.shortName === 'EP' && c.name === 'Entrepreneurship'));
  assert.ok(sem7.find((c) => c.shortName === 'CT' && c.name === 'Critical Thinking'));
  assert.ok(sem7.find((c) => c.shortName === 'PG' && c.name === 'Power Generation'));
  assert.ok(sem7.find((c) => c.shortName === 'EPT' && c.name === 'Electrical Power Transmission'));
  assert.ok(sem7.find((c) => c.shortName === 'I&M' && c.name === 'Instrumentation & Measurements'));
  assert.ok(sem7.find((c) => c.shortName === 'DSP' && c.name === 'Digital Signal Processing'));
  assert.ok(sem7.find((c) => c.shortName === 'DIP' && c.name === 'Digital Image Processing'));
  assert.ok(sem7.find((c) => c.shortName === 'FYDP-I' && c.name === 'Final Year Design Project-I'));
});

test('Semester 8 contains official courses from Spring 2026 timetable (22-EE)', () => {
  const sem8 = COURSES.filter((c) => c.semester === 8);
  assert.equal(sem8.length, 8);
  assert.ok(sem8.find((c) => c.shortName === 'PSP' && c.name === 'Power System Protection'));
  assert.ok(sem8.find((c) => c.shortName === 'HVE' && c.name === 'High Voltage Engineering'));
  assert.ok(sem8.find((c) => c.shortName === 'IA' && c.name === 'Industrial Automation'));
  assert.ok(sem8.find((c) => c.shortName === 'PE' && c.name === 'Power Electronics'));
  assert.ok(sem8.find((c) => c.shortName === 'DC' && c.name === 'Digital Communication'));
  assert.ok(sem8.find((c) => c.shortName === 'OC' && c.name === 'Optical Communication'));
  assert.ok(sem8.find((c) => c.shortName === 'FYDP-II' && c.name === 'Final Year Design Project-II'));
  assert.ok(sem8.find((c) => c.shortName === 'QT-IV'));
});

test('filterCourses works for course names, short codes, and topics', () => {
  const apResults = filterCourses('Applied Physics');
  assert.ok(apResults.length >= 1);

  const bmeResults = filterCourses('BME');
  assert.equal(bmeResults[0].shortName, 'BME');

  const topicResults = filterCourses('Kirchhoff');
  assert.ok(topicResults.length >= 1);
  assert.equal(topicResults[0].shortName, 'LCA');

  const mlResults = filterCourses('Machine Learning');
  assert.ok(mlResults.length >= 1);
  assert.equal(mlResults[0].shortName, 'ML');
});
