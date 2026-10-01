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
- Responsive UI

## How to Run the App?

### Windows Desktop Application

This project is an offline Windows desktop application built with Electron. No backend server, internet connection, or external database is required.

### Option 1 - Install the Application

1. Run `build-windows.bat`.
2. The script installs the required dependencies and builds the Windows installer.
3. Open the `dist` folder after the build completes.
4. Run `Student Academic Performance Analyzer Setup 1.1.0.exe`.
5. Follow the installation wizard.
6. Launch the application using the Desktop or Start Menu shortcut.

**Recommended:** Use the Windows installer for normal usage.

<img width="1856" height="986" alt="Screenshot 2026-10-01 202852" src="https://github.com/user-attachments/assets/bd898dac-8b6b-479e-95c8-0b54e9aad6ec" />

### Opion 2 - Browser Testing

For development/testing, index.html can also be opened in a browser or served using a local static web server.

## PDF reports
Use **Print / PDF** in the top bar, select the report scope, then choose **Open Print / Save PDF**. In the browser print dialog choose **Save as PDF**.

## Assessment settings
Open the three-line menu → **App Settings** to change the maximum marks for Internal, Assignment, Unit Test and Final Exam. The values are stored in browser localStorage and are used throughout the calculations and report labels.

## Demo Dataset (included)

The **Load Demo** button now loads a large deterministic demo dataset with **70 students per department across 3 sections (A, B and C)** — 980 students across all 14 departments. Each department has department-specific sample subjects and varied attendance, previous-semester performance and assessment marks.
**Default Departments covered**
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

## Configuration Options

**1. Department Management**
Add or remove departments according to institutional requirements.

**2. Customizable UI Themes**
Change the application appearance using multiple available themes.

**3. Batch Management**
Add, edit, or remove academic batches as required.

**4. Default Assessment Marks**
Configure the default maximum marks for each assessment component.

**5. Customizable Mark Limits**
Set and modify the maximum marks for Internal, Assignment, Unit Test, and Final Semester Exam.

## Desktop Edition

The project includes an Electron desktop wrapper. It loads the app directly from local files, requires no HTTP/local server, and can generate PDFs locally.

## 📄 Project Report

[View / Download Project Report](docs/Student-Academic-Performance-Analyzer-Project-Report.pdf)
