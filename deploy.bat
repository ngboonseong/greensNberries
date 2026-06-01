@echo off
:: Prevents commands from printing to the console and clears screen
cls

:: Check if a commit message was provided
if "%~1"=="" (
    echo Error: No commit message provided.
    echo Usage: push.bat "Your commit message here"
    goto :eof
)

echo Adding all changes to Git...
git add .

echo Committing with message: "%~1"
git commit -m "%~1"

echo Pushing to remote repository...
git push

echo.
echo Process completed successfully!
