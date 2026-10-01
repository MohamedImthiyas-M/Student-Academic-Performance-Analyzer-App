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

## How to Run the App?
**Run "build-windows.bat"** file and wait for to install dependencies ,after install **locate dist folder** and **run "Student-Academic-Performance-Analyzer-1.1.0-x64.exe"**

## PDF reports
Use **Print / PDF** in the top bar, select the report scope, then choose **Open Print / Save PDF**. In the browser print dialog choose **Save as PDF**.

## Assessment settings
Open the three-line menu → **App Settings** to change the maximum marks for Internal, Assignment, Unit Test and Final Exam. The values are stored in browser localStorage and are used throughout the calculations and report labels.

## Demo Dataset

The **Load Demo** button now loads a large deterministic demo dataset with **70 students per department across 3 sections (A, B and C)** — 980 students across all 14 departments. Each department has department-specific sample subjects and varied attendance, previous-semester performance and assessment marks.

## Departments covered:
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
- 

## About desktop Edition

The project includes an Electron desktop wrapper. It loads the app directly from local files, requires no HTTP/local server, and can generate PDFs locally.
