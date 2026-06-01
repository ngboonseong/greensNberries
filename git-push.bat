@echo off
set /p msg="Commit message: "
if "%msg%"=="" (
  echo Commit message cannot be empty.
  exit /b 1
)
git add -A
git commit -m "%msg%"
git push
