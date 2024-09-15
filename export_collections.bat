@echo off
setlocal

:: Define the MongoDB URI
set URI=mongodb+srv://clevelihasi:NLZK6lkrhK1x0XcO@cluster0.t7flu.mongodb.net/JOBers

:: Define the output directory
set OUTPUT_DIR=C:\Users\USER\Desktop\JOBers\data

:: Export each collection
mongoexport --uri="%URI%" --collection=application_history --out="%OUTPUT_DIR%\application_history.json"
mongoexport --uri="%URI%" --collection=applications --out="%OUTPUT_DIR%\applications.json"
mongoexport --uri="%URI%" --collection=audit_logs --out="%OUTPUT_DIR%\audit_logs.json"
mongoexport --uri="%URI%" --collection=companies --out="%OUTPUT_DIR%\companies.json"
mongoexport --uri="%URI%" --collection=job_categories --out="%OUTPUT_DIR%\job_categories.json"
mongoexport --uri="%URI%" --collection=jobs --out="%OUTPUT_DIR%\jobs.json"
mongoexport --uri="%URI%" --collection=notifications --out="%OUTPUT_DIR%\notifications.json"
mongoexport --uri="%URI%" --collection=profiles --out="%OUTPUT_DIR%\profiles.json"
mongoexport --uri="%URI%" --collection=skills --out="%OUTPUT_DIR%\skills.json"
mongoexport --uri="%URI%" --collection=testimonials --out="%OUTPUT_DIR%\testimonials.json"
mongoexport --uri="%URI%" --collection=user_roles --out="%OUTPUT_DIR%\user_roles.json"
mongoexport --uri="%URI%" --collection=users --out="%OUTPUT_DIR%\users.json"

endlocal
