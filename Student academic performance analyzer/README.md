# Student Academic Performance Analyzer

Client-side academic analytics app built with HTML, CSS and JavaScript.

## Features
- Student add/update and local browser persistence
- Subject-wise Internal, Assignment, Unit Test and Final Exam marks
- Configurable assessment maximums from App Settings
- Overall performance, CGPA, result and risk analysis
- Subject performance bars and recommendations
- Class Analytics with department + section filters
- Clear individual student data, including duplicate-ID records
- Print / Save as PDF reports for all students, a selected department/section, or a selected student
- Automatic focus movement between assessment inputs after typing / Enter
- JSON export
- Responsive UI suitable for GitHub Pages

## Run locally
Open `index.html` in a browser, or serve the folder with any local static web server. No backend or database is required.

## PDF reports
Use **Print / PDF** in the top bar, select the report scope, then choose **Open Print / Save PDF**. In the browser print dialog choose **Save as PDF**.

## Assessment settings
Open the three-line menu → **App Settings** to change the maximum marks for Internal, Assignment, Unit Test and Final Exam. The values are stored in browser localStorage and are used throughout the calculations and report labels.


## Latest UI updates
- Risk analysis and risk columns have been removed.
- Performance is shown as **Good Performance** or **Less Performance** using the overall score, which already includes attendance.
- Attendance is separately classified as **Low**, **Medium**, or **Good** and shown in the dashboard and PDF reports.
- App Settings now includes **White • Multi-colour** and **Black • Multi-colour** themes.
- PDF reports use compact A4 cards, with up to 10 students per page and a red border for Less Performance students.
- PDF reports no longer print risk information.

## Expanded Demo Dataset

The **Load Demo** button now loads a large deterministic demo dataset with **70 students per department across 3 sections (A, B and C)** — 980 students across all 14 departments. Each department has department-specific sample subjects and varied attendance, previous-semester performance and assessment marks.

Departments covered:
- Artificial Intelligence and Data Science
- Biomedical Engineering
- Chemical Engineering
- Civil Engineering
- Computer Science and Business Systems
- Computer Science and Engineering
- Computer Science Engineering (AI & ML)
- CSE (Cyber Security)
- Electrical & Electronics Engineering
- Electronics & Communication Engineering
- Electronics Engineering (VLSI Design and Technology)
- Information Technology
- Mechanical Engineering
- Mechatronics Engineering

### Latest updates
- Class Analytics search by roll number / Student ID or student name.
- PDF report filters now support Department, Section, Batch, and Semester.
- All-student PDF reports are grouped in Department → Batch → Odd/Even Semester → Section order.
- Each department/batch/semester/section group starts on its own PDF page; students are packed continuously within the group pages without artificial fixed-page gaps.

- Demo dataset: 14 departments × 3 sections × 70 students per section = 2,940 students, all using Batch 2025-29.
- Batch management is available in App Settings; new batches can be added and selected across student entry, analytics, and PDF reports.

## Offline Desktop Edition

The project also includes an Electron desktop wrapper. It loads the app directly from local files, requires no HTTP/local server, and can generate PDFs locally.
See `README-DESKTOP.md` for build instructions.
