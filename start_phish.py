import subprocess

print("Starting PhishGuard Server...")
process = subprocess.Popen(
    [r"c:\Users\DCN\Desktop\phish major\venv\Scripts\python.exe", "app.py"],
    cwd=r"c:\Users\DCN\Desktop\phish major"
)
print("Server running with PID:", process.pid)
try:
    process.wait()
except KeyboardInterrupt:
    process.terminate()
