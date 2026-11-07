import test from 'node:test';
import assert from 'node:assert/strict';
import { COURSES, SEMESTERS, filterCourses, USER_DRIVE_LINKS, CREATOR_INSTAGRAM_URL, WEBSITE_INSTAGRAM_URL } from '../data/courses.ts';

test('CREATOR_INSTAGRAM_URL and WEBSITE_INSTAGRAM_URL match requested links', () => {
  assert.equal(CREATOR_INSTAGRAM_URL, 'https://www.instagram.com/aitzaz_fareed?exln=MWZ4c2IzcWlva3NiYg==');
  assert.equal(WEBSITE_INSTAGRAM_URL, 'https://www.instagram.com/eynforee?cplk=MXgzY2NrY2dmenl1NQ==');
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

test('Semester 3 contains official courses (ENA, EDC, M&I, CVT, IS) ready for admin drive assignment', () => {
  const sem3Courses = COURSES.filter((c) => c.semester === 3);
  assert.ok(sem3Courses.length >= 5, 'Must have ENA, EDC, M&I, CVT, IS');

  const ena = sem3Courses.find((c) => c.shortName === 'ENA');
  assert.ok(ena);
  assert.equal(ena?.name, 'Electrical Network Analysis');
  assert.equal(ena?.code, 'EE-211');

  const edc = sem3Courses.find((c) => c.shortName === 'EDC');
  assert.ok(edc);
  assert.equal(edc?.name, 'Electronic Devices and Circuits');
  assert.equal(edc?.code, 'EE-212');

  const mi = sem3Courses.find((c) => c.shortName === 'M&I');
  assert.ok(mi);
  assert.equal(mi?.name, 'Microprocessors and Interfacing');
  assert.equal(mi?.code, 'EE-213');
});

test('filterCourses works for course names, short codes, and topics', () => {
  const apResults = filterCourses('Applied Physics');
  assert.ok(apResults.length >= 1);

  const bmeResults = filterCourses('BME');
  assert.equal(bmeResults[0].shortName, 'BME');

  const topicResults = filterCourses('Kirchhoff');
  assert.ok(topicResults.length >= 1);
  assert.equal(topicResults[0].shortName, 'LCA');
});
