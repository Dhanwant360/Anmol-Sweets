import subprocess
import sys

try:
    result = subprocess.run(
        [r"c:\Users\DCN\Desktop\phish major\venv\Scripts\python.exe", r"c:\Users\DCN\Desktop\phish major\app.py"],
        capture_output=True,
        text=True,
        timeout=10
    )
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)
except Exception as e:
    print("EXCEPTION:", e)
