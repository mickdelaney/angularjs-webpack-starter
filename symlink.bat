set OLDDIR=%CD%
cd %1
if %errorlevel% neq 0 exit /b %errorlevel%
rmdir /s /q module
mklink /D module ..\..\module
if %errorlevel% neq 0 exit /b %errorlevel%
chdir /d %OLDDIR%